import profilePic from "./assets/profile.jpg";
import projectInventory from "./assets/project-inventory.png";
import projectLostFound from "./assets/project-lost-found.png";
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
    detail: "Building maintainable ASP.NET Core, C#, SQL Server, authentication, CRUD, and API-driven features.",
  },
  {
    title: "Product Mindset",
    detail: "Projects cover AI-assisted job tracking, plant care, a production-style REST API, lost-and-found recovery, smart parking, inventory workflows, and mobile learning tools.",
  },
  {
    title: "Completed Undergraduate Research",
    detail: "Worked on traffic prediction and dynamic routing with Graph Neural Networks for Dhaka road networks.",
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
      "Entity Framework Core (Learning)",
    ],
  },
  {
    group: "Databases",
    items: [
      "SQL Server",
      "MySQL",
      "SQLite",
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
    group: "Tools & CS",
    items: ["Git", "GitHub", "Java", "Python", "C++", "Graph Neural Networks"],
  },
];

export const projects = [
  {
    name: "AIJobTracker",
    year: "2026",
    category: "AI-powered .NET Web App",
    summary:
      "A full-stack job-search workspace for managing applications, tracking status history, analyzing job descriptions with AI, and matching resumes to opportunities.",
    impact:
      "Demonstrates practical ASP.NET Core MVC development with authentication, user-specific data, analytics, EF Core persistence, and external AI integration.",
    keyFeatures: ["ASP.NET Core Identity", "CRUD & Search", "Dashboard Analytics", "AI Job Analysis", "Resume Matching"],
    stack: ["ASP.NET Core MVC", "C#", ".NET 10", "EF Core", "SQL Server", "Google Gemini"],
    github: "https://github.com/Tasmia-Hossain/AIJobTracker",
    liveDemo: "https://youtu.be/Z-YWoROj0PY",
    featured: true,
  },
  {
    name: "PlantCareAI",
    year: "2026",
    category: "AI-powered .NET Web App",
    summary:
      "A plant-care management platform for plant profiles, watering and fertilizing records, health tracking, growth journals, and AI-powered care guidance.",
    impact:
      "Shows full-stack ASP.NET Core development with Identity, user-specific data isolation, file uploads, relational data modeling, and external AI API integration.",
    keyFeatures: ["ASP.NET Core Identity", "Plant & Care CRUD", "Image Uploads", "Health Tracking", "AI Health Assistant"],
    stack: ["ASP.NET Core MVC", "C#", ".NET 10", "EF Core", "SQL Server", "Groq API"],
    github: "https://github.com/Tasmia-Hossain/PlantCareAI",
    liveDemo: "https://youtu.be/IGENDYYFM4o",
  },
  {
    name: "EchoGPT Backend",
    year: "2026",
    category: "Backend REST API",
    summary:
      "A production-style REST API for an AI chat Chrome extension with authentication, subscriptions, multi-provider AI management, chat, web search, and Swagger documentation.",
    impact:
      "Demonstrates backend API design with NestJS, PostgreSQL, Prisma, JWT authentication, role-based access, encrypted provider keys, Docker, and automated tests.",
    keyFeatures: ["JWT Auth", "Role-based Access", "AI Provider Management", "Chat & Search", "Swagger / OpenAPI"],
    stack: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "JWT", "Docker"],
    github: "https://github.com/Tasmia-Hossain/EchoGPTBackend",
    liveDemo: "",
    featured: true,
  },
  {
    name: "Lost and Found Hub",
    year: "2025",
    category: ".NET Full-stack Web App",
    summary:
      "A recovery platform with authentication, image-based matching, advanced search, SMTP email alerts, and structured item recovery workflows.",
    impact:
      "Shows backend ownership across domain modeling, user flows, notification logic, and SQL Server-backed data access.",
    keyFeatures: ["Authentication", "CRUD", "SQL Server", "Responsive UI", "Email Notifications"],
    stack: ["ASP.NET Core MVC", "C#", "SQL Server", "SMTP"],
    github: "https://github.com/Tasmia-Hossain/lost-and-found-hub",
    liveDemo: "",
    image: projectLostFound,
    featured: true,
  },
  {
    name: "SafeParking",
    year: "2024",
    category: "Marketplace Platform",
    summary:
      "A parking discovery and booking system with map-based search, subscription contracts, reviews, admin tools, and payment history.",
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
      "A food-industry inventory application with admin, client, and supplier access plus product management and reporting.",
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
      "A Sudoku app with puzzle generation, difficulty modes, save/resume, SQLite persistence, timer, counters, and tutorials.",
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
