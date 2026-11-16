/* ============================================
   i18n.js — الترجمة والتبديل بين اللغات
   ============================================ */

const I18N = {
  ar: {
    // Header
    utilityNote: "منصة ثقافية وخيرية لخدمة المجتمع",
    siteName: "مؤسسة العقيلة",
    siteTagline: "الثقافية الخيرية",
    headerNote: "علم، ثقافة، خدمة، وبناء إنساني",

    // Nav
    navHome: "الرئيسية",
    navTafsir: "تفسير القرآن الكريم",
    navLectures: "الدروس والمحاضرات",
    navResearch: "بحوث ومقالات",
    navBooks: "المؤلفات",
    navLibrary: "مكتبة آل الشيرازي",
    navDonations: "التبرعات",
    navMishkat: "منصة مشكاة",
    navFatwa: "استفتاء",
    navWasaya: "وصايا",
    navProjects: "المشاريع",
    navAbout: "عن المؤسسة",
    navContact: "تواصل معنا",
    navNews: "أخبار ونشاطات",

    // Hero
    heroEyebrow: "مؤسسة العقيلة الثقافية الخيرية",
    heroTitle: "من المعرفة إلى خدمة الإنسان",
    heroDesc: "مؤسسة غير ربحية تهتم بالثقافة والمعرفة وخدمة المجتمع، وتسعى إلى نشر علوم أهل البيت عليهم السلام، وترسيخ قيم العدل والسلام واللاعنف، ودعم المبادرات الثقافية والإنسانية.",
    heroBtn1: "استكشف المحتوى القرآني",
    heroBtn2: "الدروس والمحاضرات",
    heroStat1: "مساحات معرفية",
    heroStat2: "مسارات للمحتوى",
    heroStat3: "لغات للواجهة",

    // Common
    backHome: "العودة للرئيسية",
    more: "المزيد",
    search: "بحث",
    searchPlaceholder: "ابحث في الموقع...",
    noResults: "لا توجد نتائج مطابقة.",
    loading: "جاري التحميل...",
    closeDetails: "حسناً",
    quoteKicker: "من كلام المعصوم عليه السلام",
    quoteSource: "أمير المؤمنين الإمام علي عليه السلام — نهج البلاغة، الحكمة 81",

    // Home sections
    latestTitle: "آخر المستجدات",
    latestSubtitle: "أبرز ما تم نشره في المنصة",
    latestBadge: "تحديثات المنصة",
    newsTitle: "أخبار المؤسسة",
    newsSubtitle: "مواد وأخبار يمكن تحديثها من مصدر واحد",
    activitiesTitle: "أنشطة المؤسسة",
    projectsTitle: "مشاريعنا",
    articlesTitle: "مقالات وأفكار",
    lessonsTitle: "دروس ومحاضرات",
    discoveryTitle: "ابحث بسرعة في محتوى الموقع",
    discoveryDesc: "الأخبار، الدروس، السلاسل، المؤلفات والموضوعات.",

    // Tafsir
    tafsirTitle: "تفسير القرآن الكريم",
    tafsirSubtitle: "الوصول إلى السلاسل والدروس القرآنية",
    tafsirSeries: "سلاسل التفسير",
    tafsirSeriesDesc: "مرئي ومحتوى قابل للتوسع",
    taqreebTitle: "تقريب القرآن إلى الأذهان",
    taqreebDesc: "محتوى صوتي ومرئي بحسب السورة",
    audioLabel: "صوتي",
    audioDesc: "اختيار السورة ثم تشغيل المادة",
    videoLabel: "مرئي",
    videoDesc: "اختيار السورة ثم فتح الفيديو",
    surahListTitle: "قائمة السور",
    ayahNotice: "اختر سورة لاستعراض آياتها مع التلاوة",
    modeAudio: "النمط الصوتي",
    modeVideo: "النمط المرئي",

    // Lectures
    lecturesMainTitle: "الدروس والمحاضرات",
    lecturesLabel: "المحاضرات",
    lecturesDesc: "البحث بحسب السلسلة أو الموضوع",
    lessonsLabel: "الدروس",
    lessonsDesc: "قائمة قابلة للتوسعة لأرقام الدروس",
    lecturesTopicsTitle: "مواضيع المحاضرات",
    lessonsMainTitle: "الدروس",
    lecturePrefix: "محاضرات",

    // Research
    researchTitle: "بحوث ومقالات",
    researchSubtitle: "محتوى علمي وثقافي موثّق",
    researchReadMore: "اقرأ المزيد",
    researchDownload: "تحميل PDF",
    researchCategory: "التصنيف",
    researchDate: "التاريخ",
    researchAuthor: "المؤلف",
    researchEmpty: "لا توجد بحوث في هذا التصنيف حالياً.",
    researchBack: "العودة للبحوث",

    // Books
    booksTitle: "المؤلفات",
    booksNotice: "هذه الواجهة جاهزة لربط الكتب وملفات PDF ووصف المؤلف وروابط القراءة أو الشراء.",
    libraryTitle: "مكتبة آل الشيرازي",

    // Donations
    donationsTitle: "التبرعات والدعم",
    donationsSubtitle: "ساهم في دعم أنشطة المؤسسة الثقافية والخيرية",
    donationsQuote: "مَّن ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا",
    donationsChooseCategory: "اختر نوع التبرع",
    donationsMethods: "طرق التبرع",
    donationsTransparency: "الشفافية والإنجاز",
    donationsTotal: "إجمالي التبرعات",
    donationsBeneficiaries: "المستفيدون",
    donationsProjects: "المشاريع",
    donationsCopy: "نسخ",
    donationsCopied: "تم النسخ ✓",
    donationsNote: "ملاحظة: يرجى التواصل مع المؤسسة لتأكيد استلام تبرعك",
    donationsCurrency: "ريال",

    // Other sections
    mishkatTitle: "منصة مشكاة",
    mishkatSubtitle: "منصة معرفية للمواد والدورات والسلاسل",
    fatwaTitle: "استفتاء",
    fatwaSubtitle: "قسم مخصص للاستفتاءات والأسئلة الشرعية",
    wasayaTitle: "وصايا",
    wasayaSubtitle: "مختارات نافعة في تزكية النفس وبناء الإنسان",
    projectsTitlePage: "المشاريع",
    projectsSubtitle: "مشاريع ثقافية وخيرية",
    culturalProjects: "المشاريع الثقافية",
    charityProjects: "المشاريع الخيرية",
    aboutTitle: "عن المؤسسة",
    aboutSubtitle: "تعريف بالمؤسسة ورسالتها ومجالات عملها",

    // Contact
    contactTitle: "تواصل معنا",
    contactInfoTitle: "بيانات التواصل",
    nameLabel: "الاسم الكامل",
    emailLabel: "البريد الإلكتروني",
    messageLabel: "الرسالة",
    namePlaceholder: "الاسم الكامل",
    emailPlaceholder: "البريد الإلكتروني",
    messagePlaceholder: "اكتب رسالتك هنا...",
    sendBtn: "إرسال الرسالة",
    phoneTitle: "الهاتف",
    emailTitle: "البريد الإلكتروني",
    addressTitle: "العنوان",
    addressValue: "اليمن",
    mapNote: "ضع هنا رابط أو تضمين خريطة الموقع الفعلي للمؤسسة.",
    formSuccess: "تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.",
    formError: "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.",

    // Footer
    footerBrand: "مؤسسة العقيلة",
    footerDesc: "منصة ثقافية وخيرية تهتم بنشر المعرفة وخدمة المجتمع وبناء المحتوى الإسلامي بصورة منظمة وحديثة.",
    footerQuick: "روابط سريعة",
    footerSocial: "التواصل الاجتماعي",
    copyright: "جميع الحقوق محفوظة © 2026 مؤسسة العقيلة الثقافية الخيرية",
  },

  en: {
    utilityNote: "A cultural and charitable platform serving the community",
    siteName: "Al-Aqeela Foundation",
    siteTagline: "Cultural & Charity",
    headerNote: "Knowledge, culture, service, and human development",

    navHome: "Home",
    navTafsir: "Quran Exegesis",
    navLectures: "Lessons & Lectures",
    navResearch: "Research & Articles",
    navBooks: "Books",
    navLibrary: "Al-Shirazi Library",
    navDonations: "Donations",
    navMishkat: "Mishkat Platform",
    navFatwa: "Fatwa",
    navWasaya: "Wasaya",
    navProjects: "Projects",
    navAbout: "About",
    navContact: "Contact",
    navNews: "News & Activities",

    heroEyebrow: "Al-Aqeela Cultural Charity Foundation",
    heroTitle: "From Knowledge to Human Service",
    heroDesc: "A non-profit cultural and charitable platform focused on knowledge, community service, Ahl al-Bayt teachings, justice, peace, and non-violence.",
    heroBtn1: "Explore Quran Content",
    heroBtn2: "Lessons & Lectures",
    heroStat1: "Knowledge areas",
    heroStat2: "Content paths",
    heroStat3: "Interface languages",

    backHome: "Back to Home",
    more: "More",
    search: "Search",
    searchPlaceholder: "Search the site...",
    noResults: "No matching results.",
    loading: "Loading...",
    closeDetails: "Close",
    quoteKicker: "From the words of the Infallible (AS)",
    quoteSource: "Imam Ali (AS) — Nahj al-Balagha, Wisdom 81",

    latestTitle: "Latest Updates",
    latestSubtitle: "Recent platform highlights",
    latestBadge: "Platform Updates",
    newsTitle: "Foundation News",
    newsSubtitle: "News content managed from one data source",
    activitiesTitle: "Activities",
    projectsTitle: "Our Projects",
    articlesTitle: "Articles & Ideas",
    lessonsTitle: "Lessons & Lectures",
    discoveryTitle: "Quick search across content",
    discoveryDesc: "News, lessons, series, books, and topics.",

    tafsirTitle: "Quran Exegesis",
    tafsirSubtitle: "Quranic series and lessons",
    tafsirSeries: "Exegesis Series",
    tafsirSeriesDesc: "Video and expandable content",
    taqreebTitle: "Taqreeb al-Quran",
    taqreebDesc: "Audio and video by surah",
    audioLabel: "Audio",
    audioDesc: "Choose a surah and play the material",
    videoLabel: "Video",
    videoDesc: "Choose a surah and open the video",
    surahListTitle: "Surah List",
    ayahNotice: "Choose a surah to view verses with recitation",
    modeAudio: "Audio mode",
    modeVideo: "Video mode",

    lecturesMainTitle: "Lessons & Lectures",
    lecturesLabel: "Lectures",
    lecturesDesc: "Browse by series or topic",
    lessonsLabel: "Lessons",
    lessonsDesc: "Expandable lesson index",
    lecturesTopicsTitle: "Lecture Topics",
    lessonsMainTitle: "Lessons",
    lecturePrefix: "Lectures",

    researchTitle: "Research & Articles",
    researchSubtitle: "Documented scientific and cultural content",
    researchReadMore: "Read More",
    researchDownload: "Download PDF",
    researchCategory: "Category",
    researchDate: "Date",
    researchAuthor: "Author",
    researchEmpty: "No research in this category yet.",
    researchBack: "Back to Research",

    booksTitle: "Books",
    booksNotice: "Ready for books, PDFs, author details, and reading or purchase links.",
    libraryTitle: "Al-Shirazi Library",

    donationsTitle: "Donations & Support",
    donationsSubtitle: "Contribute to support the foundation's cultural and charitable activities",
    donationsQuote: "Who is it that would loan Allah a goodly loan",
    donationsChooseCategory: "Choose donation type",
    donationsMethods: "Donation Methods",
    donationsTransparency: "Transparency & Impact",
    donationsTotal: "Total donations",
    donationsBeneficiaries: "Beneficiaries",
    donationsProjects: "Projects",
    donationsCopy: "Copy",
    donationsCopied: "Copied ✓",
    donationsNote: "Note: Please contact the foundation to confirm receipt of your donation",
    donationsCurrency: "YER",

    mishkatTitle: "Mishkat Platform",
    mishkatSubtitle: "Knowledge platform for materials, courses, and series",
    fatwaTitle: "Fatwa",
    fatwaSubtitle: "Section for religious questions and answers",
    wasayaTitle: "Wasaya",
    wasayaSubtitle: "Beneficial selections on self-purification and human development",
    projectsTitlePage: "Projects",
    projectsSubtitle: "Cultural and charitable projects",
    culturalProjects: "Cultural Projects",
    charityProjects: "Charity Projects",
    aboutTitle: "About Foundation",
    aboutSubtitle: "Introduction to the foundation, its mission and fields of work",

    contactTitle: "Contact Us",
    contactInfoTitle: "Contact Details",
    nameLabel: "Full Name",
    emailLabel: "Email Address",
    messageLabel: "Message",
    namePlaceholder: "Full name",
    emailPlaceholder: "Email address",
    messagePlaceholder: "Write your message...",
    sendBtn: "Send Message",
    phoneTitle: "Phone",
    emailTitle: "Email",
    addressTitle: "Location",
    addressValue: "Yemen",
    mapNote: "Place the real map embed or location link here.",
    formSuccess: "Your message was sent successfully. We will contact you soon.",
    formError: "An error occurred. Please try again.",

    footerBrand: "Al-Aqeela Foundation",
    footerDesc: "A modern platform for knowledge, culture, community service, and organized Islamic content.",
    footerQuick: "Quick Links",
    footerSocial: "Social",
    copyright: "All rights reserved © 2026 Al-Aqeela Cultural Charity Foundation",
  },

  fa: {
    utilityNote: "پلتفرم فرهنگی و خیریه برای خدمت به جامعه",
    siteName: "بنیاد العقیله",
    siteTagline: "فرهنگی و خیریه",
    headerNote: "دانش، فرهنگ، خدمت و رشد انسانی",

    navHome: "خانه",
    navTafsir: "تفسیر قرآن کریم",
    navLectures: "دروس و سخنرانی‌ها",
    navResearch: "پژوهش‌ها و مقالات",
    navBooks: "تألیفات",
    navLibrary: "کتابخانه آل شیرازی",
    navDonations: "کمک‌های مالی",
    navMishkat: "پلتفرم مشکات",
    navFatwa: "استفتاء",
    navWasaya: "وصایا",
    navProjects: "پروژه‌ها",
    navAbout: "درباره بنیاد",
    navContact: "تماس با ما",
    navNews: "اخبار و فعالیت‌ها",

    heroEyebrow: "بنیاد فرهنگی خیریه العقیله",
    heroTitle: "از دانش تا خدمت به انسان",
    heroDesc: "یک پلتفرم فرهنگی و خیریه برای گسترش دانش، خدمت به جامعه و معرفی علوم اهل بیت علیهم السلام.",
    heroBtn1: "محتوای قرآنی",
    heroBtn2: "دروس و سخنرانی‌ها",
    heroStat1: "حوزه‌های دانشی",
    heroStat2: "مسیرهای محتوا",
    heroStat3: "زبان رابط",

    backHome: "بازگشت به خانه",
    more: "بیشتر",
    search: "جستجو",
    searchPlaceholder: "جستجو در سایت...",
    noResults: "نتیجه‌ای یافت نشد.",
    loading: "در حال بارگذاری...",
    closeDetails: "بستن",
    quoteKicker: "از سخنان معصوم علیه السلام",
    quoteSource: "امام علی علیه السلام — نهج البلاغه، حکمت ۸۱",

    latestTitle: "آخرین تحولات",
    latestSubtitle: "برجسته‌ترین محتوای پلتفرم",
    latestBadge: "به‌روزرسانی پلتفرم",
    newsTitle: "اخبار بنیاد",
    newsSubtitle: "محتوای خبری قابل ویرایش",
    activitiesTitle: "فعالیت‌ها",
    projectsTitle: "پروژه‌ها",
    articlesTitle: "مقالات و ایده‌ها",
    lessonsTitle: "دروس و سخنرانی‌ها",
    discoveryTitle: "جستجوی سریع در سایت",
    discoveryDesc: "اخبار، دروس، سلسله‌ها، تألیفات و موضوعات.",

    tafsirTitle: "تفسیر قرآن کریم",
    tafsirSubtitle: "سلسله‌های قرآنی و دروس",
    tafsirSeries: "سلسله‌های تفسیر",
    tafsirSeriesDesc: "محتوای تصویری",
    taqreebTitle: "تقریب القرآن",
    taqreebDesc: "محتوای صوتی و تصویری بر اساس سوره",
    audioLabel: "صوتی",
    audioDesc: "انتخاب سوره",
    videoLabel: "تصویری",
    videoDesc: "انتخاب سوره",
    surahListTitle: "فهرست سوره‌ها",
    ayahNotice: "برای مشاهده آیات با تلاوت، سوره را انتخاب کنید",
    modeAudio: "حالت صوتی",
    modeVideo: "حالت تصویری",

    lecturesMainTitle: "دروس و سخنرانی‌ها",
    lecturesLabel: "سخنرانی‌ها",
    lecturesDesc: "بر اساس موضوع",
    lessonsLabel: "دروس",
    lessonsDesc: "فهرست دروس",
    lecturesTopicsTitle: "موضوعات سخنرانی",
    lessonsMainTitle: "دروس",
    lecturePrefix: "سخنرانی‌های",

    researchTitle: "پژوهش‌ها و مقالات",
    researchSubtitle: "محتوای علمی و فرهنگی مستند",
    researchReadMore: "ادامه مطلب",
    researchDownload: "دانلود PDF",
    researchCategory: "دسته‌بندی",
    researchDate: "تاریخ",
    researchAuthor: "نویسنده",
    researchEmpty: "هیچ پژوهشی در این دسته نیست.",
    researchBack: "بازگشت به پژوهش‌ها",

    booksTitle: "تألیفات",
    booksNotice: "آماده برای کتاب‌ها، PDF و لینک مطالعه.",
    libraryTitle: "کتابخانه آل شیرازی",

    donationsTitle: "کمک‌های مالی و حمایت",
    donationsSubtitle: "به فعالیت‌های فرهنگی و خیریه بنیاد کمک کنید",
    donationsQuote: "کیست که به خداوند قرض نیکو دهد",
    donationsChooseCategory: "نوع کمک را انتخاب کنید",
    donationsMethods: "روش‌های کمک",
    donationsTransparency: "شفافیت و دستاوردها",
    donationsTotal: "کل کمک‌ها",
    donationsBeneficiaries: "بهره‌مندان",
    donationsProjects: "پروژه‌ها",
    donationsCopy: "کپی",
    donationsCopied: "کپی شد ✓",
    donationsNote: "توجه: لطفاً برای تأیید دریافت کمک با بنیاد تماس بگیرید",
    donationsCurrency: "ریال",

    mishkatTitle: "پلتفرم مشکات",
    mishkatSubtitle: "پلتفرم دانشی برای مواد، دوره‌ها و سلسله‌ها",
    fatwaTitle: "استفتاء",
    fatwaSubtitle: "بخش مخصوص استفتاءات و سؤالات شرعی",
    wasayaTitle: "وصایا",
    wasayaSubtitle: "گزیده‌های سودمند در تزکیه نفس و رشد انسانی",
    projectsTitlePage: "پروژه‌ها",
    projectsSubtitle: "پروژه‌های فرهنگی و خیریه",
    culturalProjects: "پروژه‌های فرهنگی",
    charityProjects: "پروژه‌های خیریه",
    aboutTitle: "درباره بنیاد",
    aboutSubtitle: "معرفی بنیاد، رسالت و حوزه‌های فعالیت آن",

    contactTitle: "تماس با ما",
    contactInfoTitle: "اطلاعات تماس",
    nameLabel: "نام کامل",
    emailLabel: "ایمیل",
    messageLabel: "پیام",
    namePlaceholder: "نام کامل",
    emailPlaceholder: "ایمیل",
    messagePlaceholder: "پیام خود را بنویسید...",
    sendBtn: "ارسال",
    phoneTitle: "تلفن",
    emailTitle: "ایمیل",
    addressTitle: "نشانی",
    addressValue: "یمن",
    mapNote: "نقشه واقعی مکان بنیاد را اینجا قرار دهید.",
    formSuccess: "پیام شما با موفقیت ارسال شد.",
    formError: "خطایی رخ داد. لطفاً دوباره تلاش کنید.",

    footerBrand: "بنیاد العقیله",
    footerDesc: "پلتفرمی برای دانش، فرهنگ، خدمت اجتماعی و محتوای اسلامی.",
    footerQuick: "پیوندهای سریع",
    footerSocial: "شبکه‌های اجتماعی",
    copyright: "تمامی حقوق محفوظ است © ۲۰۲۶ بنیاد العقیله",
  },
};

function t(key) {
  const lang = AppState.currentLang;
  return I18N[lang]?.[key] ?? I18N.ar[key] ?? key;
}

function applyTranslations() {
  document.documentElement.lang = AppState.currentLang;
  document.documentElement.dir = AppState.currentLang === "en" ? "ltr" : "rtl";

  $$("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = t(key);
    if (value !== undefined) el.textContent = value;
  });

  $$("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  $$(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === AppState.currentLang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
}

function setLanguage(lang) {
  if (!I18N[lang]) lang = "ar";
  AppState.currentLang = lang;
  localStorage.setItem("preferred_lang", lang);
  AppState.latestIndex = 0;
  applyTranslations();
  updateDates();
  if (typeof refreshCurrentPage === "function") refreshCurrentPage();
}
