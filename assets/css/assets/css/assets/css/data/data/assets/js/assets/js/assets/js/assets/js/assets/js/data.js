/* ============================================
   data.js — بيانات المحتوى
   ============================================ */

const DATA = {
  ar: {
    latest: [
      { title: "إضافة قسم البحوث والمقالات", date: "تحديث جديد" },
      { title: "تفعيل قسم التبرعات والشفافية", date: "تحديث جديد" },
      { title: "تطوير البحث والتنقل وتجربة الهاتف", date: "الإصدار المحسن" },
      { title: "إعداد قسم المؤلفات والمكتبة الرقمية", date: "تحديث المنصة" },
    ],
    news: [
      {
        title: "إطلاق قسم البحوث والمقالات",
        date: "2025-03-01",
        desc: "قسم جديد لنشر البحوث العلمية والمقالات الثقافية الموثقة.",
      },
      {
        title: "تفعيل قنوات التبرع الرسمية",
        date: "2025-02-20",
        desc: "أصبح بإمكانكم المساهمة في دعم أنشطة المؤسسة عبر قنوات رسمية.",
      },
      {
        title: "تقرير الشفافية السنوي 2025",
        date: "2025-01-15",
        desc: "نشر تقرير شامل عن إنجازات المؤسسة ومساهماتكم الكريمة.",
      },
    ],
    activities: [
      { icon: "fa-users", title: "نشاط ثقافي دوري", desc: "اجتماع أسبوعي لمناقشة القضايا الثقافية." },
      { icon: "fa-book-open", title: "حلقة قرائية", desc: "قراءة جماعية لكتب علمية مختارة." },
      { icon: "fa-hand-holding-heart", title: "مبادرة مجتمعية", desc: "دعم الأسر المحتاجة في المنطقة." },
    ],
    projects: [
      { icon: "fa-book", title: "المكتبة الرقمية", desc: "جمع وترتيب الكتب والمواد العلمية." },
      { icon: "fa-video", title: "منصة المحاضرات", desc: "تنظيم المواد المرئية والصوتية." },
      { icon: "fa-seedling", title: "المبادرات الثقافية", desc: "دعم المشاريع التي تخدم المجتمع." },
    ],
    articles: [
      { title: "كيف نبني محتوى ثقافياً نافعاً؟", author: "مقالة قابلة للتحديث" },
      { title: "أهمية تنظيم المعرفة الإسلامية رقمياً", author: "مقالة قابلة للتحديث" },
    ],
    lessons: [
      "تفسير سورة هود",
      "سلسلة الفضيلة الإسلامية",
      "قيمة الإنسان",
      "اغتنام الفرص",
      "سألني أحدهم",
    ],
    series: [
      { title: "تفسير سورة هود", icon: "fa-video" },
      { title: "تفسير سورة طه", icon: "fa-video" },
    ],
    topics: [
      "الفضيلة الإسلامية",
      "فكرة وعبرة",
      "مدرسة الحياة",
      "قيمة الإنسان",
      "التربية وأدواتها",
      "اغتنام الفرص",
    ],
    books: [
      { title: "العودة إلى الله", desc: "كتاب في التوبة والرجوع إلى الله." },
      { title: "هندسة السعادة الزوجية", desc: "دليل عملي لبناء أسرة سعيدة." },
      { title: "مدارج السالكين", desc: "كتاب في السلوك والأخلاق." },
    ],
    library: [
      { title: "مؤلفات آل الشيرازي", icon: "fa-book-open" },
      { title: "كتب وموسوعات", icon: "fa-book-open" },
      { title: "دروس ومحاضرات", icon: "fa-headphones" },
    ],
  },

  en: {
    latest: [
      { title: "Research & Articles section added", date: "New update" },
      { title: "Donations & Transparency section activated", date: "New update" },
      { title: "Search, navigation, and mobile experience improved", date: "Enhanced version" },
    ],
    news: [
      { title: "Launching the Research section", date: "2025-03-01", desc: "New section for documented scientific research and articles." },
      { title: "Official donation channels activated", date: "2025-02-20", desc: "Support the foundation through official channels." },
      { title: "2025 Annual Transparency Report", date: "2025-01-15", desc: "Comprehensive report on achievements." },
    ],
    activities: [
      { icon: "fa-users", title: "Periodic cultural activity", desc: "Weekly gathering." },
      { icon: "fa-book-open", title: "Reading circle", desc: "Group reading sessions." },
      { icon: "fa-hand-holding-heart", title: "Community initiative", desc: "Supporting families." },
    ],
    projects: [
      { icon: "fa-book", title: "Digital Library", desc: "Organized books and research." },
      { icon: "fa-video", title: "Lecture Platform", desc: "Audio and video organization." },
      { icon: "fa-seedling", title: "Cultural Initiatives", desc: "Community projects." },
    ],
    articles: [
      { title: "Building useful cultural content", author: "Editable article" },
      { title: "Organizing Islamic knowledge digitally", author: "Editable article" },
    ],
    lessons: ["Surah Hud Exegesis", "Islamic Virtue", "Human Value", "Seizing Opportunities"],
    series: [{ title: "Surah Hud Exegesis", icon: "fa-video" }],
    topics: ["Islamic Virtue", "Idea and Lesson", "School of Life"],
    books: [
      { title: "Return to Allah", desc: "Book on repentance." },
      { title: "Architecture of Marital Happiness", desc: "Practical guide." },
    ],
    library: [
      { title: "Al-Shirazi Works", icon: "fa-book-open" },
      { title: "Books & Encyclopedias", icon: "fa-book-open" },
    ],
  },

  fa: {
    latest: [
      { title: "افزودن بخش پژوهش‌ها و مقالات", date: "به‌روزرسانی جدید" },
      { title: "فعال‌سازی بخش کمک‌های مالی", date: "به‌روزرسانی جدید" },
    ],
    news: [
      { title: "راه‌اندازی بخش پژوهش‌ها", date: "2025-03-01", desc: "بخش جدید برای انتشار مقالات." },
    ],
    activities: [
      { icon: "fa-users", title: "فعالیت فرهنگی دوره‌ای", desc: "گردهمایی هفتگی." },
    ],
    projects: [
      { icon: "fa-book", title: "کتابخانه دیجیتال", desc: "مرتب‌سازی کتاب‌ها." },
    ],
    articles: [
      { title: "ساخت محتوای فرهنگی مفید", author: "مقاله قابل ویرایش" },
    ],
    lessons: ["تفسیر سوره هود", "فضیلت اسلامی", "ارزش انسان"],
    series: [{ title: "تفسیر سوره هود", icon: "fa-video" }],
    topics: ["فضیلت اسلامی", "ایده و عبرت"],
    books: [{ title: "بازگشت به سوی خدا", desc: "کتابی در توبه." }],
    library: [{ title: "آثار آل شیرازی", icon: "fa-book-open" }],
  },
};

// أسماء السور (114)
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
