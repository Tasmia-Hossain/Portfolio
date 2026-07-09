import About from "./components/About";
import CodingJourney from "./components/CodingJourney";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Skills from "./components/Skills";
import { navLinks } from "./portfolioData";

function App() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#home">
          Tasmia Hossain
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <CodingJourney />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
