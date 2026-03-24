import { ResumeData } from "../types";


export const resumeData: ResumeData = {
  personalInfo: {
    name: "Hariharan",
    title: "Hello, I'm Hariharan",
    description: [
      "Software developer focused on building scalable web applications and distributed systems. I work with modern technologies to create efficient solutions for complex problems.",
      "Currently exploring peer-to-peer architectures, blockchain applications, and AI-powered platforms while contributing to open-source projects."
    ],
    profileImage: "/dp.webp"
  },
  socialLinks: [
    { 
      href: '/Hariharan-Resume.pdf', 
      text: 'Resume',
      external: false
    },
    { 
      href: 'https://github.com/hariharan9572', 
      text: 'GitHub',
      external: true
    },
    { 
      href: 'https://www.linkedin.com/in/hariharan9572', 
      text: 'LinkedIn',
      external: true
    },
    { 
      href: 'mailto:hello@hariharana.com', 
      text: 'Email',
      external: false
    },
    { 
      href: 'https://hariharana.com', 
      text: 'View Portfolio',
      external: true
    },
  ],
  skillGroups: [
    {
      title: 'Backend',
      skills: ['Java', 'Spring', 'Spring Boot', 'REST API', 'Webhooks', 'Maven'],
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML', 'CSS', 'Axios'],
    },
    {
      title: 'Data & Infra',
      skills: ['PostgreSQL', 'MySQL', 'Firebase', 'AWS', 'Docker', 'Linux'],
    },
    {
      title: 'Mobile & Search',
      skills: ['Kotlin', 'XML', 'Python', 'Apache Lucene', 'MCP', 'AI/ML'],
    },
  ],
  personalProjects: [
    {
      title: 'Vectora',
      description: 'Java 25 + Maven search engine with Apache Lucene, multi-source ingestion, index-first APIs, and MCP retrieval tooling for agents.',
      url: 'https://github.com/mohanmca/Vectora',
    },
    {
      title: 'Connect',
      description: 'Full-stack community platform with secure auth, interest-based communities, threaded discussions, votes, and personalized feeds.',
      url: 'https://github.com/hariharan9572/connect',
    },
    {
      title: 'FleetCore',
      description: 'Transportation ERP/TMS covering enquiry, dispatch, trip execution, POD, invoicing, and operations-to-finance workflow controls.',
      url: 'https://github.com/hariharan9572/fleetcore',
    },
    {
      title: 'E-Commerce',
      description: 'AI-powered commerce platform with Spring Boot, React/Vite, PGVector retrieval, semantic search, and AI-assisted product workflows.',
      url: 'https://github.com/hariharan9572/springEcom',
    },
    {
      title: 'JobApp',
      description: 'Server-rendered Java and Spring Boot job portal with MVC structure, form handling, and dynamic job listings by role and tech stack.',
      url: 'https://github.com/hariharan9572/JobApp',
    },
  ],
  clientProjects: [
    {
      title: 'Droptruck',
      description: 'Production logistics platform work covering lead ingestion, WhatsApp messaging, live tracking, call masking, and reliability improvements.',
      url: 'https://droptruck.in/',
    },
    {
      title: 'Drop Trucker',
      description: 'Kotlin and Firebase Android driver app covering bidding, trip confirmation, geofenced status updates, POD uploads, alerts, and live operations.',
      url: 'https://play.google.com/store/apps/details?id=com.droptruck.haulers&hl=en_IN',
    },
  ],
  experiences: [
    {
      title: 'Associate Software Developer — Wehaul Logistics Private Limited',
      period: '2024 - Present',
      description: 'Building and maintaining production software for logistics operations across backend services, integrations, internal workflows, and customer-facing product features.',
    },
    {
      title: 'Software Development Intern — Acceleron Labs Private Limited',
      period: 'Nov 2023 - Apr 2024',
      description: 'Contributed to product delivery during a six-month internship, supporting application development and engineering workflows across shipped features.',
    },
  ],
  awards: [
    {
      title: 'Technical Support Fundamentals',
      organization: 'Google | Coursera · Credential ID HUFN44B6TNDH',
    },
    {
      title: 'Java Spring Framework, Spring Boot, Spring AI',
      organization: 'Udemy · Jan 2026 · 55 total hours',
    },
    {
      title: 'Internship Completion Certificate',
      organization: 'Acceleron Labs Private Limited · Software Development Internship',
    },
    {
      title: 'Android App Development',
      organization: 'Externsclub · Training completion · Aug 2023 - Sep 2023',
    },
  ],
}
