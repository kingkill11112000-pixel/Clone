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
    { name: "Grafana", icon: "/Grafana.png" },
    { name: "PostgreSQL", icon: "/svg/postgresql.svg" },
    { name: "Socket.io", icon: "/svg/socket.svg" },
    { name: "Shadcn UI", icon: "/svg/shad.svg" },
  ] satisfies Skill[],
  work: [
    {
      company: "Stealth",
      href: "",
      logoUrl: "/stealth.jpg",
      start: "Apr 2025",
      end: "May 2026",
      description:
        "As a Founding Engineer, building the entire React Native application from scratch. Leading mobile architecture, implementing core features, and establishing development workflows for a scalable cross-platform app.",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "NativeWind CSS",
        "Reanimated",
        "Supabase",
        "Zustand",
      ],
      badges: ["Full Time"],
    },
    {
      company: "Userology",
      href: "https://www.userology.co/",
      logoUrl: "/userology.jpg",
      start: "Jan 2025",
      end: "Mar 2025",
      description:
        "As a Frontend Developer at Userology, I worked on building and maintaining their user research platform that helps teams collect feedback and build better products. Focused on creating responsive UI components and implementing new features.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Figma",
        "LiveKit",
        "AWS",
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
  projects: [
    {
      title: "mergemint",
      href: "https://mergemint.appwrite.network",
      dates: "2025",
      shouldShow: true,
      kind: "web",
      description:
        "A gamified platform that turns open-source contribution into rewards. Repository owners connect GitHub via webhooks, and every merged PR earns contributors 'MM points' that can be redeemed for Solana SPL tokens. Built to motivate newcomers and ensure even the smallest contributors feel valued while helping maintainers attract fresh talent.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Solana",
        "Appwrite",
        "GitHub Webhooks",
        "Supabase",
      ],
      links: [
        { type: "Website", href: "https://mergemint.appwrite.network" },
        { type: "GitHub", href: "https://github.com/dikjain/mergemint" },
      ],
      image: "/mergemint.png",
    },
    {
      title: "Riyal AI SaaS",
      href: "https://riyal-ai-saa-s-gmi7.vercel.app/",
      dates: "2025",
      shouldShow: false,
      kind: "web",
      description:
        "A comprehensive Twitter analytics platform providing deep insights into profiles and posts. Features include real-time data scraping, AI-powered analytics, and interactive visualizations. Built with Next.js frontend and Node.js/Express backend, utilizing Playwright for scraping and Google GenAI for insights generation.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "Docker",
        "Playwright",
        "BullMQ",
        "Google GenAI",
        "Redis",
        "Supabase",
        "Drizzle ORM",
        "GSAP",
        "Zustand",
        "TailwindCSS",
      ],
      links: [
        { type: "Website", href: "https://riyal-ai-saa-s-gmi7.vercel.app/" },
        { type: "GitHub", href: "https://github.com/dikjain/riyal_Ai-SaaS/" },
        {
          type: "Demo",
          href: "https://www.loom.com/share/fc310724784f4368a0629ce98af3865c",
        },
      ],
      image: "/riyal2.png",
    },
    {
      title: "Not-A-Basic-Chat-App",
      href: "https://chat-app-3-2cid.onrender.com/",
      dates: "2024",
      shouldShow: true,
      kind: "web",
      description:
        "Built a real-time messaging app with AI-powered text-to-speech, speech-to-text, and smart auto-complete using MERN, Socket.io. Integrated media uploads and video calling features.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "GSAP",
        "TailwindCSS",
        "Socket.io",
        "AI",
        "SwiperJs",
      ],
      links: [
        { type: "Website", href: "https://chat-app-3-2cid.onrender.com/" },
        { type: "GitHub", href: "https://github.com/dikjain/Chat_app" },
      ],
      image: "/Chat_app.png",
      demoLink: "https://www.youtube.com/watch?v=2VNdbB0-AxI",
    },
    {
      title: "Zracy - AI-Powered Social Media Experiment",
      href: "https://youtube.com/shorts/acEf8PT5K5k",
      dates: "2024",
      shouldShow: true,
      kind: "mobile",
      description:
        "An experimental Instagram-inspired social platform with an autonomous AI that posts content, moderates posts, and interacts with users through comments - often with unexpected results. Built with React Native and Expo, featuring NativeWind styling, Supabase backend, and Clerk authentication. Currently on pause but served as an interesting exploration of AI-human social dynamics.",
      technologies: [
        "React Native",
        "Expo",
        "NativeWind",
        "Supabase",
        "Clerk",
        "AI",
      ],
      links: [{ type: "GitHub", href: "https://github.com/dikjain/bsm" }],
      image: "/zracy.png",
      demoLink: "https://youtube.com/shorts/acEf8PT5K5k",
      mobileThumbnails: [
        "/thumbs/zracy-1.png",
        "/thumbs/zracy-2.png",
        "/thumbs/zracy-3.png",
      ],
    },
    {
      title: "DigiStore (RetroCart) - Next.js E-Commerce Platform",
      href: "https://digi-store-nine.vercel.app/",
      dates: "2025",
      shouldShow: true,
      kind: "web",
      description:
        "Developed a Next.js-powered e-commerce platform with a retro-themed UI using Retro Tail UI. Integrated dynamic product listing, smooth checkout with PayPal, and secure authentication with Clerk.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Clerk",
        "PayPal",
        "TypeScript",
        "Drizzle ORM",
      ],
      links: [
        { type: "Website", href: "https://digi-store-nine.vercel.app/" },
        { type: "GitHub", href: "https://github.com/dikjain/DigiStore" },
      ],
      image: "/digi.png",
      demoLink: "https://www.youtube.com/watch?v=5soc3rR918I",
    },
    {
      title: "FlirtFuel - AI-Powered Conversational Assistant",
      href: "https://project-t80k.onrender.com/",
      dates: "2024",
      shouldShow: true,
      kind: "web",
      description:
        "Built an AI-driven platform using NLP and machine learning to analyze chat screenshots and generate personalized mood-based responses. Designed a real-time interactive UI with GSAP.",
      technologies: ["NLP", "Machine Learning", "GSAP"],
      links: [
        { type: "Website", href: "https://project-t80k.onrender.com/" },
        { type: "GitHub", href: "https://github.com/dikjain/Flirt-Fuel" },
      ],
      image: "/flrt.png",
      demoLink: "https://www.youtube.com/watch?v=lbdVEZuHPF8",
    },
    {
      title: "Print-It-Out",
      href: "https://printitout.onrender.com/",
      dates: "2024",
      shouldShow: true,
      kind: "web",
      description:
        "PrintItOut is a full-stack platform for administrators to upload assignments, allowing users to print them or their own documents at the same cost as traditional stationery, without waiting for store printing.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "TailwindCSS",
        "Chart.js",
      ],
      links: [
        { type: "Website", href: "https://printitout.onrender.com/" },
        { type: "GitHub", href: "https://github.com/dikjain/PrintItOut" },
      ],
      image: "/prnt.png",
      demoLink: "https://www.youtube.com/watch?v=6urN4LOPUFU",
    },
    {
      title: "Solana Wallet",
      href: "https://web3-nine-beta.vercel.app/",
      dates: "2025",
      shouldShow: true,
      kind: "web",
      description:
        "Built a web3 wallet application that enables users to create Solana wallets, view transaction history, and send SOL tokens with a clean and intuitive user interface.",
      technologies: ["Next.js", "TailwindCSS", "Solana"],
      links: [
        { type: "Website", href: "https://web3-nine-beta.vercel.app/" },
        { type: "GitHub", href: "https://github.com/dikjain/web3" },
      ],
      image: "/web3.png",
      demoLink:
        "https://www.linkedin.com/posts/dikshit-mahanot_got-bored-of-web2-so-i-built-solana-wallet-activity-7341173342021832705-gqrn",
    },
    {
      title: "Ani-Seach",
      href: "https://github.com/dikjain/Ani-Search",
      dates: "2025",
      shouldShow: true,
      kind: "mobile",
      description:
        "Developed a React Native Expo app that uses web scraping from YouTube and Reddit to generate AI content based on user searches. The app also employs AI to represent Shree Krishna and provide relevant shlokas.",
      technologies: [
        "React Native",
        "Expo",
        "Web Scraping",
        "AI",
        "YouTube API",
        "Reddit API",
        "Clerk",
      ],
      links: [{ type: "GitHub", href: "https://github.com/dikjain/Ani-Search" }],
      image: "/ani.png",
      demoLink: "https://youtube.com/shorts/Zww1611OBTo",
      mobileThumbnails: [
        "/thumbs/anisearch-1.PNG",
        "/thumbs/anisearch-2.PNG",
        "/thumbs/anisearch-3.PNG",
      ],
    },
    {
      title: "Neon Ai-Assistant",
      href: "https://github.com/dikjain/Neon-Ai-Assistant",
      dates: "2025",
      shouldShow: true,
      kind: "mobile",
      description:
        "Built Neon - an AI-powered mobile assistant that processes voice input into organized notes and to-dos. The app categorizes spoken content, handles API calls, stores data in Supabase, and sends notifications. A hands-free productivity tool that organizes tasks independently.",
      technologies: [
        "React Native",
        "Expo",
        "Node.js",
        "OpenAI",
        "Supabase",
        "Push Notifications",
        "Voice Recognition",
      ],
      links: [
        { type: "GitHub", href: "https://github.com/dikjain/Neon-Ai-Assistant" },
      ],
      image: "/neon.png",
      demoLink: "https://www.youtube.com/shorts/K10SdXxuYgw",
      mobileThumbnails: [
        "/thumbs/neon-1.png",
        "/thumbs/neon-2.png",
        "/thumbs/neon-3.png",
      ],
    },
    {
      title: "Budget Tracker",
      href: "https://github.com/dikjain/budget-app",
      dates: "2025",
      shouldShow: true,
      kind: "mobile",
      description:
        "A comprehensive mobile budget tracking application built with React Native and Expo. Features intuitive expense categorization, real-time budget monitoring, visual analytics with charts, and secure data storage. Helps users manage their finances effectively with a clean, user-friendly interface.",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "Supabase",
        "React Native Charts",
        "NativeWind",
      ],
      links: [{ type: "GitHub", href: "https://github.com/dikjain/budget-app" }],
      image: "",
      demoLink: "https://www.youtube.com/shorts/_V0nqY8VuV4",
      mobileThumbnails: [
        "/thumbs/money-1.PNG",
        "/thumbs/money-2.PNG",
        "/thumbs/money-3.PNG",
      ],
    },
    {
      title: "Task Manager",
      href: "https://task-manager-2-nine.vercel.app/",
      dates: "2025",
      shouldShow: true,
      kind: "web",
      description:
        "Built a full-stack Personal Task Management System using Next.js 15 and PostgreSQL. Implemented user authentication, task management features, and a responsive dashboard with a calendar view for task scheduling.",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "Drizzle ORM",
        "TypeScript",
        "Tailwind CSS",
        "clerk",
      ],
      links: [
        { type: "Website", href: "https://task-manager-2-nine.vercel.app/" },
        { type: "GitHub", href: "https://github.com/dikjain/task-manager" },
      ],
      image: "/assnmnt.png",
      demoLink: "https://youtu.be/iRmVPxWRLko",
    },
    {
      title: "Tic-Tac-Tactics",
      href: "https://multiplayer-tic-tac-toe-yhoq.onrender.com/",
      dates: "2024",
      shouldShow: true,
      kind: "web",
      description:
        "Built a cool Multiplayer Tic Tac Toe game using Socket.io, featuring real-time matching to get two players to play at a time.",
      technologies: [
        "Socket.io",
        "React",
        "Node.js",
        "TailwindCSS",
        "SweetAlert2",
      ],
      links: [
        {
          type: "Website",
          href: "https://multiplayer-tic-tac-toe-yhoq.onrender.com/",
        },
        { type: "GitHub", href: "https://github.com/dikjain/TicTacTactics" },
      ],
      image: "/multiplayer.png",
      demoLink: "https://www.youtube.com/watch?v=Ku5kgJbd_mc",
    },
    {
      title: "Chat-Guide",
      href: "https://chat-guide.vercel.app/",
      dates: "2024",
      shouldShow: true,
      kind: "web",
      description:
        "Built a cool highly animated GSAP website that has every detail about my chat app. It's built using HTML, CSS, JavaScript, GSAP, SVG animations, SwiperJS, and scrolling-based animation.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "GSAP",
        "SVG Animations",
        "SwiperJS",
        "Scrolling Based Animation",
      ],
      links: [
        { type: "Website", href: "https://chat-guide.vercel.app/" },
        { type: "GitHub", href: "https://github.com/dikjain/Chat_guide" },
      ],
      image: "/chat_guide.png",
      demoLink: "https://youtu.be/aa126icbYf8",
    },
  ] satisfies Project[],
  hackathons: [
    {
      title: "Code Kshetra 2.0",
      dates: "February 2025",
      image: "/cd.png",
      isFinalist: true,
    },
    {
      title: "Level Supermind Hackathon",
      dates: "January 2025",
      image: "/lvl.jpg",
      isFinalist: true,
    },
    {
      title: "DTU Brainwave Hackathon",
      dates: "September 2024",
      image: "/brn.png",
      isFinalist: true,
    },
  ] satisfies Hackathon[],
  openSource: [
    {
      name: "Cloudinary",
      href: "https://github.com/cloudinary/cloudinary-react-native/",
      imageSrc: "/cloudinary.png",
      color: "cloudinary",
      prs: [
        {
          number: 56,
          title:
            "Add availability checks and detailed error handling for video adapters",
          url: "https://github.com/cloudinary/cloudinary-react-native/pull/56",
        },
      ],
    },
    {
      name: "Dodo Payment",
      href: "https://github.com/dodopayments/dodopayments-react-native-demo/",
      imageSrc: "/dodopng.png",
      color: "dodo",
      prs: [
        {
          number: 3,
          title:
            "feat: Add two payment flows - SDK and Payment Link with bottom tab na…",
          url: "https://github.com/dodopayments/dodopayments-react-native-demo/pull/3",
        },
        {
          number: 2,
          title: "Fix: Improve demo app setup and fix critical bugs",
          url: "https://github.com/dodopayments/dodopayments-react-native-demo/pull/2",
        },
        {
          number: 122,
          title: "docs: add React Native SDK integration guide",
          url: "https://github.com/dodopayments/dodopayments-react-native-demo/pull/122",
        },
      ],
    },
    {
      name: "Hyperswitch",
      href: "https://github.com/juspay/hyperswitch-control-center/",
      imageSrc: "/hyperswitchpng.png",
      color: "hyperswitch",
      prs: [
        {
          number: 3716,
          title: "feat: Group merchants by product type in dropdown",
          url: "https://github.com/juspay/hyperswitch-control-center/pull/3716",
        },
        {
          number: 3710,
          title: "feat: revamp breadcrumb component with new design system",
          url: "https://github.com/juspay/hyperswitch-control-center/pull/3710",
        },
        {
          number: 3709,
          title: "feat: add script to automate connector addition",
          url: "https://github.com/juspay/hyperswitch-control-center/pull/3709",
        },
        {
          number: 3708,
          title: "fix: use npm run re:format with git diff check",
          url: "https://github.com/juspay/hyperswitch-control-center/pull/3708",
        },
        {
          number: 3707,
          title: "chore: update monaco-editor, react-pdf, and react-window packages",
          url: "https://github.com/juspay/hyperswitch-control-center/pull/3707",
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
    "/img/mum1.jpg",
    "/img/mum2.jpg",
    "/img/code6.jpg",
    "/img/code7.jpg",
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
  morphFrom: ["Scalable Webapps", "Frontend Magic", "User Interfaces", "Simple Scripts"],
  morphTo: [
    "Enterprise Solutions",
    "Cloud Architecture",
    "Backend Systems",
    "Complex Mobile Apps",
  ],
  roles: ["Design Engineer", "App Developer", "Full Stack Developer"],
};

export const webProjects = DATA.projects.filter(
  (p) => p.kind === "web" && p.shouldShow,
);
export const mobileProjects = DATA.projects.filter((p) => p.kind === "mobile");
export const marqueeProjects = DATA.projects.filter(
  (p) => p.kind === "web" && p.image,
);
