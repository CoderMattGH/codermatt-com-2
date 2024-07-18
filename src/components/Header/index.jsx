import "./index.css";

export function Header() {
  return (
    <header className="header">
      <div>
        <img src="./coder-matt-logo.svg"></img>
      </div>
      <div>
        <nav className="nav">
          <li className="nav__li">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav__li">
            <a className="nav-link" href="#">
              Projects
            </a>
          </li>
          <li className="nav__li">
            <a className="nav-link" href="#">
              Links
            </a>
          </li>
        </nav>
      </div>
    </header>
  );
}
