/* ============================================
   search.js — البحث الداخلي
   ============================================ */

function initSearch() {
  const openBtn = $("#searchOpen");
  const closeBtn = $("#searchClose");
  const input = $("#searchInput");
  const discoveryBtn = $("#discoverySearch");

  openBtn?.addEventListener("click", openSearch);
  closeBtn?.addEventListener("click", closeSearch);
  discoveryBtn?.addEventListener("click", openSearch);
  input?.addEventListener("input", (e) => searchSite(e.target.value));

  // إغلاق بالنقر على الخلفية
  $("#searchPanel")?.addEventListener("click", (e) => {
    if (e.target.id === "searchPanel") closeSearch();
  });

  // اختصارات لوحة المفاتيح
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      openSearch();
    }
    if (e.key === "Escape") {
      closeSearch();
      closeDetails();
    }
  });
}

function openSearch() {
  $("#searchPanel")?.classList.add("open");
  document.body.classList.add("no-scroll");
  const input = $("#searchInput");
  if (input) {
    input.value = "";
    input.focus();
  }
  $("#searchResults").innerHTML = "";
}

function closeSearch() {
  $("#searchPanel")?.classList.remove("open");
  document.body.classList.remove("no-scroll");
}

function searchSite(query) {
  const q = query.trim().toLowerCase();
  const container = $("#searchResults");
  if (!container) return;

  if (!q) {
    container.innerHTML = `<div class="empty">${esc(t("searchPlaceholder"))}</div>`;
    return;
  }

  const lang = DATA[AppState.currentLang] || DATA.ar;
  const pool = [
    ...(lang.news || []).map((x) => ({ title: x.title, desc: x.desc || "", target: "page-news" })),
    ...(lang.articles || []).map((x) => ({ title: x.title, desc: x.author || "", target: "page-home" })),
    ...(lang.lessons || []).map((x) => ({ title: x, desc: "", target: "page-lectures" })),
    ...(lang.series || []).map((x) => ({ title: x.title, desc: "", target: "page-tafsir" })),
    ...(lang.topics || []).map((x) => ({ title: x, desc: "", target: "page-lectures" })),
    ...(lang.books || []).map((x) => ({ title: x.title, desc: x.desc || "", target: "page-books" })),
    { title: t("navResearch"), desc: t("researchSubtitle"), target: "page-research" },
    { title: t("navDonations"), desc: t("donationsSubtitle"), target: "page-donations" },
    { title: t("navMishkat"), desc: t("mishkatSubtitle"), target: "page-mishkat" },
    { title: t("navAbout"), desc: t("aboutSubtitle"), target: "page-about" },
  ];

  const results = pool.filter((x) => (x.title + " " + x.desc).toLowerCase().includes(q)).slice(0, 30);

  container.innerHTML = results.length
    ? results
        .map(
          (x) =>
            `<button class="search-result" type="button" data-target="${esc(x.target)}"><strong>${esc(x.title)}</strong><span>${esc(x.desc)}</span></button>`
        )
        .join("")
    : `<div class="empty">${esc(t("noResults"))}</div>`;
}
