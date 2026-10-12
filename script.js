"use strict";

/* =========================================================
   موقع مودة العمودي — Personal Digital Portfolio
   الملف: script.js
   الوظائف: الترجمة، المظهر، التنقل، الحركة، مؤشر التقدم
========================================================= */


/* =========================================================
   1. قاموس الترجمة (عربي / إنجليزي)
========================================================= */

const translations = {
  ar: {
    pageTitle: "مودة العمودي | الذكاء الاصطناعي",
    metaDescription:
      "الموقع الشخصي لمودة العمودي — متخصصة في الذكاء الاصطناعي والبيانات والعمليات الرقمية. مشاريع منشورة، مهارات، تعليم، وسيرة ذاتية.",

    skipLink: "تخطي إلى المحتوى",
    brandName: "مودة العمودي",

    navHome: "الرئيسية",
    navProjects: "المشاريع",
    navAbout: "نبذة عني",
    navSkills: "المهارات",
    navEducation: "التعليم",
    navContact: "تواصل",
    navOpen: "فتح القائمة",
    navClose: "إغلاق القائمة",

    heroMarker: "Portfolio",
    heroName: "مودة العمودي",
    heroRole: "AI SPECIALIST · DIGITAL OPERATIONS",
    heroLead:
      "أبني حلولًا رقمية تجمع بين الذكاء الاصطناعي، البيانات، والتقنية لتحويل الأفكار إلى تجارب عملية.",
    heroCtaPrimary: "مشاريعي",

    topicAI: "ذكاء اصطناعي",
    topicData: "بيانات",
    topicAutomation: "أتمتة",
    topicWeb: "ويب",

    projectsHeading: "المشاريع المختارة",
    projectsNote: "أعمال منشورة بالكامل — يمكن فتحها مباشرة.",
    featuredLabel: "مشروع مميّز",
    statusCompleted: "مكتمل ومنشور",

    dowTitle: "استوديو ضوء | DOW Studio",
    dowShortDescription:
      "موقع إبداعي تفاعلي لاستوديو تصوير، يجمع بين التصميم المتجاوب والتفاعل البصري وتجربة المستخدم.",
    memoShortDescription:
      "متجر تجريبي لمستحضرات التجميل، صُمّم وبُني باستخدام أدوات الذكاء الاصطناعي.",

    techHTML: "HTML",
    techCSS: "CSS",
    techJavaScript: "JavaScript",
    techResponsive: "Responsive Design",
    techNetlify: "Netlify",
    techAI: "AI Tools",
    techEcommerce: "E-Commerce",
    techUIUX: "UI/UX",
    techWeb: "Web",
    visitProject: "زيارة المشروع",

    aboutHeading: "نبذة عني",
    aboutNote: "من أنا، وما الذي يهمّني في عملي.",
    aboutTextOne:
      "أدرس الذكاء الاصطناعي وأعمل على تحليل البيانات وتحويلها إلى قرارات وحلول عملية. يهمّني الجانب التطبيقي: أن تتحوّل الفكرة إلى منتج رقمي يعمل فعليًا، لا إلى تقرير يُقرأ ويُنسى.",
    aboutTextTwo:
      "أهتم بالأتمتة وتطوير الويب، وأبني مشاريع تجمع بين التقنية وتجربة الاستخدام. أتعلّم باستمرار وأطبّق ما أتعلمه في مشاريع حقيقية، وأعمل بالعربية والإنجليزية.",
    focusHeading: "مجالات تركيزي",
    focusAI: "الذكاء الاصطناعي وتعلّم الآلة",
    focusData: "تحليل البيانات",
    focusAutomation: "الأتمتة والعمليات الرقمية",
    focusWeb: "تطوير الويب وتجربة المستخدم",

    skillsHeading: "المهارات",
    skillsNote: "ما أستخدمه فعليًا في مشاريعي.",
    groupAI: "الذكاء الاصطناعي والبيانات",
    groupDev: "البرمجة والتطوير",
    groupDigital: "الرقمي والأتمتة",
    groupLang: "اللغات",
    skillML: "تعلّم الآلة",
    skillDataAnalysis: "تحليل البيانات",
    skillAutomation: "الأتمتة",
    skillAIWeb: "تطوير مواقع بالذكاء الاصطناعي",
    skillDigitalOps: "العمليات الرقمية",
    skillEcommerce: "التجارة الإلكترونية",
    skillArabic: "العربية",
    skillEnglish: "الإنجليزية",

    educationHeading: "التعليم",
    educationNote: "المسار الأكاديمي الحالي.",
    degreeTitle: "بكالوريوس الذكاء الاصطناعي",
    diplomaTitle: "دبلوم اللغة الإنجليزية المكثف",
    university: "الجامعة الإسلامية بمنيسوتا – أمريكا",
    studyStatus: "قيد الدراسة",

    contactHeading: "تواصلي معي",
    contactDescription:
      "يسعدني التعرّف عليك ومناقشة أي فكرة أو مشروع تقني.",
    emailLabel: "البريد الإلكتروني",
    whatsappLabel: "واتساب",
    linkedinLabel: "لينكدإن",
    downloadCV: "تحميل السيرة الذاتية",
    downloadCVShort: "CV PDF",

    quickContact: "تواصل سريع",
    nextAbout: "القادم — نبذة عني",
    nextSkills: "القادم — المهارات",
    nextEducation: "القادم — التعليم",
    nextContact: "القادم — تواصل",

    footerName: "مودة العمودي",
    footerRights: "جميع الحقوق محفوظة.",

    themeToDark: "تفعيل الوضع الداكن",
    themeToLight: "تفعيل الوضع الفاتح",
    languageToEnglish: "التبديل إلى الإنجليزية",
    languageToArabic: "التبديل إلى العربية"
  },

  en: {
    pageTitle: "Mawada Alamody | Artificial Intelligence",
    metaDescription:
      "The personal website of Mawada Alamody — an Artificial Intelligence specialist working with data and digital operations. Published projects, skills, education, and resume.",

    skipLink: "Skip to content",
    brandName: "Mawada Alamody",

    navHome: "Home",
    navProjects: "Projects",
    navAbout: "About",
    navSkills: "Skills",
    navEducation: "Education",
    navContact: "Contact",
    navOpen: "Open menu",
    navClose: "Close menu",

    heroMarker: "Portfolio",
    heroName: "Mawada Alamody",
    heroRole: "AI SPECIALIST · DIGITAL OPERATIONS",
    heroLead:
      "I build digital solutions that bring artificial intelligence, data, and technology together to turn ideas into working experiences.",
    heroCtaPrimary: "My Projects",

    topicAI: "Artificial Intelligence",
    topicData: "Data",
    topicAutomation: "Automation",
    topicWeb: "Web",

    projectsHeading: "Selected Works",
    projectsNote: "Fully published projects — open them live.",
    featuredLabel: "Featured",
    statusCompleted: "Completed · Live",

    dowTitle: "DOW Studio | Light Studio",
    dowShortDescription:
      "An interactive creative website for a photography studio, combining responsive design, visual interaction, and user experience.",
    memoShortDescription:
      "A demo beauty products store designed and built using artificial intelligence tools.",

    techHTML: "HTML",
    techCSS: "CSS",
    techJavaScript: "JavaScript",
    techResponsive: "Responsive Design",
    techNetlify: "Netlify",
    techAI: "AI Tools",
    techEcommerce: "E-Commerce",
    techUIUX: "UI/UX",
    techWeb: "Web",
    visitProject: "View Project",

    aboutHeading: "About Me",
    aboutNote: "Who I am, and what drives my work.",
    aboutTextOne:
      "I study artificial intelligence and work with data analysis, turning it into decisions and practical solutions. What matters to me is the applied side: an idea becoming a digital product that actually works, not a report that gets read and forgotten.",
    aboutTextTwo:
      "I care about automation and web development, and I build projects that connect technology with user experience. I keep learning and apply what I learn in real projects, working in both Arabic and English.",
    focusHeading: "Areas of Focus",
    focusAI: "Artificial Intelligence & Machine Learning",
    focusData: "Data Analysis",
    focusAutomation: "Automation & Digital Operations",
    focusWeb: "Web Development & User Experience",

    skillsHeading: "Skills",
    skillsNote: "What I actually use in my projects.",
    groupAI: "AI & Data",
    groupDev: "Development",
    groupDigital: "Digital & Automation",
    groupLang: "Languages",
    skillML: "Machine Learning",
    skillDataAnalysis: "Data Analysis",
    skillAutomation: "Automation",
    skillAIWeb: "AI Web Development",
    skillDigitalOps: "Digital Operations",
    skillEcommerce: "E-Commerce",
    skillArabic: "Arabic",
    skillEnglish: "English",

    educationHeading: "Education",
    educationNote: "Current academic path.",
    degreeTitle: "Bachelor's in Artificial Intelligence",
    diplomaTitle: "Intensive English Diploma",
    university: "The Islamic University of Minnesota, USA",
    studyStatus: "In Progress",

    contactHeading: "Get in Touch",
    contactDescription:
      "I'd be glad to meet you and discuss any idea or technical project.",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    linkedinLabel: "LinkedIn",
    downloadCV: "Download Resume",
    downloadCVShort: "CV PDF",

    quickContact: "Quick contact",
    nextAbout: "Next — About",
    nextSkills: "Next — Skills",
    nextEducation: "Next — Education",
    nextContact: "Next — Contact",

    footerName: "Mawada Alamody",
    footerRights: "All rights reserved.",

    themeToDark: "Enable dark mode",
    themeToLight: "Enable light mode",
    languageToEnglish: "Switch to English",
    languageToArabic: "Switch to Arabic"
  }
};


/* =========================================================
   2. عناصر الصفحة والإعدادات
========================================================= */

const themeButton = document.getElementById("theme-toggle");
const languageButton = document.getElementById("language-toggle");
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");
const currentYearElement = document.getElementById("current-year");
const progressBar = document.getElementById("page-progress");

const storageKeys = {
  theme: "mawada-theme",
  language: "mawada-language"
};

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

const sectionIds = [
  "home",
  "projects",
  "about",
  "skills",
  "education",
  "contact"
];


/* =========================================================
   3. قراءة الإعدادات المحفوظة بأمان
========================================================= */

function readPreference(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch (error) {
    return fallback;
  }
}

function savePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    // يستمر الموقع بالعمل حتى لو تعذر التخزين.
  }
}

let currentLanguage = readPreference(storageKeys.language, "ar");
let currentTheme = readPreference(storageKeys.theme, "light");

if (!translations[currentLanguage]) {
  currentLanguage = "ar";
}

if (!["light", "dark"].includes(currentTheme)) {
  currentTheme = "light";
}


/* =========================================================
   4. تحديث النصوص حسب اللغة
========================================================= */

function translatePage(language) {
  const selectedLanguage = translations[language];

  if (!selectedLanguage) {
    return;
  }

  currentLanguage = language;

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  document.title = selectedLanguage.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (Object.prototype.hasOwnProperty.call(selectedLanguage, key)) {
      element.textContent = selectedLanguage[key];
    }
  });

  const description = document.querySelector('meta[name="description"]');

  if (description && selectedLanguage.metaDescription) {
    description.content = selectedLanguage.metaDescription;
  }

  if (languageButton) {
    languageButton.textContent = language === "ar" ? "EN" : "AR";
    languageButton.setAttribute(
      "aria-label",
      language === "ar"
        ? `EN — ${selectedLanguage.languageToEnglish}`
        : `AR — ${selectedLanguage.languageToArabic}`
    );
    languageButton.setAttribute("aria-pressed", String(language === "en"));
  }

  if (navToggle) {
    navToggle.setAttribute(
      "aria-label",
      document.body.classList.contains("nav-open")
        ? selectedLanguage.navClose
        : selectedLanguage.navOpen
    );
  }

  if (themeButton) {
    themeButton.setAttribute(
      "aria-label",
      currentTheme === "dark"
        ? selectedLanguage.themeToLight
        : selectedLanguage.themeToDark
    );
  }

  savePreference(storageKeys.language, language);
}


/* =========================================================
   5. تبديل اللغة
========================================================= */

if (languageButton) {
  languageButton.addEventListener("click", () => {
    translatePage(currentLanguage === "ar" ? "en" : "ar");
  });
}


/* =========================================================
   6. الوضع الداكن والفاتح
========================================================= */

function applyTheme(theme) {
  if (!["light", "dark"].includes(theme)) {
    theme = "light";
  }

  currentTheme = theme;

  const isDark = theme === "dark";

  document.body.classList.toggle("dark-mode", isDark);

  if (themeButton) {
    themeButton.textContent = isDark ? "☀️" : "🌙";
    themeButton.setAttribute("aria-pressed", String(isDark));
    themeButton.setAttribute(
      "aria-label",
      translations[currentLanguage][isDark ? "themeToLight" : "themeToDark"]
    );
  }

  const themeColor = document.querySelector('meta[name="theme-color"]');

  if (themeColor) {
    themeColor.content = isDark ? "#121212" : "#f4f3f1";
  }

  savePreference(storageKeys.theme, theme);
}

if (themeButton) {
  themeButton.addEventListener("click", () => {
    applyTheme(currentTheme === "light" ? "dark" : "light");
  });
}


/* =========================================================
   7. قائمة الجوال
========================================================= */

function setMenuState(isOpen) {
  document.body.classList.toggle("nav-open", isOpen);

  if (navToggle) {
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute(
      "aria-label",
      translations[currentLanguage][isOpen ? "navClose" : "navOpen"]
    );
  }
}

if (navToggle) {
  navToggle.addEventListener("click", () => {
    setMenuState(!document.body.classList.contains("nav-open"));
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuState(false);
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 860) {
    setMenuState(false);
  }
});


/* =========================================================
   8. تحديث السنة تلقائيًا
========================================================= */

function updateCurrentYear() {
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
}


/* =========================================================
   9. حركة الظهور عند التمرير
========================================================= */

function setupScrollReveal() {
  const elements = document.querySelectorAll(
    ".section-head, .work, .about-grid, .skill-group, .timeline-item, .contact-list"
  );

  if (
    prefersReducedMotion.matches ||
    !("IntersectionObserver" in window)
  ) {
    elements.forEach((element) => {
      element.style.opacity = "1";
      element.style.transform = "none";
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((element) => {
    element.setAttribute("data-reveal", "");
    observer.observe(element);
  });
}


/* =========================================================
   10. شريط تقدم التصفح
========================================================= */

function setupProgressBar() {
  if (!progressBar) {
    return;
  }

  function updateProgress() {
    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress =
      scrollableHeight > 0
        ? (window.scrollY / scrollableHeight) * 100
        : 0;

    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);

  updateProgress();
}


/* =========================================================
   11. الحركة السلسة وإغلاق القائمة عند التنقل
========================================================= */

function setupNavigation() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setMenuState(false);
    });
  });
}


/* =========================================================
   12. تمييز القسم الحالي في التنقل
========================================================= */

function setupActiveSection() {
  const navLinks = document.querySelectorAll(".hero-nav a");

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          const isActive =
            link.getAttribute("href") === `#${entry.target.id}`;

          link.classList.toggle("is-active", isActive);

          if (isActive) {
            link.setAttribute("aria-current", "true");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    {
      rootMargin: "-45% 0px -50% 0px",
      threshold: 0
    }
  );

  sectionIds.forEach((id) => {
    const section = document.getElementById(id);

    if (section) {
      observer.observe(section);
    }
  });
}


/* =========================================================
   13. تهيئة الموقع
========================================================= */

function initializeWebsite() {
  translatePage(currentLanguage);
  applyTheme(currentTheme);
  updateCurrentYear();
  setupScrollReveal();
  setupProgressBar();
  setupNavigation();
  setupActiveSection();
}

initializeWebsite();

/* =========================================================
   نهاية ملف JavaScript
========================================================= */
