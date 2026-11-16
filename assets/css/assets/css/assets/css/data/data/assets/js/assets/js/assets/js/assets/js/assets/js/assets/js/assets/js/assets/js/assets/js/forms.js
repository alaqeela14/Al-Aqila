/* ============================================
   forms.js — نماذج التواصل
   ============================================ */

function initContactForm() {
  const form = $("#contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = $("#formStatus");
    const name = $("#name").value.trim();
    const email = $("#email").value.trim();
    const message = $("#message").value.trim();

    if (!name || !email || !message) {
      if (status) status.textContent = t("formError");
      return;
    }

    // هنا يمكنك ربط النموذج بخدمة حقيقية لاحقاً:
    // - Formspree: https://formspree.io
    // - EmailJS: https://emailjs.com
    // - Backend API

    const subject = encodeURIComponent(`رسالة من ${name} — موقع المؤسسة`);
    const body = encodeURIComponent(`الاسم: ${name}\nالبريد: ${email}\n\nالرسالة:\n${message}`);
    window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;

    if (status) status.textContent = t("formSuccess");
    form.reset();
  });
}
