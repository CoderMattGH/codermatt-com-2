import { Header } from "./components/Header";
import { About } from "./components/About";

import "./App.css";

export function App() {
  return (
    <>
      <Header />
      <main className="main">
        <About />
      </main>
    </>
  );
}
