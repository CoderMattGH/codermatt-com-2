import { useState } from "react";
import "./index.css";

export function About() {
  const [respReadMore, setRespReadMore] = useState(false);

  const PARAGRAPH_1 = `I am a passionate and highly motivated programming enthusiast, 
      having developed my skills through self-learning, coding boot camps, and 
      The University of Manchester's Software Engineering program.`;

  const PARAGRAPH_2 = `My journey began at a very young age, programming in BASIC on 
      an old Amstrad CPC 464. Since then, I’ve expanded my knowledge across 
      various programming languages, techniques, and gained a deeper understanding 
      of underlying system architectures.`;

  const PARAGRAPH_3 = `On this website, you'll find a showcase of my projects, 
      links to my GitHub, contact details, and other interesting information about 
      my work and interests.`;

  return (
    <div className="page-container">
      <section className="tile-container about-section-unresponsive">
        <h2 className="sub-heading">About</h2>
        <p className="tile-para">{PARAGRAPH_1}</p>
        <p className="tile-para grid-para-read-more">{PARAGRAPH_2}</p>
        <p className="tile-para grid-para-read-more">{PARAGRAPH_3}</p>
      </section>

      <section className="tile-container about-section-responsive">
        <h2 className="sub-heading">About</h2>
        <p className="tile-para">{PARAGRAPH_1}</p>

        {!respReadMore ? (
          <p className="read-more-link-p">
            <a
              className="read-more-link"
              onClick={(e) => {
                setRespReadMore(true);
              }}
            >
              Read more ⇓
            </a>
          </p>
        ) : (
          <>
            <p className="tile-para grid-para-read-more">{PARAGRAPH_2}</p>
            <p className="tile-para grid-para-read-more">{PARAGRAPH_3}</p>
            <p className="read-more-link-p">
              <a
                className="read-more-link"
                onClick={(e) => {
                  setRespReadMore(false);
                }}
              >
                Read less ⇑
              </a>
            </p>
          </>
        )}
      </section>

      <section className="tile-container">
        <h2 className="sub-heading">Technical Skills</h2>
        <p className="about-info about-info--first">
          <span className="label">Languages: </span>Java, Javascript,
          Typescript, C#, C, HTML, CSS.
        </p>
        <p className="about-info">
          <span className="label">Testing: </span>Test Driven Development (TDD),
          Jest, Supertest, JUnit, Mockito, xUnit.
        </p>
        <p className="about-info">
          <span className="label">Back-end: </span>PostreSQL, MySQL, H2,
          Spring/Spring Boot, .NET Core.
        </p>
        <p className="about-info">
          <span className="label">Front-end: </span>React, jQuery, Thymeleaf,
          Lighthouse and other accessibility tools.
        </p>
        <p className="about-info">
          <span className="label">Hosting: </span>Cloudflare, Netlify, Apache
          HTTP Server, Apache Tomcat, Ubuntu Server administration.
        </p>
        <p className="about-info">
          <span className="label">Soft-skills: </span>Paired programming,
          technical communication, agile and SCRUM methodologies.
        </p>
      </section>

      <section className="tile-container" id="contact-section">
        <a className="contact-me-link" href="mailto:codermatt2000@outlook.com">
          codermatt2000@outlook.com
        </a>
      </section>
    </div>
  );
}
