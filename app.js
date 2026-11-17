/* =========================================================
   بيانات الموقع (عربي فقط)
   ========================================================= */
const DATA = {
  latest:[
    {title:"إضافة محتوى جديد إلى المنصة الثقافية",date:"تحديث قابل للتعديل"},
    {title:"إعداد قسم الدروس والمحاضرات للربط بالمحتوى الحقيقي",date:"تحديث المنصة"},
    {title:"إعداد قسم المؤلفات والمكتبة الرقمية",date:"تحديث المنصة"},
    {title:"تطوير البحث والتنقل وتجربة الهاتف",date:"الإصدار المحسن"}
  ],
  news:[
    {title:"خبر أو بيان المؤسسة الأول",date:"يمكن تعديل التاريخ",desc:"استبدل هذا النص بالخبر الحقيقي مع إضافة صفحة أو رابط للتفاصيل."},
    {title:"خبر أو نشاط للمؤسسة",date:"يمكن تعديل التاريخ",desc:"بطاقة جاهزة لإضافة الأخبار الجديدة بصورة منظمة."},
    {title:"إعلان ثقافي أو علمي",date:"يمكن تعديل التاريخ",desc:"يمكن ربط البطاقة بصفحة كاملة أو ملف PDF أو فيديو."},
    {title:"تقرير عن نشاط ميداني",date:"يمكن تعديل التاريخ",desc:"إضافة مختصر ثم صفحة التفاصيل لاحقاً."},
    {title:"إصدار أو نشر كتاب جديد",date:"يمكن تعديل التاريخ",desc:"يمكن ربط الخبر بصفحة الكتاب مباشرة."},
    {title:"برنامج ثقافي أو تعليمي",date:"يمكن تعديل التاريخ",desc:"مكان مناسب للتعريف بالبرنامج وآلية المشاركة."}
  ],
  activities:[
    {icon:"fa-users",title:"نشاط ثقافي دوري",desc:"وصف مختصر للزمان والمكان."},
    {icon:"fa-book-open",title:"حلقة علمية أو قرائية",desc:"وصف مختصر للبرنامج."},
    {icon:"fa-hand-holding-heart",title:"مبادرة مجتمعية",desc:"وصف مختصر للنشاط والخدمة المقدمة."},
    {icon:"fa-graduation-cap",title:"برنامج تعليمي",desc:"الفئة المستهدفة وطريقة المشاركة."}
  ],
  projects:[
    {icon:"fa-book",title:"المكتبة الرقمية",desc:"جمع وترتيب الكتب والمواد العلمية."},
    {icon:"fa-video",title:"منصة المحاضرات",desc:"تنظيم المواد المرئية والصوتية."},
    {icon:"fa-seedling",title:"المبادرات الثقافية",desc:"دعم المشاريع التي تخدم المجتمع."},
    {icon:"fa-archive",title:"الأرشيف الرقمي",desc:"فهرسة المحتوى والمحاضرات والإصدارات."}
  ],
  articles:[
    {title:"كيف نبني محتوى ثقافياً نافعاً؟",author:"مقالة قابلة للتحديث"},
    {title:"أهمية تنظيم المعرفة الإسلامية رقمياً",author:"مقالة قابلة للتحديث"},
    {title:"دور المؤسسات الثقافية في خدمة المجتمع",author:"مقالة قابلة للتحديث"},
    {title:"منهجية نشر الكتاب الإسلامي إلكترونياً",author:"مقالة قابلة للتحديث"}
  ],
  lessons:[
    "تفسير سورة هود — مادة قابلة للربط",
    "سلسلة الفضيلة الإسلامية — مادة قابلة للربط",
    "قيمة الإنسان — مادة قابلة للربط",
    "اغتنام الفرص — مادة قابلة للربط",
    "سألني أحدهم — مادة قابلة للربط"
  ],
  series:[
    {title:"تفسير سورة هود",icon:"fa-video"},
    {title:"تفسير سورة طه",icon:"fa-video"},
    {title:"تفسير القرآن الكريم",icon:"fa-book-quran"}
  ],
  topics:[
    "الفضيلة الإسلامية","فكرة وعبرة","مدرسة الحياة","قيمة الإنسان",
    "التربية وأدواتها","اغتنام الفرص","سألني أحدهم"
  ],
  books:[
    {title:"العودة إلى الله",desc:"مثال لعرض كتاب مع الوصف والرابط."},
    {title:"هندسة السعادة الزوجية",desc:"واجهة جاهزة لإضافة الكتاب ومحتواه."},
    {title:"مدارج السالكين",desc:"واجهة جاهزة للمؤلفات العلمية."},
    {title:"استراتيجية البناء الحضاري",desc:"واجهة جاهزة لكتب المشاريع الفكرية."}
  ],
  library:[
    {title:"مؤلفات آل الشيرازي",icon:"fa-books"},
    {title:"كتب وموسوعات",icon:"fa-book-open"},
    {title:"دروس ومحاضرات",icon:"fa-headphones"}
  ],
  archive:[
    {title:"أرشيف المحاضرات",icon:"fa-microphone-lines"},
    {title:"أرشيف الكتب",icon:"fa-book"},
    {title:"أرشيف الأخبار",icon:"fa-newspaper"},
    {title:"أرشيف الصور",icon:"fa-images"},
    {title:"أرشيف الفيديو",icon:"fa-video"},
    {title:"أرشيف الملفات",icon:"fa-file-lines"}
  ]
};

const SURAH_NAMES_AR = [
  "الفاتحة","البقرة","آل عمران","النساء","المائدة","الأنعام","الأعراف","الأنفال","التوبة","يونس",
  "هود","يوسف","الرعد","إبراهيم","الحجر","النحل","الإسراء","الكهف","مريم","طه",
  "الأنبياء","الحج","المؤمنون","النور","الفرقان","الشعراء","النمل","القصص","العنكبوت","الروم",
  "لقمان","السجدة","الأحزاب","سبأ","فاطر","يس","الصافات","ص","الزمر","غافر",
  "فصلت","الشورى","الزخرف","الدخان","الجاثية","الأحقاف","محمد","الفتح","الحجرات","ق",
  "الذاريات","الطور","النجم","القمر","الرحمن","الواقعة","الحديد","المجادلة","الحشر","الممتحنة",
  "الصف","الجمعة","المنافقون","التغابن","الطلاق","التحريم","الملك","القلم","الحاقة","المعارج",
  "نوح","الجن","المزمل","المدثر","القيامة","الإنسان","المرسلات","النبأ","النازعات","عبس",
  "التكوير","الانفطار","المطففين","الانشقاق","البروج","الطارق","الأعلى","الغاشية","الفجر","البلد",
  "الشمس","الليل","الضحى","الشرح","التين","العلق","القدر","البينة","الزلزلة","العاديات",
  "القارعة","التكاثر","العصر","الهمزة","الفيل","قريش","الماعون","الكوثر","الكافرون","النصر",
  "المسد","الإخلاص","الفلق","الناس"
];

/* ===== الحالة ===== */
let currentPage = "page-home";
let currentSurah = {index:1, name:"الفاتحة"};
let currentMode = "audio";
let latestIndex = 0;
let carouselTimer = null;

/* ===== أدوات ===== */
const $ = (s,root=document)=>root.querySelector(s);
const $$ = (s,root=document)=>Array.from(root.querySelectorAll(s));

function esc(value){
  return String(value ?? "").replace(/[&<>"']/g, m => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[m]));
}

/* ===== التنقل ===== */
const navFamily={
  "page-ayahs":"page-tafsir","page-surahs":"page-tafsir","page-tafsir-series":"page-tafsir",
  "page-lecture-items":"page-lectures","page-lectures-list":"page-lectures","page-lessons-grid":"page-lectures",
  "page-mishkat":"page-mishkat","page-fatwa":"page-fatwa","page-visuals":"page-visuals","page-wasaya":"page-wasaya",
  "page-cultural-projects":"page-cultural-projects","page-charity-projects":"page-charity-projects","page-about":"page-about"
};

function toggleMenu(force){
  const nav=$("#mainNav"), btn=$("#menuToggle");
  if(!nav || !btn) return;
  const open=typeof force==="boolean" ? force : !nav.classList.contains("open");
  nav.classList.toggle("open",open); btn.setAttribute("aria-expanded",String(open));
  const icon=btn.querySelector("i"); if(icon) icon.className=open?"fa-solid fa-xmark":"fa-solid fa-bars";
}

function openDetails(kicker,title,body){
  $("#detailsKicker").textContent=kicker;
  $("#detailsTitle").textContent=title;
  $("#detailsBody").textContent=body;
  $("#detailsPanel").classList.add("open");
  $("#detailsPanel").setAttribute("aria-hidden","false");
  document.body.classList.add("no-scroll");
  $("#detailsOk").focus();
}

function closeDetails(){
  $("#detailsPanel").classList.remove("open");
  $("#detailsPanel").setAttribute("aria-hidden","true");
  document.body.classList.remove("no-scroll");
}

function navigateTo(pageId, opts={}){
  const target=document.getElementById(pageId);
  if(!target) return;
  $$(".page").forEach(p=>p.classList.remove("active"));
  target.classList.add("active");
  currentPage=pageId;

  const activeFamily=navFamily[pageId] || pageId;
  $$(".nav-link").forEach(btn=>{
    const isActive = btn.dataset.target===activeFamily;
    btn.classList.toggle("active",isActive);
    btn.setAttribute("aria-current", isActive ? "page" : "false");
  });
  toggleMenu(false);

  if(pageId==="page-surahs") renderSurahs(opts.type || "audio");
  if(pageId==="page-ayahs") renderAyahs(opts.name || currentSurah.name, opts.index || currentSurah.index);
  if(pageId==="page-lecture-items") renderLectureItems(opts.topic || "");
  if(pageId==="page-lessons-grid") renderLessonsGrid();

  window.scrollTo({top:0,behavior:"smooth"});
}

/* ===== رندر الصفحة الرئيسية ===== */
function renderHome(){
  // المستجدات
  const latest = DATA.latest;
  if(latest.length){
    const item=latest[latestIndex % latest.length];
    $("#latestText").textContent=item.title;
    $("#latestDate").textContent=item.date;
    $("#latestDots").innerHTML=latest.map((_,i)=>
      `<button class="dot ${i===latestIndex?"active":""}" type="button" aria-label="slide ${i+1}" data-latest="${i}"></button>`
    ).join("");
  }

  // الأخبار
  $("#newsHome").innerHTML=DATA.news.slice(0,3).map(item=>`
    <article class="card news-card card-hover">
      <div class="meta"><i class="fa-regular fa-calendar"></i><span>${esc(item.date)}</span></div>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.desc)}</p>
    </article>
  `).join("");

  $("#newsPage").innerHTML=DATA.news.map(item=>`
    <article class="card news-card card-hover">
      <div class="meta"><i class="fa-regular fa-calendar"></i><span>${esc(item.date)}</span></div>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.desc)}</p>
    </article>
  `).join("") || `<div class="card empty">لا توجد نتائج.</div>`;

  // الأنشطة
  $("#activitiesHome").innerHTML=DATA.activities.map(item=>`
    <div class="activity">
      <div class="activity-icon"><i class="fa-solid ${esc(item.icon)}"></i></div>
      <div><h4>${esc(item.title)}</h4><p>${esc(item.desc)}</p></div>
    </div>
  `).join("");

  // المشاريع
  $("#projectsHome").innerHTML=DATA.projects.map(item=>`
    <article class="card project card-hover">
      <div class="project-icon"><i class="fa-solid ${esc(item.icon)}"></i></div>
      <div><h4>${esc(item.title)}</h4><p>${esc(item.desc)}</p></div>
    </article>
  `).join("");

  // المقالات
  $("#articlesHome").innerHTML=DATA.articles.map(item=>`
    <article class="article card-hover">
      <div class="article-thumb"><i class="fa-solid fa-book-open"></i></div>
      <div><h4>${esc(item.title)}</h4><small>${esc(item.author)}</small></div>
    </article>
  `).join("");

  // الدروس
  $("#lessonsPreview").innerHTML=DATA.lessons.map(item=>`
    <button class="item-btn" type="button" data-target="page-lectures-list">
      <i class="fa-solid fa-play-circle"></i><span>${esc(item)}</span>
    </button>
  `).join("");
}

/* ===== الرندرات الفرعية ===== */
function renderTafsirSeries(){
  $("#tafsirSeriesList").innerHTML=DATA.series.map(item=>`
    <button class="item-btn" type="button" data-target="page-surahs" data-type="video">
      <i class="fa-solid ${esc(item.icon)}"></i><span>${esc(item.title)}</span>
    </button>
  `).join("");
}

function renderTopics(){
  $("#lectureTopics").innerHTML=DATA.topics.map(topic=>`
    <button class="item-btn" type="button" data-topic="${esc(topic)}">
      <i class="fa-solid fa-circle-chevron-left"></i><span>${esc(topic)}</span>
    </button>
  `).join("");
}

function renderLectureItems(topic){
  const container=$("#lectureItems");
  $("#lectureTopicTitle").textContent = topic ? `محاضرات — ${topic}` : "المحاضرات";
  container.innerHTML=Array.from({length:14},(_,i)=>`
    <button class="item-btn" type="button" data-demo="lecture" data-number="${i+1}" data-topic="${esc(topic)}">
      <i class="fa-solid fa-circle-play"></i>
      <span>محاضرات ${i+1} — ${esc(topic || "—")}</span>
    </button>
  `).join("");
}

function renderLessonsGrid(){
  $("#allLessons").innerHTML=Array.from({length:200},(_,i)=>`
    <button class="lesson-btn" type="button" data-demo="lesson" data-number="${i+1}">${i+1}</button>
  `).join("");
}

function renderBooks(){
  $("#booksGrid").innerHTML=DATA.books.map(item=>`
    <article class="card news-card card-hover">
      <div class="meta"><i class="fa-solid fa-book"></i><span>المؤلفات</span></div>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.desc)}</p>
    </article>
  `).join("");
}

function renderLibrary(){
  $("#libraryGrid").innerHTML=DATA.library.map(item=>`
    <article class="card project card-hover">
      <div class="project-icon"><i class="fa-solid ${esc(item.icon)}"></i></div>
      <div><h4>${esc(item.title)}</h4><p>مكتبة رقمية</p></div>
    </article>
  `).join("");
}

function renderArchive(){
  $("#archiveGrid").innerHTML=DATA.archive.map(item=>`
    <article class="card project card-hover">
      <div class="project-icon"><i class="fa-solid ${esc(item.icon)}"></i></div>
      <div><h4>${esc(item.title)}</h4><p>بنية مقترحة للأرشيف الرقمي</p></div>
    </article>
  `).join("");
}

function renderSurahs(mode="audio"){
  currentMode=mode;
  $("#surahModeLabel").textContent=mode==="video" ? "النمط المرئي" : "النمط الصوتي";
  $("#surahGrid").innerHTML=SURAH_NAMES_AR.map((name,index)=>{
    const n=index+1;
    return `
      <button class="surah-btn" type="button" data-surah-index="${n}" data-surah-name="${esc(name)}">
        <span>${n}</span>${esc(name)}
      </button>
    `;
  }).join("");
}

function renderAyahs(surahName,surahIndex){
  currentSurah={name:surahName,index:surahIndex};
  $("#ayahPageTitle").textContent=`الآيات — ${surahName}`;
  const sampleCount = surahIndex===1 ? 7 : 10;
  $("#ayahsContainer").innerHTML=Array.from({length:sampleCount},(_,i)=>{
    const ayah=i+1;
    const fakeText=`﴿ نص الآية ${ayah} من سورة ${surahName} — ضع النص القرآني الحقيقي هنا ﴾`;
    const audio=`audio/surah_${surahIndex}_ayah_${ayah}.mp3`;
    return `
      <article class="ayah">
        <div class="ayah-top">
          <div class="ayah-text">${esc(fakeText)}</div>
          <div class="ayah-number">${ayah}</div>
        </div>
        <div class="ayah-actions">
          <audio preload="none" id="a-${surahIndex}-${ayah}" src="${esc(audio)}"></audio>
          <button class="play" type="button" data-audio="${surahIndex}-${ayah}" aria-label="تشغيل"><i class="fa-solid fa-play"></i></button>
        </div>
      </article>
    `;
  }).join("");
}

/* ===== التاريخ والوقت ===== */
function updateDates(){
  const now=new Date();
  const locale = "ar-SA";
  const hijriLocale = "ar-SA-u-ca-islamic";

  try {
    const hijri=new Intl.DateTimeFormat(hijriLocale,{weekday:"long",day:"numeric",month:"long",year:"numeric"}).format(now);
    const greg=new Intl.DateTimeFormat(locale,{weekday:"long",day:"numeric",month:"long",year:"numeric"}).format(now);
    const time=new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false}).format(now);

    const clockEl = $("#clockTime");
    const gregEl = $("#gregorianDate");
    const hijriEl = $("#hijriDate");
    const miniEl = $("#miniDate");

    if(clockEl) clockEl.textContent=time;
    if(gregEl) gregEl.textContent=greg;
    if(hijriEl) hijriEl.textContent=`${hijri} هـ`;
    if(miniEl) miniEl.textContent=`${greg} — ${time}`;
  } catch(err){
    console.error("Date error:", err);
  }
}

/* ===== الشريط الدوّار ===== */
function startCarousel(){
  clearInterval(carouselTimer);
  carouselTimer=setInterval(()=>{
    if(DATA.latest.length>1){
      latestIndex=(latestIndex+1)%DATA.latest.length;
      renderHome();
    }
  },7000);
}

/* ===== البحث ===== */
function openSearch(){
  $("#searchPanel").classList.add("open");
  document.body.classList.add("no-scroll");
  $("#searchInput").value="";
  $("#searchResults").innerHTML="";
  setTimeout(()=>$("#searchInput").focus(),30);
}

function closeSearch(){
  $("#searchPanel").classList.remove("open");
  document.body.classList.remove("no-scroll");
}

function searchSite(query){
  const q=query.trim().toLowerCase();
  if(!q){
    $("#searchResults").innerHTML=`<div class="empty">ابحث في الموقع...</div>`;
    return;
  }
  const pool=[
    ...DATA.news.map(x=>({title:x.title,desc:x.desc||"",target:"page-news"})),
    ...DATA.articles.map(x=>({title:x.title,desc:x.author||"",target:"page-home"})),
    ...DATA.lessons.map(x=>({title:x,desc:"",target:"page-lectures"})),
    ...DATA.series.map(x=>({title:x.title,desc:"",target:"page-tafsir-series"})),
    ...DATA.topics.map(x=>({title:x,desc:"",target:"page-lectures-list"})),
    ...DATA.books.map(x=>({title:x.title,desc:x.desc||"",target:"page-books"})),
    {title:"منصة مشكاة",desc:"منصة معرفية للمواد والدورات والسلاسل",target:"page-mishkat"},
    {title:"استفتاء",desc:"قسم مخصص للاستفتاءات والأسئلة الشرعية",target:"page-fatwa"},
    {title:"مرئيات",desc:"المحاضرات والدروس في قسم مرئي موحّد",target:"page-visuals"},
    {title:"وصايا",desc:"مختارات نافعة في تزكية النفس وبناء الإنسان",target:"page-wasaya"},
    {title:"المشاريع الثقافية",desc:"مشاريع تخدم المعرفة والوعي وبناء المحتوى",target:"page-cultural-projects"},
    {title:"المشاريع الخيرية",desc:"مبادرات إنسانية وخدمية قابلة للإضافة والتحديث",target:"page-charity-projects"},
    {title:"عن المؤسسة",desc:"تعريف بالمؤسسة ورسالتها ومجالات عملها",target:"page-about"}
  ];
  const results=pool.filter(x=>(x.title+" "+x.desc).toLowerCase().includes(q)).slice(0,30);
  $("#searchResults").innerHTML=results.length
    ? results.map(x=>`<button class="search-result" type="button" data-target="${esc(x.target)}"><strong>${esc(x.title)}</strong><span>${esc(x.desc)}</span></button>`).join("")
    : `<div class="empty">لا توجد نتائج مطابقة.</div>`;
}

/* ===== معالجة النقرات ===== */
document.addEventListener("click",e=>{
  const targetBtn=e.target.closest("[data-target]");
  if(targetBtn && !targetBtn.closest(".search-panel")){
    e.preventDefault();
    navigateTo(targetBtn.dataset.target,{type:targetBtn.dataset.type});
    closeSearch();
    return;
  }

  /* إكمال الجزء الناقص من الملف الأصلي */

  const back=e.target.closest("[data-back]");
  if(back){
    navigateTo(back.dataset.back);
    return;
  }

  const latestDot=e.target.closest("[data-latest]");
  if(latestDot){
    latestIndex=Number(latestDot.dataset.latest);
    renderHome();
    return;
  }

  const surahBtn=e.target.closest("[data-surah-index]");
  if(surahBtn){
    renderAyahs(surahBtn.dataset.surahName,Number(surahBtn.dataset.surahIndex));
    navigateTo("page-ayahs");
    return;
  }

  const topicBtn=e.target.closest("[data-topic]");
  if(topicBtn){
    renderLectureItems(topicBtn.dataset.topic);
    navigateTo("page-lecture-items");
    return;
  }

  const playBtn=e.target.closest("[data-audio]");
  if(playBtn){
    const [s,a]=playBtn.dataset.audio.split("-");
    const audio=document.getElementById(`a-${s}-${a}`);
    if(!audio) return;

    // إيقاف أي صوت آخر
    document.querySelectorAll("audio").forEach(aud=>{
      if(aud!==audio){ aud.pause(); aud.currentTime=0; }
    });
    document.querySelectorAll(".play i").forEach(ic=>ic.className="fa-solid fa-play");

    if(audio.paused){
      audio.play().then(()=>{
        playBtn.querySelector("i").className="fa-solid fa-pause";
        audio.onended=()=>{ playBtn.querySelector("i").className="fa-solid fa-play"; };
      }).catch(err=>console.warn("Audio play failed:",err));
    } else {
      audio.pause();
      playBtn.querySelector("i").className="fa-solid fa-play";
    }
    return;
  }

  const demoBtn=e.target.closest("[data-demo]");
  if(demoBtn){
    const n=demoBtn.dataset.number || "1";
    if(demoBtn.dataset.demo==="lesson"){
      openDetails("درس", `الدرس رقم ${n}`, "هذه واجهة تجريبية. اربطها برابط المحتوى الحقيقي (فيديو، صوت، أو PDF).");
    } else if(demoBtn.dataset.demo==="lecture"){
      const topic=demoBtn.dataset.topic || "";
      openDetails("محاضرة", `محاضرة رقم ${n}`, `الموضوع: ${topic || "—"}. اربطها برابط المحتوى الحقيقي.`);
    }
    return;
  }

  const menuBtn=e.target.closest("#menuToggle");
  if(menuBtn){ toggleMenu(); return; }

  const homeBtn=e.target.closest("#homeBtn");
  if(homeBtn){ navigateTo("page-home"); return; }

  const searchOpenBtn=e.target.closest("#searchOpen");
  if(searchOpenBtn){ openSearch(); return; }

  const discoveryBtn=e.target.closest("#discoverySearch");
  if(discoveryBtn){ openSearch(); return; }

  const searchCloseBtn=e.target.closest("#searchClose");
  if(searchCloseBtn){ closeSearch(); return; }

  const detailsCloseBtn=e.target.closest("#detailsClose");
  if(detailsCloseBtn){ closeDetails(); return; }

  const detailsOkBtn=e.target.closest("#detailsOk");
  if(detailsOkBtn){ closeDetails(); return; }

  // إغلاق لوحة البحث عند النقر على الخلفية
  if(e.target.id==="searchPanel"){ closeSearch(); return; }
});

/* ===== البحث الحي + اختصارات لوحة المفاتيح ===== */
document.addEventListener("input",e=>{
  if(e.target.id==="searchInput") searchSite(e.target.value);
});

document.addEventListener("keydown",e=>{
  if((e.ctrlKey||e.metaKey) && e.key.toLowerCase()==="k"){
    e.preventDefault();
    openSearch();
  }
  if(e.key==="Escape"){
    closeSearch();
    closeDetails();
  }
});

/* ===== الوضع الليلي ===== */
function initTheme(){
  const saved=localStorage.getItem("theme") || "light";
  const btn=$("#themeToggle");
  if(saved==="dark"){
    document.documentElement.classList.add("dark-mode");
    if(btn){
      btn.setAttribute("aria-pressed","true");
      const ic=btn.querySelector("i"); if(ic) ic.className="fa-solid fa-sun";
    }
  }
  btn?.addEventListener("click",()=>{
    const isDark=document.documentElement.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    btn.setAttribute("aria-pressed",String(isDark));
    const ic=btn.querySelector("i"); if(ic) ic.className=isDark?"fa-solid fa-sun":"fa-solid fa-moon";
  });
}

/* ===== نموذج التواصل ===== */
function initContactForm(){
  const form=$("#contactForm");
  if(!form) return;
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const status=$("#formStatus");
    const name=$("#name").value.trim();
    const email=$("#email").value.trim();
    const message=$("#message").value.trim();

    if(!name || !email || !message){
      if(status) status.textContent="يرجى تعبئة جميع الحقول.";
      return;
    }

    const subject=encodeURIComponent(`رسالة من ${name} — موقع المؤسسة`);
    const body=encodeURIComponent(`الاسم: ${name}\nالبريد: ${email}\n\nالرسالة:\n${message}`);
    window.location.href=`mailto:alaqeelafoundation@gmail.com?subject=${subject}&body=${body}`;

    if(status) status.textContent="تم تجهيز الرسالة.";
    form.reset();
  });
}

/* ===== زر الصعود ===== */
function initToTop(){
  const btn=$("#toTop");
  if(!btn) return;
  window.addEventListener("scroll",()=>{
    btn.classList.toggle("show", window.scrollY>400);
  });
  btn.addEventListener("click",()=>{
    window.scrollTo({top:0,behavior:"smooth"});
  });
}

/* ===== التهيئة ===== */
function init(){
  renderHome();
  renderTafsirSeries();
  renderTopics();
  renderBooks();
  renderLibrary();
  renderArchive();
  startCarousel();
  updateDates();
  setInterval(updateDates, 1000);
  initTheme();
  initContactForm();
  initToTop();
}

document.addEventListener("DOMContentLoaded", init);
