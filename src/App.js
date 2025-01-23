import React from "react";
import About from "./components/about.js";
import Projects from "./components/projects.js";
import Skills from "./components/skills.js";
import Contact from "./components/contact.js";
import Navbar from "./components/navbar.js";
import ScrollToTop from "./components/scrollToTop.js";
import Footer from "./components/footer.js";
import Introduction from "./components/introduction.js";

function App() {
  return (
    <div className="bg-cover bg-center bg-fixed"
    style={{
      backgroundImage: "url('./shubham-dhage-v0VjjYYFjOg-unsplash.jpg')", backgroundSize: 'auto'
    }}
    >
      <Navbar />
      <main>
        <section id="intro">
          <Introduction />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
