import { useState } from "react";
import "./index.css";

export function About() {
  const [respReadMore, setRespReadMore] = useState(false);

  const PARAGRAPH_1 = `I am a highly-motivated computer programming enthusiast who has
    developed skills in my own free time, boot camps and through The
    University of Manchester's Software Engineering programme.`;

  const PARAGRAPH_2 = `I began programming at a very young age using an old Amstrad CPC 464
    in BASIC. Since then, I have learnt a variety of different languages,
    techniques and developed a deeper understanding of the underlying
    architectures.`;

  const PARAGRAPH_3 = `On this website you will find projects that I have worked on, links to
    my GitHub, contact details and other interesting information about me.`;

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
        <h2 className="sub-heading">Contact</h2>
        <a className="contact-me-link" href="mailto:codermatt2000@outlook.com">
          <p className="email-address">codermatt2000@outlook.com</p>
        </a>
      </section>
    </div>
  );
}
