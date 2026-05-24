import { useEffect, useState } from "react";
import profilePic from "./assets/profile.jpg";

function getAsset(fileName) {
  try {
    return require(`./assets/${fileName}`);
  } catch {
    return null;
  }
}

const contact = {
  email: "tasmiahossain1703@gmail.com",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/Tasmia-Hossain",
  linkedin: "https://linkedin.com/in/tasmia-hossain-kashfia",
};

const roles = [
  "Full-Stack Developer",
  "CSE Student",
  "React Developer",
  "Flutter Developer",
  "AI Research Learner",
];

const highlights = [
  { title: "Education", detail: "B.Sc. in CSE at AUST", meta: "CGPA 3.63 / 4.00" },
  { title: "Focus", detail: "Full-stack web and mobile apps", meta: "React, ASP.NET, PHP, Flutter" },
  { title: "Research", detail: "Traffic flow prediction with GNN", meta: "Ongoing thesis work" },
];

const skills = [
  {
    group: "Languages",
    items: ["C", "C++", "Java", "Python", "JavaScript", "Dart"],
  },
  {
    group: "Web & App Development",
    items: ["ReactJS", "HTML", "CSS", "Bootstrap", "Flutter", "ASP.NET Core MVC"],
  },
  {
    group: "Database & Backend",
    items: ["C#", "PHP", "MySQL", "Microsoft SQL Server", "MongoDB", "SignalR"],
  },
  {
    group: "AI/ML & Tools",
    items: ["Graph Neural Networks", "TinyML", "NLP", "Git", "GitHub", "Android Studio"],
  },
];

const projects = [
  {
    name: "Lost and Found Hub",
    year: "2025",
    category: "Full-stack Web App",
    summary:
      "A recovery platform with image-based matching, real-time notifications, authentication, SMTP email alerts, and advanced search.",
    stack: ["ASP.NET Core MVC", "C#", "SQL Server", "SignalR"],
    github: "https://github.com/Tasmia-Hossain/lost-and-found-hub",
    image: getAsset("project-lost-found.png"),
  },
  {
    name: "SafeParking",
    year: "2024",
    category: "Marketplace Platform",
    summary:
      "A parking discovery and booking app with Google Maps, subscription contracts, reviews, admin dashboard, and payment history.",
    stack: ["PHP", "MySQL", "JavaScript", "Google Maps API"],
    github: "https://github.com/Tasmia-Hossain/safeparking",
    image: getAsset("project-safeparking.png"),
  },
  {
    name: "Inventory Control System",
    year: "2024",
    category: "Management System",
    summary:
      "A food-industry inventory system with admin/client/supplier access, product management, supplier tracking, and reporting.",
    stack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: "https://github.com/Tasmia-Hossain/Inventory-Control-System",
    image: getAsset("project-inventory.png"),
  },
  {
    name: "Sudoku Bliss",
    year: "2023",
    category: "Cross-platform Game",
    summary:
      "A Sudoku app with puzzle generation, difficulty modes, save/resume, SQLite persistence, timer, counters, and tutorials.",
    stack: ["Flutter", "Dart", "SQLite"],
    github: "https://github.com/Tasmia-Hossain/Sudoku-Bliss",
    image: getAsset("project-sudoku.png"),
  },
];

const education = [
  {
    school: "Ahsanullah University of Science and Technology",
    detail: "B.Sc. in Computer Science & Engineering",
    meta: "CGPA 3.63 / 4.00 | Expected June 2026",
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

function useRoleRotator() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visibleText, setVisibleText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const delay = deleting ? 45 : 85;
    const pause = visibleText === currentRole && !deleting ? 1200 : delay;

    const timer = setTimeout(() => {
      if (!deleting && visibleText.length < currentRole.length) {
        setVisibleText(currentRole.slice(0, visibleText.length + 1));
        return;
      }

      if (!deleting && visibleText.length === currentRole.length) {
        setDeleting(true);
        return;
      }

      if (deleting && visibleText.length > 0) {
        setVisibleText(currentRole.slice(0, visibleText.length - 1));
        return;
      }

      setDeleting(false);
      setRoleIndex((current) => (current + 1) % roles.length);
    }, pause);

    return () => clearTimeout(timer);
  }, [deleting, roleIndex, visibleText]);

  return visibleText;
}

function App() {
  const visibleRole = useRoleRotator();

  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#home">Tasmia Hossain</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-image">
          <img src={profilePic} alt="Tasmia Hossain" />
        </div>

        <div className="hero-content">
          <p className="pretitle">Hello, I'm</p>
          <h1>Tasmia Hossain</h1>
          <p className="role-line">
            <span>{visibleRole}</span>
          </p>
          <p className="hero-summary">
            CSE student at AUST building practical full-stack web and mobile applications with
            React, ASP.NET Core, PHP/MySQL, Flutter, and database-focused project experience.
          </p>
          <div className="button-row">
            <a className="btn btn-outline" href="/Tasmia_Hossain_CV.pdf" download>Download CV</a>
            <a className="btn btn-filled" href="#contact">Contact Info</a>
          </div>
          <div className="social-row" aria-label="Social links">
            <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.94 8.98H3.56V20h3.38V8.98ZM5.25 4a1.96 1.96 0 1 0 0 3.92A1.96 1.96 0 0 0 5.25 4Zm14.86 9.68c0-3.05-1.63-4.47-3.8-4.47a3.28 3.28 0 0 0-2.98 1.64h-.05V8.98h-3.24V20h3.38v-5.45c0-1.44.27-2.83 2.05-2.83 1.76 0 1.78 1.64 1.78 2.92V20h3.38v-6.32h-.02Z" />
              </svg>
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.11.79-.25.79-.56v-2.02c-3.22.7-3.9-1.38-3.9-1.38-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.11-.75.41-1.26.74-1.55-2.57-.29-5.27-1.28-5.27-5.72 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.18 1.19a10.98 10.98 0 0 1 5.8 0c2.2-1.5 3.17-1.19 3.17-1.19.64 1.59.24 2.77.12 3.06.74.81 1.19 1.85 1.19 3.11 0 4.45-2.7 5.42-5.28 5.71.42.36.79 1.07.79 2.16v3.05c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <p className="section-pretitle">Get To Know More</p>
        <h2 className="section-title">About Me</h2>
        <div className="about-layout">
          <div className="about-image">
            <img src={profilePic} alt="Tasmia Hossain" />
          </div>
          <div className="about-content">
            <div className="highlight-grid">
              {highlights.map((item) => (
                <article className="highlight-card" key={item.title}>
                  <div className="card-icon">{item.title.slice(0, 1)}</div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <span>{item.meta}</span>
                </article>
              ))}
            </div>
            <p className="about-text">
              I am a Computer Science and Engineering undergraduate at Ahsanullah University of Science and Technology with interests in full-stack software development, AI/ML systems, and intelligent urban technologies. I have built web, mobile, and database-driven applications using technologies such as ASP.NET Core, React, PHP, Flutter, and SQL-based systems.

              My work includes projects focused on real-time communication, smart parking solutions, inventory management, and mobile application development. I am also conducting ongoing research on traffic flow prediction and dynamic routing using Graph Neural Networks for urban transport systems in Bangladesh.

              I enjoy solving real-world problems through scalable software solutions and continuously improving my skills through hands-on development, research, and collaborative learning. I am currently seeking internship or junior software engineering opportunities where I can contribute, grow, and work with strong engineering teams.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft-section" id="skills">
        <p className="section-pretitle">Explore My</p>
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skillGroup) => (
            <article className="skills-card" key={skillGroup.group}>
              <h3>{skillGroup.group}</h3>
              <div className="skill-list">
                {skillGroup.items.map((skill) => (
                  <div className="skill-item" key={skill}>
                    <span className="checkmark">{"\u2713"}</span>
                    <div>
                      <strong>{skill}</strong>
                      <p>Experienced</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <p className="section-pretitle">Browse My Recent</p>
        <h2 className="section-title">Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <div className="project-visual">
                {project.image ? (
                  <img src={project.image} alt={`${project.name} screenshot`} />
                ) : (
                  <span>{String(index + 1).padStart(2, "0")}</span>
                )}
              </div>
              <div className="project-body">
                <p className="project-meta">{project.category} | {project.year}</p>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="stack-list">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="button-row project-actions">
                  <a className="btn btn-outline" href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section research-section">
        <p className="section-pretitle">Current Research</p>
        <h2 className="section-title research-title">
          Traffic Flow Prediction and Dynamic Routing in Bangladesh's Urban Transport Networks with
          Graph Neural Networks
        </h2>
        <div className="research-card">
          <p>
            Developing a graph neural network based model to predict urban traffic flow patterns
            and congestion hotspots across Dhaka road networks, with adaptive routing ideas for
            smart city congestion management.
          </p>
        </div>
      </section>

      <section className="section education-section">
        <p className="section-pretitle">Academic Journey</p>
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={item.school}>
              <h3>{item.school}</h3>
              <p>{item.detail}</p>
              <span>{item.meta}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <p className="section-pretitle">Get in Touch</p>
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-box">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>

      <footer>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <p>(c) 2026 Tasmia Hossain. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default App;
