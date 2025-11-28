// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      topStrip: {
        fastDelivery: "Premium Medicines · Fast Delivery"
      },
      navbar: {
        home: "Home",
        products: "Products",
        about: "About",
        blog: "Blog",
        contact: "Contact",
        login: "Login",
        search: "Search",
        searchPlaceholder: "Search medicines…"
      },
  contact: {
  heroTitle: "Get in Touch",
  heroTag: "Contact Ivexia Pharma",
  heroHeading: "We’re Here to Help You",
  heroSubtitle: "Reach out for product inquiries, business collaborations, regulatory support, or distribution opportunities.",

  requestQuoteBtn: "Request a Quote",
  emailLabel: "support@ivexiapharma.com",

  chipRDTitle: "Strong R&D",
  chipRDText: "Innovative pharmaceutical research & development.",
  
  chipClinicalTitle: "Clinical Support",
  chipClinicalText: "Guidance across therapeutic and clinical needs.",
  
  chipMfgTitle: "GMP Manufacturing",
  chipMfgText: "Premium-grade global manufacturing standards.",

  quickContact: "Quick Contact",
  quickContactSubtitle: "Reach our team instantly for assistance.",
  
  phone: "Phone",
  email: "Email",
  messageUsBtn: "Message Us",

  formRequestTitle: "Send Us a Message",
  formRequestSubtitle: "Our team will contact you within 24 hours.",
  fullName: "Full Name",
  fullNamePlaceholder: "Enter your name",
  emailField: "Email Address",
  emailPlaceholder: "Enter your email",
  phoneField: "Phone Number",
  phonePlaceholder: "Enter your phone (optional)",
  subjectField: "Subject",
  subjectPlaceholder: "Enter message subject",
  messageField: "Message",
  messagePlaceholder: "Write your message...",
  sendMessageBtn: "Send Message",
  resetBtn: "Reset",
  weReply: "We usually reply within 24 hours",
  priority: "High Priority",

  formError: "Please fill the required fields.",
  formSending: "Sending your message...",
  formSuccess: "Your message has been successfully sent!",

  officeTitle: "Our Office Location",

  contactOptionsTitle: "Contact Options",
  office: "Office",
  officeLocation: "Navi Mumbai, Maharashtra, India",

  faqTitle: "Frequently Asked Questions",
  faq1Q: "How long does it take to receive a response?",
  faq1A: "Our team usually responds within 24 hours.",
  faq2Q: "Do you offer international partnerships?",
  faq2A: "Yes. We work with global distributors and partners.",

  urgentNotice: "For urgent medical or safety concerns, please contact your local health provider.",

  ctaTitle: "Looking for a Trusted Pharmaceutical Partner?",
  ctaSubtitle: "Connect with us today for high-quality medicines & global export solutions.",
  ctaBtn: "Contact Us"
}

,
      orders: {
        title: "Your Orders",
        empty_title: "No Orders Yet",
        empty_text: "You have not placed any orders.",
        back_home: "Back to Home",
        items: "items",
        view_details: "View Details",
        id: "Order ID"
      },
      success: {
        title: "Order Placed Successfully!",
        text: "Thank you! Your order has been recorded successfully.",
        back_home: "Back to Home",
        view_orders: "View Orders"
      },
      admin: {
        title: "Admin Orders",
        id: "Order ID",
        date: "Order Date",
        items: "Items",
        total: "Total Amount",
        status: "Status",
        view: "View Order"
      },

      /* ------------ ABOUT (EN) ------------ */
      about: {
        heroTitle: "About Ivexia Pharmaceuticals",
        heroSubtitle:
          "Building a global future of innovative, high-quality, and affordable healthcare solutions.",
        missionBtn: "Our Mission",
        contactBtn: "Contact Us",

        whoWeAreTitle: "Who We Are",
        whoWeAreText:
          "Ivexia Pharmaceuticals is an innovation-driven healthcare company delivering premium quality formulations across global markets. We combine scientific excellence with advanced manufacturing to create safe, effective, and trusted medicines.",

        yearsExperience: "10+ Years",
        yearsExperienceSub: "Industry Excellence",
        strongRD: "Strong R&D",
        strongRDSub: "Advanced Research",
        gmpUnits: "GMP Units",
        gmpUnitsSub: "Certified Manufacturing",

        trustedBy: "Trusted by",
        trustedNumber: "500+",
        partnersClients: "Partners & Clients",

        leadershipTitle: "Our Leadership",
        leadershipSubtitle:
          "A visionary team leading Ivexia toward global innovation and healthcare advancement.",

        journeyTitle: "Our Journey",
        journeySubtitle: "A timeline of growth, innovation, and global expansion.",
        journeyItems: [
          {
            year: "2015",
            title: "Founded in India",
            text: "Ivexia Pharmaceuticals was established with a commitment to quality and innovation."
          },
          {
            year: "2018",
            title: "R&D Expansion",
            text: "We expanded our R&D and adopted modern technology for faster development cycles."
          },
          {
            year: "2021",
            title: "Global Export Operations",
            text: "Entered international markets with a strong portfolio of regulated products."
          },
          {
            year: "2024",
            title: "Advanced Manufacturing Upgrade",
            text: "Modernized our infrastructure with GMP-compliant production facilities."
          }
        ],

        whyChooseTitle: "Why Choose Ivexia?",
        whyChoose: [
          {
            title: "Premium Quality",
            text: "Every formulation passes strict global quality benchmarks."
          },
          {
            title: "Global Expertise",
            text: "Serving clients across multiple countries and regulated markets."
          },
          {
            title: "Innovative Approach",
            text: "Continuous research and development for next-generation healthcare."
          },
          {
            title: "Customer First",
            text: "We ensure reliability, transparency, and long-term partnerships."
          }
        ],

        partnerTitle: "Partner With Ivexia",
        partnerSubtitle:
          "Join us in creating a healthier and more advanced future through science-driven solutions.",
        getInTouchBtn: "Get in Touch",

        faqTitle: "Frequently Asked Questions",
        faq: [
          {
            q: "Is Ivexia a certified manufacturing company?",
            a: "Yes, our facilities follow global GMP and quality compliance standards."
          },
          {
            q: "Do you offer international exports?",
            a: "We export to multiple countries with a strong regulatory compliance system."
          },
          {
            q: "Can I collaborate with Ivexia?",
            a: "Yes, we welcome global distributors, partners, and research collaborations."
          }
        ],

        readyTalkTitle: "Ready to Talk?",
        readyTalkSubtitle:
          "Our experts are ready to assist with partnerships, product details, or business opportunities.",
        requestConsultationBtn: "Request Consultation",
        callUsText: "Call Us"
      }
    }
  },

  /* ---------- GERMAN ---------- */
  de: {
    translation: {
      navbar: {
        home: "Start",
        products: "Produkte",
        about: "Über uns",
        blog: "Blog",
        contact: "Kontakt",
        login: "Anmelden",
        search: "Suchen",
        searchPlaceholder: "Medikamente suchen…"
      },
      orders: {
        title: "Ihre Bestellungen",
        empty_title: "Keine Bestellungen",
        empty_text: "Sie haben noch keine Bestellungen aufgegeben.",
        back_home: "Zur Startseite",
        items: "Artikel",
        view_details: "Details ansehen",
        id: "Bestellnummer"
      },
      success: {
        title: "Bestellung erfolgreich!",
        text: "Vielen Dank! Ihre Bestellung wurde erfolgreich gespeichert.",
        back_home: "Zur Startseite",
        view_orders: "Bestellungen ansehen"
      },
      contact: {
  heroTitle: "Kontakt aufnehmen",
  heroTag: "Kontaktieren Sie Ivexia Pharma",
  heroHeading: "Wir sind für Sie da",
  heroSubtitle: "Kontaktieren Sie uns für Produktanfragen, Kooperationen, regulatorische Unterstützung oder Vertriebsmöglichkeiten.",

  requestQuoteBtn: "Angebot anfordern",
  emailLabel: "support@ivexiapharma.com",

  chipRDTitle: "Starke F&E",
  chipRDText: "Innovative pharmazeutische Forschung und Entwicklung.",

  chipClinicalTitle: "Klinische Unterstützung",
  chipClinicalText: "Unterstützung in therapeutischen und klinischen Bereichen.",

  chipMfgTitle: "GMP-Herstellung",
  chipMfgText: "Premium-Herstellungsstandards nach weltweiten Normen.",

  quickContact: "Schnellkontakt",
  quickContactSubtitle: "Erreichen Sie unser Team sofort für Unterstützung.",

  phone: "Telefon",
  email: "E-Mail",
  messageUsBtn: "Nachricht senden",

  formRequestTitle: "Senden Sie uns eine Nachricht",
  formRequestSubtitle: "Unser Team meldet sich innerhalb von 24 Stunden.",
  fullName: "Vollständiger Name",
  fullNamePlaceholder: "Geben Sie Ihren Namen ein",
  emailField: "E-Mail-Adresse",
  emailPlaceholder: "Geben Sie Ihre E-Mail ein",
  phoneField: "Telefonnummer",
  phonePlaceholder: "Telefonnummer eingeben (optional)",
  subjectField: "Betreff",
  subjectPlaceholder: "Betreff eingeben",
  messageField: "Nachricht",
  messagePlaceholder: "Ihre Nachricht schreiben...",
  sendMessageBtn: "Nachricht senden",
  resetBtn: "Zurücksetzen",
  weReply: "Wir antworten in der Regel innerhalb von 24 Stunden",
  priority: "Hohe Priorität",

  formError: "Bitte füllen Sie alle Pflichtfelder aus.",
  formSending: "Nachricht wird gesendet...",
  formSuccess: "Ihre Nachricht wurde erfolgreich gesendet!",

  officeTitle: "Unser Bürostandort",

  contactOptionsTitle: "Kontaktoptionen",
  office: "Büro",
  officeLocation: "Navi Mumbai, Maharashtra, Indien",

  faqTitle: "Häufig gestellte Fragen",
  faq1Q: "Wie lange dauert eine Antwort?",
  faq1A: "Unser Team antwortet normalerweise innerhalb von 24 Stunden.",
  faq2Q: "Bieten Sie internationale Partnerschaften an?",
  faq2A: "Ja, wir arbeiten mit globalen Distributoren und Partnern zusammen.",

  urgentNotice: "Bei medizinischen Notfällen wenden Sie sich bitte an Ihren örtlichen Gesundheitsdienstleister.",

  ctaTitle: "Auf der Suche nach einem vertrauenswürdigen Pharma-Partner?",
  ctaSubtitle: "Kontaktieren Sie uns für hochwertige Arzneimittel und globale Exportlösungen.",
  ctaBtn: "Kontakt aufnehmen"
}

      ,
      admin: {
        title: "Admin-Bestellungen",
        id: "Bestellnummer",
        date: "Bestelldatum",
        items: "Artikel",
        total: "Gesamtbetrag",
        status: "Status",
        view: "Bestellung ansehen"
      },

      /* ------------ ABOUT (DE) ------------ */
      about: {
        heroTitle: "Über Ivexia Pharmaceuticals",
        heroSubtitle:
          "Wir gestalten eine globale Zukunft für innovative, hochwertige und erschwingliche Gesundheitslösungen.",
        missionBtn: "Unsere Mission",
        contactBtn: "Kontaktieren Sie uns",

        whoWeAreTitle: "Wer wir sind",
        whoWeAreText:
          "Ivexia Pharmaceuticals ist ein innovationsgetriebenes Gesundheitsunternehmen, das hochwertige Formulierungen für globale Märkte liefert. Wir verbinden wissenschaftliche Exzellenz mit modernster Herstellung für sichere, wirksame und vertrauenswürdige Arzneimittel.",

        yearsExperience: "10+ Jahre",
        yearsExperienceSub: "Branchenerfahrung",
        strongRD: "Starke F&E",
        strongRDSub: "Fortschrittliche Forschung",
        gmpUnits: "GMP-Einheiten",
        gmpUnitsSub: "Zertifizierte Herstellung",

        trustedBy: "Vertraut von",
        trustedNumber: "500+",
        partnersClients: "Partner & Kunden",

        leadershipTitle: "Unsere Führung",
        leadershipSubtitle:
          "Ein visionäres Team, das Ivexia in Richtung globaler Innovation und medizinischer Weiterentwicklung führt.",

        journeyTitle: "Unsere Reise",
        journeySubtitle: "Eine Zeitleiste von Wachstum, Innovation und globaler Expansion.",
        journeyItems: [
          {
            year: "2015",
            title: "Gegründet in Indien",
            text: "Ivexia wurde mit einem starken Fokus auf Qualität und Innovation gegründet."
          },
          {
            year: "2018",
            title: "Forschungserweiterung",
            text: "Wir erweiterten unsere F&E und führten moderne Technologien ein."
          },
          {
            year: "2021",
            title: "Globale Expansion",
            text: "Wir traten in internationale Märkte mit regulierten Produkten ein."
          },
          {
            year: "2024",
            title: "Modernisierte Produktion",
            text: "Wir modernisierten unsere Infrastruktur mit GMP-konformen Anlagen."
          }
        ],

        whyChooseTitle: "Warum Ivexia?",
        whyChoose: [
          {
            title: "Höchste Qualität",
            text: "Alle Produkte erfüllen strenge globale Qualitätsstandards."
          },
          {
            title: "Globale Expertise",
            text: "Wir bedienen Kunden in mehreren Ländern weltweit."
          },
          {
            title: "Innovative Forschung",
            text: "Kontinuierliche Entwicklung moderner Gesundheitslösungen."
          },
          {
            title: "Kundenorientiert",
            text: "Wir setzen auf Vertrauen, Transparenz und langfristige Partnerschaften."
          }
        ],

        partnerTitle: "Partner werden",
        partnerSubtitle:
          "Gestalten Sie mit uns eine gesündere und fortschrittlichere Zukunft.",
        getInTouchBtn: "Kontakt aufnehmen",

        faqTitle: "Häufig gestellte Fragen",
        faq: [
          {
            q: "Ist Ivexia ein zertifiziertes Unternehmen?",
            a: "Ja, unsere Produktionsstätten entsprechen GMP- und globalen Qualitätsstandards."
          },
          {
            q: "Exportiert Ivexia weltweit?",
            a: "Ja, wir exportieren in mehrere Länder weltweit."
          },
          {
            q: "Kann ich mit Ivexia zusammenarbeiten?",
            a: "Ja, wir begrüßen globale Partnerschaften und Kooperationen."
          }
        ],

        readyTalkTitle: "Bereit für ein Gespräch?",
        readyTalkSubtitle:
          "Unser Expertenteam unterstützt Sie bei Partnerschaften oder Produktanfragen.",
        requestConsultationBtn: "Beratung anfordern",
        callUsText: "Rufen Sie uns an"
      }
    }
  },

  /* ---------- ARABIC ---------- */
  ar: {
    translation: {
      navbar: {
        home: "الرئيسية",
        products: "المنتجات",
        about: "معلومات عنا",
        blog: "مدونة",
        contact: "اتصل بنا",
        login: "تسجيل الدخول",
        search: "بحث",
        searchPlaceholder: "ابحث عن دواء…"
      },
      contact: {
  heroTitle: "تواصل معنا",
  heroTag: "اتصل بشركة إيفيكسيا فارما",
  heroHeading: "نحن هنا لمساعدتك",
  heroSubtitle: "تواصل معنا للاستفسارات المتعلقة بالمنتجات، الشراكات التجارية، الدعم التنظيمي أو فرص التوزيع.",

  requestQuoteBtn: "طلب عرض سعر",
  emailLabel: "support@ivexiapharma.com",

  chipRDTitle: "بحث وتطوير قوي",
  chipRDText: "أبحاث وتطوير دوائي مبتكر.",

  chipClinicalTitle: "الدعم السريري",
  chipClinicalText: "إرشادات وخدمات مخصصة للاحتياجات العلاجية والسريرية.",

  chipMfgTitle: "تصنيع بمعايير GMP",
  chipMfgText: "معايير تصنيع عالمية عالية الجودة.",

  quickContact: "تواصل سريع",
  quickContactSubtitle: "تواصل فورًا مع فريقنا للحصول على المساعدة.",

  phone: "الهاتف",
  email: "البريد الإلكتروني",
  messageUsBtn: "أرسل رسالة",

  formRequestTitle: "أرسل لنا رسالة",
  formRequestSubtitle: "سيتواصل معك فريقنا خلال 24 ساعة.",
  fullName: "الاسم الكامل",
  fullNamePlaceholder: "أدخل اسمك",
  emailField: "البريد الإلكتروني",
  emailPlaceholder: "أدخل بريدك الإلكتروني",
  phoneField: "رقم الهاتف",
  phonePlaceholder: "أدخل رقم الهاتف (اختياري)",
  subjectField: "الموضوع",
  subjectPlaceholder: "أدخل موضوع الرسالة",
  messageField: "الرسالة",
  messagePlaceholder: "اكتب رسالتك...",
  sendMessageBtn: "إرسال الرسالة",
  resetBtn: "إعادة ضبط",
  weReply: "نرد عادة خلال 24 ساعة",
  priority: "أولوية عالية",

  formError: "يرجى ملء الحقول المطلوبة.",
  formSending: "جارٍ إرسال رسالتك...",
  formSuccess: "تم إرسال رسالتك بنجاح!",

  officeTitle: "موقع مكتبنا",

  contactOptionsTitle: "خيارات التواصل",
  office: "المكتب",
  officeLocation: "نوفـي مومباي، ماهاراشترا، الهند",

  faqTitle: "الأسئلة الشائعة",
  faq1Q: "كم يستغرق الرد؟",
  faq1A: "عادة نرد خلال 24 ساعة.",
  faq2Q: "هل تقدمون شراكات دولية؟",
  faq2A: "نعم، نتعاون مع موزعين وشركاء عالميين.",

  urgentNotice: "للمشاكل الطبية الطارئة، يرجى الاتصال بمقدم الرعاية الصحية المحلي.",

  ctaTitle: "تبحث عن شريك دوائي موثوق؟",
  ctaSubtitle: "تواصل معنا للحصول على منتجات عالية الجودة وحلول تصدير عالمية.",
  ctaBtn: "تواصل الآن"
}
,
      orders: {
        title: "طلباتك",
        empty_title: "لا توجد طلبات",
        empty_text: "لم تقم بأي طلب حتى الآن.",
        back_home: "العودة إلى الرئيسية",
        items: "عناصر",
        view_details: "عرض التفاصيل",
        id: "رقم الطلب"
      },
      success: {
        title: "تم تقديم الطلب بنجاح!",
        text: "شكرًا لك! تم تسجيل طلبك بنجاح.",
        back_home: "العودة إلى الرئيسية",
        view_orders: "عرض الطلبات"
      },
      admin: {
        title: "طلبات المسؤول",
        id: "رقم الطلب",
        date: "تاريخ الطلب",
        items: "العناصر",
        total: "إجمالي المبلغ",
        status: "الحالة",
        view: "عرض الطلب"
      },

      /* ------------ ABOUT (AR) ------------ */
      about: {
        heroTitle: "حول شركة إيفيكسيا للأدوية",
        heroSubtitle:
          "نحن نبني مستقبلًا عالميًا للرعاية الصحية المبتكرة وعالية الجودة وبأسعار معقولة.",
        missionBtn: "مهمتنا",
        contactBtn: "اتصل بنا",

        whoWeAreTitle: "من نحن",
        whoWeAreText:
          "إيفيكسيا للأدوية هي شركة تعتمد على الابتكار، تقدم تركيبات دوائية عالية الجودة للأسواق العالمية. نحن نجمع بين التميز العلمي والتصنيع المتقدم لضمان تقديم أدوية آمنة وفعالة.",

        yearsExperience: "10+ سنوات",
        yearsExperienceSub: "خبرة في المجال",
        strongRD: "بحث وتطوير قوي",
        strongRDSub: "بحث متقدم",
        gmpUnits: "منشآت GMP",
        gmpUnitsSub: "تصنيع معتمد",

        trustedBy: "موثوق من",
        trustedNumber: "500+",
        partnersClients: "شركاء وعملاء",

        leadershipTitle: "فريق القيادة",
        leadershipSubtitle:
          "فريق رؤيوي يقود شركة إيفيكسيا نحو الابتكار والتقدم في قطاع الرعاية الصحية.",

        journeyTitle: "رحلتنا",
        journeySubtitle: "خط زمني للنمو والابتكار والتوسع العالمي.",
        journeyItems: [
          {
            year: "2015",
            title: "التأسيس في الهند",
            text: "تأسست شركة إيفيكسيا بهدف توفير الجودة والابتكار."
          },
          {
            year: "2018",
            title: "توسع البحث والتطوير",
            text: "قمنا بتوسيع منشآت البحث واعتماد تقنيات حديثة."
          },
          {
            year: "2021",
            title: "التوسع العالمي",
            text: "دخول الأسواق الدولية بمجموعة من المنتجات المعتمدة."
          },
          {
            year: "2024",
            title: "تطوير البنية التحتية",
            text: "تحديث منشآت التصنيع لتكون متوافقة مع معايير GMP."
          }
        ],

        whyChooseTitle: "لماذا تختار إيفيكسيا؟",
        whyChoose: [
          {
            title: "جودة ممتازة",
            text: "جميع المنتجات تخضع لمعايير الجودة العالمية."
          },
          {
            title: "خبرة عالمية",
            text: "نقدم منتجاتنا لعملاء في عدة دول."
          },
          {
            title: "ابتكار مستمر",
            text: "بحث وتطوير مستمر لتحقيق حلول طبية مبتكرة."
          },
          {
            title: "نهج يركز على العميل",
            text: "نؤمن بالشراكات طويلة الأمد القائمة على الثقة."
          }
        ],

        partnerTitle: "كن شريكًا لنا",
        partnerSubtitle:
          "انضم إلينا للمساهمة في مستقبل أكثر صحة وتقدمًا.",
        getInTouchBtn: "تواصل معنا",

        faqTitle: "الأسئلة الشائعة",
        faq: [
          {
            q: "هل شركة إيفيكسيا معتمدة؟",
            a: "نعم، منشآتنا تتبع معايير GMP والجودة العالمية."
          },
          {
            q: "هل تقومون بالتصدير عالميًا؟",
            a: "نعم، نصدر منتجاتنا للعديد من الدول."
          },
          {
            q: "هل يمكن التعاون معكم؟",
            a: "نعم، نرحب بالشراكات التجارية والبحثية."
          }
        ],

        readyTalkTitle: "هل أنت مستعد للتحدث؟",
        readyTalkSubtitle:
          "فريق الخبراء لدينا جاهز لمساعدتك في الاستفسارات والشراكات.",
        requestConsultationBtn: "طلب استشارة",
        callUsText: "اتصل بنا"
      }
    }
  },

  /* ---------- SPANISH ---------- */
  es: {
    translation: {
      navbar: {
        home: "Inicio",
        products: "Productos",
        about: "Sobre nosotros",
        blog: "Blog",
        contact: "Contacto",
        login: "Iniciar sesión",
        search: "Buscar",
        searchPlaceholder: "Buscar medicamentos…"
      },
      orders: {
        title: "Tus pedidos",
        empty_title: "Sin pedidos",
        empty_text: "Aún no has realizado ningún pedido.",
        back_home: "Volver al inicio",
        items: "artículos",
        view_details: "Ver detalles",
        id: "ID de pedido"
      },
      contact: {
  heroTitle: "Ponte en contacto",
  heroTag: "Contacta a Ivexia Pharma",
  heroHeading: "Estamos aquí para ayudarte",
  heroSubtitle: "Contáctanos para consultas, colaboraciones, soporte regulatorio o distribución.",

  requestQuoteBtn: "Solicitar presupuesto",
  emailLabel: "support@ivexiapharma.com",

  chipRDTitle: "I+D fuerte",
  chipRDText: "Investigación y desarrollo farmacéutico innovador.",

  chipClinicalTitle: "Soporte clínico",
  chipClinicalText: "Guía y apoyo en necesidades clínicas y terapéuticas.",

  chipMfgTitle: "Fabricación GMP",
  chipMfgText: "Estándares globales de fabricación premium.",

  quickContact: "Contacto rápido",
  quickContactSubtitle: "Comunícate de inmediato con nuestro equipo.",

  phone: "Teléfono",
  email: "Correo electrónico",
  messageUsBtn: "Enviar mensaje",

  formRequestTitle: "Envíanos un mensaje",
  formRequestSubtitle: "Nuestro equipo te responderá en menos de 24 horas.",
  fullName: "Nombre completo",
  fullNamePlaceholder: "Ingresa tu nombre",
  emailField: "Correo electrónico",
  emailPlaceholder: "Ingresa tu correo",
  phoneField: "Número de teléfono",
  phonePlaceholder: "Ingresa tu teléfono (opcional)",
  subjectField: "Asunto",
  subjectPlaceholder: "Ingresa el asunto",
  messageField: "Mensaje",
  messagePlaceholder: "Escribe tu mensaje...",
  sendMessageBtn: "Enviar mensaje",
  resetBtn: "Restablecer",
  weReply: "Respondemos generalmente en 24 horas",
  priority: "Alta prioridad",

  formError: "Por favor completa los campos requeridos.",
  formSending: "Enviando mensaje...",
  formSuccess: "¡Tu mensaje fue enviado exitosamente!",

  officeTitle: "Ubicación de nuestra oficina",

  contactOptionsTitle: "Opciones de contacto",
  office: "Oficina",
  officeLocation: "Navi Mumbai, Maharashtra, India",

  faqTitle: "Preguntas frecuentes",
  faq1Q: "¿Cuánto tardan en responder?",
  faq1A: "Normalmente respondemos dentro de 24 horas.",
  faq2Q: "¿Ofrecen alianzas internacionales?",
  faq2A: "Sí, trabajamos con distribuidores y socios globales.",

  urgentNotice: "Para emergencias médicas, comuníquese con un proveedor local de salud.",

  ctaTitle: "¿Buscas un socio farmacéutico confiable?",
  ctaSubtitle: "Contáctanos para obtener medicamentos premium y soluciones de exportación global.",
  ctaBtn: "Contáctanos"
}

      ,
      success: {
        title: "¡Pedido realizado con éxito!",
        text: "Gracias. Tu pedido fue registrado con éxito.",
        back_home: "Volver al inicio",
        view_orders: "Ver pedidos"
      },
      admin: {
        title: "Pedidos de Administrador",
        id: "ID del Pedido",
        date: "Fecha del Pedido",
        items: "Artículos",
        total: "Monto Total",
        status: "Estado",
        view: "Ver Pedido"
      },

      /* ------------ ABOUT (ES) ------------ */
      about: {
        heroTitle: "Sobre Ivexia Pharmaceuticals",
        heroSubtitle:
          "Construyendo un futuro global con soluciones de salud innovadoras, seguras y accesibles.",
        missionBtn: "Nuestra misión",
        contactBtn: "Contáctanos",

        whoWeAreTitle: "Quiénes somos",
        whoWeAreText:
          "Ivexia Pharmaceuticals es una empresa de salud impulsada por la innovación, dedicada a ofrecer formulaciones de alta calidad para mercados globales. Combinamos excelencia científica con fabricación avanzada para crear medicamentos seguros y confiables.",

        yearsExperience: "10+ años",
        yearsExperienceSub: "Experiencia en el sector",
        strongRD: "Fuerte I+D",
        strongRDSub: "Investigación avanzada",
        gmpUnits: "Unidades GMP",
        gmpUnitsSub: "Fabricación certificada",

        trustedBy: "Confiado por",
        trustedNumber: "500+",
        partnersClients: "Socios y clientes",

        leadershipTitle: "Nuestro liderazgo",
        leadershipSubtitle:
          "Un equipo visionario que impulsa a Ivexia hacia la innovación y la excelencia global en salud.",

        journeyTitle: "Nuestro camino",
        journeySubtitle: "Una línea de tiempo de crecimiento, innovación y expansión global.",
        journeyItems: [
          {
            year: "2015",
            title: "Fundada en India",
            text: "Ivexia se estableció con un compromiso con la calidad y la innovación."
          },
          {
            year: "2018",
            title: "Expansión de I+D",
            text: "Ampliamos nuestras capacidades de investigación adoptando nuevas tecnologías."
          },
          {
            year: "2021",
            title: "Operaciones globales",
            text: "Ingresamos a mercados internacionales con productos regulados."
          },
          {
            year: "2024",
            title: "Actualización de fabricación",
            text: "Modernizamos nuestras instalaciones con estándares GMP."
          }
        ],

        whyChooseTitle: "¿Por qué elegir Ivexia?",
        whyChoose: [
          {
            title: "Calidad premium",
            text: "Cada formulación pasa por estrictos controles de calidad."
          },
          {
            title: "Experiencia global",
            text: "Atendemos clientes en múltiples países."
          },
          {
            title: "Enfoque innovador",
            text: "Investigación continua para soluciones de salud avanzadas."
          },
          {
            title: "Clientes primero",
            text: "Garantizamos transparencia y asociaciones a largo plazo."
          }
        ],

        partnerTitle: "Asóciate con Ivexia",
        partnerSubtitle:
          "Únete a nosotros para construir un futuro saludable e innovador.",
        getInTouchBtn: "Ponerse en contacto",

        faqTitle: "Preguntas frecuentes",
        faq: [
          {
            q: "¿Ivexia está certificada?",
            a: "Sí, nuestras instalaciones siguen estándares GMP."
          },
          {
            q: "¿Exportan internacionalmente?",
            a: "Sí, exportamos a varios países."
          },
          {
            q: "¿Puedo colaborar con Ivexia?",
            a: "Sí, aceptamos alianzas globales."
          }
        ],

        readyTalkTitle: "¿Listo para hablar?",
        readyTalkSubtitle:
          "Nuestro equipo está listo para ayudarte con consultas y asociaciones.",
        requestConsultationBtn: "Solicitar consulta",
        callUsText: "Llámanos"
      }
    }
  },

  /* ---------- FRENCH ---------- */
  fr: {
    translation: {
      navbar: {
        home: "Accueil",
        products: "Produits",
        about: "À propos",
        blog: "Blog",
        contact: "Contact",
        login: "Connexion",
        search: "Rechercher",
        searchPlaceholder: "Rechercher des médicaments…"
      },
      orders: {
        title: "Vos commandes",
        empty_title: "Aucune commande",
        empty_text: "Vous n'avez passé aucune commande.",
        back_home: "Retour à l'accueil",
        items: "articles",
        view_details: "Voir les détails",
        id: "ID de commande"
      },
      contact: {
  heroTitle: "Entrer en contact",
  heroTag: "Contacter Ivexia Pharma",
  heroHeading: "Nous sommes là pour vous aider",
  heroSubtitle: "Contactez-nous pour des demandes de produits, des partenariats, un support réglementaire ou des opportunités de distribution.",

  requestQuoteBtn: "Demander un devis",
  emailLabel: "support@ivexiapharma.com",

  chipRDTitle: "Forte R&D",
  chipRDText: "Recherche et développement pharmaceutiques innovants.",

  chipClinicalTitle: "Support clinique",
  chipClinicalText: "Assistance pour les besoins thérapeutiques et cliniques.",

  chipMfgTitle: "Fabrication GMP",
  chipMfgText: "Normes mondiales de fabrication premium.",

  quickContact: "Contact rapide",
  quickContactSubtitle: "Contactez immédiatement notre équipe.",

  phone: "Téléphone",
  email: "E-mail",
  messageUsBtn: "Envoyer un message",

  formRequestTitle: "Envoyez-nous un message",
  formRequestSubtitle: "Notre équipe vous répondra sous 24 heures.",
  fullName: "Nom complet",
  fullNamePlaceholder: "Entrez votre nom",
  emailField: "Adresse e-mail",
  emailPlaceholder: "Entrez votre e-mail",
  phoneField: "Numéro de téléphone",
  phonePlaceholder: "Entrez votre numéro (facultatif)",
  subjectField: "Sujet",
  subjectPlaceholder: "Entrez le sujet",
  messageField: "Message",
  messagePlaceholder: "Écrivez votre message...",
  sendMessageBtn: "Envoyer le message",
  resetBtn: "Réinitialiser",
  weReply: "Nous répondons généralement en 24 heures",
  priority: "Haute priorité",

  formError: "Veuillez remplir les champs obligatoires.",
  formSending: "Envoi du message...",
  formSuccess: "Votre message a été envoyé avec succès !",

  officeTitle: "Notre localisation",

  contactOptionsTitle: "Options de contact",
  office: "Bureau",
  officeLocation: "Navi Mumbai, Maharashtra, Inde",

  faqTitle: "Questions fréquentes",
  faq1Q: "Combien de temps pour obtenir une réponse ?",
  faq1A: "Nous répondons généralement dans les 24 heures.",
  faq2Q: "Proposez-vous des partenariats internationaux ?",
  faq2A: "Oui, nous collaborons avec des partenaires mondiaux.",

  urgentNotice: "Pour toute urgence médicale, contactez un service de santé local.",

  ctaTitle: "Vous recherchez un partenaire pharmaceutique fiable ?",
  ctaSubtitle: "Contactez-nous pour des médicaments premium et des solutions d’exportation.",
  ctaBtn: "Nous contacter"
}

      ,
      success: {
        title: "Commande réussie !",
        text: "Merci ! Votre commande a été enregistrée avec succès.",
        back_home: "Retour à l'accueil",
        view_orders: "Voir les commandes"
      },
      admin: {
        title: "Commandes Admin",
        id: "ID de commande",
        date: "Date de commande",
        items: "Articles",
        total: "Montant total",
        status: "Statut",
        view: "Voir la commande"
      },

      /* ------------ ABOUT (FR) ------------ */
      about: {
        heroTitle: "À propos d'Ivexia Pharmaceuticals",
        heroSubtitle:
          "Construire un avenir mondial basé sur des solutions de santé innovantes, sûres et accessibles.",
        missionBtn: "Notre mission",
        contactBtn: "Contactez-nous",

        whoWeAreTitle: "Qui sommes-nous",
        whoWeAreText:
          "Ivexia Pharmaceuticals est une entreprise de santé axée sur l'innovation, offrant des formulations de haute qualité aux marchés mondiaux. Nous combinons excellence scientifique et fabrication de pointe pour créer des médicaments sûrs et fiables.",

        yearsExperience: "10+ ans",
        yearsExperienceSub: "Expertise du secteur",
        strongRD: "R&D forte",
        strongRDSub: "Recherche avancée",
        gmpUnits: "Sites GMP",
        gmpUnitsSub: "Production certifiée",

        trustedBy: "Fiable par",
        trustedNumber: "500+",
        partnersClients: "Partenaires et clients",

        leadershipTitle: "Notre leadership",
        leadershipSubtitle:
          "Une équipe visionnaire guidant Ivexia vers l'innovation et le progrès médical mondial.",

        journeyTitle: "Notre parcours",
        journeySubtitle: "Une chronologie de croissance, d'innovation et d'expansion mondiale.",
        journeyItems: [
          {
            year: "2015",
            title: "Fondée en Inde",
            text: "Ivexia a été créée avec un engagement envers la qualité et l'innovation."
          },
          {
            year: "2018",
            title: "Expansion de la R&D",
            text: "Nous avons élargi notre capacité de recherche avec des technologies modernes."
          },
          {
            year: "2021",
            title: "Expansion mondiale",
            text: "Nous avons pénétré des marchés internationaux avec des produits réglementés."
          },
          {
            year: "2024",
            title: "Modernisation de la production",
            text: "Mise à niveau de nos installations avec des systèmes conformes GMP."
          }
        ],

        whyChooseTitle: "Pourquoi choisir Ivexia ?",
        whyChoose: [
          {
            title: "Qualité premium",
            text: "Toutes les formulations respectent des normes de qualité strictes."
          },
          {
            title: "Expertise mondiale",
            text: "Nous servons des clients dans plusieurs pays."
          },
          {
            title: "Innovation continue",
            text: "Recherche constante pour des solutions de santé modernes."
          },
          {
            title: "Client d'abord",
            text: "Nous privilégions la transparence et les partenariats durables."
          }
        ],

        partnerTitle: "Devenez partenaire",
        partnerSubtitle:
          "Ensemble, construisons un avenir plus sain et plus innovant.",
        getInTouchBtn: "Contactez-nous",

        faqTitle: "FAQ",
        faq: [
          {
            q: "Ivexia est-elle certifiée ?",
            a: "Oui, nos installations respectent les normes GMP."
          },
          {
            q: "Exportez-vous à l'international ?",
            a: "Oui, nous exportons dans plusieurs pays."
          },
          {
            q: "Puis-je collaborer avec Ivexia ?",
            a: "Oui, nous accueillons les partenariats internationaux."
          }
        ],

        readyTalkTitle: "Prêt à discuter ?",
        readyTalkSubtitle:
          "Notre équipe est prête à vous aider pour toute demande ou partenariat.",
        requestConsultationBtn: "Demander une consultation",
        callUsText: "Appelez-nous"
      }
    }
  },

  /* ---------- JAPANESE ---------- */
  ja: {
    translation: {
      navbar: {
        home: "ホーム",
        products: "製品",
        about: "会社概要",
        blog: "ブログ",
        contact: "お問い合わせ",
        login: "ログイン",
        search: "検索",
        searchPlaceholder: "薬を検索…"
      },
      contact: {
  heroTitle: "お問い合わせ",
  heroTag: "Ivexia Pharma へのお問い合わせ",
  heroHeading: "私たちはいつでもお手伝いします",
  heroSubtitle: "製品に関する質問、ビジネス提携、規制サポート、または流通に関するお問い合わせはお気軽にご連絡ください。",

  requestQuoteBtn: "見積もりを依頼",
  emailLabel: "support@ivexiapharma.com",

  chipRDTitle: "強力な研究開発",
  chipRDText: "革新的な製薬研究と開発。",

  chipClinicalTitle: "臨床サポート",
  chipClinicalText: "治療・臨床に関する専門的なサポート。",

  chipMfgTitle: "GMP 製造",
  chipMfgText: "世界基準に準拠した高品質製造。",

  quickContact: "クイックコンタクト",
  quickContactSubtitle: "すぐにサポートが必要な方はこちらからご連絡ください。",

  phone: "電話",
  email: "メール",
  messageUsBtn: "メッセージを送信",

  formRequestTitle: "メッセージを送信",
  formRequestSubtitle: "通常24時間以内にご返信いたします。",
  fullName: "氏名",
  fullNamePlaceholder: "お名前を入力してください",
  emailField: "メールアドレス",
  emailPlaceholder: "メールアドレスを入力してください",
  phoneField: "電話番号",
  phonePlaceholder: "電話番号を入力（任意）",
  subjectField: "件名",
  subjectPlaceholder: "件名を入力してください",
  messageField: "メッセージ",
  messagePlaceholder: "メッセージを入力してください…",
  sendMessageBtn: "送信",
  resetBtn: "リセット",
  weReply: "通常24時間以内に返信します",
  priority: "高優先度",

  formError: "必須項目を入力してください。",
  formSending: "メッセージを送信しています…",
  formSuccess: "メッセージが正常に送信されました！",

  officeTitle: "オフィス所在地",

  contactOptionsTitle: "お問い合わせ方法",
  office: "オフィス",
  officeLocation: "インド、マハラシュトラ州ナビムンバイ",

  faqTitle: "よくある質問",
  faq1Q: "返信までどれくらい時間がかかりますか？",
  faq1A: "通常24時間以内に返信いたします。",
  faq2Q: "国際的なパートナーシップは可能ですか？",
  faq2A: "はい、世界中のディストリビューターやパートナーと協力しています。",

  urgentNotice: "緊急の医療または安全に関する問題は、地域の医療機関にご連絡ください。",

  ctaTitle: "信頼できる製薬パートナーをお探しですか？",
  ctaSubtitle: "高品質の医薬品とグローバル輸出ソリューションについて今すぐご相談ください。",
  ctaBtn: "お問い合わせ"
}

      ,
      orders: {
        title: "ご注文",
        empty_title: "注文なし",
        empty_text: "まだ注文はありません。",
        back_home: "ホームに戻る",
        items: "商品",
        view_details: "詳細を見る",
        id: "注文ID"
      },
      success: {
        title: "注文が完了しました！",
        text: "ありがとうございます。ご注文は正常に登録されました。",
        back_home: "ホームに戻る",
        view_orders: "注文を見る"
      },
      admin: {
        title: "管理者注文",
        id: "注文ID",
        date: "注文日",
        items: "商品数",
        total: "合計金額",
        status: "ステータス",
        view: "注文を見る"
      },

      /* ------------ ABOUT (JA) ------------ */
      about: {
        heroTitle: "Ivexia Pharmaceuticalsについて",
        heroSubtitle:
          "革新的で高品質、そして手頃な医療ソリューションで世界の未来を築きます。",
        missionBtn: "私たちの使命",
        contactBtn: "お問い合わせ",

        whoWeAreTitle: "会社概要",
        whoWeAreText:
          "Ivexia Pharmaceuticalsは、革新を原動力とした医療企業であり、世界市場に高品質の製剤を提供しています。科学的卓越性と最新の製造技術を組み合わせ、安全で信頼性の高い医薬品を生み出しています。",

        yearsExperience: "10年以上",
        yearsExperienceSub: "業界経験",
        strongRD: "強力な研究開発",
        strongRDSub: "高度な研究",
        gmpUnits: "GMP設備",
        gmpUnitsSub: "認定製造",

        trustedBy: "信頼されているパートナー",
        trustedNumber: "500+",
        partnersClients: "パートナー & クライアント",

        leadershipTitle: "リーダーシップ",
        leadershipSubtitle:
          "世界的な医療イノベーションの最前線でIvexiaを導くビジョナリーチーム。",

        journeyTitle: "歩み",
        journeySubtitle: "成長・革新・世界進出のタイムライン。",
        journeyItems: [
          {
            year: "2015",
            title: "インドで設立",
            text: "品質と革新を使命としてIvexiaは設立されました。"
          },
          {
            year: "2018",
            title: "研究開発の拡大",
            text: "最新技術を導入し、研究能力を強化しました。"
          },
          {
            year: "2021",
            title: "世界市場への進出",
            text: "規制市場向け製品で国際市場に参入。"
          },
          {
            year: "2024",
            title: "GMP生産設備の強化",
            text: "最新のGMP準拠設備を導入し、生産体制を強化しました。"
          }
        ],

        whyChooseTitle: "Ivexiaを選ぶ理由",
        whyChoose: [
          {
            title: "高い品質基準",
            text: "すべての製剤が世界基準の品質検査をクリア。"
          },
          {
            title: "国際的な専門性",
            text: "複数の国で信頼されるパートナーとして活動。"
          },
          {
            title: "革新的アプローチ",
            text: "次世代医療に向けた研究開発を継続。"
          },
          {
            title: "顧客第一主義",
            text: "透明性と信頼に基づく長期的なパートナーシップを構築。"
          }
        ],

        partnerTitle: "Ivexiaと提携する",
        partnerSubtitle:
          "科学主導のソリューションで、より健康で高度な未来を共に築きましょう。",
        getInTouchBtn: "お問い合わせ",

        faqTitle: "よくある質問",
        faq: [
          {
            q: "Ivexiaは認定企業ですか？",
            a: "はい、当社の生産施設はGMP基準に準拠しています。"
          },
          {
            q: "海外輸出は可能ですか？",
            a: "はい、複数の国へ輸出しています。"
          },
          {
            q: "提携できますか？",
            a: "もちろんです。世界中の企業との提携を歓迎します。"
          }
        ],

        readyTalkTitle: "ご相談はお気軽に",
        readyTalkSubtitle:
          "パートナーシップや製品に関するご相談を承ります。",
        requestConsultationBtn: "相談を申し込む",
        callUsText: "電話する"
      }
    }
  },

  /* ---------- DUTCH ---------- */
  nl: {
    translation: {
      navbar: {
        home: "Home",
        products: "Producten",
        about: "Over ons",
        blog: "Blog",
        contact: "Contact",
        login: "Inloggen",
        search: "Zoeken",
        searchPlaceholder: "Zoek medicijnen…"
      },
      contact: {
  heroTitle: "Neem contact op",
  heroTag: "Neem contact op met Ivexia Pharma",
  heroHeading: "Wij staan klaar om te helpen",
  heroSubtitle: "Neem contact met ons op voor productinformatie, samenwerkingen, regelgeving of distributie.",

  requestQuoteBtn: "Offerte aanvragen",
  emailLabel: "support@ivexiapharma.com",

  chipRDTitle: "Sterk R&D",
  chipRDText: "Innovatief farmaceutisch onderzoek en ontwikkeling.",

  chipClinicalTitle: "Klinische ondersteuning",
  chipClinicalText: "Ondersteuning bij therapeutische en klinische behoeften.",

  chipMfgTitle: "GMP-productie",
  chipMfgText: "Productie volgens internationale premiumstandaarden.",

  quickContact: "Snelle contact",
  quickContactSubtitle: "Neem direct contact op met ons team.",

  phone: "Telefoon",
  email: "E-mail",
  messageUsBtn: "Bericht sturen",

  formRequestTitle: "Stuur ons een bericht",
  formRequestSubtitle: "We reageren meestal binnen 24 uur.",
  fullName: "Volledige naam",
  fullNamePlaceholder: "Voer uw naam in",
  emailField: "E-mailadres",
  emailPlaceholder: "Voer uw e-mail in",
  phoneField: "Telefoonnummer",
  phonePlaceholder: "Telefoonnummer (optioneel)",
  subjectField: "Onderwerp",
  subjectPlaceholder: "Voer onderwerp in",
  messageField: "Bericht",
  messagePlaceholder: "Typ uw bericht...",
  sendMessageBtn: "Bericht verzenden",
  resetBtn: "Resetten",
  weReply: "We antwoorden meestal binnen 24 uur",
  priority: "Hoge prioriteit",

  formError: "Vul alle verplichte velden in.",
  formSending: "Bericht wordt verzonden...",
  formSuccess: "Bericht succesvol verzonden!",

  officeTitle: "Onze kantoorlocatie",

  contactOptionsTitle: "Contactopties",
  office: "Kantoor",
  officeLocation: "Navi Mumbai, Maharashtra, India",

  faqTitle: "Veelgestelde vragen",
  faq1Q: "Hoe lang duurt een reactie?",
  faq1A: "We reageren binnen 24 uur.",
  faq2Q: "Bieden jullie internationale partnerschappen?",
  faq2A: "Ja, we werken samen met wereldwijde distributeurs en partners.",

  urgentNotice: "Neem bij medische noodsituaties contact op met lokale zorgverleners.",

  ctaTitle: "Op zoek naar een betrouwbare farmaceutische partner?",
  ctaSubtitle: "Neem contact op voor premium medicijnen en wereldwijde exportoplossingen.",
  ctaBtn: "Contact opnemen"
}
,
      orders: {
        title: "Uw bestellingen",
        empty_title: "Geen bestellingen",
        empty_text: "U heeft nog geen bestellingen geplaatst.",
        back_home: "Terug naar home",
        items: "items",
        view_details: "Details bekijken",
        id: "Bestel ID"
      },
      success: {
        title: "Bestelling geslaagd!",
        text: "Bedankt! Uw bestelling is succesvol geregistreerd.",
        back_home: "Terug naar home",
        view_orders: "Bestellingen bekijken"
      },
      admin: {
        title: "Beheerder Bestellingen",
        id: "Bestel ID",
        date: "Besteldatum",
        items: "Artikelen",
        total: "Totaalbedrag",
        status: "Status",
        view: "Bestelling bekijken"
      },

      /* ------------ ABOUT (NL) ------------ */
      about: {
        heroTitle: "Over Ivexia Pharmaceuticals",
        heroSubtitle:
          "Wij bouwen aan een wereldwijde toekomst met innovatieve, hoogwaardige en betaalbare gezondheidsoplossingen.",
        missionBtn: "Onze missie",
        contactBtn: "Contact opnemen",

        whoWeAreTitle: "Wie wij zijn",
        whoWeAreText:
          "Ivexia Pharmaceuticals is een innovatief gezondheidsbedrijf dat hoogwaardige formuleringen levert aan wereldwijde markten. We combineren wetenschappelijke excellentie met geavanceerde productie om veilige en betrouwbare medicijnen te creëren.",

        yearsExperience: "10+ jaar",
        yearsExperienceSub: "Sectorervaring",
        strongRD: "Sterk R&D",
        strongRDSub: "Geavanceerd onderzoek",
        gmpUnits: "GMP-faciliteiten",
        gmpUnitsSub: "Gecertificeerde productie",

        trustedBy: "Vertrouwd door",
        trustedNumber: "500+",
        partnersClients: "Partners & klanten",

        leadershipTitle: "Ons leiderschap",
        leadershipSubtitle:
          "Een visionair team dat Ivexia leidt naar wereldwijde innovatie in de gezondheidszorg.",

        journeyTitle: "Onze reis",
        journeySubtitle: "Een tijdlijn van groei, innovatie en wereldwijde uitbreiding.",
        journeyItems: [
          {
            year: "2015",
            title: "Opgericht in India",
            text: "Ivexia werd opgericht met een sterke focus op kwaliteit en innovatie."
          },
          {
            year: "2018",
            title: "Uitbreiding R&D",
            text: "We hebben onze onderzoekscapaciteit uitgebreid met moderne technologieën."
          },
          {
            year: "2021",
            title: "Internationale expansie",
            text: "We betreden internationale markten met gereguleerde producten."
          },
          {
            year: "2024",
            title: "GMP-infrastructuurupdate",
            text: "Modernisering van onze productie-infrastructuur volgens GMP-normen."
          }
        ],

        whyChooseTitle: "Waarom Ivexia?",
        whyChoose: [
          {
            title: "Topkwaliteit",
            text: "Alle formuleringen voldoen aan strenge wereldwijde kwaliteitsnormen."
          },
          {
            title: "Wereldwijde expertise",
            text: "Wij bedienen klanten in meerdere landen."
          },
          {
            title: "Innovatiegericht",
            text: "Continue ontwikkeling van moderne gezondheidsoplossingen."
          },
          {
            title: "Klantgericht",
            text: "Wij geloven in transparantie en langdurige partnerschappen."
          }
        ],

        partnerTitle: "Samenwerken met Ivexia",
        partnerSubtitle:
          "Samen bouwen we aan een gezondere en vooruitstrevende toekomst.",
        getInTouchBtn: "Neem contact op",

        faqTitle: "Veelgestelde vragen",
        faq: [
          {
            q: "Is Ivexia gecertificeerd?",
            a: "Ja, onze faciliteiten voldoen aan GMP- en kwaliteitsnormen."
          },
          {
            q: "Leveren jullie internationaal?",
            a: "Ja, we exporteren naar verschillende landen."
          },
          {
            q: "Kan ik samenwerken met Ivexia?",
            a: "Ja, we staan open voor internationale partnerschappen."
          }
        ],

        readyTalkTitle: "Klaar om te praten?",
        readyTalkSubtitle:
          "Ons team staat klaar om te helpen bij partnerschappen en productinformatie.",
        requestConsultationBtn: "Consult aanvragen",
        callUsText: "Bel ons"
      }
    }
  },

  /* ---------- PORTUGUESE ---------- */
  pt: {
    translation: {
      navbar: {
        home: "Início",
        products: "Produtos",
        about: "Sobre nós",
        blog: "Blog",
        contact: "Contato",
        login: "Entrar",
        search: "Pesquisar",
        searchPlaceholder: "Pesquisar medicamentos…"
      },
      contact: {
  heroTitle: "Entre em contato",
  heroTag: "Fale com a Ivexia Pharma",
  heroHeading: "Estamos aqui para ajudar",
  heroSubtitle: "Entre em contato para dúvidas sobre produtos, parcerias, suporte regulatório ou distribuição.",

  requestQuoteBtn: "Solicitar orçamento",
  emailLabel: "support@ivexiapharma.com",

  chipRDTitle: "P&D Forte",
  chipRDText: "Pesquisa e desenvolvimento farmacêutico inovador.",

  chipClinicalTitle: "Suporte clínico",
  chipClinicalText: "Apoio em necessidades terapêuticas e clínicas.",

  chipMfgTitle: "Fabricação GMP",
  chipMfgText: "Padrões premium de fabricação global.",

  quickContact: "Contato rápido",
  quickContactSubtitle: "Fale imediatamente com nossa equipe.",

  phone: "Telefone",
  email: "E-mail",
  messageUsBtn: "Enviar mensagem",

  formRequestTitle: "Envie uma mensagem",
  formRequestSubtitle: "Respondemos geralmente em até 24 horas.",
  fullName: "Nome completo",
  fullNamePlaceholder: "Digite seu nome",
  emailField: "E-mail",
  emailPlaceholder: "Digite seu e-mail",
  phoneField: "Telefone",
  phonePlaceholder: "Digite seu telefone (opcional)",
  subjectField: "Assunto",
  subjectPlaceholder: "Digite o assunto",
  messageField: "Mensagem",
  messagePlaceholder: "Digite sua mensagem...",
  sendMessageBtn: "Enviar mensagem",
  resetBtn: "Limpar",
  weReply: "Normalmente respondemos em 24 horas",
  priority: "Alta prioridade",

  formError: "Preencha os campos obrigatórios.",
  formSending: "Enviando sua mensagem...",
  formSuccess: "Sua mensagem foi enviada com sucesso!",

  officeTitle: "Localização do escritório",

  contactOptionsTitle: "Opções de contato",
  office: "Escritório",
  officeLocation: "Navi Mumbai, Maharashtra, Índia",

  faqTitle: "Perguntas frequentes",
  faq1Q: "Quanto tempo para responder?",
  faq1A: "Normalmente respondemos dentro de 24 horas.",
  faq2Q: "Vocês fazem parcerias internacionais?",
  faq2A: "Sim, trabalhamos com parceiros e distribuidores globais.",

  urgentNotice: "Para emergências médicas, consulte um profissional local.",

  ctaTitle: "Procurando um parceiro farmacêutico confiável?",
  ctaSubtitle: "Fale conosco para medicamentos premium e soluções globais.",
  ctaBtn: "Entre em contato"
}
,
      orders: {
        title: "Seus pedidos",
        empty_title: "Nenhum pedido",
        empty_text: "Você ainda não fez nenhum pedido.",
        back_home: "Voltar para início",
        items: "itens",
        view_details: "Ver detalhes",
        id: "ID do pedido"
      },
      success: {
        title: "Pedido realizado com sucesso!",
        text: "Obrigado! Seu pedido foi registrado com sucesso.",
        back_home: "Voltar para início",
        view_orders: "Ver pedidos"
      },
      admin: {
        title: "Pedidos do Administrador",
        id: "ID do Pedido",
        date: "Data do Pedido",
        items: "Itens",
        total: "Valor Total",
        status: "Status",
        view: "Ver Pedido"
      },

      /* ------------ ABOUT (PT) ------------ */
      about: {
        heroTitle: "Sobre a Ivexia Pharmaceuticals",
        heroSubtitle:
          "Construindo um futuro global com soluções de saúde inovadoras, seguras e acessíveis.",
        missionBtn: "Nossa missão",
        contactBtn: "Fale conosco",

        whoWeAreTitle: "Quem somos",
        whoWeAreText:
          "A Ivexia Pharmaceuticals é uma empresa de saúde movida pela inovação, oferecendo formulações de alta qualidade para mercados globais. Combinamos excelência científica com fabricação avançada para criar medicamentos seguros e eficazes.",

        yearsExperience: "10+ anos",
        yearsExperienceSub: "Experiência no setor",
        strongRD: "Pesquisa e Desenvolvimento forte",
        strongRDSub: "Pesquisa avançada",
        gmpUnits: "Unidades GMP",
        gmpUnitsSub: "Produção certificada",

        trustedBy: "Confiada por",
        trustedNumber: "500+",
        partnersClients: "Parceiros e clientes",

        leadershipTitle: "Nossa liderança",
        leadershipSubtitle:
          "Uma equipe visionária liderando a Ivexia rumo à inovação e excelência global em saúde.",

        journeyTitle: "Nossa jornada",
        journeySubtitle: "Uma linha do tempo de crescimento, inovação e expansão mundial.",
        journeyItems: [
          {
            year: "2015",
            title: "Fundada na Índia",
            text: "Ivexia foi fundada com foco em qualidade e inovação."
          },
          {
            year: "2018",
            title: "Expansão de P&D",
            text: "Ampliamos nossas capacidades de pesquisa com tecnologias modernas."
          },
          {
            year: "2021",
            title: "Expansão global",
            text: "Entramos em mercados internacionais com produtos regulamentados."
          },
          {
            year: "2024",
            title: "Atualização da infraestrutura GMP",
            text: "Modernizamos nossas instalações conforme padrões GMP."
          }
        ],

        whyChooseTitle: "Por que escolher a Ivexia?",
        whyChoose: [
          {
            title: "Qualidade Premium",
            text: "Todas as formulações passam por rigorosos padrões globais."
          },
          {
            title: "Expertise Global",
            text: "Atendemos clientes em diversos países."
          },
          {
            title: "Inovação Contínua",
            text: "Desenvolvimento constante de soluções modernas."
          },
          {
            title: "Foco no Cliente",
            text: "Baseamos parcerias em confiança e transparência."
          }
        ],

        partnerTitle: "Seja nosso parceiro",
        partnerSubtitle:
          "Junte-se a nós para construir um futuro mais saudável e inovador.",
        getInTouchBtn: "Entre em contato",

        faqTitle: "Perguntas frequentes",
        faq: [
          {
            q: "A Ivexia é certificada?",
            a: "Sim, nossas instalações seguem as normas GMP."
          },
          {
            q: "Vocês exportam internacionalmente?",
            a: "Sim, exportamos para vários países."
          },
          {
            q: "Posso colaborar com a Ivexia?",
            a: "Sim, parcerias globais são bem-vindas."
          }
        ],

        readyTalkTitle: "Pronto para conversar?",
        readyTalkSubtitle:
          "Nossa equipe está pronta para ajudar em parcerias e informações.",
        requestConsultationBtn: "Solicitar consulta",
        callUsText: "Ligar"
      }
    }
  },

  /* ---------- CHINESE ---------- */
  zh: {
    translation: {
      navbar: {
        home: "首页",
        products: "产品",
        about: "关于我们",
        blog: "博客",
        contact: "联系我们",
        login: "登录",
        search: "搜索",
        searchPlaceholder: "搜索药品…"
      },
      contact: {
  heroTitle: "联系我们",
  heroTag: "联系 Ivexia Pharma",
  heroHeading: "我们随时为您提供帮助",
  heroSubtitle: "如需产品咨询、商业合作、法规支持或分销机会，请联系我们。",

  requestQuoteBtn: "获取报价",
  emailLabel: "support@ivexiapharma.com",

  chipRDTitle: "强大的研发能力",
  chipRDText: "创新型制药研发。",

  chipClinicalTitle: "临床支持",
  chipClinicalText: "提供专业的治疗和临床协助。",

  chipMfgTitle: "GMP 制造",
  chipMfgText: "符合全球标准的制药级制造。",

  quickContact: "快速联系",
  quickContactSubtitle: "立即与我们的团队取得联系。",

  phone: "电话",
  email: "邮箱",
  messageUsBtn: "发送消息",

  formRequestTitle: "发送消息",
  formRequestSubtitle: "我们通常会在 24 小时内回复您。",
  fullName: "姓名",
  fullNamePlaceholder: "请输入您的姓名",
  emailField: "电子邮箱",
  emailPlaceholder: "请输入您的邮箱",
  phoneField: "电话号码",
  phonePlaceholder: "请输入您的电话（可选）",
  subjectField: "主题",
  subjectPlaceholder: "请输入主题",
  messageField: "留言",
  messagePlaceholder: "请输入您的留言…",
  sendMessageBtn: "发送消息",
  resetBtn: "重置",
  weReply: "通常在 24 小时内回复",
  priority: "高优先级",

  formError: "请填写所有必填字段。",
  formSending: "正在发送消息...",
  formSuccess: "您的消息已成功发送！",

  officeTitle: "我们的办公地点",

  contactOptionsTitle: "联系方式",
  office: "办公室",
  officeLocation: "印度马哈拉施特拉邦新孟买",

  faqTitle: "常见问题",
  faq1Q: "多久能收到回复？",
  faq1A: "我们通常在 24 小时内回复。",
  faq2Q: "是否支持国际合作？",
  faq2A: "是的，我们与全球合作伙伴长期合作。",

  urgentNotice: "如遇紧急医疗情况，请立即联系当地医疗机构。",

  ctaTitle: "正在寻找可靠的制药合作伙伴？",
  ctaSubtitle: "联系我们，获取高质量药品与全球出口解决方案。",
  ctaBtn: "立即联系"
}
,
      orders: {
        title: "您的订单",
        empty_title: "暂无订单",
        empty_text: "您还没有下过任何订单。",
        back_home: "返回首页",
        items: "件商品",
        view_details: "查看详情",
        id: "订单号"
      },
      success: {
        title: "订单提交成功！",
        text: "感谢您！订单已成功记录。",
        back_home: "返回首页",
        view_orders: "查看订单"
      },
      admin: {
        title: "管理员订单",
        id: "订单号",
        date: "下单日期",
        items: "商品数量",
        total: "总金额",
        status: "状态",
        view: "查看订单"
      },

      /* ------------ ABOUT (ZH) ------------ */
      about: {
        heroTitle: "关于 Ivexia Pharmaceuticals",
        heroSubtitle:
          "致力于打造全球创新、高质量且可负担的医疗健康未来。",
        missionBtn: "我们的使命",
        contactBtn: "联系我们",

        whoWeAreTitle: "我们是谁",
        whoWeAreText:
          "Ivexia Pharmaceuticals 是一家以创新为驱动力的医疗企业，向全球市场提供高质量的药品配方。我们将科学卓越与先进制造相结合，生产安全、有效且值得信赖的药品。",

        yearsExperience: "10+ 年",
        yearsExperienceSub: "行业经验",
        strongRD: "强大的研发能力",
        strongRDSub: "先进研究",
        gmpUnits: "GMP 工厂",
        gmpUnitsSub: "认证生产",

        trustedBy: "受信赖于",
        trustedNumber: "500+",
        partnersClients: "合作伙伴与客户",

        leadershipTitle: "管理团队",
        leadershipSubtitle:
          "一个具有远见卓识的团队，引领 Ivexia 迈向全球创新与医疗进步。",

        journeyTitle: "我们的历程",
        journeySubtitle: "展示增长、创新与全球扩张的时间轴。",
        journeyItems: [
          {
            year: "2015",
            title: "在印度成立",
            text: "Ivexia 以品质与创新为使命创立。"
          },
          {
            year: "2018",
            title: "研发扩张",
            text: "引入现代技术并扩展研发能力。"
          },
          {
            year: "2021",
            title: "全球市场布局",
            text: "凭借规范化产品进入国际市场。"
          },
          {
            year: "2024",
            title: "GMP 升级生产设施",
            text: "根据 GMP 标准现代化生产体系。"
          }
        ],

        whyChooseTitle: "为什么选择 Ivexia？",
        whyChoose: [
          {
            title: "高品质保证",
            text: "所有药品均通过严格的全球质量检测。"
          },
          {
            title: "全球专业经验",
            text: "客户遍布多个国家。"
          },
          {
            title: "持续创新",
            text: "不断开发下一代医疗解决方案。"
          },
          {
            title: "客户至上",
            text: "以透明和长期合作为基础建立伙伴关系。"
          }
        ],

        partnerTitle: "与 Ivexia 合作",
        partnerSubtitle:
          "携手打造更健康、更先进的未来。",
        getInTouchBtn: "联系我们",

        faqTitle: "常见问题",
        faq: [
          {
            q: "Ivexia 是否通过认证？",
            a: "是的，我们的生产工厂符合 GMP 与全球质量标准。"
          },
          {
            q: "是否支持国际出口？",
            a: "是的，我们出口至多个国家。"
          },
          {
            q: "可以与 Ivexia 合作吗？",
            a: "当然，我们欢迎全球合作与伙伴关系。"
          }
        ],

        readyTalkTitle: "准备好咨询了吗？",
        readyTalkSubtitle:
          "我们的专家随时准备协助合作或产品咨询。",
        requestConsultationBtn: "预约咨询",
        callUsText: "联系我们"
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
