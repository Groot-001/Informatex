import {
  ServiceItem,
  GalleryEvent,
  Testimonial,
  WhyChooseUsItem,
  OfficeLocation,
  TeamMember,
} from "../types";

export const COMPANY_STATS = [
  { value: "99.99%", label: "SLA Uptime Guaranteed" },
  { value: "450+", label: "Enterprise Deployments" },
  { value: "$1.2B+", label: "Client Revenue Optimized" },
  { value: "40+", label: "Global Tech Awards" },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "app-development",
    title: "App Development",
    subtitle:
      "Native and cross-platform mobile apps built for performance, scale, and intuitive user experience.",
    description:
      "Boost your business with our App Development services. At Informatec Tech, we build responsive, secure, and high-performance web apps tailored to your needs. Trust our expert developers to create solutions that enhance user experience and drive growth.",
    category: "Development",
    iconName: "Smartphone",
    featured: true,
    fullDetails: {
      overview:
        "From idea to implementation, we develop robust, intuitive apps that align with your business goals. Our solutions ensure smooth functionality and optimal user experience across platforms.",
      keyFeatures: [
        "iOS & Android native and cross-platform development",
        "API-first architecture with real-time synchronization",
        "Offline-first capabilities and local caching",
        "App store publishing and post-launch support",
      ],
      deliverables: [
        "Fully functional mobile/web application source code",
        "UI/UX design system and interactive prototypes",
        "App store assets and deployment documentation",
      ],
      technologies: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Firebase",
        "Node.js",
      ],
    },
  },
  {
    id: "seo",
    title: "SEO CONTENT WRITING",
    subtitle:
      "Data-driven search optimization that increases visibility, traffic, and qualified leads.",
    description:
      "Boost your IT website's online presence with our expert SEO content writing services. At Informatex Tech, we craft high-quality, keyword-rich content that improves search engine rankings and engages your audience. Trust us to drive organic traffic and convert visitors into loyal customers.",
    category: "Marketing",
    iconName: "Search",
    featured: true,
    fullDetails: {
      overview:
        "Engage audiences with targeted, SEO-rich content that drives traffic and enhances your brand's visibility, helping you connect effectively with your market.",
      keyFeatures: [
        "Comprehensive technical SEO audits",
        "Keyword research and content gap analysis",
        "On-page, off-page, and local SEO strategies",
        "Core Web Vitals and site speed optimization",
      ],
      deliverables: [
        "Actionable SEO roadmap and keyword strategy",
        "Monthly performance reporting and rankings tracker",
        "Optimized content briefs and metadata updates",
      ],
      technologies: [
        "Google Search Console",
        "Ahrefs",
        "SEMrush",
        "Screaming Frog",
        "PageSpeed Insights",
      ],
    },
  },
  {
    id: "data-strategy",
    title: "Data Strategy",
    subtitle:
      "A roadmap for collecting, governing, and leveraging data as a strategic business asset.",
    description:
      "Align data with business strategy through our custom solutions, maximizing the value of data to support growth and operational efficiency.",
    category: "Analytics",
    iconName: "GitBranch",
    featured: false,
    fullDetails: {
      overview:
        "Align data with business strategy through our custom solutions, maximizing the value of data to support growth and operational efficiency.",
      keyFeatures: [
        "Data maturity assessment and roadmap",
        "Data governance and compliance frameworks",
        "Cloud data architecture planning",
        "Metrics definition and KPI alignment",
      ],
      deliverables: [
        "Comprehensive data strategy blueprint",
        "Governance policy and data ownership model",
        "Implementation roadmap and cost estimates",
      ],
      technologies: ["AWS", "Azure", "Snowflake", "dbt", "Looker", "Tableau"],
    },
  },
  {
    id: "data-analysis",
    title: "Data Analysis",
    subtitle:
      "Transform raw data into actionable insights that drive smarter business decisions.",
    description:
      "We clean, model, and visualize your data to uncover trends, measure performance, and support strategic planning with evidence-backed recommendations.",
    category: "Analytics",
    iconName: "BarChart3",
    featured: true,
    fullDetails: {
      overview:
        "Our data analysts turn fragmented datasets into coherent narratives, enabling leadership to act quickly and confidently on market and operational signals.",
      keyFeatures: [
        "Exploratory data analysis and segmentation",
        "Custom dashboards and KPI reporting",
        "Statistical modeling and forecasting",
        "Data cleaning and pipeline validation",
      ],
      deliverables: [
        "Interactive dashboards and executive summaries",
        "Clean, documented analysis notebooks",
        "Recommendations report with prioritized actions",
      ],
      technologies: [
        "Python",
        "SQL",
        "Tableau",
        "Power BI",
        "Google BigQuery",
        "Excel",
      ],
    },
  },
  {
    id: "technical-writing",
    title: "Technical Writing",
    subtitle:
      "Clear, accurate documentation that simplifies complex products and accelerates user adoption.",
    description:
      "We deliver precise, easy-to-understand documentation tailored to your audience. Our expert writers make complex information accessible, improving usability and customer satisfaction.",
    category: "Content",
    iconName: "FileText",
    featured: false,
    fullDetails: {
      overview:
        "We deliver precise, easy-to-understand documentation tailored to your audience. Our expert writers make complex information accessible, improving usability and customer satisfaction.",
      keyFeatures: [
        "API documentation and developer guides",
        "Product manuals and end-user help centers",
        "Knowledge base architecture and content strategy",
        "Information architecture and content audits",
      ],
      deliverables: [
        "Complete documentation suite in your preferred format",
        "OpenAPI/Swagger-integrated API docs",
        "Editorial style guide and maintenance plan",
      ],
      technologies: [
        "Markdown",
        "Docusaurus",
        "Slate",
        "Confluence",
        "Notion",
        "Stoplight",
      ],
    },
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    subtitle:
      "Engaging social strategies that build brand awareness and convert followers into customers.",
    description:
      "Expand your reach with strategic social media campaigns. We optimize engagement, boost brand awareness, and drive results across popular platforms.",
    category: "Marketing",
    iconName: "Share2",
    featured: false,
    fullDetails: {
      overview:
        "Expand your reach with strategic social media campaigns. We optimize engagement, boost brand awareness, and drive results across popular platforms.",
      keyFeatures: [
        "Content calendar creation and publishing",
        "Paid social campaign management",
        "Community management and audience engagement",
        "Performance analytics and growth reporting",
      ],
      deliverables: [
        "Monthly content plan and creative assets",
        "Campaign performance report",
        "Audience growth and engagement strategy",
      ],
      technologies: [
        "Meta Business Suite",
        "LinkedIn Campaign Manager",
        "Hootsuite",
        "Buffer",
        "Canva",
      ],
    },
  },
  {
    id: "web-design",
    title: "Web Design",
    subtitle:
      "Beautiful, conversion-focused websites that elevate your brand and user experience.",
    description:
      "Our creative designers craft visually appealing, user-friendly websites that enhance brand presence and ensure a seamless online experience.",
    category: "Design",
    iconName: "Palette",
    featured: false,
    fullDetails: {
      overview:
        "Our creative designers craft visually appealing, user-friendly websites that enhance brand presence and ensure a seamless online experience.",
      keyFeatures: [
        "Responsive and mobile-first design",
        "UX research, wireframing, and prototyping",
        "Design systems and component libraries",
        "Accessibility (WCAG) compliant interfaces",
      ],
      deliverables: [
        "High-fidelity UI designs and prototypes",
        "Component-based design system",
        "Accessibility and interaction specifications",
      ],
      technologies: ["Figma", "Adobe XD", "Webflow", "Framer", "Tailwind CSS"],
    },
  },
  {
    id: "analytics",
    title: "SEO",
    subtitle:
      "A roadmap for collecting, governing, and leveraging data as a strategic business asset.",
    description:
      "Increase your search engine ranking with our expert SEO services. We enhance your digital footprint, driving organic traffic and expanding audience reach.",
    category: "Analytics",
    iconName: "GitBranch",
    featured: false,
    fullDetails: {
      overview:
        "Increase your search engine ranking with our expert SEO services. We enhance your digital footprint, driving organic traffic and expanding audience reach.",
      keyFeatures: [
        "Data maturity assessment and roadmap",
        "Data governance and compliance frameworks",
        "Cloud data architecture planning",
        "Metrics definition and KPI alignment",
      ],
      deliverables: [
        "Comprehensive data strategy blueprint",
        "Governance policy and data ownership model",
        "Implementation roadmap and cost estimates",
      ],
      technologies: ["AWS", "Azure", "Snowflake", "dbt", "Looker", "Tableau"],
    },
  },
];

export const GALLERY_EVENTS: GalleryEvent[] = [
  {
    id: "event-1",
    title: "Global Financial Cloud Migration Launch",
    subtitle: "Zero-downtime migration for 140 core banking microservices",
    date: "March 12, 2025",
    location: "Zurich, Switzerland",
    description:
      "Celebrating the successful deployment of a hybrid Kubernetes platform handling over 4 million daily transactions with zero downtime.",
    category: "Project Launch",
    coverImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    photos: [
      {
        id: "p1-1",
        url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
        caption: "Migration command center",
        width: 1200,
        height: 800,
      },
      {
        id: "p1-2",
        url: "https://images.pexels.com/photos/5480781/pexels-photo-5480781.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
        caption: "Live server rack monitoring",
        width: 1200,
        height: 900,
      },
      {
        id: "p1-3",
        url: "https://images.pexels.com/photos/7793179/pexels-photo-7793179.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1500&w=1200",
        caption: "Engineering team celebration",
        width: 1200,
        height: 1500,
      },
      {
        id: "p1-4",
        url: "https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
        caption: "Client stakeholders at launch briefing",
        width: 1200,
        height: 800,
      },
      {
        id: "p1-5",
        url: "https://images.pexels.com/photos/5092815/pexels-photo-5092815.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1200",
        caption: "Data center compute floor",
        width: 1200,
        height: 1400,
      },
      {
        id: "p1-6",
        url: "https://images.pexels.com/photos/7889239/pexels-photo-7889239.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
        caption: "Post-launch team celebration",
        width: 1200,
        height: 800,
      },
    ],
  },
  {
    id: "event-2",
    title: "Annual Engineering & Architecture Summit",
    subtitle: "Cross-functional collaboration across 14 global offices",
    date: "February 8, 2025",
    location: "London, United Kingdom",
    description:
      "Senior architects, cloud leads, and security researchers gathered to define the 2026 technical roadmap and share breakthrough innovations.",
    category: "Team Summit",
    coverImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    photos: [
      {
        id: "p2-1",
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
        caption: "Opening keynote address",
        width: 1200,
        height: 800,
      },
      {
        id: "p2-2",
        url: "https://images.pexels.com/photos/6950031/pexels-photo-6950031.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
        caption: "Strategy discussion panel",
        width: 1200,
        height: 800,
      },
      {
        id: "p2-3",
        url: "https://images.pexels.com/photos/7433850/pexels-photo-7433850.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1200",
        caption: "Whiteboard architecture session",
        width: 1200,
        height: 1400,
      },
      {
        id: "p2-4",
        url: "https://images.pexels.com/photos/7794060/pexels-photo-7794060.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
        caption: "Roadmap presentation",
        width: 1200,
        height: 800,
      },
      {
        id: "p2-5",
        url: "https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1500&w=1200",
        caption: "Breakout working groups",
        width: 1200,
        height: 1500,
      },
      {
        id: "p2-6",
        url: "https://images.pexels.com/photos/7433853/pexels-photo-7433853.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
        caption: "Evening networking reception",
        width: 1200,
        height: 900,
      },
      {
        id: "p2-7",
        url: "https://images.pexels.com/photos/7682459/pexels-photo-7682459.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
        caption: "Team celebrating milestones",
        width: 1200,
        height: 800,
      },
    ],
  },
  {
    id: "event-3",
    title: "AI Innovation Lab Grand Opening",
    subtitle: "State-of-the-art research facility in New York",
    date: "January 15, 2025",
    location: "New York, USA",
    description:
      "Official opening of our new 18,000 sq ft AI Innovation Lab featuring liquid-cooled GPU clusters and private RAG infrastructure.",
    category: "Innovation Lab",
    coverImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    photos: [
      {
        id: "p3-1",
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
        caption: "Ribbon cutting ceremony",
        width: 1200,
        height: 800,
      },
      {
        id: "p3-2",
        url: "https://images.pexels.com/photos/17489157/pexels-photo-17489157.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1200",
        caption: "GPU compute floor",
        width: 1200,
        height: 1400,
      },
      {
        id: "p3-3",
        url: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
        caption: "Research team in the lab",
        width: 1200,
        height: 800,
      },
      {
        id: "p3-4",
        url: "https://images.pexels.com/photos/17489155/pexels-photo-17489155.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1500&w=1200",
        caption: "Network cabling infrastructure",
        width: 1200,
        height: 1500,
      },
      {
        id: "p3-5",
        url: "https://images.pexels.com/photos/1181320/pexels-photo-1181320.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
        caption: "Client demo area",
        width: 1200,
        height: 900,
      },
      {
        id: "p3-6",
        url: "https://images.pexels.com/photos/7580801/pexels-photo-7580801.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
        caption: "Opening day celebration",
        width: 1200,
        height: 800,
      },
    ],
  },
  {
    id: "event-4",
    title: "Smart City IoT Telemetry Workshop",
    subtitle: "Singapore Smart Nation Initiative Collaboration",
    date: "November 20, 2024",
    location: "Singapore",
    description:
      "Two-day hands-on workshop connecting 85,000+ IoT sensors across traffic, energy, and environmental domains with real-time analytics dashboards.",
    category: "Client Workshop",
    coverImage:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
    photos: [
      {
        id: "p4-1",
        url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80",
        caption: "Live telemetry dashboard",
        width: 1200,
        height: 800,
      },
      {
        id: "p4-2",
        url: "https://images.pexels.com/photos/7433851/pexels-photo-7433851.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1200",
        caption: "Workshop participants",
        width: 1200,
        height: 1400,
      },
      {
        id: "p4-3",
        url: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
        caption: "Hardware integration lab",
        width: 1200,
        height: 800,
      },
      {
        id: "p4-4",
        url: "https://images.pexels.com/photos/7794060/pexels-photo-7794060.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1500&w=1200",
        caption: "Final presentation to stakeholders",
        width: 1200,
        height: 1500,
      },
      {
        id: "p4-5",
        url: "https://images.pexels.com/photos/6950031/pexels-photo-6950031.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
        caption: "Technical Q&A session",
        width: 1200,
        height: 900,
      },
    ],
  },
  {
    id: "event-5",
    title: "Enterprise Cybersecurity Red Team Drill",
    subtitle: "Full-scale zero-trust penetration testing exercise",
    date: "October 3, 2024",
    location: "Austin, USA",
    description:
      "A 72-hour continuous red-team offensive simulation testing our zero-trust architecture against advanced persistent threat scenarios.",
    category: "Client Workshop",
    coverImage:
      "https://images.pexels.com/photos/34258667/pexels-photo-34258667.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    photos: [
      {
        id: "p5-1",
        url: "https://images.pexels.com/photos/34258667/pexels-photo-34258667.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
        caption: "Red team command station",
        width: 1200,
        height: 800,
      },
      {
        id: "p5-2",
        url: "https://images.pexels.com/photos/5380603/pexels-photo-5380603.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1200",
        caption: "Live threat monitoring wall",
        width: 1200,
        height: 1400,
      },
      {
        id: "p5-3",
        url: "https://images.pexels.com/photos/37755432/pexels-photo-37755432.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
        caption: "Exploit analysis session",
        width: 1200,
        height: 900,
      },
      {
        id: "p5-4",
        url: "https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
        caption: "Vulnerability assessment",
        width: 1200,
        height: 800,
      },
      {
        id: "p5-5",
        url: "https://images.pexels.com/photos/37787963/pexels-photo-37787963.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1500&w=1200",
        caption: "Incident response simulation",
        width: 1200,
        height: 1500,
      },
    ],
  },
  {
    id: "event-6",
    title: "Product Engineering Sprint Retrospective",
    subtitle: "Quarterly cross-team delivery showcase",
    date: "September 18, 2024",
    location: "San Francisco, USA",
    description:
      "Our product and engineering pods presented quarterly wins, shared architecture decisions, and celebrated shipped features together.",
    category: "Team Summit",
    coverImage:
      "https://images.pexels.com/photos/7693713/pexels-photo-7693713.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    photos: [
      {
        id: "p6-1",
        url: "https://images.pexels.com/photos/7693713/pexels-photo-7693713.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
        caption: "Quarterly showcase celebration",
        width: 1200,
        height: 800,
      },
      {
        id: "p6-2",
        url: "https://images.pexels.com/photos/27892094/pexels-photo-27892094.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1200",
        caption: "Team achievement party",
        width: 1200,
        height: 1400,
      },
      {
        id: "p6-3",
        url: "https://images.pexels.com/photos/7433850/pexels-photo-7433850.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
        caption: "Sprint retrospective discussion",
        width: 1200,
        height: 800,
      },
      {
        id: "p6-4",
        url: "https://images.pexels.com/photos/7682459/pexels-photo-7682459.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1500&w=1200",
        caption: "High-fives after shipping features",
        width: 1200,
        height: 1500,
      },
    ],
  },
  {
    id: "event-7",
    title: "Informatech Developer Conference 2024",
    subtitle: "Flagship annual industry technology conference",
    date: "June 24, 2024",
    location: "Berlin, Germany",
    description:
      "Over 1,200 developers, architects, and technology leaders convened for two days of deep-dive workshops and keynote sessions.",
    category: "Industry Conference",
    coverImage:
      "https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    photos: [
      {
        id: "p7-1",
        url: "https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
        caption: "Main stage keynote",
        width: 1200,
        height: 800,
      },
      {
        id: "p7-2",
        url: "https://images.pexels.com/photos/7433853/pexels-photo-7433853.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1200",
        caption: "Panel discussion on AI ethics",
        width: 1200,
        height: 1400,
      },
      {
        id: "p7-3",
        url: "https://images.pexels.com/photos/7794060/pexels-photo-7794060.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
        caption: "Live technical demo",
        width: 1200,
        height: 900,
      },
      {
        id: "p7-4",
        url: "https://images.pexels.com/photos/6950031/pexels-photo-6950031.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
        caption: "Breakout workshop room",
        width: 1200,
        height: 800,
      },
      {
        id: "p7-5",
        url: "https://images.pexels.com/photos/7433851/pexels-photo-7433851.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1500&w=1200",
        caption: "Networking lounge",
        width: 1200,
        height: 1500,
      },
      {
        id: "p7-6",
        url: "https://images.pexels.com/photos/7889239/pexels-photo-7889239.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
        caption: "Closing celebration",
        width: 1200,
        height: 800,
      },
    ],
  },
  {
    id: "event-8",
    title: "Data Platform Modernization Kickoff",
    subtitle: "Enterprise data lakehouse transformation project launch",
    date: "August 5, 2024",
    location: "Frankfurt, Germany",
    description:
      "Kickoff workshop for a multi-phase data lakehouse migration, aligning stakeholders on governance, architecture, and delivery milestones.",
    category: "Project Launch",
    coverImage:
      "https://images.pexels.com/photos/17489155/pexels-photo-17489155.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    photos: [
      {
        id: "p8-1",
        url: "https://images.pexels.com/photos/17489155/pexels-photo-17489155.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
        caption: "Data architecture whiteboarding",
        width: 1200,
        height: 800,
      },
      {
        id: "p8-2",
        url: "https://images.pexels.com/photos/5092815/pexels-photo-5092815.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1200",
        caption: "Infrastructure planning session",
        width: 1200,
        height: 1400,
      },
      {
        id: "p8-3",
        url: "https://images.pexels.com/photos/7794060/pexels-photo-7794060.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
        caption: "Stakeholder alignment meeting",
        width: 1200,
        height: 900,
      },
      {
        id: "p8-4",
        url: "https://images.pexels.com/photos/1181320/pexels-photo-1181320.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
        caption: "Engineer reviewing data pipelines",
        width: 1200,
        height: 800,
      },
    ],
  },
];

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: "engineering-excellence",
    title: "Top 1% Senior Engineering Talent",
    description:
      "We do not employ junior generalists. Every Informatech project is led by battle-tested architects with a minimum of 10+ years in mission-critical environments.",
    metric: "12+ Yrs",
    metricLabel: "Average Architect Experience",
    iconName: "Award",
  },
  {
    id: "speed-to-market",
    title: "Accelerated Time-to-Value",
    description:
      "Our proprietary architectural blueprint library and automated DevOps pipelines cut enterprise deployment timeframes by half without sacrificing security.",
    metric: "2.5x",
    metricLabel: "Faster Delivery Pipeline",
    iconName: "Zap",
  },
  {
    id: "security-first",
    title: "Uncompromising Security & Compliance",
    description:
      "Security is not an afterthought. Zero-Trust protocols, automated compliance checks, and encryption at rest and in transit are built into every line of code.",
    metric: "Zero",
    metricLabel: "Critical Breaches in 14 Years",
    iconName: "ShieldAlert",
  },
  {
    id: "transparent-partnership",
    title: "Predictable, Transparent Governance",
    description:
      "Enjoy complete visibility with real-time sprint metrics, transparent fixed or agile billing models, and direct access to engineering leadership.",
    metric: "98.4%",
    metricLabel: "Client Retention Rate",
    iconName: "Users",
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    quote:
      "Informatech completely reimagined our core transaction pipeline. We migrated 12 years of legacy infrastructure to AWS multi-region clusters in just 4 months with zero seconds of downtime.",
    author: "Elena Rostova",
    role: "Chief Technology Officer",
    company: "FinVanguard Global Banking",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    id: "test-2",
    quote:
      "Their AI Engineering team delivered a custom Retrieval-Augmented Generation copilot that reduced our insurance claims processing time by 68%. The ROI was realized within the first quarter.",
    author: "Marcus Vance",
    role: "VP of Digital Transformation",
    company: "Aegis Mutual Insurance",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    id: "test-3",
    quote:
      "When facing stringent new EU cybersecurity mandates, Informatech conducted a flawless audit and zero-trust overhaul. They are our trusted long-term strategic technology partner.",
    author: "Dr. Henrik Lindqvist",
    role: "Head of Infrastructure Security",
    company: "Nordic Pharma Systems",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
];

export const OFFICES_DATA: OfficeLocation[] = [
  {
    city: "Kathmandu (Global HQ)",
    country: "Nepal",
    address: "BrahmabyteLab,Kathmandu, Bagmati Province, Nepal",
    phone: "981-3440643",
    email: "hr@informatextech.com",
    hours: "Mon - Fri: 7:00 AM - 4:00 PM EST",
    coordinates: { x: 77, y: 35 },
  },
];

export interface QuickContact {
  id: string;
  name: string;
  role: string;
  desk: string;
  avatar: string;
  email: string;
  phone: string;
  availability: string;
  responseTime: string;
  specialties: string[];
}

export const QUICK_CONTACTS_DATA: QuickContact[] = [
  {
    id: "qc-1",
    name: "Alex",
    role: "Front Desk Coordinator",
    desk: "Main Reception · Lobby",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    email: "frontdesk@informatech.com",
    phone: "+1 (212) 555-0190",
    availability: "Mon - Fri, 8:00 AM - 6:00 PM EST",
    responseTime: "Replies within 1 hour",
    specialties: [
      "Visitor greetings",
      "General inquiries",
      "Meeting room bookings",
    ],
  },
  {
    id: "qc-2",
    name: "Alex",
    role: "Client Services Lead",
    desk: "Account Management Pod",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    email: "clientservices@informatech.com",
    phone: "+1 (212) 555-0192",
    availability: "Mon - Fri, 9:00 AM - 7:00 PM EST",
    responseTime: "Replies within 30 minutes",
    specialties: [
      "Project onboarding",
      "Account support",
      "Billing & contracts",
    ],
  },
  {
    id: "qc-3",
    name: "Alex",
    role: "Partnerships & Media Desk",
    desk: "Business Development Suite",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    email: "partnerships@informatech.com",
    phone: "+1 (212) 555-0194",
    availability: "Mon - Sat, 9:00 AM - 8:00 PM EST",
    responseTime: "Replies within 2 hours",
    specialties: [
      "Strategic partnerships",
      "Press & media",
      "Speaking opportunities",
    ],
  },
];

export const FAQ_DATA = [
  {
    question: "How does Informatech approach a new enterprise project?",
    answer:
      "We begin with a comprehensive 2-to-3 week Architectural & Security Discovery sprint. Our senior leads audit existing systems, understand strategic business drivers, define technical KPIs, and present a detailed roadmap with guaranteed milestones before writing code.",
  },
  {
    question: "What engagement models do you offer?",
    answer:
      "We offer three primary models: Dedicated Autonomous Engineering Pods (cross-functional teams scaling your internal capacity), Project-Based Fixed-Outcome Deliverables (for clear architectural transitions), and Strategic Executive Advisory (fractional CTO/CISO guidance).",
  },
  {
    question:
      "How do you ensure data privacy and IP security during development?",
    answer:
      "All intellectual property developed belongs 100% to your enterprise from day one. We operate strictly within SOC2 Type II compliance, utilize containerized sandboxes with synthetic data for testing, and sign binding NDAs and zero-retention agreements for AI integrations.",
  },
  {
    question: "What happens after project launch or migration?",
    answer:
      "We provide comprehensive handover documentation, thorough training workshops for your internal teams, and optional 24/7 Site Reliability Engineering (SRE) managed support with guaranteed SLAs ranging up to 99.99% uptime.",
  },
];

export const TEAM_MEMBERS_DATA: TeamMember[] = [
  {
    id: "member-1",
    name: "Alex",
    position: "Chief Executive Officer",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Leading Informatech's vision and strategic growth with 20+ years in enterprise technology.",
  },
  {
    id: "member-2",
    name: "Alex",
    position: "Chief Technology Officer",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "Architecting cutting-edge digital solutions across cloud, AI, and full-stack development.",
  },
  {
    id: "member-3",
    name: "Alex",
    position: "VP of Marketing & SEO",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    bio: "Driving data-led marketing strategies and organic growth for global brands.",
  },
  {
    id: "member-4",
    name: "Alex",
    position: "Head of Design",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    bio: "Crafting intuitive user experiences and visual identities that elevate brands.",
  },
  {
    id: "member-5",
    name: "Alex",
    position: "Lead Data Analyst",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    bio: "Turning complex datasets into actionable business intelligence and strategic recommendations.",
  },
  {
    id: "member-6",
    name: "Alex",
    position: "Head of Content & Technical Writing",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    bio: "Simplifying complex technology into clear, engaging documentation and content strategies.",
  },
];
