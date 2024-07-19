import "./index.css";

export function About() {
  return (
    <div className="about-container">
      <section className="about-section">
        <h2 className="sub-heading">
          Junior software developer based in Manchester, UK.
        </h2>
        <p className="grid-para">
          I am a highly-motivated computer programming enthusiast who has
          developed skills in my own free time, boot camps and through The
          University of Manchester's Software Engineering BSc (Hons) programme.
        </p>
        <p className="grid-para">
          I began programming at a very young age using my brother's old Amstrad
          CPC 464 in BASIC. Since then, I have learnt a variety of different
          languages, techniques and developed a deeper understanding of the
          underlying architectures. My passion for creating things using
          computers has only grown over time.
        </p>
        <p className="grid-para">
          On this website you will find projects that I have worked on, links to
          my GitHub, contact details and other interesting information about me.
        </p>
      </section>
      <section className="about-section">
        <h2 className="sub-heading">I possess a range of technical skills.</h2>
        <p className="grid-para">
          <span className="label">Languages: </span>Javascript, Typescript,
          Java, C, HTML, CSS.
        </p>
        <p className="grid-para">
          <span className="label">Testing: </span>Test Driven Development (TDD),
          Jest, Supertest, JUnit, Mockito.
        </p>
        <p className="grid-para">
          <span className="label">Back-end: </span>SQL, PSQL, H2, MySQL,
          Spring/Spring Boot.
        </p>
        <p className="grid-para">
          <span className="label">Front-end: </span>React, jQuery, Thymeleaf,
          Lighthouse and other accessibility tools.
        </p>
        <p className="grid-para">
          <span className="label">Hosting: </span>Cloudflare, Netlify, Apache
          HTTP Server, Apache Tomcat, Ubuntu Server administration.
        </p>
        <p className="grid-para">
          <span className="label">Soft-skills: </span>Paired programming,
          technical communication, SDL, agile and SCRUM methodologies.
        </p>
      </section>
      <section className="about-section skill-logo-container">
        <img className="skill-logo" src="./images/logos/java.svg" />
        <img className="skill-logo" src="./images/logos/spring.svg" />
        <img className="skill-logo" src="./images/logos/typescript.svg" />
        <img className="skill-logo" src="./images/logos/javascript.svg" />
        <img className="skill-logo" src="./images/logos/node.svg" />
        {/* <img className="skill-logo" src="./images/logos/psql.svg" /> */}
      </section>

      <section className="about-section">
        <h2 className="contact-me">CONTACT ME</h2>
        <p className="email-address">codermatt2000@outlook.com</p>
      </section>
    </div>
  );
}
