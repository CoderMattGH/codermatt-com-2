import "./index.css";

export function About() {
  return (
    <div className="container">
      <h3 className="sub-heading">
        I am a software developer based in Manchester, UK.
      </h3>
      <p className="about-para">
        My main passion is Java, in particular the Spring Framework. However, I
        am also skilled in web development using HTML, CSS, Javascript and
        frameworks like React.js and JQuery.
      </p>
      <p className="about-para">
        I fully integrate the features offered by Spring into my Java projects
        by using dependency injection, allowing me to write robust classes that
        are highly extensible. This aids in keeping the software that I write
        loosely coupled with high cohesion.
      </p>
      <p className="about-para">
        I understand the importance of testing, and I am versed in tools
        including JUnit and Mockito. I write my software with testing in mind by
        designing classes based on interfaces that can be easily mocked.
      </p>
      <p className="about-para">
        I have experience using and administrating SQL databases including MySQL
        and H2. I am adept with using ORM frameworks including Hibernate and JPA
        in order to model database entities as objects. I have experience using
        transactional contexts in order to achieve atomicity, consistency,
        isolation, and durability (ACID).
      </p>
      <p className="about-para">
        I am proficient in applying common software design patterns with a
        strong motivation to write well-structured and readable code which is
        easily extensible. I adhere to the principles of low coupling and high
        cohesion to write well-defined classes and functions.
      </p>
      <h2 className="contact-me">CONTACT ME</h2>
      <p className="email-address">codermatt2000@outlook.com</p>
    </div>
  );
}
