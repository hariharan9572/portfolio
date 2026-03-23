import { ResumeData } from "../types";


export const resumeData: ResumeData = {
  personalInfo: {
    name: "Hariharan",
    title: "Hello, I'm Hariharan",
    description: [
      "Software developer focused on building scalable web applications and distributed systems. I work with modern technologies to create efficient solutions for complex problems.",
      "Currently exploring peer-to-peer architectures, blockchain applications, and AI-powered platforms while contributing to open-source projects."
    ],
    profileImage: "/avatar.avif"
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
      skills: ['Java', 'Spring', 'Spring Boot', 'Spring Security', 'REST APIs', 'JWT', 'Maven'],
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'Angular.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    },
    {
      title: 'Data & Infra',
      skills: ['PostgreSQL', 'MySQL', 'Firebase', 'AWS', 'Docker', 'Linux'],
    },
    {
      title: 'Mobile & Automation',
      skills: ['Kotlin', 'Python', 'Shell Scripting', 'Webhooks', 'MCP', 'AI/ML'],
    },
  ],
  personalProjects: [
    {
      title: 'Vectora',
      description: 'Java 25 + Lucene search engine with index-first APIs, multi-source ingestion, and MCP tooling for agent retrieval.',
      url: 'https://github.com/mohanmca/Vectora',
    },
    {
      title: 'FleetCore',
      description: 'Transportation ERP/TMS with Spring Boot, JWT auth, React admin workflows, and operations-to-finance controls.',
      url: 'https://github.com/hariharan9572/fleetcore-frontend',
    },
    {
      title: 'AI Commerce',
      description: 'Spring Boot + React commerce platform with PGVector retrieval, Spring AI chat support, and AI-assisted product workflows.',
      url: 'https://github.com/hariharan9572/springEcom',
    },
  ],
  clientProjects: [
    {
      title: 'Droptruck',
      description: 'Production logistics platform work covering lead ingestion, live tracking, call masking, WhatsApp messaging, and reliability improvements.',
      url: 'https://droptruck.in/',
    },
    {
      title: 'Drop Trucker',
      description: 'Kotlin and Firebase Android app for trip lifecycle management, bidding, geofenced status updates, and POD workflows.',
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
