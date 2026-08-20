export type SocialLink = {
  name: string;
  url: string;
  navbar: boolean;
};

export type Skill = {
  name: string;
  icon: string;
};

export type WorkRole = {
  title: string;
  type: string;
  start: string;
  end: string;
  location: string;
  bullets: string[];
  technologies: string[];
};

export type WorkItem = {
  company: string;
  href: string;
  logoUrl: string;
  workplace: string;
  roles: WorkRole[];
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

export const DATA = {
  name: "Siddhant Pal",
  initials: "SP",
  url: "https://siddhantpal1.vercel.app",
  location: "Thane, Maharashtra, India",
  description:
    "Computer Engineering student and Software Engineer at 2Factor. I build internal tools that automate real workflows across support, sales, and finance — from KYC platforms to DLT compliance tooling — and love turning operational pain points into maintainable software.",
  avatarUrl: "/pfp.jpg",
  taglines: [
    "Software Engineer",
    "internal tools at a CPaaS company",
    "full-stack + applied ML",
  ],
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
      X: {
        name: "X",
        url: "https://siddhantpal1.vercel.app",
        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "mailto:siddhantpal9082@gmail.com",
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
    solana: "siddhantpal9082@gmail.com",
    paytm: "9076207761",
    paypal: "siddhantpal9082@gmail.com",
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
    { name: "Grafana", icon: "/Grafana.png" },
    { name: "PostgreSQL", icon: "/svg/postgresql.svg" },
    { name: "Socket.io", icon: "/svg/socket.svg" },
    { name: "Shadcn UI", icon: "/svg/shad.svg" },
    { name: "Python", icon: "/svg/python.svg" },
    { name: "Hugging Face", icon: "/svg/huggingface.svg" },
    { name: "Pandas", icon: "/svg/pandas.svg" },
    { name: "Scikit-learn", icon: "/svg/sklearn.svg" },
    { name: "MySQL", icon: "/svg/mysql.svg" },
    { name: "Git", icon: "/svg/git.svg" },
    { name: "Postman", icon: "/svg/postman.svg" },
    { name: "Vercel", icon: "/svg/vercel.svg" },
    { name: "Kotlin", icon: "/svg/kotlin.svg" },
    { name: "Jetpack Compose", icon: "/svg/compose.svg" },
    { name: "HTML", icon: "/svg/html.svg" },
    { name: "CSS", icon: "/svg/css.svg" },
    { name: "Google Colab", icon: "/svg/colab.svg" },
    { name: "Radix UI", icon: "/svg/radix.svg" },
    { name: "Recharts", icon: "/svg/recharts.svg" },
  ] satisfies Skill[],
  work: [
    {
      company: "2Factor",
      href: "https://2factor.in",
      logoUrl: "/logos/2factor.png",
      workplace: "On-site",
      roles: [
        {
          title: "Software Engineer",
          type: "Full-time",
          start: "Aug 2026",
          end: "Present",
          location: "Mumbai, Maharashtra, India",
          bullets: [
            "Building and maintaining internal tools that automate recurring workflows across support, sales, and finance teams at a CPaaS company",
            "Developed a KYC Automation Platform using React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, and Zustand — centralizing KYC link generation, reminders, and progress tracking for the finance team",
            "Built a DLT Template Comparison Tool that auto-detects mismatches (down to a single extra space) between registered templates and outgoing messages, reducing compliance rejections",
            "Built an Error Code Search Tool, consolidating scattered Excel-based references into a searchable interface and cutting troubleshooting time for the support team",
            "Designed an Intelligent Enquiry Response System that auto-triages website enquiries with a WhatsApp CTA, improving first-response time and lead engagement",
            "Collaborating with support, sales, and finance teams to identify operational gaps and translate them into maintainable software solutions",
            "Exploring AI-assisted automation and developer tools where they add practical value to internal processes",
          ],
          technologies: [
            "React.js",
            "Node.js",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "Zustand",
            "shadcn/ui",
          ],
        },
        {
          title: "Technical Support Engineer",
          type: "Internship",
          start: "Jan 2026",
          end: "Jul 2026",
          location: "Worli, Maharashtra, India",
          bullets: [
            "Supported customers and internal teams with technical issues involving SQL, APIs, DLT compliance, PE-TM chain mapping, and CPaaS integrations",
            "Investigated API requests, delivery issues, configurations, and product-related technical problems for enterprise clients",
            "Worked with WhatsApp Business messaging, SMS, and voice communication workflows, including template registration and onboarding processes",
            "Identified recurring troubleshooting patterns and began building internal tools to address them at the root — work that directly led to a transition into a full-time Software Engineer role",
            "Communicated technical findings clearly to customers and collaborated with the team on issue resolution",
          ],
          technologies: [
            "SQL",
            "Postman",
            "REST APIs",
            "WhatsApp Business",
            "SMS",
            "DLT Compliance",
            "CPaaS",
          ],
        },
      ],
    },
    {
      company: "Codeclause",
      href: "https://codeclause.com",
      logoUrl: "/logos/codeclause.png",
      workplace: "Remote",
      roles: [
        {
          title: "Web Developer Intern",
          type: "Internship",
          start: "Nov 2024",
          end: "Dec 2024",
          location: "Remote",
          bullets: [
            "Built an intelligent chatbot using the Gemini API, enabling context-aware conversations and multimodal image-based queries",
            "Designed a highly responsive UI with dynamic response formatting, smooth animations, and robust error handling to enhance user engagement",
          ],
          technologies: [
            "Gemini API",
            "JavaScript",
            "React",
            "Responsive UI",
          ],
        },
      ],
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
  projects: [
    {
      title: "CallEase",
      href: "https://github.com/kingkill11112000-pixel",
      dates: "2025",
      shouldShow: true,
      kind: "mobile",
      description:
        "Native Android calling app built around large photo-tile contacts, removing the need for reading ability to place calls. Implemented a PIN-gated family setup mode so a trusted family member can configure contacts on behalf of the primary user. Developed and tested via wireless debugging on a physical device.",
      technologies: ["Kotlin", "Jetpack Compose", "Android"],
      links: [
        { type: "GitHub", href: "https://github.com/kingkill11112000-pixel" },
      ],
      image: "/calleasy.jpg",
      mobileThumbnails: [
        "/thumbs/calleasy-1.jpg",
        "/thumbs/calleasy-2.jpg",
        "/thumbs/calleasy-3.jpg",
      ],
    },
    {
      title: "AutoSenseAI",
      href: "https://siddhantpal1.vercel.app",
      dates: "2025",
      shouldShow: true,
      kind: "web",
      description:
        "AI-powered vehicle diagnostics system. Fine-tuned a DistilBERT model on the NHTSA dataset in Google Colab to classify natural-language driver complaints into specific mechanical faults with high accuracy. Deployed the trained model to the Hugging Face Model Hub via its serverless Inference API for scalable, low-latency predictions. Integrated the backend inference API with a React.js frontend to deliver instant fault diagnosis and Gemini-generated repair solutions.",
      technologies: [
        "Python",
        "React.js",
        "DistilBERT",
        "Hugging Face",
        "Google Colab",
        "Gemini",
        "TypeScript",
        "Tailwind CSS",
      ],
      links: [
        { type: "Website", href: "https://siddhantpal1.vercel.app" },
        { type: "GitHub", href: "https://github.com/kingkill11112000-pixel" },
      ],
      image: "/autosense.jpg",
    },
    {
      title: "HisabKitab",
      href: "https://siddhantpal1.vercel.app",
      dates: "2025",
      shouldShow: true,
      kind: "web",
      description:
        "Collaborative expense management platform. Real-time fintech application using React 18 and Supabase (PostgreSQL) for secure, relational storage of financial records and user authentication. Engineered a weighted-splitting algorithm to automate multi-user who-owes-whom logic and simplify debt settlements. High-performance dashboard with Radix UI and Tailwind CSS, featuring Recharts for spending analytics and QR codes for seamless onboarding, kept in real-time sync via Zustand.",
      technologies: [
        "React 18",
        "TypeScript",
        "Supabase",
        "Zustand",
        "PostgreSQL",
        "Radix UI",
        "Tailwind CSS",
        "Recharts",
      ],
      links: [
        { type: "Website", href: "https://siddhantpal1.vercel.app" },
        { type: "GitHub", href: "https://github.com/kingkill11112000-pixel" },
      ],
      image: "/hisabkitab.jpg",
    },
    {
      title: "Gemini Chatbot",
      href: "https://siddhantpal1.vercel.app",
      dates: "2024",
      shouldShow: true,
      kind: "web",
      description:
        "Intelligent chatbot built during the Codeclause internship using the Gemini API. Enables context-aware conversations and multimodal image-based queries, with a highly responsive UI, dynamic response formatting, smooth animations, and robust error handling.",
      technologies: [
        "Gemini API",
        "React",
        "JavaScript",
        "Tailwind CSS",
        "GSAP",
      ],
      links: [
        { type: "Website", href: "https://siddhantpal1.vercel.app" },
        { type: "GitHub", href: "https://github.com/kingkill11112000-pixel" },
      ],
      image: "/gemini-chat.jpg",
    },
  ] satisfies Project[],
  hackathons: [
    {
      title: "Rotaract Club of TCET",
      dates: "May 2023 – Mar 2026",
      image: "/logos/rotarct.svg",
      isFinalist: true,
    },
    {
      title: "ISTE-TCET",
      dates: "Student chapter of the Indian Society for Technical Education",
      image: "/logos/iste.svg",
      isFinalist: false,
    },
    {
      title: "Inter-college cricket",
      dates: "Balancing athletics with academics",
      image: "/logos/cricket.svg",
      isFinalist: false,
    },
  ] satisfies Hackathon[],
  openSource: [
    {
      name: "NPTEL ML",
      href: "https://nptel.ac.in",
      imageSrc: "/logos/nptel.svg",
      color: "cloudinary",
      prs: [
        {
          number: 1,
          title: "Introduction to Machine Learning — NPTEL",
          url: "https://nptel.ac.in",
        },
      ],
    },
    {
      name: "NPTEL DL",
      href: "https://nptel.ac.in",
      imageSrc: "/logos/nptel.svg",
      color: "dodo",
      prs: [
        {
          number: 1,
          title: "Deep Learning — NPTEL",
          url: "https://nptel.ac.in",
        },
      ],
    },
    {
      name: "Rotaract",
      href: "https://www.tcetmumbai.in",
      imageSrc: "/logos/rotarct.svg",
      color: "hyperswitch",
      prs: [
        {
          number: 1,
          title:
            "Social impact drives and community service as an active Rotaract Club of TCET member",
          url: "https://www.tcetmumbai.in",
        },
        {
          number: 2,
          title: "Also active in ISTE-TCET, the student chapter of ISTE",
          url: "https://www.tcetmumbai.in",
        },
      ],
    },
  ] satisfies OpenSourceOrg[],
  photos: [
    "/img/code.jpg",
    "/img/code2.jpg",
    "/img/code3.jpg",
    "/img/code4.jpg",
    "/img/code5.jpg",
    "/img/code6.jpg",
    "/img/code7.jpg",
    "/autosense.jpg",
    "/hisabkitab.jpg",
  ],
  videoComponents: [
    {
      title: "Neon Component",
      videoUrl:
        "https://pub-22c9c293f52b4202a4749ada55b9d7e1.r2.dev/portfolio/neocomponent.mp4",
    },
    {
      title: "Jiggle Component",
      videoUrl:
        "https://pub-22c9c293f52b4202a4749ada55b9d7e1.r2.dev/portfolio/jiggleexpo.mp4",
    },
    {
      title: "Step Loader",
      videoUrl:
        "https://pub-22c9c293f52b4202a4749ada55b9d7e1.r2.dev/portfolio/Dikshit_-_Built_this_clean_step-loader_component._CE6CHY.mp4",
    },
    {
      title: "Skeleton",
      videoUrl:
        "https://pub-22c9c293f52b4202a4749ada55b9d7e1.r2.dev/portfolio/Dikshit_-_Sleek_skeletion_animation._J3e4n8.mp4",
    },
    {
      title: "Text Completion",
      videoUrl:
        "https://pub-22c9c293f52b4202a4749ada55b9d7e1.r2.dev/portfolio/Dikshit_-_Built_a_clean_input_component_for_my_project._IEYWMV.mp4",
    },
  ],
  morphFrom: [
    "REST API tests",
    "Driver complaints",
    "Expense splits",
    "Photo-tile contacts",
  ],
  morphTo: [
    "Production SMS/OTP",
    "DistilBERT diagnostics",
    "Who-owes-whom logic",
    "One-tap family calls",
  ],
  roles: [
    "Software Engineer",
    "Technical Support Engineer",
    "Full Stack Developer",
  ],
};

export const webProjects = DATA.projects.filter(
  (p) => p.kind === "web" && p.shouldShow,
);
export const mobileProjects = DATA.projects.filter((p) => p.kind === "mobile");
export const marqueeProjects = DATA.projects.filter(
  (p) => p.kind === "web" && p.image,
);
