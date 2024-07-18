import "./index.css";

export function Header() {
  return (
    <header className="header">
      <div>
        <img src="./coder-matt-logo.svg"></img>
      </div>
      <div>
        <nav className="nav">
          <li className="nav__li">About</li>
          <li className="nav__li">Projects</li>
          <li className="nav__li">GitHub</li>
          <li className="nav__li">Contact</li>
        </nav>
      </div>
    </header>
  );
}
