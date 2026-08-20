export type SocialLink = {
  name: string;
  url: string;
  navbar: boolean;
};

export type Skill = {
  name: string;
  icon: string;
};

export type WorkItem = {
  company: string;
  title: string;
  href: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
  technologies: string[];
  badges: string[];
};

export type EducationItem = {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
};

export type ProjectLink = {
  type: string;
  href: string;
};

export type Project = {
  title: string;
  href: string;
  dates: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  image: string;
  demoLink?: string;
  shouldShow: boolean;
  kind: "web" | "mobile";
  mobileThumbnails?: string[];
};

export type Hackathon = {
  title: string;
  dates: string;
  image: string;
  isFinalist: boolean;
};

export type OpenSourceOrg = {
  name: string;
  href: string;
  imageSrc: string;
  color: "cloudinary" | "dodo" | "hyperswitch";
  prs: { number: number; title: string; url: string }[];
};

import {
  projects,
  hackathons,
  openSource,
  photos,
  videoComponents,
  morphFrom,
  morphTo,
  roles,
} from "./portfolio-tail";

export const DATA = {
  name: "Siddhant Pal",
  initials: "SP",
  url: "https://github.com/kingkill11112000-pixel",
  location: "Thane, Maharashtra, India",
  description:
    "Computer Engineering student and Software Engineer at 2Factor. I build internal tools that automate real workflows across support, sales, and finance — from KYC platforms to DLT compliance tooling — and love turning operational pain points into maintainable software.",
  avatarUrl: "/pfp.jpg",
  taglines: ["software engineer", "building tools that remove busywork."],
  contact: {
    email: "siddhantpal9082@gmail.com",
    tel: "+91-9076207761",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kingkill11112000-pixel",
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/siddhantpal9082",
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:siddhantpal9082@gmail.com",
        navbar: false,
      },
    } satisfies Record<string, SocialLink>,
  },
  support: {
    solana: "",
    paytm: "",
    paypal: "",
  },
  skills: [
    { name: "React", icon: "/svg/react-logo-svgrepo-com.svg" },
    { name: "Next.js", icon: "/svg/nextjs.svg" },
    { name: "TypeScript", icon: "/svg/icons8-typescript.svg" },
    { name: "Node.js", icon: "/svg/node-16-svgrepo-com.svg" },
    { name: "MongoDB", icon: "/svg/mongo-svgrepo-com.svg" },
    { name: "JavaScript", icon: "/svg/javascript.svg" },
    { name: "GSAP", icon: "/svg/gsap.svg" },
    { name: "Supabase", icon: "/svg/supa.svg" },
    { name: "Clerk", icon: "/svg/clk.svg" },
    { name: "React Native", icon: "/svg/react-logo-svgrepo-com.svg" },
    { name: "Expo", icon: "/svg/expo.svg" },
    { name: "Bullmq", icon: "/bullmq.png" },
    { name: "Drizzle ORM", icon: "/svg/drizzle.png" },
    { name: "Zustand", icon: "/svg/zustand.png" },
    { name: "Docker", icon: "/svg/docker.svg" },
    { name: "GraphQL", icon: "/svg/graphql.svg" },
    { name: "Tailwind CSS", icon: "/svg/tailwindcss.svg" },
    { name: "Redis", icon: "/redis.svg" },
    { name: "AWS", icon: "/aws.svg" },
    { name: "Express.js", icon: "/svg/express-svgrepo-com.svg" },
    { name: "Bit Bucket", icon: "/svg/bitbucket.svg" },
    { name: "Figma", icon: "/svg/figma.svg" },
    { name: "Prometheus", icon: "/Prometheus.png" },
    { name: "Grafana", icon: "/svg/Grafana.png" },
    { name: "PostgreSQL", icon: "/svg/postgresql.svg" },
    { name: "Socket.io", icon: "/svg/socket.svg" },
    { name: "Shadcn UI", icon: "/svg/shad.svg" },
  ] satisfies Skill[],
  work: [
    {
      company: "2Factor",
      title: "Software Engineer (Full-time)",
      href: "https://2factor.in",
      logoUrl: "/logos/2factor.svg",
      start: "Aug 2026",
      end: "Present",
      description:
        "Building and maintaining internal tools that automate recurring workflows across support, sales, and finance at a CPaaS company. Developed a KYC Automation Platform using React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, and Zustand — centralizing KYC link generation, reminders, and progress tracking. Built a DLT Template Comparison Tool that auto-detects mismatches between registered templates and outgoing messages, an Error Code Search Tool for support, and an Intelligent Enquiry Response System with WhatsApp CTA. Collaborating with teams to turn operational gaps into maintainable software; exploring AI-assisted automation where it adds practical value.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Vite",
        "Tailwind CSS",
        "Zustand",
        "shadcn/ui",
      ],
      badges: ["Software Engineer"],
    },
    {
      company: "2Factor",
      title: "Technical Support Engineer (Intern)",
      href: "https://2factor.in",
      logoUrl: "/logos/2factor.svg",
      start: "Jan 2026",
      end: "Jul 2026",
      description:
        "Supported customers and internal teams with technical issues involving SQL, APIs, DLT compliance, PE-TM chain mapping, and CPaaS integrations. Investigated API requests, delivery issues, configurations, and product-related problems for enterprise clients. Worked with WhatsApp Business messaging, SMS, and voice communication workflows, including template registration and onboarding. Identified recurring troubleshooting patterns and began building internal tools to address them at the root — work that directly led to a transition into a full-time Software Engineer role.",
      technologies: [
        "SQL",
        "Postman",
        "REST APIs",
        "WhatsApp Business",
        "SMS",
        "DLT Compliance",
      ],
      badges: ["Technical Support"],
    },
    {
      company: "Codeclause",
      title: "Web Developer Intern",
      href: "https://codeclause.com",
      logoUrl: "/logos/codeclause.svg",
      start: "Nov 2024",
      end: "Dec 2024",
      description:
        "Built an intelligent chatbot using the Gemini API, enabling context-aware conversations and multimodal image-based queries. Designed a highly responsive UI with dynamic response formatting, smooth animations, and robust error handling to enhance user engagement.",
      technologies: [
        "Gemini API",
        "JavaScript",
        "React",
        "Responsive UI",
        "Error Handling",
      ],
      badges: ["Intern"],
    },
  ] satisfies WorkItem[],
  education: [
    {
      school: "Thakur College of Engineering & Technology, University of Mumbai",
      href: "https://www.tcetmumbai.in",
      degree: "Bachelor of Engineering in Computer Engineering · CGPI: 9.25",
      logoUrl: "/logos/tcet.svg",
      start: "2022",
      end: "2026",
    },
    {
      school: "Satish Pradhan Dnyanasadhana College",
      href: "https://www.spdnyanasadhanacollege.org",
      degree: "Higher Secondary School Certificate (HSC) · 71.17%",
      logoUrl: "/logos/dnyanasadhana.svg",
      start: "2020",
      end: "2022",
    },
  ] satisfies EducationItem[],
  projects,
  hackathons,
  openSource,
  photos,
  videoComponents,
  morphFrom,
  morphTo,
  roles,
};

export const webProjects = DATA.projects.filter(
  (p) => p.kind === "web" && p.shouldShow,
);
export const mobileProjects = DATA.projects.filter((p) => p.kind === "mobile");
export const marqueeProjects = DATA.projects.filter(
  (p) => p.kind === "web" && p.image,
);
