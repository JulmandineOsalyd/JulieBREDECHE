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
      description: 'Upskill on Power Automate with personalised one-on-one guidance.',
      bullets: [
        '1:1 video sessions',
        'Hands-on practice with your existing flows',
        'Best practices and anti-patterns',
        'Tailored programme for your skill level',
      ],
    },
    main: {
      title: 'Power Platform Solutions',
      description:
        'Design and development of custom business solutions with Microsoft 365: from requirements analysis to production deployment.',
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
        'In-depth analysis of your SharePoint environment to get the most out of it.',
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
  },

  footer: {
    tagline: 'Microsoft 365 Consultant · SharePoint · Power Platform · Copilot Studio',
    linkedinLabel: "Julie Bredeche's LinkedIn Profile",
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
        'Solution design, coaching, audit: everything you need to get the most from Microsoft 365, wherever you are in your journey.',
    },
    offer1: {
      badge: 'Main offer',
      title: 'PowerApps, Power Automate Solutions & Copilot Agents',
      p1: 'I design and develop custom business applications, intelligent automations and conversational agents for your organisation. From scoping to production deployment, through to adoption.',
      p2: 'Average workload: <strong>20 to 30 days</strong> for a complete solution.',
      cta: "Let's talk about your project",
      bullets: [
        'Custom PowerApps applications',
        'UI design and user experience (UX)',
        'Simple and advanced Power Automate flows',
        'Copilot Studio agents connected to your environment',
        'SharePoint Online portals: intranet, extranet, project spaces',
        'Functional administrator training',
        'Technical and functional documentation included',
        'Monthly maintenance package (support, minor updates)',
      ],
    },
    coaching: {
      badge: 'Coaching',
      title: 'Power Automate Coaching',
      description:
        'Upskill on Power Automate with personalised guidance. Ideal for IT teams who want to become self-sufficient on the platform, or business teams looking to automate repetitive tasks.',
      bullets: [
        '1:1 video sessions',
        'Hands-on practice with your existing flows',
        'Best practices, anti-patterns',
        'Tailored programme for your skill level',
      ],
      cta: 'Request a coaching session',
    },
    audit: {
      badge: 'Audit & Advisory',
      title: 'SharePoint Audit',
      description:
        'Your SharePoint environment has grown over time, and with it, increasingly complex management. I carry out a complete diagnostic of your architecture, permissions and usage to give you a clear picture of the current state and a concrete action plan to get the most out of it.',
      bullets: [
        'Site architecture analysis',
        'Rights and permissions assessment',
        'Metadata management optimisation',
        'Search schema management',
      ],
      cta: 'Request an audit',
    },
    method: {
      label: 'How I work',
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
    cta: {
      title: 'Ready to get started?',
      description:
        'Describe your project in a few lines. I will reply within 24 hours with a discovery call proposal (30 min, free).',
      contact: 'Contact me →',
      linkedin: 'Contact me on LinkedIn',
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
      'Tutorials, experience reports and analysis of current challenges in SharePoint, Power Platform and Copilot. For Microsoft 365 teams who want to go further.',
    empty: 'No articles in this category yet.',
    categories: {
      all: 'All',
      serie: 'Copilot A to Z',
      serieLabel: 'SERIES',
      serieCard: 'Series: Copilot A to Z',
    },
    readingMin: 'min read',
    article: {
      home: 'Home',
      relatedTitle: 'Related articles',
      authorRole: 'Independent M365 Consultant',
      authorSpeciality: 'SharePoint & Power Platform specialist',
      learnMore: 'Learn more',
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
