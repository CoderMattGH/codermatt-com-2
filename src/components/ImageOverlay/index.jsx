import "./index.css";

export function ImageOverlay({ setViewOverlay, fsImage }) {
  return (
    <div
      className="fullscreen-overlay"
      onClick={() => {
        setViewOverlay(false);
      }}
    >
      <div className="image-overlay-container">
        <img className="project-screenshot" src={fsImage}></img>
      </div>
    </div>
  );
}
