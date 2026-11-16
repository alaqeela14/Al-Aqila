/* ============================================
   router.js — التنقل بين الصفحات
   ============================================ */

const navFamily = {
  "page-ayahs": "page-tafsir",
  "page-surahs": "page-tafsir",
  "page-tafsir-series": "page-tafsir",
  "page-lecture-items": "page-lectures",
  "page-lectures-list": "page-lectures",
  "page-lessons-grid": "page-lectures",
  "page-research-detail": "page-research",
  "page-books-tab": "page-books",
};

function toggleMenu(force) {
  const nav = $("#mainNav");
  const btn = $("#menuToggle");
  if (!nav || !btn) return;
  const open = typeof force === "boolean" ? force : !nav.classList.contains("open");
  nav.classList.toggle("open", open);
  btn.setAttribute("aria-expanded", String(open));
  const icon = btn.querySelector("i");
  if (icon) icon.className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}

function navigateTo(pageId, opts = {}) {
  const target = document.getElementById(pageId);
  if (!target) {
    console.warn("Page not found:", pageId);
    return;
  }

  $$(".page").forEach((p) => p.classList.remove("active"));
  target.classList.add("active");
  AppState.currentPage = pageId;

  const activeFamily = navFamily[pageId] || pageId;
  $$(".nav-link").forEach((btn) => {
    const isActive = btn.dataset.target === activeFamily;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-current", isActive ? "page" : "false");
  });

  toggleMenu(false);

  // استدعاء معالج الصفحة إن وجد
  if (typeof handlePageEnter === "function") {
    handlePageEnter(pageId, opts);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function refreshCurrentPage() {
  navigateTo(AppState.currentPage);
}

function initRouter() {
  document.addEventListener("click", (e) => {
    // روابط التنقل
    const targetBtn = e.target.closest("[data-target]");
    if (targetBtn && !targetBtn.closest(".search-panel")) {
      e.preventDefault();
      navigateTo(targetBtn.dataset.target, {
        type: targetBtn.dataset.type,
        category: targetBtn.dataset.category,
        id: targetBtn.dataset.id,
      });
      if (typeof closeSearch === "function") closeSearch();
      return;
    }

    // أزرار العودة
    const backBtn = e.target.closest("[data-back]");
    if (backBtn) {
      navigateTo(backBtn.dataset.back);
      return;
    }

    // تبديل اللغة
    const langBtn = e.target.closest(".lang-btn");
    if (langBtn) {
      setLanguage(langBtn.dataset.lang);
      return;
    }

    // القائمة
    const menuBtn = e.target.closest("#menuToggle");
    if (menuBtn) {
      toggleMenu();
      return;
    }

    // زر الرئيسية
    const homeBtn = e.target.closest("#homeBtn");
    if (homeBtn) {
      navigateTo("page-home");
      return;
    }
  });
}
