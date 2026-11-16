/* ============================================
   state.js — حالة التطبيق المشتركة
   ============================================ */

const AppState = {
  currentLang: localStorage.getItem("preferred_lang") || "ar",
  currentPage: "page-home",
  currentSurah: { index: 1, name: "الفاتحة" },
  currentMode: "audio",
  latestIndex: 0,
  carouselTimer: null,
  data: {
    i18n: null,
    articles: null,
    donations: null,
  },
};
