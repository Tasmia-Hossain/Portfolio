import profilePic from "./assets/profile.jpg";
import projectAIJobTracker from "./assets/project-aijobtracker.png";
import projectEchoGPT from "./assets/project-echogpt.png";
import projectInventory from "./assets/project-inventory.png";
import projectLostFound from "./assets/project-lost-found.png";
import projectPlantCareAI from "./assets/project-plantcareai.png";
import projectSafeParking from "./assets/project-safeparking.png";
import projectSudoku from "./assets/project-sudoku.png";

export const profile = {
  name: "Tasmia Hossain",
  headline: "Software Engineer | .NET Developer",
  location: "Dhaka, Bangladesh",
  email: "tasmiahossain360@gmail.com",
  github: "https://github.com/Tasmia-Hossain",
  linkedin: "https://linkedin.com/in/tasmia-hossain-kashfia",
  resume: "/Tasmia_Hossain_CV.pdf",
  image: profilePic,
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Coding Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const roles = [
  ".NET Developer",
  "Software Engineer",
  "ASP.NET Core Developer",
  "Backend Developer",
  "C# Developer",
];

export const heroMetrics = [
  { value: "7+", label: "Production-style projects" },
  { value: "3.60+", label: "CSE CGPA at AUST" },
  { value: "2026", label: "Graduated" },
];

export const highlights = [
  {
    title: "Backend Focus",
    detail: "Building backend applications with ASP.NET Core, C#, SQL Server, authentication, CRUD, and REST APIs.",
  },
  {
    title: "Product Mindset",
    detail: "Building practical applications across AI, REST APIs, web systems, and mobile software.",
  },
  {
    title: "Completed Undergraduate Research",
    detail: "Research on traffic prediction and dynamic routing using Graph Neural Networks for Dhaka road networks.",
  },
];

export const skills = [
  {
    group: ".NET Backend",
    items: [
      "C#",
      "ASP.NET Core",
      "ASP.NET Core MVC",
      "RESTful APIs",
      "Authentication",
      "CRUD Operations",
      "Entity Framework Core",
    ],
  },
  {
    group: "Backend & APIs",
    items: [
      "NestJS",
      "TypeScript",
      "RESTful APIs",
      "Swagger / OpenAPI",
      "JWT Authentication",
      "Role-based Access Control",
    ],
  },
  {
    group: "Databases",
    items: [
      "SQL Server",
      "MySQL",
      "SQLite",
      "PostgreSQL",
      "Prisma ORM",
      "Database Design",
      "Query Design",
      "Relational Modeling",
    ],
  },
  {
    group: "Frontend",
    items: ["JavaScript", "Bootstrap", "HTML5", "CSS3", "React (Basic)", "Responsive UI"],
  },
  {
    group: "Tools, Testing & CS",
    items: ["Git", "GitHub", "Docker", "Jest", "Supertest", "Java", "Python", "C++", "Graph Neural Networks"],
  },
];

export const projects = [
  {
    name: "AIJobTracker",
    year: "2026",
    category: "AI-powered .NET Web App",
    summary:
      "Job application tracker with status history, analytics, AI job analysis, and resume matching.",
    impact:
      "Demonstrates practical ASP.NET Core MVC development with authentication, user-specific data, analytics, EF Core persistence, and external AI integration.",
    keyFeatures: ["ASP.NET Core Identity", "CRUD & Search", "Dashboard Analytics", "AI Job Analysis", "Resume Matching"],
    stack: ["ASP.NET Core MVC", "C#", ".NET 10", "EF Core", "SQL Server", "Google Gemini"],
    github: "https://github.com/Tasmia-Hossain/AIJobTracker",
    liveDemo: "https://youtu.be/Z-YWoROj0PY",
    image: projectAIJobTracker,
  },
  {
    name: "PlantCareAI",
    year: "2026",
    category: "AI-powered .NET Web App",
    summary:
      "Plant management app with care tracking, health records, image uploads, and AI-powered guidance.",
    impact:
      "Shows full-stack ASP.NET Core development with Identity, user-specific data isolation, file uploads, relational data modeling, and external AI API integration.",
    keyFeatures: ["ASP.NET Core Identity", "Plant & Care CRUD", "Image Uploads", "Health Tracking", "AI Health Assistant"],
    stack: ["ASP.NET Core MVC", "C#", ".NET 10", "EF Core", "SQL Server", "Groq API"],
    github: "https://github.com/Tasmia-Hossain/PlantCareAI",
    liveDemo: "https://youtu.be/IGENDYYFM4o",
    image: projectPlantCareAI,
  },
  {
    name: "EchoGPT Backend",
    year: "2026",
    category: "AI Chat Backend API",
    summary:
      "AI chat backend with authentication, subscriptions, multi-provider AI, chat, web search, and Swagger.",
    impact:
      "Demonstrates modular API architecture with NestJS, PostgreSQL, Prisma, JWT access and refresh tokens, RBAC, encrypted provider keys, rate limiting, request validation, caching, Docker, and automated tests.",
    keyFeatures: ["JWT + Refresh Tokens", "RBAC & Subscriptions", "AI Provider Management", "Chat & Search Caching", "Rate Limiting & Validation", "Swagger / OpenAPI", "Automated Tests"],
    stack: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "JWT", "Docker", "Jest / Supertest"],
    github: "https://github.com/Tasmia-Hossain/EchoGPTBackend",
    liveDemo: "",
    image: projectEchoGPT,
  },
  {
    name: "Lost and Found Hub",
    year: "2025",
    category: ".NET Full-stack Web App",
    summary:
      "Lost-and-found platform with authentication, image matching, search, email alerts, and recovery workflows.",
    impact:
      "Shows backend ownership across domain modeling, user flows, notification logic, and SQL Server-backed data access.",
    keyFeatures: ["Authentication", "CRUD", "SQL Server", "Responsive UI", "Email Notifications"],
    stack: ["ASP.NET Core MVC", "C#", "SQL Server", "SMTP"],
    github: "https://github.com/Tasmia-Hossain/lost-and-found-hub",
    liveDemo: "",
    image: projectLostFound,
  },
  {
    name: "SafeParking",
    year: "2024",
    category: "Marketplace Platform",
    summary:
      "Parking discovery and booking platform with maps, subscriptions, reviews, and admin tools.",
    impact:
      "Built around real user roles, search workflows, transaction history, and operational admin visibility.",
    keyFeatures: ["CRUD", "Role-based Access", "Responsive UI", "Search", "Admin Dashboard"],
    stack: ["PHP", "MySQL", "JavaScript", "Google Maps API"],
    github: "https://github.com/Tasmia-Hossain/safeparking",
    liveDemo: "",
    image: projectSafeParking,
  },
  {
    name: "Inventory Control System",
    year: "2024",
    category: "Management System",
    summary:
      "Inventory management system with role-based access, product management, and reporting.",
    impact:
      "Demonstrates CRUD-heavy workflow design, relational data handling, role separation, and business reporting.",
    keyFeatures: ["CRUD", "Role-based Access", "MySQL", "Responsive UI", "Reports"],
    stack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: "https://github.com/Tasmia-Hossain/Inventory-Control-System",
    liveDemo: "",
    image: projectInventory,
  },
  {
    name: "Sudoku Bliss",
    year: "2023",
    category: "Cross-platform Game",
    summary:
      "Cross-platform Sudoku app with puzzle generation, save/resume, SQLite persistence, and tutorials.",
    impact:
      "Highlights mobile state management, persistence, algorithmic logic, and a polished user-facing experience.",
    keyFeatures: ["SQLite", "Save and Resume", "Puzzle Generation", "Responsive UI", "Local Storage"],
    stack: ["Flutter", "Dart", "SQLite"],
    github: "https://github.com/Tasmia-Hossain/Sudoku-Bliss",
    liveDemo: "",
    image: projectSudoku,
  },
];

export const research = {
  title:
    "Traffic Flow Prediction and Dynamic Routing in Bangladesh's Urban Transport Networks with Graph Neural Networks",
  summary:
    "Completed research focused on modeling Dhaka road networks as graphs to predict traffic flow patterns, identify congestion hotspots, and support adaptive routing decisions for smart city transport systems.",
  points: [
    "Graph-based representation of roads, intersections, and traffic movement.",
    "Prediction-oriented workflow using temporal and spatial traffic patterns.",
    "Practical motivation: congestion-aware routing for Bangladesh's dense urban networks.",
  ],
  stack: ["Python", "Graph Neural Networks", "Urban Mobility", "Traffic Prediction"],
};

export const codingJourney = {
  currentLearning: [
    "Microsoft Learn",
    "C#",
    "ASP.NET Core",
    "Entity Framework Core",
    "SQL Server",
    "LeetCode",
  ],
  platforms: [
    {
      name: "LeetCode",
      detail: "Strengthening arrays, strings, SQL, and core data-structure problem solving.",
      status: "Active practice",
    },
    {
      name: "Microsoft Learn",
      detail: "Following .NET, C#, web API, Entity Framework Core, and SQL Server learning paths.",
      status: "Current learning",
    },
    {
      name: "GitHub",
      detail: "Maintaining project repositories with recruiter-readable structure and documentation.",
      status: "Portfolio proof",
    },
  ],
};

export const education = [
  {
    school: "Ahsanullah University of Science and Technology",
    detail: "B.Sc. in Computer Science & Engineering",
    meta: "CGPA 3.60+ / 4.00 | Graduated 2026",
  },
  {
    school: "Dhaka City College",
    detail: "Higher Secondary Certificate",
    meta: "GPA 5.00 / 5.00 | 2020",
  },
  {
    school: "YWCA Higher Secondary Girls' School",
    detail: "Secondary School Certificate",
    meta: "GPA 5.00 / 5.00 | 2018",
  },
];
