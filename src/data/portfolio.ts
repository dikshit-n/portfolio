import type { Project, Role, SectionMeta, Stat, TechCategory } from '@/types/portfolio';

/* ----------------------------------------------------------------------------
   Site identity
---------------------------------------------------------------------------- */
export const SITE = {
  name: 'Dikshitkumar N',
  shortName: 'Dikshit',
  email: 'dikshitkumarn@gmail.com',
  phone: '+91 9600714338',
  location: 'Tamil Nadu, India',
  // TODO: replace these placeholders with your real handles
  linkedin: 'https://www.linkedin.com/in/dikshitkumarn',
  github: 'https://github.com/dikshitkumarn',
  resumeUrl: '/resume.pdf',
  edition: 'React & Mobile Edition',
} as const;

/* ----------------------------------------------------------------------------
   Hero
---------------------------------------------------------------------------- */
export const HERO = {
  firstName: 'Dikshitkumar',
  lastName: 'N',
  tagline:
    'Senior Frontend Engineer (SDE 3) — 5+ years shipping React.js web apps and cross-platform React Native apps for US, Canadian, and UAE clients.',
  available: true,
};

/* ----------------------------------------------------------------------------
   About / Summary / Stats
---------------------------------------------------------------------------- */
export const SUMMARY = `I build production React.js and React Native applications for US, Canadian, and UAE clients — most recently an offline-first healthcare app on iOS and Android processing 10,000 appointments per day. I enjoy owning architecture end-to-end: offline sync, real-time data layers, authentication bridges, and the release pipeline that ships them. Lately I've been building agentic systems too, including a multi-agent PR reviewer (Githena) and custom MCP server integrations for Claude Code.`;

export const STATS: Stat[] = [
  { value: '5+', label: 'Years shipping' },
  { value: '10K+', label: 'Appointments/day' },
  { value: '4–5', label: 'Engineers led' },
  { value: '8.49', label: 'B.Tech CGPA' },
];

/* ----------------------------------------------------------------------------
   Tech stack (categories from the resume)
---------------------------------------------------------------------------- */
export const TECH_STACK: TechCategory[] = [
  {
    index: '01',
    name: 'Frontend',
    items: [
      'React.js',
      'Next.js',
      'Nuxt.js',
      'Vue.js',
      'TypeScript',
      'JavaScript',
      'Redux',
      'Zustand',
      'React Query',
      'Tailwind CSS',
      'Material UI',
      'Fluent UI',
      'SASS / SCSS',
      'styled-components',
      'Chart.js',
    ],
  },
  {
    index: '02',
    name: 'Mobile',
    items: [
      'React Native',
      'Expo',
      'EAS Build',
      'iOS',
      'Android',
      'React Navigation',
      'Background Location',
      'Push Notifications',
      'Offline-First Architecture',
      'Firebase App Distribution',
      'Google Play Deployment',
    ],
  },
  {
    index: '03',
    name: 'Backend & APIs',
    items: ['Node.js', 'AWS AppSync (GraphQL)', 'REST APIs', 'Firebase'],
  },
  {
    index: '04',
    name: 'Cloud & AWS',
    items: ['AWS Lambda', 'AWS Amplify', 'AWS AppSync', 'Serverless Architecture'],
  },
  {
    index: '05',
    name: 'AI Engineering',
    items: [
      'Multi-Agent Orchestration',
      'LLM Integration',
      'Model Context Protocol (MCP)',
      'Prompt Engineering',
      'Retrieval-Augmented Generation',
      'Claude Code',
      'AI-Assisted Development',
    ],
  },
  {
    index: '06',
    name: 'Architecture',
    items: [
      'Offline-First Architecture',
      'Offline Synchronization',
      'Real-Time Data Processing',
      'Micro-Frontend Architecture',
      'Microservices',
      'Workflow Engine Design',
    ],
  },
  {
    index: '07',
    name: 'DevOps & Tooling',
    items: [
      'Git',
      'GitHub',
      'GitHub Actions',
      'Docker',
      'Jenkins',
      'CI/CD',
      'LogZ',
      'Webpack',
      'Vite',
      'DynamoDB',
    ],
  },
  {
    index: '08',
    name: 'Leadership & Practice',
    items: [
      'Agile / Scrum',
      'Team Leadership (4–5)',
      'Mentoring',
      'Cross-Functional Collaboration',
      'HIPAA & GDPR Compliance',
      'Test-Driven Development',
    ],
  },
];

/* ----------------------------------------------------------------------------
   Experience (4 roles from the resume, bulletized)
---------------------------------------------------------------------------- */
export const EXPERIENCE: Role[] = [
  {
    index: '01',
    period: 'May 2023 – May 2026',
    company: 'iResponsive Offshore Development Center',
    title: 'Senior Software Engineer (SDE 3)',
    location: 'Coimbatore, India (Remote)',
    chip: 'Remote',
    bullets: [
      'Technical owner of a US client\'s offline-first healthcare app on iOS + Android (React Native, Expo, AWS Lambda, AWS Amplify, AWS AppSync) processing 10,000 appointments/day.',
      'Architected the offline sync + real-time data layer for low-connectivity environments — prevented data loss in 95% of cases and engineered HIPAA / GDPR-compliant PHI flow.',
      'Shipped a task workflow engine for the full appointment lifecycle, including a dynamic algorithm that determines the next task from the previous task\'s outcome.',
      'Built dynamic per-task route rendering that created a navigation stack entry per task type — eliminated native iOS / Android task-tracking issues.',
      'Implemented background location tracking at 5s intervals on iOS and Android, reaching a 95% capture rate, then redesigned memory management to eliminate crashes on both platforms.',
      'Owned the mobile release process: Google Play deployments plus EAS Build distribution to testers via Firebase App Distribution; release cadence accelerated from monthly → bi-weekly.',
      'Led a team of 5 engineers in Agile / Scrum — ran sprint planning, mentored on React + React Native best practices, cut code review cycles by 2 days.',
      'Built Githena: an event-driven multi-agent PR reviewer — 6 specialised LLM agents coordinated by a supervisor quality gate, triggered by GitHub webhooks, posting a single auditable review within 60s of PR readiness.',
      'Engineered custom MCP server integrations and established agentic coding workflows with Claude Code plus reusable prompt-engineering patterns adopted across the team.',
      'Architected an OAuth 2.0 → AWS Cognito auth bridge and a DynamoDB Streams → Postgres CDC sync pipeline that eliminated data inconsistency between the mobile offline DB and source-of-truth.',
    ],
  },
  {
    index: '02',
    period: 'Apr 2022 – Apr 2023',
    company: 'Aveon Infotech',
    title: 'Software Development Engineer 2 (SDE 2)',
    location: 'Coimbatore, India (Remote)',
    chip: 'Remote',
    bullets: [
      'Led a 4-person frontend team (2 React web, 2 React Native) in Agile / Scrum to ship forum features inside a School Management System using Material UI + Fluent UI — 50% increase in internal visibility.',
      'Led a 4-person frontend team (3 web, 1 React Native) to ship a blood-donor admin web platform + companion iOS / Android app supporting 500+ donation requests.',
      'Centralised auth state with React Context API — eliminated prop-drilling across nested component trees and unified session handling across the frontend.',
    ],
  },
  {
    index: '03',
    period: 'Jul 2021 – Mar 2022',
    company: 'Leora Solutions LLC',
    title: 'Frontend Developer',
    location: 'Dubai, UAE (Remote from India)',
    chip: 'Remote',
    bullets: [
      'Delivered React web apps remotely for UAE clients across business management, digitalisation, and school management domains, working directly with Dubai-based teams.',
      'Built the frontend for Soutrali, a UAE cab-booking administration platform — cut cash transactions by 90%.',
      'Developed personalised advertisement and discount features for EzWalkin, a UAE mall customer-engagement platform — contributed to a 20% sales lift.',
      'Engineered reusable UI components, custom hooks, and Redux-based auth workflows — 50% improvement in development speed and component reuse.',
    ],
  },
  {
    index: '04',
    period: 'Jun 2020 – Jul 2021',
    company: 'Leora Solutions LLP',
    title: 'React Developer',
    location: 'Kerala, India (Remote)',
    chip: 'Remote',
    bullets: [
      'Delivered React applications for UAE-based clients across business management, digitalisation, and school management — managing requirements directly with Gulf-region stakeholders.',
      'Built an admin portal in React for QR-code-based business digitalisation — QR generation, scanning, and centralised business detail management.',
      'Developed a responsive React school-management platform with live tracking and QR-based checkpoint scanning — gave admins 100% visibility into attendance and schedule alignment.',
      'Built a React business-management dashboard with Chart.js + Material UI — reduced manual reporting time by 90%.',
      'Developed a React visitor management system with meeting / appointment scheduling and digital pass issuance — 100% digital visitor tracking.',
    ],
  },
];

/* ----------------------------------------------------------------------------
   Projects
---------------------------------------------------------------------------- */
export const PROJECTS: Project[] = [
  {
    index: '01',
    name: 'Githena',
    categories: ['AI', 'DevTools', 'Open Source'],
    description:
      'Event-driven multi-agent PR reviewer. Six specialised LLM agents coordinated by a supervisor quality gate, triggered through GitHub webhooks and posting a single auditable review within 60 seconds of PR readiness. Per-repo behaviour driven by config files.',
    tech: ['Multi-Agent Orchestration', 'LLM APIs', 'GitHub Webhooks', 'TypeScript'],
    isLead: true,
    private: true,
  },
  {
    index: '02',
    name: 'electric-sql/electric',
    categories: ['Open Source', 'Docs'],
    description:
      'Contributed merged documentation improvements to electric-sql/electric (10.3k ★, Apache-2.0) — added cross-links that improved discoverability of error-handling guidance. Merged by a maintainer within 33 hours of submission.',
    tech: ['Documentation', 'Markdown', 'OSS'],
    url: 'https://github.com/electric-sql/electric',
    isLead: true,
  },
  {
    index: '03',
    name: 'Healthcare Appointment App',
    categories: ['Mobile', 'Offline-First', 'Healthcare'],
    description:
      'Offline-first iOS + Android app for appointment processing in low-connectivity environments. Custom offline sync, real-time data layer, HIPAA / GDPR-compliant PHI flow. Processing 10,000 appointments/day.',
    tech: ['React Native', 'Expo', 'AWS AppSync', 'AWS Amplify', 'AWS Lambda'],
    private: true,
  },
  {
    index: '04',
    name: 'Soutrali',
    categories: ['Admin', 'UAE'],
    description:
      'Frontend for a UAE cab-booking administration platform — cut cash transactions by 90%. Built during a remote engagement with Leora Solutions LLC.',
    tech: ['React.js', 'Redux', 'REST APIs'],
    private: true,
  },
  {
    index: '05',
    name: 'EzWalkin',
    categories: ['Marketing', 'UAE'],
    description:
      'UAE mall customer-engagement platform — personalised advertisement and discount features contributing to a 20% sales lift.',
    tech: ['React.js', 'Custom Hooks', 'Component Architecture'],
    private: true,
  },
  {
    index: '06',
    name: 'Blood Donor Platform',
    categories: ['Web', 'Mobile', 'Health'],
    description:
      'React admin web platform + companion React Native iOS / Android app for a blood-donor platform supporting 500+ donation requests.',
    tech: ['React.js', 'React Native', 'Redux'],
    private: true,
  },
  {
    index: '07',
    name: 'Visitor Management System',
    categories: ['Web', 'Operations'],
    description:
      'React visitor management system with meeting / appointment scheduling and digital pass issuance — 100% digital visitor tracking.',
    tech: ['React.js', 'Material UI', 'Chart.js'],
    private: true,
  },
];

/* ----------------------------------------------------------------------------
   Currently
---------------------------------------------------------------------------- */
export const CURRENTLY = {
  working: 'Githena — a multi-agent PR reviewer for GitHub.',
  collab: 'Agentic AI workflows and Claude Code–powered developer tooling.',
  learning: 'Scalable system design, MCP ecosystem, advanced agent orchestration.',
  ask: 'React Native offline-first, AWS serverless, healthcare compliance, AI engineering.',
};

/* ----------------------------------------------------------------------------
   Achievements / OSS
---------------------------------------------------------------------------- */
export const ACHIEVEMENTS = [
  {
    title: 'electric-sql/electric — OSS contribution',
    detail:
      'Contributed merged documentation improvements to electric-sql/electric (10.3k ★, Apache-2.0) — added cross-links that improved discoverability of error-handling guidance; merged by a maintainer within 33 hours.',
    url: 'https://github.com/electric-sql/electric',
  },
];

/* ----------------------------------------------------------------------------
   Education
---------------------------------------------------------------------------- */
export const EDUCATION = {
  school: 'Anna University',
  location: 'Chennai, India',
  period: '2018 – 2022',
  degree: 'B.Tech, Information Technology',
  cgpa: '8.49',
};

/* ----------------------------------------------------------------------------
   Certifications
---------------------------------------------------------------------------- */
export const CERTIFICATIONS = [
  {
    name: 'React — The Complete Guide (incl. Hooks, React Router, Redux)',
    issuer: 'Udemy',
    year: '2020',
  },
];

/* ----------------------------------------------------------------------------
   Section metadata (number + tag + title)
---------------------------------------------------------------------------- */
export const SECTION_META: Record<string, SectionMeta> = {
  about: {
    number: '§ 01',
    tag: 'Profile',
    title: 'About',
  },
  techstack: {
    number: '§ 02',
    tag: 'Capabilities',
    title: 'Tech Stack',
    subtitle: 'The tools used to ship scalable, performant products end to end.',
  },
  experience: {
    number: '§ 03',
    tag: 'Dispatches',
    title: 'Experience',
    subtitle: 'A record of roles, teams, and things shipped.',
  },
  projects: {
    number: '§ 04',
    tag: 'Selected Work',
    title: 'Field Notes',
    subtitle: 'Shipped products and side projects — a selection from the archive.',
  },
  currently: {
    number: '§ 05',
    tag: 'Stop Press',
    title: 'Currently',
  },
  contact: {
    number: '§ 06',
    tag: 'Correspondence',
    title: "Let's build",
  },
};

/* ----------------------------------------------------------------------------
   Marquee — short, readable tech chips
---------------------------------------------------------------------------- */
export const MARQUEE_TECH = [
  'React.js',
  'React Native',
  'TypeScript',
  'Next.js',
  'Redux',
  'Tailwind CSS',
  'AWS AppSync',
  'AWS Lambda',
  'Expo',
  'Node.js',
  'GraphQL',
  'MCP',
  'Multi-Agent Orchestration',
  'Offline-First',
  'EAS Build',
];
