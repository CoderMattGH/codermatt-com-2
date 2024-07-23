import { Link } from "react-router-dom";
import "./index.css";

export function Header() {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img className="title-img" src="/images/coder-matt-logo.svg"></img>
        </Link>
      </div>
      <div>
        <nav className="nav">
          <li className="nav__li">
            <Link className="nav-link" to="/">
              About
            </Link>
          </li>
          <li className="nav__li">
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
          </li>
          <li className="nav__li">
            <Link
              className="nav-link"
              target="_blank"
              to="https://github.com/CoderMattGH?tab=repositories"
            >
              GitHub
            </Link>
          </li>
        </nav>
      </div>
    </header>
  );
}
