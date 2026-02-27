// ─────────────────────────────────────────────
// content.js  —  All portfolio text content lives here.
// Edit this file to update any text on the site.
// ─────────────────────────────────────────────

export const nav = {
  name: "MANISH",
  surname: "RUDRA VIJAYAKUMAR",
  cta: { label: "Hire Me →", href: "mailto:manish.rv2@gmail.com" },
  links: [
    { label: "01 About",      href: "#about" },
    { label: "02 Experience", href: "#experience" },
    { label: "03 Projects",   href: "#projects" },
    { label: "04 Contact",    href: "#contact" },
  ],
};

export const hero = {
  tags: ["Software Engineer", "Salesforce Dev", "5 Years Exp."],
  firstName: "MANISH",
  lastName: "RUDRA VIJAYAKUMAR",
  role: "Salesforce Developer · Full-Stack Engineer",
  bio: `Building enterprise-grade Salesforce platforms and full-stack web products.
        Clean architecture. Fast interfaces. Code that scales.
        Currently open to <strong>full-time &amp; contract</strong> roles.`,
  stats: [
    { value: "05", label: "Years Experience" },
    { value: "12+", label: "Enterprise Projects" },
    { value: "03", label: "Certifications" },
  ],
  cta: [
    { label: "View Work →", href: "#projects", primary: true },
    { label: "Contact",     href: "#contact",  primary: false },
  ],
  scrollLabel: "Scroll",
};

export const marqueeSkills = [
  "Salesforce Developer", "Apex", "LWC", "React", "Node.js",
  "Python", "REST API", "SQL", "Agile", "MuleSoft",
  "Einstein Analytics", "Full Stack",
];

export const about = {
  sectionNumber: "01",
  sectionLabel: "About Me",
  heading: ["TURNING", "COMPLEXITY", "INTO CODE."],
  bio: [
    `I'm a software engineer who spent 5 years deep in the Salesforce ecosystem — building
     platforms for healthcare, finance, and Fortune 500 companies. I've shipped Apex triggers
     at 3am, architected multi-cloud MuleSoft integrations, and led teams through gnarly migrations.`,
    `Outside of Salesforce, I build full-stack apps with React and Node.js, and I hold a Master's
     in Computer Science with a published ML paper.`,
  ],
  skills: ["Salesforce", "Apex", "LWC", "React", "Python", "Node.js", "MuleSoft", "SQL"],
  info: [
    { label: "Location",  value: "New York, USA" },
    { label: "Status",    value: "Available", blink: true },
    { label: "Education", value: "M.S. Computer Science" },
    { label: "Degree",    value: "B.E. Computer Eng." },
  ],
};

export const experience = {
  sectionNumber: "02",
  sectionLabel: "Experience",
  heading: ["WHERE I'VE", "BEEN."],
  summary: "5 years across Salesforce ecosystems, enterprise integration, and academic research.",
  items: [
    {
      role: "Senior Salesforce Developer",
      company: "Accenture",
      period: "2022 – PRESENT",
      description: `Led end-to-end implementation of Sales Cloud and Service Cloud for Fortune 500 clients.
        Architected Apex solutions, automated workflows using Flow, and integrated Salesforce with ERP systems
        via REST/SOAP — reducing manual processing by 40%.`,
      tags: ["Apex", "LWC", "Sales Cloud", "Service Cloud", "MuleSoft"],
      tagStyle: "primary",
    },
    {
      role: "Salesforce Developer",
      company: "Deloitte Digital",
      period: "2020 – 2022",
      description: `Built custom Salesforce apps for healthcare. Developed Patient Journey automation using
        Process Builder and Flows, designed Einstein Analytics dashboards, and maintained
        HIPAA-compliant third-party integrations.`,
      tags: ["Apex", "Health Cloud", "Einstein Analytics", "Visualforce"],
      tagStyle: "primary",
    },
    {
      role: "Junior Salesforce Developer",
      company: "TechMahindra",
      period: "2019 – 2020",
      description: `Began career building CPQ solutions and custom reports for sales teams. Worked Agile
        sprints, wrote Apex triggers and test classes, mentored 3 junior developers with technical
        documentation.`,
      tags: ["CPQ", "Apex Triggers", "SOQL", "Agile"],
      tagStyle: "primary",
    },
    {
      role: "M.S. Computer Science",
      company: "State University of New York",
      period: "2017 – 2019",
      description: `Focused on Distributed Systems and Machine Learning. Thesis on graph-based recommendation
        engines. Published at ICSE student symposium on CI/CD pipeline automation.`,
      tags: ["Machine Learning", "Distributed Systems", "Research"],
      tagStyle: "secondary",
    },
    {
      role: "B.E. Computer Engineering",
      company: "Mumbai University",
      period: "2013 – 2017",
      description: `Built foundations in algorithms, data structures, OS, and networking. Led the coding
        club and organized 2 hackathons with 200+ participants each.`,
      tags: ["Algorithms", "Systems Design", "Hackathons"],
      tagStyle: "secondary",
    },
  ],
};

export const projects = {
  sectionNumber: "03",
  sectionLabel: "Selected Work",
  heading: ["THINGS I'VE", "SHIPPED."],
  githubAllHref: "https://github.com",
  items: [
    {
      index: "01",
      title: "SF Analytics Dashboard",
      stack: "LWC · D3.js · Apex",
      description: "Real-time Salesforce data visualizer. Live org metrics, pipeline health, " +
        "and SLA compliance in one glassmorphism interface.",
      tags: ["LWC", "D3.js", "Apex"],
      githubHref: "https://github.com",
      videoSrc: null, // replace with actual video URL e.g. "/videos/sf-dashboard.mp4"
    },
    {
      index: "02",
      title: "RecSys — Graph Recommender",
      stack: "Python · PyTorch · Neo4j",
      description: "Masters thesis. GNN-based recommendation engine with 23% higher CTR than " +
        "collaborative filtering baselines. Flask microservice.",
      tags: ["Python", "PyTorch", "Neo4j"],
      githubHref: "https://github.com",
      videoSrc: null,
    },
    {
      index: "03",
      title: "DevPulse — CI/CD Monitor",
      stack: "React · Node.js · WS",
      description: "ICSE paper project. Unified real-time dashboard aggregating GitHub Actions, " +
        "Jenkins, and CircleCI health metrics.",
      tags: ["React", "Node.js", "WebSockets"],
      githubHref: "https://github.com",
      videoSrc: null,
    },
    {
      index: "04",
      title: "Campus Connect",
      stack: "Django · PostgreSQL",
      description: "UG capstone. Social network for university students — events, study groups, " +
        "resource sharing. Mobile-first Django app.",
      tags: ["Django", "PostgreSQL", "Bootstrap"],
      githubHref: "https://github.com",
      videoSrc: null,
    },
  ],
};

export const contact = {
  sectionNumber: "04",
  sectionLabel: "Contact",
  heading: ["LET'S", "WORK", "TOGETHER."],
  body: "Open to full-time roles and contract work. If you have something interesting to build — let's talk.",
  links: [
    { label: "Send Email →", href: "mailto:manish.rv2@gmail.com", primary: true },
    { label: "LinkedIn",     href: "https://linkedin.com",          primary: false },
    { label: "GitHub",       href: "https://github.com",            primary: false },
    { label: "Resume ↓",     href: "#",                             primary: false },
  ],
  footer: {
    copyright: "© 2026 Manish Rudra Vijayakumar",
    location: "Washington, USA",
    email: "manish.rv2@gmail.com",
  },
};
