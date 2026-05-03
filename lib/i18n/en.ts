import type { Translations } from './index'

export const en: Translations = {
  nav: {
    home: 'Home',
    about: 'About',
    blog: 'Blog',
    services: 'Services',
    portfolio: 'Portfolio',
    contact: 'Contact me',
    homeLabel: 'Julie BREDECHE — Home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNav: 'Main navigation',
  },

  hero: {
    badge: 'Independent Microsoft 365 Consultant',
    h1: {
      before: 'Get the most out of',
      articlePP: '',
      and: 'and',
    },
    description:
      'I transform your business processes into Microsoft 365 applications and automations that boost your productivity.',
    cta1: 'View my services →',
    cta2: 'Read my articles ↓',
    clients: 'They trusted me:',
    cardSubtitle: 'Independent Consultant',
    stats: {
      experience: 'years of experience',
      clients: 'clients',
      satisfaction: 'satisfaction rate',
    },
  },

  offers: {
    sectionLabel: 'What I offer',
    sectionTitle: 'Services',
    viewAll: 'All services →',
    learnMore: 'Learn more',
    badge: {
      coaching: 'Coaching',
      main: 'Main offer',
      audit: 'Audit & Advisory',
    },
    coaching: {
      title: 'Power Automate Coaching',
      description: 'I help you level up on Power Automate, working on your real-world cases.',
      bullets: [
        '1:1 video sessions of 1.5 to 2 hours',
        'Review of your existing flows',
        'Best practices and anti-patterns',
        'Design and governance methodology',
      ],
    },
    main: {
      title: 'PowerApps, Power Automate & Copilot Solutions',
      description:
        'I design and develop custom business applications, automations and conversational agents for your organisation.',
      methodLinkLabel: 'my method',
      bullets: [
        'Custom PowerApps applications',
        'Power Automate automations',
        'Copilot Studio agents',
        'Training and documentation',
        'Maintenance packages',
      ],
    },
    audit: {
      title: 'SharePoint Audit',
      description:
        'I run a complete diagnostic of your SharePoint environment to give you a clear picture and a concrete action plan.',
      bullets: [
        'Site architecture analysis',
        'Rights and permissions assessment',
        'Metadata management optimisation',
        'Search schema management',
      ],
    },
    onedrive: {
      title: 'OneDrive Path Checker',
      badge: 'Available on Microsoft Store',
      description:
        'Audit your file paths before SharePoint migration and avoid OneDrive sync errors.',
      cta: 'Discover the tool →',
    },
  },

  newsletter: {
    title: 'Get my next articles',
    subtitle: 'on SharePoint, Power Platform and Copilot Studio',
    placeholder: 'your@email.com',
    subscribe: 'Subscribe',
    subscribing: 'Subscribing...',
    success: "Thank you! You'll receive my next publications by email.",
    error: '❌ An error occurred, please try again.',
    ariaLabel: 'Newsletter subscription form',
    emailLabel: 'Email address',
    consentBefore: 'By subscribing, you agree to receive my articles by email.',
    consentLink: 'Privacy policy',
  },

  footer: {
    linkedinLabel: "Julie Bredeche's LinkedIn Profile",
    legal: 'Legal notice',
  },

  legal: {
    pageTitle: 'Legal notice & Privacy policy',
    intro: 'This page provides legal information about the publisher of juliebredeche.pro and our personal data protection policy.',
    updatedLabel: 'Last updated',
    updatedDate: 'May 1, 2026',

    legalSection: {
      title: 'Legal notice',
      editor: {
        title: 'Site publisher',
        body: 'The juliebredeche.pro website is published by Osalyd Consulting, an EURL (single-member limited liability company) with variable share capital, registered with the Paris Trade and Companies Register under SIRET number 889 809 646 00033. Registered office: 8 rue Clavel, 75019 Paris, France. VAT not applicable, Article 293 B of the French General Tax Code. Contact: julie.bredeche@osalydconsulting.com.',
      },
      director: {
        title: 'Publication director',
        body: 'Julie Bredeche, manager of Osalyd Consulting.',
      },
      host: {
        title: 'Hosting provider',
        body: 'The site is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States. Website: vercel.com.',
      },
      ip: {
        title: 'Intellectual property',
        body: 'All content on this site (text, images, logos, blog articles) is the exclusive property of Julie Bredeche / Osalyd Consulting unless otherwise stated. Any reproduction, distribution or reuse, in whole or in part, without prior written authorization is prohibited.',
      },
    },

    privacySection: {
      title: 'Privacy policy',
      controller: {
        title: 'Data controller',
        body: 'Osalyd Consulting (contact details above) is the controller of personal data processed via this site. For any question regarding your data, contact julie.bredeche@osalydconsulting.com.',
      },
      data: {
        title: 'Data collected and purposes',
        intro: 'This site only collects data strictly necessary for the services offered:',
        items: [
          'Contact form: name, email and message, to respond to your request (legal basis: pre-contractual measures, art. 6.1.b GDPR).',
          'Newsletter form: email address, to send you new blog articles (legal basis: consent, art. 6.1.a GDPR).',
          'Traffic statistics: anonymised technical data (pages viewed, device type, country) via Vercel Web Analytics, without cookies or persistent identifiers (legal basis: legitimate interest, art. 6.1.f GDPR).',
        ],
      },
      cookies: {
        title: 'Cookies',
        body: 'This site uses a single technical cookie named locale, which stores your preferred language (French or English). This cookie is strictly necessary for the site to function and does not require prior consent (Article 82 of the French Data Protection Act). No third-party advertising or analytics cookies are placed.',
      },
      retention: {
        title: 'Data retention',
        items: [
          'Contact form requests: 3 years after the last exchange.',
          'Newsletter subscribers: until unsubscription, or 3 years of inactivity.',
          'Aggregated statistics: 25 months maximum.',
        ],
      },
      processors: {
        title: 'Processors',
        intro: 'Your data may be processed by the following providers, governed by GDPR-compliant data processing agreements:',
        items: [
          'Vercel Inc. (United States): site hosting and anonymised analytics. Transfer governed by the European Commission Standard Contractual Clauses.',
          'Resend, Inc. (United States): contact form emails and newsletter list management. Transfer governed by the Standard Contractual Clauses.',
        ],
      },
      rights: {
        title: 'Your rights',
        intro: 'Under the GDPR and the French Data Protection Act, you have the following rights over your personal data:',
        items: [
          'Right of access, rectification and erasure',
          'Right to object and restrict processing',
          'Right to data portability',
          'Right to withdraw your consent at any time',
        ],
        contact: 'To exercise these rights, write to julie.bredeche@osalydconsulting.com. You also have the right to lodge a complaint with the CNIL (French data protection authority, cnil.fr).',
      },
    },
  },

  about: {
    sectionLabel: 'About',
    role: 'Microsoft 365 Consultant',
    speciality:
      'SharePoint and Power Platform specialist for over 10 years, I support business teams in <b>modernising their collaborative tools</b>, <b>automating processes</b> and <b>effectively structuring content</b>, leveraging Microsoft 365 solutions.',
    certif: 'Microsoft Certified: Power Platform Solution Architect Expert',
    journeyTitle: 'My Journey',
    journey: [
      'My adventure with Microsoft 365 began in 2014, when I took part in deploying the largest SharePoint intranet for a major energy group. I was immediately drawn to the power and endless possibilities of SharePoint! I quickly specialised in process automation with SharePoint Designer and Nintex, before Power Automate arrived.',
      'After joining a consulting firm specialised in Microsoft 365 tools and completing missions for several large accounts, I founded Osalyd Consulting in 2020. This entrepreneurial freedom allowed me to focus on my areas of excellence: SharePoint and the Power Platform.',
      'The gap between what technology can do and what teams know how to do with it remains significant. That is where I make a difference, turning business needs into concrete solutions integrated into the M365 ecosystem.',
      'With a business school background, I can naturally engage with business teams. My innate appetite for technology has allowed me to master in depth the Microsoft 365 technologies I deploy.',
    ],
    approachTitle: 'My Approach',
    approach: [
      {
        title: 'Tailored Design',
        items: [
          'Listening to business challenges',
          'Precise requirements scoping',
          'Adapted architecture',
          'Scalable solutions',
          'Working prototype',
        ],
      },
      {
        title: 'Added Value',
        items: [
          'Dual technical/business expertise',
          'Accessible language for non-technical stakeholders',
          'Technical & budget trade-offs',
          'Methodological rigour',
          'SharePoint/Power Platform expertise',
        ],
      },
      {
        title: 'Scope of Intervention',
        items: [
          'End-to-end project management',
          'Solution architecture',
          'Development and design',
          'Process optimisation',
          'Change management support',
        ],
      },
    ],
    cta: {
      titlePre: 'Do you have a',
      titlePost: 'project?',
      description: "Let's discuss your needs and see how I can help.",
      button: 'Contact me',
    },
    linkedin: 'LinkedIn',
  },

  services: {
    hero: {
      label: 'service offering',
      h1: {
        before: 'My',
        highlight: 'Microsoft 365 expertise',
        after: ', at every stage of your project',
      },
      description:
        "I support business and IT leaders on human-scale projects: one process, one team, a clearly defined scope. Whether you're an SME or a department within a large group, the challenge is the same: deliver a functional, scalable and easily maintainable solution.",
    },
    offer1: {
      badge: 'Main offer',
      title: 'PowerApps, Power Automate Solutions & Copilot Agents',
      description:
        'I design and develop custom <strong>business applications</strong>, <strong>automations</strong> and <strong>conversational agents</strong> for your organisation. From scoping to production deployment, through to adoption by your teams.',
      forWhomLabel: 'Who is it for?',
      forWhom:
        'Business or IT departments looking to digitise an existing process or create a new one, without going through a third-party vendor or launching a large cross-functional programme.',
      formatLabel: 'Format',
      format:
        'Time-and-materials or fixed-price engagement, remote with occasional on-site visits if needed.',
      deliverables: [
        {
          title: 'Design & development',
          text: 'PowerApps applications, Power Automate flows (simple and advanced), Copilot Studio agents connected to your environment, SharePoint Online portals (intranet, extranet, project spaces)',
        },
        {
          title: 'Design & user experience',
          text: 'Polished UI, tested user journeys, wireframes validated upfront',
        },
        {
          title: 'Production deployment & adoption',
          text: 'End-to-end testing, progressive rollout, training for functional administrators',
        },
        {
          title: 'Post-delivery support',
          text: 'Complete technical and functional documentation, optional monthly maintenance package (bug fixes, minor updates)',
        },
      ],
      cta: "Let's talk about your project",
      methodLink: 'See my method ↓',
    },
    audit: {
      badge: 'Audit & Advisory',
      title: 'SharePoint Audit',
      description:
        'Your SharePoint environment has grown over time, and with it, increasingly complex management. I carry out a complete diagnostic of your architecture, permissions and usage to give you a clear picture of the current state and a concrete action plan.',
      forWhomLabel: 'Who is it for?',
      forWhom:
        'Organisations facing governance, search or permissions issues on SharePoint, or preparing a migration.',
      formatLabel: 'Format',
      format: 'Short engagement, remote, with read access to your tenant.',
      analyzeLabel: 'What I analyse.',
      analyze: [
        'Site and navigation architecture',
        'Rights and permissions (inheritance, external sharing, orphaned access)',
        'Metadata management and content types',
        'Search schema and result relevance',
        'Volume, inactive sites, archiving opportunities',
      ],
      deliverablesLabel: 'Deliverables',
      deliverables: [
        {
          title: 'A complete audit report',
          text: 'with current state, identified pain points, risks and recommendations',
        },
        {
          title: 'An optimised architecture diagram',
          text: 'understandable by both your IT teams and business stakeholders',
        },
        {
          title: 'A prioritised action plan',
          text: 'with effort estimates for each action',
        },
      ],
      cta: 'Request an audit',
    },
    coaching: {
      badge: 'Coaching',
      title: 'Power Automate Coaching',
      description:
        "I help you level up on Power Automate, working on your real-world cases. Ideal for IT teams who want to become self-sufficient on the platform, or business teams looking to automate repetitive tasks without relying on an external provider for every flow.",
      forWhomLabel: 'Who is it for?',
      forWhom:
        'IT teams, citizen developers, or business users who have already taken their first steps with Power Automate.',
      formatLabel: 'Format',
      format: [
        '1:1 video sessions of 1.5 to 2 hours, individually or in packs',
        'Each session has a goal defined upfront (unblock a specific issue, level up on a topic, review an existing flow)',
        'Work on your real-world cases and review of your existing flows (best practices, anti-patterns, optimisation)',
        'Sharing of my design and governance methodology',
      ],
      cta: 'Request a coaching session',
    },
    testimonials: {
      label: 'Testimonials',
      title: 'They trusted me',
      items: [
        {
          quote: "Julie is a brilliant consultant, combining technical skills with operational and project management capacities. Her strong knowledge related to SharePoint Online and OneDrive products helped us to put in place efficient delivery activities, as well as technical standards and process to be used at the Group level. She's also concerned by user experience and quality of service. In addition, she's a very enthusiastic and flexible person, with whom it is very pleasant to work.",
          author: 'Benoît Lassalle',
          role: 'Head of IT and Digital for US multi-energy Trading affiliates, TotalEnergies',
        },
        {
          quote: "Beyond her excellent command of SharePoint and Power Automate, Julie demonstrates real professionalism and a strong ability to adapt in a constantly evolving business context. Her rigour, curiosity and creativity are undeniable assets that have greatly contributed to the success of our projects. I highly recommend Julie for any demanding mission requiring technical expertise combined with a functional, methodical and innovative approach.",
          author: 'Arnaud Chaloine',
          role: 'Project Lead, Groupama Centre-Atlantique',
        },
      ],
    },
    method: {
      label: 'Methodology',
      title: 'My 6-step method',
      readMore: 'Read the full article on my method →',
      steps: [
        {
          n: '01',
          title: 'Understand the need',
          text: 'Before talking solutions, I ask the right questions: how many users, what volume, any external users? This validates technical feasibility and identifies constraints from the start.',
        },
        {
          n: '02',
          title: 'Scope and estimate',
          text: 'I identify key features by user journey, then provide an estimate. Most of my projects total 20 to 30 days of work.',
        },
        {
          n: '03',
          title: 'Diagram and validate',
          text: 'I map processes and create wireframes directly in Power Apps. The result: the client understands the logic, refines their needs and I know the order to proceed.',
        },
        {
          n: '04',
          title: 'Agile development',
          text: 'As soon as a feature is ready, I present it and let the client test it while I continue. If new needs emerge, we decide together without exceeding the estimate.',
        },
        {
          n: '05',
          title: 'Test and deploy',
          text: 'End-to-end testing, pilot users, test scripts for complex business rules. Complete technical and functional documentation delivered with the project.',
        },
        {
          n: '06',
          title: 'Maintain and evolve',
          text: 'Error management, incident reporting, and an optional annual package covering bug fixes and minor updates.',
        },
      ],
    },
    tool: {
      label: 'Side project',
      title: 'OneDrive Path Checker',
      p1: 'Developed for my SharePoint migration projects, this tool <strong>detects file paths that are too long</strong> before they cause OneDrive sync errors.',
      p2: 'Available on the <strong>Microsoft Store</strong>.',
      cta: 'Discover the tool →',
      features: [
        {
          title: 'Done in 3 minutes, no PowerShell',
          text: 'No scripts, no admin rights needed',
        },
        {
          title: 'Detects both critical limits',
          text: 'SharePoint migrations (>400) and OneDrive sync (>255 characters)',
        },
        {
          title: 'Built-in remediation & exports',
          text: 'Rename files directly or export to Excel / PDF',
        },
        {
          title: '100% local & secure',
          text: 'No content read, no data sent',
        },
      ],
    },
  },

  contact: {
    hero: {
      label: "Let's talk about your project",
      titlePre: 'A',
      titlePost: 'project?',
      description:
        'SharePoint, Power Platform, Copilot Studio? Describe your need, I will reply within 24 business hours.',
    },
    form: {
      title: 'Your message',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      subject: 'Subject',
      subjectPlaceholder: 'Choose a subject...',
      message: 'Message',
      messagePlaceholder: 'Describe your project or need...',
      send: 'Send message →',
      sending: 'Sending…',
      success: {
        title: 'Message sent!',
        description: 'Thank you for your message. I will reply within 24 business hours.',
      },
      error: 'An error occurred. Please try again or contact me directly on LinkedIn.',
      subjects: [
        'Power Platform / Copilot Studio project',
        'SharePoint Audit',
        'Power Automate Coaching',
        'Other',
      ],
    },
  },

  blog: {
    label: 'Blog',
    latestTitle: 'Latest articles',
    allArticles: 'All articles →',
    readArticle: 'Read the article',
    title: 'All my articles',
    description:
      'Tutorials, experience reports and analysis of current challenges in SharePoint, Power Platform and Copilot.\nFor Microsoft 365 teams who want to go further.',
    empty: 'No articles in this category yet.',
    categories: {
      all: 'All',
      serie: 'Copilot A to Z',
      serieLabel: 'SERIES',
      serieCard: 'Copilot A to Z',
    },
    readingMin: 'min read',
    serieIntro: 'The series to understand Copilot, from prompting to deployment.',
    serieViewAll: (_n: number) => `View all episodes →`,
    recentTitle: 'Latest articles',
    archivesDivider: 'Explore the full archives',
    searchPlaceholder: 'Search an article — e.g. OneDrive, agent, prompting…',
    searchCount: (n: number) => (n > 1 ? `${n} articles` : `${n} article`),
    searchResults: (n: number) => (n > 1 ? `${n} results` : `${n} result`),
    searchEmpty: 'No article matches your search.',
    tagCount: (n: number) => (n > 1 ? `${n} articles` : `${n} article`),
    article: {
      home: 'Home',
      relatedTitle: 'Related articles',
      authorRole: 'Independent M365 Consultant',
      authorSpeciality: 'SharePoint & Power Platform specialist',
      learnMore: 'Learn more',
      seriesNavTitle: 'Browse the series',
      seriesPrev: 'Previous episode',
      seriesNext: 'Next episode',
      seriesEpisode: (n: number, total: number) => `Episode ${n} of ${total}`,
    },
  },

  portfolio: {
    label: 'Completed projects',
    title: 'Portfolio',
    comingSoon: 'More case studies coming soon.',
    description: 'A selection of representative projects completed for clients across various industries.',
    viewProject: 'View project →',
    captures: (n: number) => `${n} Screenshots (click to enlarge)`,
    prev: '← Previous',
    next: 'Next →',
    close: 'Close',
    sections: {
      problem: 'Business challenge',
      context: 'Context and users',
      solution: 'Solution implemented',
      features: 'Key features',
      benefits: 'User benefits',
      roi: 'Business value (ROI)',
    },
    projects: [
      {
        title: 'Travel booking application',
        sector: 'Education',
        screenshots: [
          { title: '1. Application home page' },
          { title: '2. Booking form – Step 1' },
          { title: '3. Booking form – Step 2' },
          { title: '4. Booking form – Step 3' },
          { title: '5. Home page – Mobile' },
          { title: '6. Form – Mobile' },
          { title: '7. SharePoint back-office for staff' },
        ],
        problem: [
          'Booking requests managed **only by email** with administrators.',
          '**Manual validations** delayed the process.',
          'Many back-and-forths, oversights and **data entry errors**.',
        ],
        users: ['200 teachers across 2 campuses', '2 booking administrators', 'Accounting department'],
        solution:
          'A **mobile application** for submitting requests with automated validation workflow and notifications.\n\nAn **interactive dashboard** for staff with structured accounting tracking.',
        features: [
          '**Dynamic form** with business rules to ensure reliable data entry',
          '**Duplicate recurring bookings** in 2 clicks',
          '**Automated validation workflow** based on the teacher\'s status',
          '**Automated notifications** throughout the process',
          '**Unified dashboard** with dedicated views',
        ],
        benefits: [
          'Significant time savings for teachers',
          '95% reduction in data entry errors',
          'Real-time visibility of request status',
          'Improved collaboration between administrators and accounting',
        ],
        roi: [
          { val: '÷3', label: 'Processing time' },
          { val: '−70%', label: 'Emails exchanged' },
          { val: 'KPIs', label: 'Cost rationalisation' },
        ],
      },
      {
        title: 'Automatic extraction of order numbers from PDF invoices',
        sector: 'Pharmaceutical',
        screenshots: [
          { title: '1. PDF content retrieval' },
          { title: '2. OCR reading of the PDF' },
          { title: '3. REGEX used in an Office Script' },
          { title: '4. Using the REGEX in the flow' },
        ],
        problem: [
          '**Manual extraction** of order numbers from thousands of PDF invoices to integrate into a new billing tool.',
          'Time-consuming process generating **error risks** and billing delays.',
        ],
        users: [
          '2 people mobilised full-time',
          '10,000 backlogged invoices to process',
          'Continuous stream of PDFs received from the old system',
        ],
        solution:
          'A Power Automate flow integrated with SharePoint for **automated OCR reading** of PDF invoices, precisely detecting their **order numbers** via a REGEX.',
        features: [
          'Automated flow scanning documents in a SharePoint library',
          '**OCR reading** via AI Builder to extract the order number',
          '**Automatic renaming** of valid files',
          '**Moving** non-conforming cases to a review folder',
        ],
        benefits: [
          '90% of manual work eliminated',
          'Simplified integration without re-entry',
          'One click to process thousands of invoices',
        ],
        roi: [
          { val: '−80%', label: 'Processing costs' },
          { val: '✓', label: 'Audit traceability' },
          { val: '♻', label: 'Reusable flow' },
        ],
      },
      {
        title: 'Automated contract filing into a Contract Repository',
        sector: 'Procurement',
        screenshots: [
          { title: '1. Send to repository button' },
          { title: '2. Metadata entry form' },
          { title: '3. Document moved to the repository' },
          { title: '4. Advanced search engine' },
        ],
        problem: [
          'Finalised contracts were **scattered among working documents**.',
          'Result: a **lengthy and unreliable search** to find the latest active contract or supplier history.',
        ],
        users: [
          'Procurement team (10 people)',
          '~50 finalised contracts to file per month',
          'Working documents mixed with signed contracts',
        ],
        solution:
          'A Power Automate flow opening a **metadata entry form** (supplier, amount, expiry date…) then moving the contract to a dedicated SharePoint library with an **advanced search engine**.',
        features: [
          '**Manual trigger** via button: metadata entry form',
          '**Automated filing** to the repository with metadata update',
          '**Automatic Teams alerts** as the expiry date approaches',
          '**Contract status update** after its end date',
        ],
        benefits: [
          'Guided filing in a few clicks',
          'Search time reduced by 3x',
          'Proactive Teams alerts to anticipate renewals',
        ],
        roi: [
          { val: '÷3', label: 'Search time' },
          { val: '✓', label: 'Stronger governance' },
          { val: '0', label: 'Forgotten contracts' },
        ],
      },
    ],
  },

  notFound: {
    title: 'Page not found',
    description: 'This page does not exist or has been moved. Go back to the home page or explore the blog.',
    home: 'Back to home',
    blog: 'View the blog',
  },
}
