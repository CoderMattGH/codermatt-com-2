import { useState } from "react";
import { ImageOverlay } from "../ImageOverlay";
import { Loading } from "../Loading";
import "./index.css";

export function Projects() {
  const [showOverlay, setViewOverlay] = useState(false);
  const [fsImage, setFsImage] = useState(null);
  const [voluntierVidLoading, setVoluntierVidLoading] = useState(true);

  const displayFullscreenImage = (imgSrc) => {
    setFsImage(imgSrc);
    setViewOverlay(true);
  };

  return (
    <>
      {showOverlay ? (
        <ImageOverlay setViewOverlay={setViewOverlay} fsImage={fsImage} />
      ) : null}

      <div className="projects-container">
        <article className="project-card">
          <div className="project-description-container">
            <h2 className="project-name">Voluntier</h2>
            <p className="project-para">
              Voluntier is a mobile app that I worked on as part of a team for
              our final project on the Northcoders software engineering boot
              camp. The app aims to connect volunteers with charity
              organisations that need help whilst also gamifying the experience
              by offering the user achievement badges and leader-boards.
            </p>
            <p className="project-info">
              <span className="label">Tech Stack (Front-end):</span> React
              Native, Expo, Axios, Javascript
            </p>
            <p className="project-info">
              <span className="label">Tech Stack (Back-end):</span> Typescript,
              Express, Jest, Node-Postgres, PostgreSQL
            </p>
            <p className="project-info project-info--github">
              <span className="label">Source Code (Front-end): </span>
              <a
                className="project-info-link"
                target="_blank"
                href="https://github.com/CoderMattGH/voluntier-fe"
              >
                https://github.com/CoderMattGH/voluntier-fe
              </a>
            </p>
            <p className="project-info project-info--github">
              <span className="label">Source Code (Back-end): </span>
              <a
                className="project-info-link"
                target="_blank"
                href="https://github.com/CoderMattGH/voluntier-be"
              >
                https://github.com/CoderMattGH/voluntier-be
              </a>
            </p>
          </div>
          <div className="youtube-embed">
            {voluntierVidLoading ? (
              <div className="loading-video-container">
                <Loading />
              </div>
            ) : null}
            <iframe
              className="youtube-embed__video"
              width="99%"
              height="100%"
              src="https://www.youtube.com/embed/dKorROPEmF0"
              title="Voluntier"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
              onLoad={() => {
                setVoluntierVidLoading(false);
              }}
            ></iframe>
          </div>
        </article>

        <article className="project-card">
          <div className="project-description-container">
            <h2 className="project-name">Matt's Online Aim Trainer</h2>
            <p className="project-para">
              Matt's Online Aim Trainer (MOAT) is a web application I created
              that provides an aim-training service for gamers. The game
              consists of randomly appearing targets that the user must click in
              order to accrue points. The application provides a leader-board
              and performance statistics.
            </p>
            <p className="project-info">
              <span className="label">Tech Stack (Front-end):</span> React,
              Javascript
            </p>
            <p className="project-info">
              <span className="label">Tech Stack (Back-end):</span> Java, Spring
              Boot, JPA, Mockito, JUnit, H2
            </p>
            <p className="project-info project-info--github">
              <span className="label">Source Code (Front-end): </span>
              <a
                className="project-info-link"
                target="_blank"
                href="https://github.com/CoderMattGH/moat-fe"
              >
                https://github.com/CoderMattGH/moat-fe
              </a>
            </p>
            <p className="project-info project-info--github">
              <span className="label">Source Code (Back-end): </span>
              <a
                className="project-info-link"
                target="_blank"
                href="https://github.com/CoderMattGH/moat-be"
              >
                https://github.com/CoderMattGH/moat-be
              </a>
            </p>
            <p className="project-info">
              <span className="label">Link: </span>
              <a
                className="project-info-link"
                target="_blank"
                href="https://aim.codermatt.com/"
              >
                https://aim.codermatt.com/
              </a>
            </p>
          </div>
          <div className="project-image-container">
            <a
              className="project-image-link"
              onClick={() => {
                displayFullscreenImage("/images/moat1.jpg");
              }}
            >
              <img
                className="project-image"
                src="/images/moat1-thumb.png"
              ></img>
            </a>
            <a
              className="project-image-link project-image-link--final"
              onClick={() => {
                displayFullscreenImage("/images/moat2.jpg");
              }}
            >
              <img
                className="project-image"
                src="/images/moat2-thumb.png"
              ></img>
            </a>
          </div>
        </article>

        <article className="project-card">
          <div className="project-description-container">
            <h2 className="project-name">NC-News</h2>
            <p className="project-para">
              NC-News is a full-stack web application that I developed on the
              Northcoders software engineering boot camp. It is a social news
              aggregation, web content rating and discussion application similar
              to Reddit.
            </p>
            <p className="project-info">
              <span className="label">Tech Stack (Front-end):</span> React,
              Axios, Javascript
            </p>
            <p className="project-info">
              <span className="label">Tech Stack (Back-end):</span> Javascript,
              Express, Jest, Node-Postgres, PostgreSQL
            </p>
            <p className="project-info project-info--github">
              <span className="label">Source Code (Front-end): </span>
              <a
                className="project-info-link"
                target="_blank"
                href="https://github.com/CoderMattGH/nc-news-fe"
              >
                https://github.com/CoderMattGH/nc-news-fe
              </a>
            </p>
            <p className="project-info project-info--github">
              <span className="label">Source Code (Back-end): </span>
              <a
                className="project-info-link"
                target="_blank"
                href="https://github.com/CoderMattGH/nc-news-be"
              >
                https://github.com/CoderMattGH/nc-news-be
              </a>
            </p>
            <p className="project-info">
              <span className="label">Link: </span>
              <a
                className="project-info-link"
                target="_blank"
                href="https://nc-news.codermatt.com/"
              >
                https://nc-news.codermatt.com/
              </a>
            </p>
          </div>
          <div className="project-image-container">
            <a
              className="project-image-link"
              onClick={() => {
                displayFullscreenImage("/images/nc-news1.jpg");
              }}
            >
              <img
                className="project-image"
                src="/images/nc-news1-thumb.png"
              ></img>
            </a>
            <a
              className="project-image-link project-image-link--final"
              onClick={() => {
                displayFullscreenImage("/images/nc-news2.jpg");
              }}
            >
              <img
                className="project-image"
                src="/images/nc-news2-thumb.png"
              ></img>
            </a>
          </div>
        </article>

        <article className="project-card">
          <div className="project-description-container">
            <h2 className="project-name">Matt's Password Manager</h2>
            <p className="project-para">
              Matt's Password Manager (MPM) is a password management utility for
              Windows operating systems. It is an offline, lightweight,
              multi-threaded GUI application that uses the 128 bit AES
              encryption algorithm to save a user's passwords.
            </p>
            <p className="project-para">
              The application uses a Model View Presenter (MVP) design pattern
              to isolate different layers of the application to facilitate
              maintainability and testing.
            </p>
            <p className="project-info">
              <span className="label">Tech Stack:</span> C#, Windows Forms, .NET
              Core 8.0, xUnit
            </p>
            <p className="project-info project-info--github">
              <span className="label">Source Code: </span>
              <a
                className="project-info-link"
                target="_blank"
                href="https://github.com/CoderMattGH/matts-password-manager"
              >
                https://github.com/CoderMattGH/matts-password-manager
              </a>
            </p>
            <p className="project-info">
              <span className="label">Download: </span>
              <a
                className="project-info-link"
                target="_blank"
                href="https://github.com/CoderMattGH/matts-password-manager/releases/download/v0.1/MPMv0.1.zip"
              >
                MPMv0.1.zip
              </a>
            </p>
          </div>
          <div className="project-image-container">
            <a
              className="project-image-link"
              onClick={() => {
                displayFullscreenImage("/images/mpm1.jpg");
              }}
            >
              <img className="project-image" src="/images/mpm1-thumb.png"></img>
            </a>
            <a
              className="project-image-link project-image-link--final"
              onClick={() => {
                displayFullscreenImage("/images/mpm2.jpg");
              }}
            >
              <img className="project-image" src="/images/mpm2-thumb.png"></img>
            </a>
          </div>
        </article>

        <article className="project-card">
          <div className="project-description-container">
            <h2 className="project-name">Matt's Port Scanner</h2>
            <p className="project-para">
              Matt's Port Scanner is a TCP port scanner for Linux that uses raw
              sockets to scan target machines very quickly. The program returns
              a list of listening ports on the target machine.
            </p>
            <p className="project-para">
              Instead of simply trying to connect to a specific port on the
              target device using the connect() function, the program constructs
              its own SYN packet in memory, populates all the required fields
              and sends it to the network interface. This has the advantage of
              being less resource intensive because fewer threads are required.
            </p>
            <p className="project-info">
              <span className="label">Tech Stack:</span> C, POSIX Sockets
            </p>
            <p className="project-info project-info--github">
              <span className="label">Source Code: </span>
              <a
                className="project-info-link"
                target="_blank"
                href="https://github.com/CoderMattGH/matts-port-scanner"
              >
                https://github.com/CoderMattGH/matts-port-scanner
              </a>
            </p>
          </div>
          <div className="project-image-container">
            <a
              className="project-image-link"
              onClick={() => {
                displayFullscreenImage("/images/mps1.jpg");
              }}
            >
              <img className="project-image" src="/images/mps1-thumb.png"></img>
            </a>
            <a
              className="project-image-link project-image-link--final"
              onClick={() => {
                displayFullscreenImage("/images/mps2.jpg");
              }}
            >
              <img className="project-image" src="/images/mps2-thumb.png"></img>
            </a>
          </div>
        </article>

        <article className="project-card">
          <div className="project-description-container">
            <h2 className="project-name">Matt's File Viewer</h2>
            <p className="project-para">
              Matt's File Viewer is an educational GUI application for
              displaying file data information.
            </p>
            <p className="project-para">
              The application allows viewing a file's data in an assortment of
              different types including byte values, hexadecimal values, 8-bit
              characters, UTF-8 characters, and UTF-16 characters.
            </p>
            <p className="project-info">
              <span className="label">Tech Stack:</span> Java, Swing
            </p>
            <p className="project-info project-info--github">
              <span className="label">Source Code: </span>
              <a
                className="project-info-link"
                target="_blank"
                href="https://github.com/CoderMattGH/matts-file-viewer"
              >
                https://github.com/CoderMattGH/matts-file-viewer
              </a>
            </p>
            <p className="project-info">
              <span className="label">Download: </span>
              <a
                className="project-info-link"
                target="_blank"
                href="https://github.com/CoderMattGH/matts-file-viewer/releases/download/v1.0/MattsFileViewer.jar"
              >
                MattsFileViewer.jar
              </a>
            </p>
          </div>
          <div className="project-image-container">
            <a
              className="project-image-link"
              onClick={() => {
                displayFullscreenImage("/images/mfv1.jpg");
              }}
            >
              <img className="project-image" src="/images/mfv1-thumb.png"></img>
            </a>
            <a
              className="project-image-link project-image-link--final"
              onClick={() => {
                displayFullscreenImage("/images/mfv2.jpg");
              }}
            >
              <img className="project-image" src="/images/mfv2-thumb.png"></img>
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
