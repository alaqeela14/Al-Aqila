(() => {
  "use strict";
  const cfg = window.SUPABASE_CONFIG || {};
  const ready = cfg.url && cfg.anonKey && !cfg.url.includes("YOUR_") && !cfg.anonKey.includes("YOUR_") && window.supabase;
  const $ = (s) => document.querySelector(s);
  const labels = {news:"الأخبار والنشاطات",books:"مكتبة المؤسسة",articles:"المقالات والمواد",lectures:"الدروس والمحاضرات",projects:"المشاريع",activities:"الأنشطة",series:"السلاسل",topics:"الموضوعات"};
  let client = null, currentSection = "news", records = [], allRecords = [], currentUser = null;
  const show = (el, yes) => el.classList.toggle("hidden", !yes);
  const note = (id, message, error = true) => { const el=$(id); if(el){el.textContent=message;el.style.color=error?"#a33b36":"#287346";} };
  const toast = (message) => { const el=$("#toast");el.textContent=message;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2600); };
  const escapeHTML = (s) => String(s ?? "").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  function setupMessage(){note("#loginNotice","لم يتم إعداد الاتصال بعد. أضف بيانات مشروع Supabase في ملف supabase-config.js ثم أعد تحميل الصفحة.");}
  async function isAdmin(user){
    const {data,error}=await client.from("admin_users").select("user_id,display_name").eq("user_id",user.id).eq("active",true).maybeSingle();
    if(error) throw error;
    return data;
  }
  async function loadAll(){
    const {data,error}=await client.from("site_content").select("*").order("created_at",{ascending:false});
    if(error) throw error;
    allRecords=data||[];
    $("#statAll").textContent=allRecords.length;
    $("#statPublished").textContent=allRecords.filter(x=>x.published).length;
    $("#statDrafts").textContent=allRecords.filter(x=>!x.published).length;
    $("#recentItems").innerHTML=allRecords.slice(0,5).map(x=>`<div class="recent-item"><span class="recent-icon"><i class="fa-solid fa-file-lines"></i></span><div><strong>${escapeHTML(x.title)}</strong><small>${escapeHTML(labels[x.section]||x.section)} · ${x.published?"منشور":"مسودة"}</small></div></div>`).join("")||'<div class="empty-state">لا توجد مواد بعد. ابدأ بإضافة أول مادة.</div>';
    renderRows();
  }
  function renderRows(){
    const q=$("#contentSearch").value.trim().toLowerCase(), status=$("#statusFilter").value;
    records=allRecords.filter(x=>x.section===currentSection&&(!q||x.title.toLowerCase().includes(q))&&(status==="all"||(status==="published"?x.published:!x.published)));
    $("#contentRows").innerHTML=records.map(x=>`<tr><td><strong>${escapeHTML(x.title)}</strong><br><small>${escapeHTML(x.summary||"")}</small></td><td>${escapeHTML(labels[x.section]||x.section)}</td><td><span class="status ${x.published?"live":"draft"}">${x.published?"منشور":"مسودة"}</span></td><td>${escapeHTML(x.item_date||new Date(x.created_at).toLocaleDateString("ar"))}</td><td><div class="actions"><button class="action-btn" data-edit="${x.id}" title="تعديل"><i class="fa-solid fa-pen"></i></button><button class="action-btn delete" data-delete="${x.id}" title="حذف"><i class="fa-solid fa-trash"></i></button></div></td></tr>`).join("")||'<tr><td colspan="5" class="empty-state">لا توجد مواد مطابقة.</td></tr>';
  }
  function openEditor(item=null){
    $("#contentForm").reset();$("#itemId").value=item?.id||"";$("#editorHeading").textContent=item?"تعديل المادة":"إضافة مادة جديدة";
    $("#itemTitle").value=item?.title||"";$("#itemSection").value=item?.section||currentSection;$("#itemDate").value=item?.item_date||"";
    $("#itemSummary").value=item?.summary||"";$("#itemBody").value=item?.body||"";$("#itemMedia").value=item?.media_url||"";
    $("#itemSort").value=item?.sort_order??0;$("#itemPublished").checked=!!item?.published;
    note("#editorNotice","",false);show($("#editorModal"),true);
  }
  function closeEditor(){show($("#editorModal"),false);}
  async function saveItem(e){
    e.preventDefault();const id=$("#itemId").value;
    const payload={title:$("#itemTitle").value.trim(),section:$("#itemSection").value,item_date:$("#itemDate").value||null,summary:$("#itemSummary").value.trim(),body:$("#itemBody").value.trim(),media_url:$("#itemMedia").value.trim(),sort_order:Number($("#itemSort").value)||0,published:$("#itemPublished").checked};
    if(!payload.title){note("#editorNotice","يرجى كتابة عنوان المادة.");return;}
    const btn=$("#saveItemBtn");btn.disabled=true;btn.textContent="جارٍ الحفظ...";
    try{
      let result;
      if(id) result=await client.from("site_content").update(payload).eq("id",id);
      else result=await client.from("site_content").insert({...payload,created_by:currentUser.id});
      if(result.error)throw result.error;
      closeEditor();await loadAll();toast("تم حفظ المادة بنجاح.");
    }catch(err){note("#editorNotice",err.message||"تعذر حفظ المادة.");}
    finally{btn.disabled=false;btn.innerHTML='<i class="fa-solid fa-floppy-disk"></i> حفظ المادة';}
  }
  async function deleteItem(id){
    const item=allRecords.find(x=>x.id===id);if(!item||!confirm(`هل تريد حذف «${item.title}» نهائياً؟`))return;
    const {error}=await client.from("site_content").delete().eq("id",id);
    if(error){toast("تعذر الحذف: "+error.message);return;}
    await loadAll();toast("تم حذف المادة.");
  }
  async function uploadFile(file){
    if(!file)return;
    const status=$("#uploadNotice");status.textContent="جارٍ رفع الملف...";
    const safeName=file.name.normalize("NFKD").replace(/[^\w.\-ء-ي]+/g,"-").slice(-90);
    const path=`${Date.now()}-${safeName}`;
    const {data,error}=await client.storage.from("site-media").upload(path,file,{upsert:false,contentType:file.type});
    if(error){status.textContent="فشل الرفع: "+error.message;return;}
    const {data:publicData}=client.storage.from("site-media").getPublicUrl(data.path);
    status.textContent="تم رفع الملف. انسخ الرابط لاستخدامه في المادة:";
    $("#uploadedFiles").innerHTML=`<div class="recent-item"><div><strong>${escapeHTML(file.name)}</strong><br><input readonly value="${escapeHTML(publicData.publicUrl)}" style="width:min(100%,560px);padding:9px;border:1px solid #ddd;border-radius:8px;direction:ltr"></div><button class="action-btn" id="copyMediaUrl" type="button" title="نسخ الرابط"><i class="fa-solid fa-copy"></i></button></div>`;
    $("#copyMediaUrl").addEventListener("click",async()=>{await navigator.clipboard.writeText(publicData.publicUrl);toast("تم نسخ الرابط.");});
  }
  function setSection(section){
    currentSection=section;$("#pageHeading").textContent=labels[section]||"إدارة المحتوى";$("#contentTitle").textContent=labels[section]||"المحتوى";
    $("#contentDescription").textContent="إضافة المواد وتعديلها ونشرها أو حفظها كمسودات";
    show($("#overviewView"),false);show($("#mediaView"),false);show($("#contentView"),true);
    $$(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.section===section));renderRows();
  }
  const $$=(s)=>Array.from(document.querySelectorAll(s));
  function showOverview(){
    $("#pageHeading").textContent="الرئيسية";show($("#overviewView"),true);show($("#contentView"),false);show($("#mediaView"),false);
    $$(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.section==="overview"));
  }
  async function enter(user){
    const admin=await isAdmin(user);if(!admin)throw new Error("هذا الحساب غير مخوّل لإدارة الموقع. اطلب من مسؤول النظام إضافته إلى قائمة المديرين.");
    currentUser=user;$("#userEmail").textContent=user.email||admin.display_name;
    show($("#loginView"),false);show($("#dashboardView"),true);await loadAll();showOverview();
  }
  async function init(){
    if(!ready){setupMessage();return;}
    client=window.supabase.createClient(cfg.url,cfg.anonKey);
    $("#loginForm").addEventListener("submit",async e=>{e.preventDefault();note("#loginNotice","جارٍ التحقق...",false);const {data,error}=await client.auth.signInWithPassword({email:$("#loginEmail").value.trim(),password:$("#loginPassword").value});if(error){note("#loginNotice","تعذر تسجيل الدخول: "+error.message);return;}try{await enter(data.user);}catch(err){await client.auth.signOut();note("#loginNotice",err.message);}});
    $("#logoutBtn").addEventListener("click",async()=>{await client.auth.signOut();location.reload();});
    $("#menuBtn").addEventListener("click",()=>$("#sidebar").classList.toggle("open"));
    $$(".nav-item").forEach(b=>b.addEventListener("click",()=>{if(b.dataset.section==="overview")showOverview();else if(b.dataset.section==="media"){show($("#overviewView"),false);show($("#contentView"),false);show($("#mediaView"),true);$("#pageHeading").textContent="الملفات والصور";$$(".nav-item").forEach(x=>x.classList.toggle("active",x===b));}else setSection(b.dataset.section);$("#sidebar").classList.remove("open");}));
    $("#quickAdd").addEventListener("click",()=>openEditor());$("#addItemBtn").addEventListener("click",()=>openEditor());
    $("#closeEditor").addEventListener("click",closeEditor);$("#cancelEditor").addEventListener("click",closeEditor);
    $("#contentForm").addEventListener("submit",saveItem);$("#contentSearch").addEventListener("input",renderRows);$("#statusFilter").addEventListener("change",renderRows);
    $("#contentRows").addEventListener("click",e=>{const edit=e.target.closest("[data-edit]"),del=e.target.closest("[data-delete]");if(edit)openEditor(allRecords.find(x=>x.id===edit.dataset.edit));if(del)deleteItem(del.dataset.delete);});
    $("#mediaFile").addEventListener("change",e=>uploadFile(e.target.files[0]));
    const {data:{session}}=await client.auth.getSession();if(session){try{await enter(session.user);}catch(err){await client.auth.signOut();note("#loginNotice",err.message);}}
  }
  document.addEventListener("DOMContentLoaded",init);
})();