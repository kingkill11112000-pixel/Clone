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
  name: "Dikshit Mahanot",
  initials: "DM",
  url: "https://github.com/dikjain",
  location: "India",
  description:
    "I'm 19yr old dev from India. I love building things, primarily using Here and modern frameworks. With over a year of hands-on experience, I previously worked at a US-based startup and am now building a stealth startup as a Founding engineer.",
  avatarUrl: "/pfp.jpg",
  taglines: ["high agency dev", "helping startups go from 0 to 1."],
  contact: {
    email: "dikshitmahanot2005@gmail.com",
    tel: "+91-7982505860",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dikjain",
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dikshit-mahanot-723b012a3/",
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/mahanot_dikshit",
        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@dikshitmahanot2005",
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:dikshitmahanot2005@gmail.com",
        navbar: false,
      },
    } satisfies Record<string, SocialLink>,
  },
  support: {
    solana: "2oco4jePvrCDKEveSKMoXYYg5giKYt61ahYu6zA4zQcF",
    paytm: "7982505860@ptyes",
    paypal: "dikshitmahanot2005@gmail.com",
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
      href: "https://2factor.in",
      logoUrl: "/logos/2factor.svg",
      start: "Jan 2026",
      end: "Present",
      description:
        "Technical Support Engineer in Worli, Mumbai. Test and debug REST APIs powering client-facing SMS/OTP verification systems, diagnosing integration issues. Collaborate with engineering teams to reproduce, document, and resolve API-level bugs across request/response cycles and authentication flows. Apply computer engineering fundamentals to support scalable, distributed systems in production.",
      technologies: [
        "REST APIs",
        "Postman",
        "Debugging",
        "Authentication",
        "Distributed Systems",
      ],
      badges: ["Full Time"],
    },
    {
      company: "Codeclause",
      href: "https://codeclause.com",
      logoUrl: "/logos/codeclause.svg",
      start: "Nov 2024",
      end: "Dec 2024",
      description:
        "Web Developer Intern (Remote). Built an intelligent chatbot using the Gemini API, enabling context-aware conversations and multimodal image-based queries. Designed a highly responsive UI with dynamic response formatting, smooth animations, and robust error handling to enhance user engagement.",
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
      school: "Maharaja Agrasen Institute of Technology",
      href: "https://mait.ac.in",
      degree: "B.Tech in Computer Science",
      logoUrl: "/mait.jpg",
      start: "2023",
      end: "2027",
    },
    {
      school: "Siddhartha Public School",
      href: "#",
      degree: "Class XII (CBSE) - 84.8%",
      logoUrl: "/school.svg",
      start: "2021",
      end: "2023",
    },
    {
      school: "D.A.V. Public School",
      href: "#",
      degree: "Class X (CBSE) - 91.6%",
      logoUrl: "/DAV_CMC_Logo.svg.png",
      start: "2010",
      end: "2021",
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
