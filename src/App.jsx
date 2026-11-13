
import "./App.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function App() {
  const form = useRef();

const [status, setStatus] = useState("");

const sendEmail = (e) => {
  e.preventDefault();

  setStatus("Sending...");

  emailjs
    .sendForm(
      "template_vcdhklp",
      "service_9bd3dz9",
      form.current,
      {
        publicKey: "zCaRBRe82znGMav2k",
      }
    )
    .then(() => {
      setStatus("Message sent successfully!");
      form.current.reset();
    })
    .catch(() => {
      setStatus("Failed to send message. Please try again.");
    });
};
  return (
    <div className="portfolio">
      <nav className="navbar">
        <h2 className="logo">MyPortfolio<span>.</span></h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        
<img
  src={`${import.meta.env.BASE_URL}profile.jpeg`}
  alt="My Profile"
  className="profile-image"
/>

        <p className="welcome">WELCOME TO MY PORTFOLIO</p>
        <h1>Hi, I'm a <span>Full Stack Developer.</span></h1>
        <p className="description">
          I build modern websites and creative digital experiences.
          Explore my projects, blogs and journey.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">View Projects</a>
          <a href="#contact" className="secondary-btn">Contact Me</a>
        </div>
      </section>
      
{/* ABOUT SECTION */}
<section className="section" id="about">
  <p className="section-tag">GET TO KNOW ME</p>
  <h2>About Me</h2>
  <p className="section-text">
    I'm a passionate Full Stack Developer interested in
    building creative and user-friendly websites.
    I enjoy learning new technologies and developing
    real-world projects.
  </p>
</section>

{/* SKILLS SECTION */}
<section className="section" id="skills">
  <p className="section-tag">WHAT I KNOW</p>
  <h2>My Skills</h2>

  <div className="skills-container">
    <div className="skill-card">HTML</div>
    <div className="skill-card">CSS</div>
    <div className="skill-card">JavaScript</div>
    <div className="skill-card">React.js</div>
    <div className="skill-card">Node.js</div>
    <div className="skill-card">MongoDB</div>
  </div>
</section>

{/* PROJECTS SECTION */}
<section className="section" id="projects">
  <p className="section-tag">MY RECENT WORK</p>
  <h2>My Projects</h2>

  <div className="projects-container">
    <div className="project-card">
      <h3>Portfolio Website</h3>
      <p>A personal portfolio built using React and CSS.</p>
      <span>React • CSS</span>
    </div>

    <div className="project-card">
      <h3>E-Commerce Website</h3>
      <p>An online shopping website for electronic products.</p>
      <span>MERN Stack</span>
    </div>

    <div className="project-card">
      <h3>Blog Website</h3>
      <p>A platform to share articles and personal thoughts.</p>
      <span>React • JavaScript</span>
    </div>
  </div>
</section>

{/* BLOG SECTION */}
<section className="section" id="blog">
  <p className="section-tag">MY LATEST ARTICLES</p>
  <h2>My Blog</h2>

  <div className="projects-container">
    <div className="project-card">
      <h3>My Full Stack Journey</h3>
      <p>My learning journey in web development and the technologies I'm exploring.</p>
      <span>Web Development</span>
    </div>

    <div className="project-card">
      <h3>Why Learn React?</h3>
      <p>Understanding React and how it helps us build modern websites.</p>
      <span>React.js</span>
    </div>

    <div className="project-card">
      <h3>My First Projects</h3>
      <p>What I learned while building my first websites.</p>
      <span>Learning</span>
    </div>
  </div>
</section>

{/* CONTACT SECTION */}
<section className="section" id="contact">
  <p className="section-tag">LET'S CONNECT</p>
  <h2>Contact Me</h2>
  <p className="section-text">
    Have a project idea or want to connect? Feel free to contact me!
  </p>

  <div className="resume-btn-container">
    <a href={`${import.meta.env.BASE_URL}resume.pdf`} download className="secondary-btn">
      Download Resume
    </a>
  </div>

<form
  ref={form}
  className="contact-form"
  onSubmit={sendEmail}
>
  <input
    type="text"
    name="from_name"
    placeholder="Your Name"
    required
  />

  <input
    type="email"
    name="from_email"
    placeholder="Your Email"
    required
  />

  <textarea
    name="message"
    placeholder="Your Message"
    rows="5"
    required
  />

  <button type="submit">
    Send Message
  </button>

  <p>{status}</p>
</form>
  <p className="form-note">Contact form design only. Message sending will be added later.</p>
</section>

{/* FOOTER */}
<footer className="footer">
  <h3>MyPortfolio.</h3>
  <p>Designed & Built with React ❤️</p>
  
<div className="social-links">
  <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
  <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
</div>

  <p>© 2026 My Portfolio. All rights reserved.</p>
</footer>


    </div>
  );
}

export default App;
