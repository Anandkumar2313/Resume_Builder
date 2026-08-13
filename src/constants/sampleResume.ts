import type { Resume, PersonalInfo, Experience, Education, Skill, Project, Certification, Language, Award } from '@/types/resume'
import { generateId } from '@/utils'

export const samplePersonalInfo: PersonalInfo = {
  fullName: 'Alexander James Montgomery',
  title: 'Senior Full Stack Software Architect',
  email: 'alexander.montgomery@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA, USA',
  website: 'https://alexandermontgomery.dev',
  linkedin: 'linkedin.com/in/alexandermontgomery',
  github: 'github.com/alexandermontgomery',
  summary: 'Innovative and results-driven Senior Full Stack Software Architect with over 10 years of experience designing, developing, and deploying high-performance, scalable web applications and microservices architectures. Proven track record of leading cross-functional engineering teams to deliver robust enterprise solutions that drive business growth and operational efficiency. Adept at leveraging modern JavaScript ecosystems, cloud-native technologies, and CI/CD pipelines to ensure rapid iteration and zero-downtime deployments. Passionate about mentoring developers, establishing best practices, and driving technical excellence across the organization.',
  wechat: 'alex_mont_dev',
  age: '32',
  gender: 'Male',
  hometown: 'Boston, MA',
  maritalStatus: 'Married',
  yearsOfExperience: '10+ Years',
  educationLevel: 'Master\'s Degree',
}

export const sampleExperience: Experience[] = [
  {
    id: generateId(),
    company: 'TechNova Solutions Inc.',
    position: 'Principal Software Architect',
    location: 'San Francisco, CA',
    startDate: 'Mar 2020',
    endDate: 'Present',
    current: true,
    description: 'Spearheaded the architectural redesign of the company\'s flagship SaaS platform, transitioning from a monolithic architecture to a scalable microservices ecosystem using Node.js, Go, and Kubernetes.',
    highlights: [
      'Architected and deployed a highly available, multi-region cloud infrastructure on AWS, achieving 99.99% uptime and reducing infrastructure costs by 22%.',
      'Led a team of 15 senior engineers across 3 squads, fostering a culture of continuous integration and continuous delivery (CI/CD) using GitHub Actions and ArgoCD.',
      'Designed and implemented a real-time event streaming pipeline using Apache Kafka, processing over 50 million events per day with sub-second latency.',
      'Introduced comprehensive monitoring and observability practices using Prometheus, Grafana, and DataDog, reducing mean time to resolution (MTTR) for critical incidents by 40%.',
      'Authored engineering standards and technical documentation, and conducted bi-weekly knowledge sharing sessions on advanced design patterns.',
      'Migrated legacy React single-page applications to Next.js with Server-Side Rendering (SSR), improving Core Web Vitals and boosting SEO organic traffic by 35%.',
      'Optimized database performance by redesigning PostgreSQL schemas, implementing intelligent indexing, and introducing Redis caching layers, resulting in a 60% reduction in query latency.',
      'Collaborated with product and security teams to implement zero-trust architecture and OAuth 2.0 based authentication/authorization across all microservices.'
    ],
  },
  {
    id: generateId(),
    company: 'Quantum Dynamics Data',
    position: 'Senior Full Stack Engineer',
    location: 'Seattle, WA',
    startDate: 'Jan 2017',
    endDate: 'Feb 2020',
    current: false,
    description: 'Key contributor to a high-traffic financial analytics dashboard used by Fortune 500 enterprise clients for real-time market data visualization.',
    highlights: [
      'Developed complex, interactive data visualizations using D3.js and React, enabling clients to analyze millions of data points with fluid 60fps rendering.',
      'Engineered a resilient GraphQL API gateway using Apollo Federation to aggregate data from 8 disparate backend REST services, drastically simplifying client-side data fetching.',
      'Implemented robust state management using Redux Toolkit and optimized React component rendering, eliminating unnecessary re-renders and improving app performance by 50%.',
      'Built a custom, highly scalable WebSocket server in Node.js to push live financial market updates to over 10,000 concurrent connected clients.',
      'Pioneered the adoption of TypeScript across the frontend and backend codebases, reducing runtime errors by 75% and significantly improving developer velocity.',
      'Mentored 4 junior engineers, conducting daily code reviews and pair programming sessions to elevate team code quality.',
      'Integrated Stripe payment processing and automated subscription management for enterprise tier customers.',
      'Participated in an on-call rotation, reliably handling high-severity production issues and performing blameless post-mortems.'
    ],
  },
  {
    id: generateId(),
    company: 'Nexus Creative Agency',
    position: 'Frontend Web Developer',
    location: 'Austin, TX',
    startDate: 'Jun 2014',
    endDate: 'Dec 2016',
    current: false,
    description: 'Delivered bespoke, award-winning web experiences for high-profile clients in the entertainment and e-commerce sectors.',
    highlights: [
      'Built highly responsive and accessible UI components from scratch using HTML5, CSS3/SASS, and vanilla JavaScript for diverse digital campaigns.',
      'Collaborated closely with UX/UI designers to ensure pixel-perfect implementation of complex animations using GSAP (GreenSock) and WebGL.',
      'Developed custom Shopify themes and headless e-commerce solutions, resulting in an average conversion rate increase of 20% for client stores.',
      'Optimized frontend asset delivery through webpack configuration, image compression, and lazy loading, consistently achieving Google Lighthouse performance scores above 90.',
      'Ensured cross-browser compatibility and accessibility (WCAG 2.1 AA) for all deliverables, conducting extensive testing across devices.',
      'Implemented automated end-to-end testing using Cypress to ensure core user flows remained intact during rapid iteration cycles.',
      'Managed client communication and requirement gathering for smaller accounts, ensuring timely delivery within budget constraints.',
      'Introduced BEM methodology to standardize CSS writing across the engineering team.'
    ],
  },
]

export const sampleEducation: Education[] = [
  {
    id: generateId(),
    institution: 'University of California, Berkeley',
    degree: 'Master of Science in Computer Science',
    field: 'Computer Science',
    location: 'Berkeley, CA',
    startDate: 'Sep 2012',
    endDate: 'May 2014',
    current: false,
    gpa: '3.92 / 4.0',
    highlights: [
      'Specialized in Distributed Systems and Artificial Intelligence.',
      'Published thesis: "Optimizing Consensus Algorithms in Geographically Distributed Databases."',
      'Served as a Graduate Teaching Assistant for Advanced Algorithms and Data Structures.',
      'Awarded the Outstanding Graduate Researcher Award.'
    ],
  },
  {
    id: generateId(),
    institution: 'University of Texas at Austin',
    degree: 'Bachelor of Science in Software Engineering',
    field: 'Software Engineering',
    location: 'Austin, TX',
    startDate: 'Sep 2008',
    endDate: 'May 2012',
    current: false,
    gpa: '3.85 / 4.0',
    highlights: [
      'Minored in Mathematics.',
      'President of the ACM Student Chapter.',
      'Led the team that won 1st place in the 2011 State Hackathon.',
      'Dean\'s List for 8 consecutive semesters.'
    ],
  },
]

export const sampleSkills: Skill[] = [
  {
    id: generateId(),
    category: 'Programming Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Go (Golang)', 'Java', 'Rust', 'SQL', 'GraphQL', 'HTML5', 'CSS3/SASS'],
  },
  {
    id: generateId(),
    category: 'Frontend Frameworks & Libraries',
    items: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'Tailwind CSS', 'Redux Toolkit', 'Zustand', 'React Query', 'Framer Motion', 'D3.js', 'Webpack', 'Vite'],
  },
  {
    id: generateId(),
    category: 'Backend Technologies',
    items: ['Node.js', 'Express.js', 'NestJS', 'Django', 'FastAPI', 'Spring Boot', 'gRPC', 'Apollo Server', 'WebSocket'],
  },
  {
    id: generateId(),
    category: 'Databases & Caching',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'DynamoDB', 'Cassandra', 'Prisma ORM'],
  },
  {
    id: generateId(),
    category: 'Cloud, DevOps & Architecture',
    items: ['AWS (EC2, S3, RDS, Lambda)', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD (GitHub Actions, Jenkins)', 'Microservices Architecture', 'Event-Driven Architecture', 'Kafka', 'RabbitMQ'],
  },
  {
    id: generateId(),
    category: 'Testing & QA',
    items: ['Jest', 'React Testing Library', 'Cypress', 'Playwright', 'Mocha / Chai', 'TDD / BDD methodologies'],
  },
]

export const sampleProjects: Project[] = [
  {
    id: generateId(),
    name: 'AeroStream Analytics Platform',
    url: 'aerostream.dev',
    github: '',
    startDate: 'Oct 2022',
    endDate: 'Mar 2023',
    current: false,
    description: 'An open-source, high-throughput analytics dashboard designed for monitoring complex distributed microservices in real-time.',
    technologies: ['React', 'TypeScript', 'Go', 'Kafka', 'ClickHouse', 'Tailwind CSS'],
    highlights: [
      'Engineered a custom Go backend capable of ingesting 100,000 logs per second and piping them through Kafka to ClickHouse for analytical queries.',
      'Built a highly responsive React frontend leveraging WebSockets for sub-second UI updates without polling overhead.',
      'Received over 2,500 stars on GitHub and adopted by 4 startups for their internal observability stacks.',
      'Implemented an intuitive drag-and-drop dashboard builder allowing users to create custom telemetry views.'
    ],
  },
  {
    id: generateId(),
    name: 'Oasis AI Content Engine',
    url: 'oasis-ai.com',
    github: '',
    startDate: 'Jan 2021',
    endDate: 'Aug 2021',
    current: false,
    description: 'A SaaS platform leveraging OpenAI APIs to generate SEO-optimized marketing copy, complete with a rich text editor and collaborative workflows.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'OpenAI API', 'Stripe'],
    highlights: [
      'Integrated Stripe for tiered subscription billing and usage-based token tracking.',
      'Developed a collaborative document editor using TipTap (ProseMirror), supporting real-time multiplayer editing via WebRTC.',
      'Architected a serverless backend using Vercel Functions to dynamically scale with erratic user traffic patterns.',
      'Grew the platform to $5k MRR within 3 months of launch before successful acquisition.'
    ],
  },
  {
    id: generateId(),
    name: 'Sentinel Distributed Lock Manager',
    url: '',
    github: '',
    startDate: 'May 2019',
    endDate: 'Sep 2019',
    current: false,
    description: 'A robust, language-agnostic distributed locking service built to prevent race conditions in highly concurrent environments.',
    technologies: ['Rust', 'Redis', 'gRPC', 'Docker'],
    highlights: [
      'Implemented the Redlock algorithm in Rust for maximum performance and memory safety.',
      'Provided gRPC bindings for seamless integration with Node.js, Python, and Java microservices.',
      'Achieved a lock acquisition latency of under 2ms at the 99th percentile under heavy load.'
    ],
  },
]

export const sampleCertifications: Certification[] = [
  {
    id: generateId(),
    name: 'AWS Certified Solutions Architect – Professional',
    issuer: 'Amazon Web Services',
    date: 'Aug 2022',
    url: '',
    credentialId: '',
  },
  {
    id: generateId(),
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation (CNCF)',
    date: 'Feb 2021',
    url: '',
    credentialId: '',
  },
  {
    id: generateId(),
    name: 'Google Cloud Professional Cloud Developer',
    issuer: 'Google Cloud',
    date: 'Nov 2019',
    url: '',
    credentialId: '',
  },
  {
    id: generateId(),
    name: 'MongoDB Certified Developer Associate',
    issuer: 'MongoDB Inc.',
    date: 'Jun 2018',
    url: '',
    credentialId: '',
  },
]

export const sampleLanguages: Language[] = [
  {
    id: generateId(),
    language: 'English',
    proficiency: 'native',
  },
  {
    id: generateId(),
    language: 'Spanish',
    proficiency: 'fluent',
  },
  {
    id: generateId(),
    language: 'Mandarin Chinese',
    proficiency: 'intermediate',
  },
  {
    id: generateId(),
    language: 'French',
    proficiency: 'beginner',
  },
]

export const sampleAwards: Award[] = [
  {
    id: generateId(),
    title: 'Developer of the Year 2021',
    issuer: 'TechNova Solutions Inc.',
    date: 'Dec 2021',
    description: 'Awarded for exceptional leadership in the successful architectural migration to Kubernetes, resulting in massive operational savings.',
  },
  {
    id: generateId(),
    title: 'First Place - Global FinTech Hackathon',
    issuer: 'FinTech Innovators Alliance',
    date: 'Oct 2018',
    description: 'Led a team of 4 to develop a blockchain-based peer-to-peer micro-lending platform in 48 hours, securing a $20,000 grand prize.',
  },
  {
    id: generateId(),
    title: 'Outstanding Open Source Contributor',
    issuer: 'React Community',
    date: 'Mar 2017',
    description: 'Recognized for significant contributions to popular React ecosystem libraries and extensive mentorship in community forums.',
  },
]
