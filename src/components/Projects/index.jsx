import "./index.css";

export function Projects() {
  return (
    <div className="projects-container">
      <article>
        <h2 className="project-name">Voluntier</h2>
        <p className="project-para">
          Voluntier is a mobile app that I worked on as part of a team for our
          final project on the NorthCoders bootcamp. The app aims to connect
          volunteers with charity organisations that need help whilst also
          gamifying the experience by offering the user achievment badges and
          leaderboards.
        </p>
        <p className="project-info">
          <span className="project-info__label">Tech Stack (Front-end):</span>{" "}
          React Native, Expo, Axios, Javascript.
        </p>
        <p className="project-info">
          <span className="project-info__label">Tech Stack (Back-end):</span>{" "}
          Typescript, Express, Jest, Node-Postgres, PostgreSQL.
        </p>
        <p className="project-info">
          <span className="project-info__label">Source Code (Front-end): </span>
          <a
            className="project-info-link"
            href="https://github.com/CoderMattGH/vountier-fe"
          >
            https://github.com/CoderMattGH/vountier-fe
          </a>
        </p>
        <p className="project-info">
          <span className="project-info__label">Source Code (Back-end): </span>
          <a
            className="project-info-link"
            href="https://github.com/CoderMattGH/vountier-be"
          >
            https://github.com/CoderMattGH/vountier-be
          </a>
        </p>
        <div className="youtube-embed">
          <embed
            src="https://www.youtube.com/embed/zE38K-jLEzc?controls=1"
            wmode="transparent"
            type="video/mp4"
            width="100%"
            height="100%"
            allow="autoplay; encrypted-media; picture-in-picture"
            title="Keyboard Cat"
          ></embed>
        </div>
      </article>
    </div>
  );
}
