
import { Content, Language } from './types';

export const CONTENT: Record<Language, Content> = {
  de: {
    nav: {
      home: "Startseite",
      services: "Leistungen",
      about: "Über uns",
      projects: "Portfolio",
      testimonials: "Referenzen",
      contact: "Kontakt",
      automation: "Workflows",
      getQuote: "Projekt anfragen",
    },
    hero: {
      title: "Digitale Exzellenz gestalten",
      subtitle: "Wir entwickeln praezise, skalierbare und performante digitale Loesungen, die exakt auf Ihre geschaeftlichen Ziele abgestimmt sind.",
      cta: "Jetzt anfragen",
      explore: "Portfolio entdecken",
      badge: "Ingenieurexzellenz",
    },
    strategy: {
      title: "Strategie für Ihren Projekterfolg",
      subtitle: "EFFIZIENTE PROZESSE",
      steps: [
        { title: "Bedarfsanalyse", desc: "Wir analysieren Ihre Anforderungen im Detail, um die optimale technologische Basis zu schaffen." },
        { title: "Konzeption", desc: "Entwurf einer klaren Architektur, die Funktionalitaet mit intuitiver Bedienbarkeit vereint." },
        { title: "PRAEZISE UMSETZUNG", desc: "Softwareentwicklung nach modernsten Standards fuer maximale Stabilitaet und Sicherheit." },
        { title: "Skalierung & Support", desc: "Nachhaltige Begleitung zur kontinuierlichen Optimierung und Erweiterung Ihrer Systeme." }
      ]
    },
    about: {
      title: "Praezision aus Erfahrung",
      subtitle: "Emad Hadid",
      description: "Aus Berlin entwickeln wir hochwertige digitale Loesungen mit einem klaren Fokus auf technischer Exzellenz. Wir transformieren komplexe Visionen in zuverlaessige Systeme, die Ihren Erfolg nachhaltig sichern.",
      stats: [
        { label: "Projekte", value: "150+" },
        { label: "Technologien", value: "20+" },
        { label: "Erfahrung", value: "10+" },
        { label: "Zufriedenheit", value: "100%" },
      ]
    },
    services: {
      title: "Dienstleistungen fuer die digitale Aera",
      subtitle: "Innovative Lösungen für technologische Exzellenz und digitale Transformation.",
      items: [
        { id: 'web', icon: 'web', title: "E-Commerce & Web", description: "Entwicklung leistungsstarker Web-Plattformen, die geschaeftlichen Nutzen mit exzellentem Design verbinden." },
        { id: 'software', icon: 'systems', title: "Individualsoftware", description: "Maßgeschneiderte Software-Architekturen zur Optimierung Ihrer Prozesse und Steigerung der Effizienz." },
        { id: 'ai', icon: 'ai', title: "KI-Integration", description: "Implementierung intelligenter Systeme zur Automatisierung und datengestützten Prozessoptimierung." },
        { id: 'design', icon: 'design', title: "UI/UX Design", description: "Entwicklung von Interfaces, die Ihre Marke staerken und eine erstklassige Benutzererfahrung bieten." },
        { id: 'performance', icon: 'performance', title: "Performance-Optimierung", description: "Effiziente Programmierung fuer minimale Ladezeiten und hoechste Stabilitaet unter Last." },
        { id: 'consulting', icon: 'consulting', title: "Technische Beratung", description: "Fundierte technische Expertise zur nachhaltigen Absicherung Ihrer digitalen Projekte." },
        { id: 'systems', icon: 'systems', title: "Cyber-Security", description: "Modernste Sicherheitsstandards zum umfassenden Schutz Ihrer Infrastruktur und sensiblen Daten." },
        { id: 'seo', icon: 'seo', title: "Sichtbarkeit & SEO", description: "Nachhaltige Strategien fuer eine optimale Praesenz in globalen Suchergebnissen." },
        { id: 'maintenance', icon: 'maintenance', title: "Wartung & Support", description: "Zuverlaessige Überwachung und kontinuierliche Pflege fuer die Langlebigkeit Ihrer Systeme." }
      ]
    },
    projects: {
      title: "Portfolio",
      subtitle: "Ein Einblick in Projekte, die durch Qualitaet und technisches Know-how ueberzeugen.",
      viewAll: "Alle Projekte",
      restricted: {
        title: "ZUGRIFF BESCHRÄNKT",
        description: "Unser privates Archiv ist exklusiv für unsere Kunden reserviert. Bitte geben Sie Ihren PIN-Code ein oder kontaktieren Sie uns für den Zugang.",
        btn: "Schließen",
        cancel: "ZUGRIFF ABBRECHEN",
        archiveLabel: "PRIVATES ARCHIV"
      },
      success: {
        title: "Verifizierung erfolgreich",
        description: "Eingeschränkter Zugriff"
      },
      items: [
        { 
          title: "Strategische Web-Architektur", 
          category: "Software Engineering", 
          description: "Konzeption und Realisierung skalierbarer Plattform-Loesungen unter Beruecksichtigung hoechster Performance- und Sicherheitsstandards.",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
          video: "https://assets.mixkit.co/videos/preview/mixkit-business-man-typing-on-his-laptop-computer-396-large.mp4"
        },
        { 
          title: "Enterprise Cloud-Lösungen", 
          category: "System-Architektur", 
          description: "Digitale Transformation komplexer Geschaeftsprozesse durch hochverfuegbare Infrastrukturen und automatisierte Workflows.",
          image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
          video: "https://assets.mixkit.co/videos/preview/mixkit-typing-on-a-illuminated-keyboard-811-large.mp4"
        },
        { 
          title: "KI & Data Intelligence", 
          category: "Künstliche Intelligenz", 
          description: "Entwicklung maßgeschneiderter Algorithmen zur effizienten Datennutzung und zur Unterstützung strategischer Entscheidungsprozesse.",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
          video: "https://assets.mixkit.co/videos/preview/mixkit-spinning-around-a-lighted-circuit-board-4340-large.mp4"
        },
        { 
          title: "Premium Brand Identity", 
          category: "Digital Design", 
          description: "Ganzheitliche Gestaltung digitaler Markenwelten, die technische Praezision mit einer exklusiven Nutzererfahrung verbinden.",
          image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
          video: "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-a-tablet-443-large.mp4"
        }
      ]
    },
    testimonials: {
      title: "Kundenreferenzen",
      subtitle: "Erfahrungen unserer Partner aus erfolgreichen gemeinsamen Projekten.",
      items: [
        { name: "Sarah Al-Mansour", role: "CEO, TechFlow", quote: "Die Praezision und Professionalitaet ist beeindruckend. Die Zusammenarbeit mit Emad Hadid war ein entscheidender Faktor fuer unseren Projekterfolg.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" },
        { name: "Khaled Al-Hashimi", role: "Innovation Director, Global Systems", quote: "Hoechste Qualitaet in der Ausfuehrung und absolute Termintreue. Die KI-Integration hat unsere operative Effizienz spuerbar gesteigert.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80" },
        { name: "Layla Al-Rashed", role: "Gruenderin, Visionary Lab", quote: "Eine aussergewoehnliche Faehigkeit, komplexe technische Anforderungen in intuitive und aesthetisch ansprechende Loesungen zu verwandeln.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80" },
        { name: "moonlight", role: "Partner", quote: "Herr Hadid verfuegt ueber ein gutes und umfassendes Fachwissen, das er auch bei schwierigen Aufgaben effektiv und erfolgreich einsetzte. Besonders hervorzuheben sind seine ausgepraegten Faehigkeiten, schnell richtige Loesungen zu finden. Herr Hadidi zeigte bei der Erfuellung seiner Aufgaben Engagement und Eigeninitiative. Auch bei sehr hohem Arbeitsanfall war er sehr belastbar.", image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=400&q=80" }
      ]
    },
    core: {
      title: "Technologie im Fokus",
      subtitle: "Unsere technologische Basis für Ihren langfristigen Erfolg.",
      features: [
        { id: "ai", title: "KI-Systeme", desc: "Intelligente Algorithmen, die Prozesse optimieren, Trends analysieren und Ihr Wachstum unterstützen.", icon: "Brain" },
        { id: "perf", title: "Maximale Performance", desc: "Hochleistungs-Architekturen, die für hohe Skalierbarkeit und minimale Latenz konzipiert sind.", icon: "Zap" },
        { id: "sec", title: "Umfassende Sicherheit", desc: "Fortschrittliche Sicherheitsstandards und Verschluesselung zum Schutz Ihrer geschaeftskritischen Daten.", icon: "Shield" },
        { id: "des", title: "Design & Funktion", desc: "Herausragende Designs, die Professionalitaet vermitteln und Ihre Marktposition staerken.", icon: "Crown" }
      ]
    },
    contact: {
      title: "Bereit fuer den naechsten Schritt?",
      subtitle: "Lassen Sie uns gemeinsam Ihre digitale Vision realisieren. Wir begleiten Sie von der ersten Idee bis zum fertigen Produkt.",
      form: { name: "Ihr Name", email: "E-Mail-Adresse", message: "Ihre Nachricht", submit: "Anfrage senden" },
      info: { address: "Britzer Damm 152, 12347 Berlin, Deutschland", email: "info@emadhadid.de", phone: "+4917656657466", region: "Berlin" }
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
      privacy: "Datenschutz",
      imprint: "Impressum",
      description: "Individuelle digitale Lösungen aus Berlin für höchste Ansprüche.",
      quickLinks: "Navigation",
      privacyTitle: "Datenschutzerklaerung",
      privacyContent: "Der Schutz Ihrer persoenlichen Daten hat fuer uns hoechste Prioritaet. Informationen werden ausschliesslich mit Ihrer ausdruecklichen Zustimmung verarbeitet.",
      imprintTitle: "Impressum",
      imprintContent: "Angaben gemaess § 5 TMG:\nEmad Hadid\nBritzer Damm 152\n12347 Berlin\nDeutschland\n\nKontakt:\nE-Mail: info@emadhadid.de\nTel: \u202A+49 176 56657466\u202C"
    },
    automation: {
      title: "Prozessautomatisierung",
      subtitle: "INTELLIGENTE WORKFLOWS",
      description: "Steigern Sie die Effizienz Ihres Unternehmens durch intelligente Automatisierung und moderne Softwarearchitekturen – individuell und skalierbar.",
      features: [
        { title: "Intelligente Workflows", desc: "Automatisierung komplexer Prozesse zur Steigerung der operativen Produktivitaet." },
        { title: "System-Integration", desc: "Nahtlose Vernetzung Ihrer IT-Infrastruktur für einen optimierten Datenfluss." },
        { title: "Echtzeit-Verarbeitung", desc: "Praezise Datenuebertragung zwischen Plattformen fuer maximale Aktualitaet." },
        { title: "Skalierbare Systeme", desc: "Robuste Architekturen, die flexibel mit Ihren Anforderungen wachsen." }
      ],
      cta: "Effizienz steigern"
    }
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      projects: "Portfolio",
      testimonials: "Reviews",
      contact: "Contact",
      automation: "Smart Systems",
      getQuote: "Start Project",
    },
    hero: {
      title: "Intelligent Digital Systems",
      subtitle: "We don't just build platforms; we construct digital monuments that reflect your prestige. By merging luxury architectural art with elite programming and AI, we define the standards of excellence for the global elite.",
      cta: "Start Now",
      explore: "Our Work",
      badge: "Engineering Excellence",
    },
    strategy: {
      title: "Digital Success Strategy",
      subtitle: "Our Methodology",
      steps: [
        { title: "Vision Analysis", desc: "We start by understanding your deep goals to align tech with ambition." },
        { title: "Creative Blueprint", desc: "Crafting digital paths that merge visual luxury with absolute ease of use." },
        { title: "Elite Programming", desc: "Building code with surgical precision to ensure lightning speed and security." },
        { title: "Launch & Growth", desc: "Continuous post-launch support to ensure your project stays at the top." }
      ]
    },
    about: {
      title: "A Legacy of Digital Excellence",
      subtitle: "Emad Hadid",
      description: "Based in Berlin, I program digital masterpieces with surgical precision and strategic dominance. We transform complex visions into seamless, elite experiences that define the future.",
      stats: [
        { label: "Digital Empires", value: "150+" },
        { label: "Sovereign Techs", value: "20+" },
        { label: "Decade of Mastery", value: "10+" },
        { label: "Absolute Loyalty", value: "100%" },
      ]
    },
    services: {
      title: "Sovereign Digital Solutions",
      subtitle: "An integrated ecosystem designed for global market dominance.",
      items: [
        { id: 'web', icon: 'web', title: "Luxury Platform Programming", description: "Developing ultra-performance platforms that merge programming power with royal aesthetics for an unforgettable presence." },
        { id: 'software', icon: 'systems', title: "Sovereign Software Engineering", description: "Developing custom, robust software solutions tailored precisely to your complex business requirements." },
        { id: 'ai', icon: 'ai', title: "Strategic AI Integration", description: "Deploying advanced AI systems to automate success and drive sovereign, data-driven decision making." },
        { id: 'design', icon: 'design', title: "Elite Identity Design", description: "Crafting digital interfaces that exude absolute luxury and establish your brand at the pinnacle of its industry." },
        { id: 'performance', icon: 'performance', title: "Imperial Performance", description: "Achieving lightning-fast response times that ensure technical superiority and undisputed global search dominance." },
        { id: 'consulting', icon: 'consulting', title: "Sovereign Consulting", description: "High-level technical guidance to secure your digital investments and future-proof your technological legacy." },
        { id: 'systems', icon: 'systems', title: "System Protection", description: "Advanced security solutions that protect your infrastructure and data, ensuring business continuity without interruption." },
        { id: 'seo', icon: 'seo', title: "Search Engine Hegemony", description: "Precision visibility strategies that place your name at the global forefront, attracting the elite of your target audience." },
        { id: 'maintenance', icon: 'maintenance', title: "Royal Support & Guard", description: "Continuous oversight and preventive maintenance ensuring the stability and constant evolution of your digital empire." }
      ]
    },
    projects: {
      title: "Monuments of Mastery",
      subtitle: "A showcase of technical hegemony and aesthetic perfection.",
      viewAll: "View All",
      restricted: {
        title: "RESTRICTED ACCESS",
        description: "Our private archive is exclusively reserved for our clients. Please enter your PIN or contact us for access.",
        btn: "Close",
        cancel: "CANCEL ACCESS",
        archiveLabel: "PRIVATE ARCHIVE"
      },
      success: {
        title: "Verification successful",
        description: "Limited Access"
      },
      items: [
        { 
          title: "Corporate Web Portal", 
          category: "Web Development", 
          description: "Design and implementation of a scalable web platform focusing on user experience and technical reliability.",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
          video: "https://assets.mixkit.co/videos/preview/mixkit-business-man-typing-on-his-laptop-computer-396-large.mp4"
        },
        { 
          title: "Cloud Infrastructure Systems", 
          category: "IT Infrastructure", 
          description: "Engineering of reliable cloud solutions to optimize business operations and digital workflows.",
          image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
          video: "https://assets.mixkit.co/videos/preview/mixkit-typing-on-a-illuminated-keyboard-811-large.mp4"
        },
        { 
          title: "AI Data Analysis", 
          category: "Data Science", 
          description: "Development of intelligent algorithms for automated processing and evaluation of corporate data.",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
          video: "https://assets.mixkit.co/videos/preview/mixkit-spinning-around-a-lighted-circuit-board-4340-large.mp4"
        },
        { 
          title: "Digital Brand Identity", 
          category: "Brand Design", 
          description: "Creation of a consistent digital presence that reflects corporate values and professional expertise.",
          image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
          video: "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-a-tablet-443-large.mp4"
        }
      ]
    },
    testimonials: {
      title: "Customer Reviews",
      subtitle: "Real experiences from clients we have worked with",
      items: [
        { name: "Sarah Al-Mansour", role: "CEO, TechFlow", quote: "The level of precision and professionalism in the work is excellent. The experience of working with Emad was very fruitful.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" },
        { name: "Khaled Al-Hashimi", role: "Innovation Director, Global Systems", quote: "Quality in delivery and commitment to deadlines. The integration of AI significantly helped improve our business efficiency.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80" },
        { name: "Layla Al-Rashed", role: "Founder, Visionary Lab", quote: "Excellent ability to simplify complex technical requirements and transform them into practical solutions with an attractive design.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80" },
        { name: "moonlight", role: "Partner", quote: "Mr. Hadid has sound and comprehensive specialist knowledge, which he also used effectively and successfully even with difficult tasks. His distinct ability to find correct solutions quickly is particularly noteworthy. Mr. Hadid demonstrated commitment and initiative in fulfilling his tasks. Even when there was a very high workload, he was very resilient.", image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=400&q=80" }
      ]
    },
    core: {
      title: "The Digital Core",
      subtitle: "The proprietary programming ensuring your absolute digital superiority.",
      features: [
        { id: "ai", title: "Cognitive Systems", desc: "Sovereign AI algorithms that think on your behalf, isolate trends, and automate relentless growth.", icon: "Brain" },
        { id: "perf", title: "Hyper Velocity", desc: "Zero-latency infrastructure programmed to conquer massive scale without a single dropped frame.", icon: "Zap" },
        { id: "sec", title: "Titanium Fortress", desc: "Military-grade encryption protocols rendering your empire's data fundamentally impenetrable.", icon: "Shield" },
        { id: "des", title: "Visual Authority", desc: "Breathtaking luxury interfaces scientifically designed to command instant market respect.", icon: "Crown" }
      ]
    },
    contact: {
      title: "Contact",
      subtitle: "Ready for the next step?",
      form: { name: "Name", email: "Email", message: "Message", submit: "Send" },
      info: { address: "Britzer Damm 152, 12347 Berlin, Germany", email: "info@emadhadid.de", phone: "+4917656657466", region: "Berlin" }
    },
    footer: {
      rights: "All rights reserved.",
      privacy: "Privacy",
      imprint: "Legal",
      description: "Your partner for digital mastery and IT innovation in Berlin.",
      quickLinks: "Quick Links",
      privacyTitle: "Privacy Policy",
      privacyContent: "We take the protection of your personal data very seriously. This website does not store any personal data without your express consent.",
      imprintTitle: "Legal Imprint",
      imprintContent: "Information according to § 5 TMG:\nEmad Hadid\nBritzer Damm 152\n12347 Berlin\nGermany\n\nContact:\nEmail: info@emadhadid.de\nPhone: \u202A+49 176 56657466\u202C"
    },
    automation: {
      title: "Hyper-Intelligent Systems",
      subtitle: "Workflow Orchestration",
      description: "We program the neural system of your business. Through intelligent workflow programming, we connect hundreds of applications into an autonomous powerhouse—tailored, secure, and hosted at the highest standard.",
      features: [
        { title: "AI Agent Workflows", desc: "Intelligent agents that autonomously prioritize and execute complex tasks." },
        { title: "API Orchestration", desc: "Seamless interaction between CRM, ERP, and your proprietary infrastructures." },
        { title: "Real-time Data Sync", desc: "Instant synchronization of data across all global platforms in milliseconds." },
        { title: "Event-Driven Systems", desc: "Reactive systems that respond to market and client signals with surgical timing." }
      ],
      cta: "Optimize Your Systems"
    }
  },
  tr: {
    nav: {
      home: "Ana Sayfa",
      services: "Hizmetler",
      about: "Hakkımızda",
      projects: "Portfolyo",
      testimonials: "Referanslar",
      contact: "İletişim",
      automation: "Akıllı Sistemler",
      getQuote: "Projeye Başla",
    },
    hero: {
      title: "Dijital Elit Programlama",
      subtitle: "Tasarım, programlama ve yapay zekanın kesiştiği noktada sofistike çözümler geliştiriyoruz. Dijital varlığınız için bir statü sembolü.",
      cta: "Şimdi Başla",
      explore: "Portfolyo",
      badge: "Mühendislik Mükemmelliği",
    },
    strategy: {
      title: "Dijital Başarı Stratejisi",
      subtitle: "Metodolojimiz",
      steps: [
        { title: "Vizyon Analizi", desc: "Teknolojiyi hırsla hizalamak için derin hedeflerinizi anlayarak başlıyoruz." },
        { title: "Yaratıcı Plan", desc: "Görsel lüksü mutlak kullanım kolaylığıyla birleştiren dijital yollar oluşturuyoruz." },
        { title: "Elit Programlama", desc: "Maksimum hız ve güvenlik sağlamak için cerrahi hassasiyetle kod geliştiriyoruz." },
        { title: "Lansman ve Büyüme", desc: "Projenizin zirvede kalmasını sağlamak için lansman sonrası sürekli destek." }
      ]
    },
    about: {
      title: "Dijital Mükemmellik Mirası",
      subtitle: "Emad Hadid",
      description: "Berlin merkezli, cerrahi hassasiyet ve stratejik hakimiyetle dijital şaheserler programlıyorum. Karmaşık vizyonları, geleceği tanımlayan kusursuz, elit deneyimlere dönüştürüyoruz.",
      stats: [
        { label: "Dijital İmparatorluklar", value: "150+" },
        { label: "Egemen Teknolojiler", value: "20+" },
        { label: "On Yıllık Ustalık", value: "10+" },
        { label: "Mutlak Sadakat", value: "100%" },
      ]
    },
    services: {
      title: "Egemen Dijital Çözümler",
      subtitle: "Küresel pazar hakimiyeti için tasarlanmış entegre bir ekosistem.",
      items: [
        { id: 'web', icon: 'web', title: "Lüks Platform Programlaması", description: "Programlama gücünü kraliyet estetiğiyle birleştiren ultra performanslı platformlar geliştiriyoruz." },
        { id: 'software', icon: 'systems', title: "Özel Yazılım Geliştirme", description: "Karmaşık iş gereksinimlerinize tam olarak uyarlanmış özel, sağlam yazılım çözümleri geliştiriyoruz." },
        { id: 'ai', icon: 'ai', title: "Stratejik YZ Entegrasyonu", description: "Başarıyı otomatikleştirmek ve veriye dayalı karar vermeyi sağlamak için gelişmiş YZ sistemleri kuruyoruz." },
        { id: 'design', icon: 'design', title: "Elit Kimlik Tasarımı", description: "Mutlak lüks saçan ve markanızı sektörünün zirvesine taşıyan dijital arayüzler tasarlıyoruz." },
        { id: 'performance', icon: 'performance', title: "İmparatorluk Performansı", description: "Teknik üstünlük ve tartışmasız küresel arama hakimiyeti sağlayan ışık hızında yanıt süreleri." },
        { id: 'consulting', icon: 'consulting', title: "Egemen Danışmanlık", description: "Dijital yatırımlarınızı güvence altına almak için üst düzey teknik rehberlik." },
        { id: 'systems', icon: 'systems', title: "Sistem Koruması", description: "Altyapınızı ve verilerinizi koruyan, iş sürekliliğinizi kesintisiz sağlayan gelişmiş güvenlik çözümleri." },
        { id: 'seo', icon: 'seo', title: "Arama Motoru Hegemonyası", description: "Adınızı küresel ön plana çıkaran ve hedef kitlenizin elitlerini çeken hassas görünürlük stratejileri." },
        { id: 'maintenance', icon: 'maintenance', title: "Kraliyet Desteği ve Koruma", description: "Dijital imparatorluğunuzun istikrarını ve gelişimini sağlayan sürekli gözetim." }
      ]
    },
    projects: {
      title: "Ustalık Anıtları",
      subtitle: "Teknik hegemonya ve estetik mükemmelliğin bir vitrini.",
      viewAll: "Hepsini Gör",
      restricted: {
        title: "ERİŞİM KISITLANDI",
        description: "Özel arşivimiz müşterilerimize özeldir. Lütfen PIN kodunuzu girin veya erişim için bizimle iletişime geçin.",
        btn: "Kapat",
        cancel: "ERİŞİMİ İPTAL ET",
        archiveLabel: "ÖZEL ARŞİV"
      },
      success: {
        title: "Doğrulama başarılı",
        description: "Sınırlı Erişim"
      },
      items: [
        { 
          title: "Küresel Egemenlik Merkezi", 
          category: "Kurumsal Programlama", 
          description: "Kusursuz kullanıcı deneyimi ve dünya standartlarında görsel hakimiyete sahip üst düzey bir dijital kale.",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
          video: "https://assets.mixkit.co/videos/preview/mixkit-business-man-typing-on-his-laptop-computer-396-large.mp4"
        },
        { 
          title: "İmparatorluk Teknoloji Platformu", 
          category: "Sistem Programlaması", 
          description: "Karmaşık teknolojik talepler ve maksimum stabilite için tasarlanmış sağlam platform programlaması.",
          image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
          video: "https://assets.mixkit.co/videos/preview/mixkit-typing-on-a-illuminated-keyboard-811-large.mp4"
        },
        { 
          title: "YZ Zeka Paketi", 
          category: "Yapay Zeka", 
          description: "En modern YZ entegrasyonu yoluyla otomatikleştirilmiş süreçler ve veriye dayalı karar verme.",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
          video: "https://assets.mixkit.co/videos/preview/mixkit-spinning-around-a-lighted-circuit-board-4340-large.mp4"
        },
        { 
          title: "Lüks Dijital Kimlik", 
          category: "Marka Kimliği", 
          description: "Prestiji teknolojik üstünlükle birleştiren belirgin bir dijital imza.",
          image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
          video: "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-a-tablet-443-large.mp4"
        }
      ]
    },
    testimonials: {
      title: "Müşteri Yorumları",
      subtitle: "Birlikte çalıştığımız müşterilerimizden gerçek deneyimler",
      items: [
        { name: "Sarah Al-Mansour", role: "CEO, TechFlow", quote: "İşteki hassasiyet ve profesyonellik düzeyi mükemmel. Emad ile çalışma deneyimi çok verimliydi.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" },
        { name: "Khaled Al-Hashimi", role: "İnovasyon Direktörü, Global Systems", quote: "Teslimat kalitesi ve teslim tarihlerine bağlılık. Yapay zeka entegrasyonu iş verimliliğimizi gözle görülür şekilde artırmamıza yardımcı oldu.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80" },
        { name: "Layla Al-Rashed", role: "Kurucu, Visionary Lab", quote: "Karmaşık teknik gereksinimleri basitleştirme ve çekici bir tasarımla pratik çözümlere dönüştürme konusunda mükemmel yetenek.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80" },
        { name: "moonlight", role: "Ortak", quote: "Bay Hadid, zorlu görevlerde bile etkili ve başarılı bir şekilde kullandığı sağlam ve kapsamlı uzmanlık bilgisine sahiptir. Doğru çözümleri hızlı bir şekilde bulma yeteneği özellikle dikkate değerdir. Bay Hadid görevlerini yerine getirirken özveri ve inisiyatif göstermiştir.", image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=400&q=80" }
      ]
    },
    core: {
      title: "Dijital Çekirdek",
      subtitle: "Mutlak dijital üstünlüğünüzü inşa eden tescilli programlama.",
      features: [
        { id: "ai", title: "Bilişsel Sistemler (YZ)", desc: "Sizin adınıza düşünen, pazar eğilimlerini izole eden ve büyümeyi akıllı sistemlerle yöneten otonom algoritmalar.", icon: "Brain" },
        { id: "perf", title: "Hiper Hız", desc: "Sıfır gecikmeli altyapı, devasa trafiği tek bir kare dahi kaybetmeden kaldırır.", icon: "Zap" },
        { id: "sec", title: "Titanyum Kale", desc: "İmparatorluğunuzun verilerini temelde aşılamaz kılan askeri düzeyde şifreleme.", icon: "Shield" },
        { id: "des", title: "Görsel Otorite", desc: "Anında pazar hakimiyeti kurmak için tasarlanmış, nefes kesen lüks arayüzler.", icon: "Crown" }
      ]
    },
    contact: {
      title: "İletişim",
      subtitle: "Bir sonraki adım için hazır mısınız?",
      form: { name: "İsim", email: "E-post", message: "Mesaj", submit: "Gönder" },
      info: { address: "Britzer Damm 152, 12347 Berlin, Almanya", email: "info@emadhadid.de", phone: "+4917656657466", region: "Berlin" }
    },
    footer: {
      rights: "Tüm hakları saklıdır.",
      privacy: "Gizlilik",
      imprint: "Yasal",
      description: "Berlin'de dijital ustalık ve BT inovasyonu için ortağınız.",
      quickLinks: "Hızlı Bağlantılar",
      privacyTitle: "Gizlilik Politikası",
      privacyContent: "Kişisel verilerinizin korunmasını çok ciddiye alıyoruz. Bu web sitesi açık rızanız olmadan hiçbir kişisel veriyi saklamaz.",
      imprintTitle: "Künye",
      imprintContent: "TMG § 5 uyarınca bilgiler:\nEmad Hadid\nBritzer Damm 152\n12347 Berlin\nAlmanya\n\nİletişim:\nE-posta: info@emadhadid.de\nTelefon: \u202A+49 176 56657466\u202C"
    },
    automation: {
      title: "Hiper Akıllı Sistemler",
      subtitle: "Akıllı İş Akışı Yönetimi",
      description: "İşletmenizin sinir sistemini programlıyoruz. Akıllı iş akışı yönetimi ile yüzlerce uygulamayı otonom bir güç merkezine dönüştürüyoruz—size özel, güvenli ve en yüksek standartlarda.",
      features: [
        { title: "YZ Ajan İş Akışları", desc: "Karmaşık görevleri otonom olarak önceliklendiren ve yürüten akıllı ajanlar." },
        { title: "API Orkestrasyonu", desc: "CRM, ERP ve özel altyapılarınız arasında kusursuz etkileşim." },
        { title: "Gerçek Zamanlı Veri Senkronizasyonu", desc: "Küresel platformlar arasında verilerin milisaniyeler içinde anında eşitlenmesi." },
        { title: "Olay Odaklı Sistemler", desc: "Pazar ve müşteri sinyallerine cerrahi zamanlamayla yanıt veren sistemler." }
      ],
      cta: "Sistemleri Optimize Edin"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      about: "من نحن",
      projects: "أعمالنا",
      testimonials: "الآراء",
      contact: "تواصل معنا",
      automation: "الأنظمة الذكية",
      getQuote: "ابدأ مشروعك",
    },
    hero: {
      title: "بناء التميُّز الرقمي الاحترافي",
      subtitle: "نحوّل الأفكار إلى تجارب رقمية متقدمة، ونبني حضورًا يلفت الانتباه ويصعب تجاهله.",
      cta: "ابدأ الآن",
      explore: "أعمالنا",
      badge: "Engineering Excellence",
    },
    strategy: {
      title: "إستراتيجية النجاح الرقمي",
      subtitle: "OUR METHODOLOGY",
      steps: [
        { title: "تحليل الرؤية", desc: "نبدأ بفهم أهدافك بعمق لضمان توافق التقنية مع طموحاتك" },
        { title: "التصميم الإبداعي", desc: "رسم مسارات رقمية تجمع بين الجاذبية البصرية وسهولة الاستخدام." },
        { title: "برمجة متطورة", desc: "بناء الكود بدقة احترافية لضمان السرعة المتقدمة والأمان المطلق." },
        { title: "الإطلاق والنمو", desc: "دعم مستمر بعد الإطلاق لضمان تطور مشروعك وبقائه في القمة." }
      ]
    },

    about: {
      title: "خبرة تصنع الفرق",
      subtitle: "عماد حديد",
      description: "من قلب برلين، نَصنعُ لك حُضورًا رَقْمِيًّا لا يُنافَس… وَمُسْتَوًى يَلِيقُ بِالقِمَّة. نحوّلُ الأفكار إلى تجارب رقمية متقدّمةً، ونبني حضورًا يلفت الانتباه.",
      stats: [
        { label: "مشاريع منفذة", value: "150+" },
        { label: "تقنيات متقدمة", value: "20+" },
        { label: "سنوات خبرة", value: "10+" },
        { label: "رضا العملاء", value: "100%" },
      ]
    },
    services: {
      title: "حلول رقمية متكاملة",
      subtitle: "مجموعة من الخدمات المصممة لتحقيق نتائج حقيقية.",
      items: [
        { id: 'web', icon: 'web', title: "منصات التجارة الإلكترونية", description: "تصميم منصات رقمية تجمع بين الأناقة المتقدمة والأداء المذهل لتعزيز حضور مشروعك." },
        { id: 'software', icon: 'systems', title: "حلول البرمجيات الاحترافية", description: "إعداد حلول برمجية متطورة مصممة خصيصاً لتلبية احتياجات أعمالك الفريدة." },
        { id: 'ai', icon: 'ai', title: "الذكاء الاصطناعي", description: "دمج حلول الذكاء الاصطناعي لأتمتة العمليات بذكاء وزيادة كفاءة أعمالك." },
        { id: 'design', icon: 'design', title: "تصميم واجهات المستخدم", description: "واجهات عملية وجذابة تعبر عن هوية علامتك وتوفر تجربة مستخدم ممتازة." },
        { id: 'performance', icon: 'performance', title: "تحسين الأداء", description: "سرعة تحميل عالية واستقرار تام لضمان أفضل تجربة للمستخدمين." },
        { id: 'consulting', icon: 'consulting', title: "الاستشارات التقنية", description: "توجيه تقني خبير لمساعدتك في اتخاذ القرارات الصحيحة لمشروعك." },
        { id: 'systems', icon: 'systems', title: "الحماية السيبرانية", description: "نظم دفاعية متقدمة مبنية على أحدث تقنيات الأمن السيبراني لحماية أصولك الرقمية وضمان استمرارية أعمالك." },
        { id: 'seo', icon: 'seo', title: "تهيئة محركات البحث (SEO)", description: "استراتيجيات فعالة لزيادة ظهور موقعك في نتائج البحث." },
        { id: 'maintenance', icon: 'maintenance', title: "الدعم الفني والصيانة", description: "مراقبة مستمرة وتحديثات دورية لضمان عمل مشروعك بكفاءة عالية." }
      ]
    },
    projects: {
      title: "معرض الأعمال المختارة",
      subtitle: "مشاريع رقمية تجسد الإتقان والابتكار.",
      viewAll: "مشاهدة الكل",
      restricted: {
        title: "وصول محدود",
        description: "أرشيفنا الخاص مخصص حصرياً لعملائنا. يرجى إدخال رمز PIN أو التواصل معنا للحصول على حق الوصول.",
        btn: "إغلاق",
        cancel: "تراجع",
        archiveLabel: "الأرشيف الخاص"
      },
      success: {
        title: "تم التحقق بنجاح",
        description: "الوصول محدود حالياً"
      },
      items: [
        { 
          title: "بوابة الشركات الحديثة", 
          category: "تطوير الويب", 
          description: "تصميم وتنفيذ منصة ويب قابلة للتوسع مع التركيز على تجربة المستخدم والاستقرار التقني.",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
          video: "https://assets.mixkit.co/videos/preview/mixkit-business-man-typing-on-his-laptop-computer-396-large.mp4"
        },
        { 
          title: "أنظمة البنية السحابية", 
          category: "حلول تقنية المعلومات", 
          description: "تطوير حلول سحابية موثوقة لتحسين العمليات التجارية وسير العمل الرقمي داخل المؤسسات.",
          image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
          video: "https://assets.mixkit.co/videos/preview/mixkit-typing-on-a-illuminated-keyboard-811-large.mp4"
        },
        { 
          title: "تحليل البيانات الذكي", 
          category: "علم البيانات", 
          description: "بناء خوارزميات ذكية لمعالجة وتحليل البيانات الضخمة لدعم اتخاذ القرارات القائمة على الحقائق.",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
          video: "https://assets.mixkit.co/videos/preview/mixkit-spinning-around-a-lighted-circuit-board-4340-large.mp4"
        },
        { 
          title: "تطوير الهوية الرقمية", 
          category: "تصميم الواجهات", 
          description: "إنشاء حضور رقمي متكامل يعبر عن هوية الشركة وقيمها من خلال تصميم عصري وبسيط.",
          image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
          video: "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-a-tablet-443-large.mp4"
        }
      ]
    },
    testimonials: {
      title: "آراء العملاء",
      subtitle: "تجارب حقيقية من عملاء عملنا معهم",
      items: [
        { name: "سارة المنصور", role: "الرئيس التنفيذي، TechFlow", quote: "مستوى الدقة والاحترافية في العمل ممتاز. تجربة العمل مع عماد كانت مثمرة جداً.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" },
        { name: "خالد الهاشمي", role: "مدير الابتكار، Global Systems", quote: "جودة في التسليم والتزام بالمواعيد. دمج الذكاء الاصطناعي ساعد في تحسين كفاءة أعمالنا بشكل ملحوظ.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80" },
        { name: "ليلى الراشد", role: "مؤسسة Visionary Lab", quote: "قدرة ممتازة على تبسيط المتطلبات التقنية المعقدة وتحويلها إلى حلول عملية وتصميم جذاب.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80" },
        { name: "moonlight", role: "Partner", quote: "يتمتع السيد حديد بمعرفة متخصصة سليمة وشاملة، والتي استخدمها أيضاً بفعالية ونجاح حتى في المهام الصعبة. تجدر الإشارة بشكل خاص إلى قدرته المتميزة على إيجاد الحلول الصحيحة بسرعة. أظهر السيد حديد التزاماً ومبادرة في أداء مهامه. وحتى عندما كان حجم العمل مرتفعاً جداً، كان صامداً للغاية.", image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=400&q=80" }
      ]
    },
    core: {
      title: "التمييز الرقمي",
      subtitle: "بنية تحتية متطورة صُممت خصيصاً لضمان تفوقك الرقمي.",
      features: [
        { id: "ai", title: "الأنظمة الإدراكية (AI)", desc: "خوارزميات ذكاء اصطناعي سيادية تفكر بالنيابة عنك، وتقرأ توجهات السوق لتعزيز نجاحك باستمرار ودون توقف.", icon: "Brain" },
        { id: "perf", title: "سرعة الضوء", desc: "بنية تحتية برمجية معقدة تتحمل الملايين من الزيارات في لحظة واحدة وبدون مللي ثانية تأخير.", icon: "Zap" },
        { id: "sec", title: "درع التيتانيوم", desc: "طبقات تشفير عسكرية وحصون رقمية منيعة تجعل مسألة اختراق خوادمك أمراً من سابع المستحيلات.", icon: "Shield" },
        { id: "des", title: "الهيبة البصرية", desc: "واجهات استثنائية صُممت بترف مطلق لتفرض هيبتك فوراً وتجعل جميع منافسيك يبدون من الماضي.", icon: "Crown" }
      ]
    },
    contact: {
      title: "لنبدأ رحلة مشروعك الرقمي",
      subtitle: "نحن نحول فكرتك إلى نظام رقمي يعمل بكفاءة ويحقق نتائج حقيقيّة.",
      form: { name: "الاسم", email: "البريد الإلكتروني", message: "الرسالة", submit: "إرسال الطلب" },
      info: { address: "Britzer Damm 152, 12347 Berlin, Deutschland", email: "info@emadhadid.de", phone: "+4917656657466", region: "برلين" }
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      privacy: "الخصوصية",
      imprint: "قانوني",
      description: "حلول رقمية احترافية من برلين إلى العالم.",
      quickLinks: "روابط سريعة",
      privacyTitle: "سياسة الخصوصية",
      privacyContent: "نحن نأخذ حماية بياناتك الشخصية على محمل الجد. لا يقوم هذا الموقع بتخزين أي بيانات شخصية دون موافقتك الصريحة.",
      imprintTitle: "المعلومات القانونية",
      imprintContent: "المعلومات وفقاً للمادة 5 من قانون وسائل الإعلام الرقمية (TMG):\nعماد حديد\nBritzer Damm 152\n12347 برلين\nألمانيا\n\nالتواصل:\nالبريد الإلكتروني: info@emadhadid.de\nالهاتف: \u202A+49 176 56657466\u202C"
    },
    automation: {
      title: "الأنظمة الذكية المتقدمة",
      subtitle: "تنسيق سير العمل الذكي",
      description: "نحن نقوم ببرمجة الجهاز العصبي لشركتك. من خلال برمجة تدفق العمل ذكياً، نربط مئات التطبيقات ببعضها البعض لتتحول إلى قوة ذاتية التشغيل—مخصصة بالكامل وآمنة وبأعلى المعايير العالمية.",
      features: [
        { title: "سير عمل وكلاء الذكاء الاصطناعي", desc: "أنظمة ذكية تنفذ المهام تلقائيًا، تدير العمليات، وترتب الأولويات بكفاءة عالية دون تدخل مستمر." },
        { title: "تنسيق واجهات الربط (API)", desc: "ربط سلس بين أنظمة CRM و ERP وبنيتك التحتية الخاصة." },
        { title: "مزامنة البيانات الفورية", desc: "مزامنة البيانات فورياً عبر جميع المنصات العالمية في أجزاء من الثانية." },
        { title: "الأنظمة التفاعلية الذكية", desc: "أنظمة تفاعلية تستجيب لإشارات السوق والعملاء بتوقيت مثالي دقيق." }
      ],
      cta: "ابدأ الآن"
    }
  }
}
