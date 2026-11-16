/* ============================================
   theme.js — الوضع الليلي
   ============================================ */

function initTheme() {
  const saved = localStorage.getItem("theme") || CONFIG.defaultTheme;
  if (saved === "dark") {
    document.documentElement.classList.add("dark-mode");
    updateThemeIcon(true);
  }
  const btn = $("#themeToggle");
  if (btn) {
    btn.setAttribute("aria-pressed", saved === "dark" ? "true" : "false");
    btn.addEventListener("click", toggleTheme);
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeIcon(isDark);
  $("#themeToggle")?.setAttribute("aria-pressed", String(isDark));
}

function updateThemeIcon(isDark) {
  const icon = $("#themeToggle i");
  if (icon) {
    icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }
}
