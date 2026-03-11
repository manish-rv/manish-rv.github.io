const CHATBOT = {
  botName: "Manish's Assistant",
  greeting: "Hey! I'm Manish's portfolio assistant. Ask me anything about his skills, experience, or how to get in touch.",
  suggestions: [
    "What does Manish do?",
    "What are his skills?",
    "How can I contact him?",
    "Tell me about his experience",
  ],
  qa: [
    {
      keywords: ["who", "about", "introduce", "tell me about", "what does", "what do"],
      answer: "Manish is a Senior Salesforce Developer & Manager with 5+ years of experience. He specializes in architecting scalable Salesforce solutions for the finance and travel sectors, and has recently pioneered AI-driven support ecosystems using Agentforce and Data Cloud.",
    },
    {
      keywords: ["skill", "tech", "stack", "tools", "language", "know"],
      answer: "His core skills include: Salesforce Development, Apex, LWC, SOQL, Agentforce, Data Cloud, Python, Jira, and Postman. He also works with AI tools to build full-stack applications.",
    },
    {
      keywords: ["experience", "work", "career", "job", "company", "where"],
      answer: "Manish currently works as a Platform Enablement Functional Manager at Egencia (an Amex GBT company), where he led the implementation of MIAW chat and a knowledge agent using Agentforce & Data Cloud. Previously, he was a Software Engineer at Egencia (2021-2023) and an Intermediate Software Engineer at Transamerica Life Insurance (2020-2021).",
    },
    {
      keywords: ["current", "now", "present", "today", "doing"],
      answer: "He's currently a Platform Enablement Functional Manager at Egencia (Amex GBT), leading Salesforce platform initiatives including AI-driven chat systems and knowledge agents using Agentforce and Data Cloud.",
    },
    {
      keywords: ["contact", "email", "reach", "hire", "connect", "touch"],
      answer: "You can reach Manish at manish.rv2@gmail.com, connect on LinkedIn (linkedin.com/in/manish-rv), or check out his GitHub (github.com/manish-rv). He's open to full-time roles and contract work!",
    },
    {
      keywords: ["education", "degree", "university", "college", "study", "school"],
      answer: "Manish holds a Master of Science in Computer Science and a Bachelor of Engineering in Computer Engineering.",
    },
    {
      keywords: ["location", "based", "live", "where are"],
      answer: "Manish is based in Washington, USA.",
    },
    {
      keywords: ["salesforce", "apex", "lwc", "soql"],
      answer: "Salesforce is Manish's primary domain. He's proficient in Apex, LWC, SOQL, Flows, Service Cloud, Agentforce, and Data Cloud. He has built enterprise-grade integration frameworks, data sync packages, and AI-driven support systems on the Salesforce platform.",
    },
    {
      keywords: ["agentforce", "data cloud", "ai", "agent"],
      answer: "Manish has hands-on experience deploying Agentforce and Data Cloud to build autonomous, intelligent agents for internal knowledge management. He led the implementation of AI-driven chat systems using Salesforce Messaging for In-App and Web (MIAW).",
    },
    {
      keywords: ["available", "status", "open", "freelance", "contract"],
      answer: "Yes! Manish is currently available and open to full-time roles and contract work. If you have something interesting to build, reach out at manish.rv2@gmail.com.",
    },
    {
      keywords: ["hobby", "hobbies", "interest", "fun", "outside", "free time"],
      answer: "Outside of work, Manish enjoys working with AI tools to build full-stack apps and playing outdoor sports.",
    },
    {
      keywords: ["hello", "hi", "hey", "sup", "yo", "greet"],
      answer: "Hey there! Feel free to ask me anything about Manish — his skills, experience, or how to get in touch.",
    },
  ],
  fallback: "I'm not sure about that one. Try asking about Manish's skills, experience, education, or how to contact him!",
};
