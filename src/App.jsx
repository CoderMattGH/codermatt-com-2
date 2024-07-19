import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Projects } from "./components/Projects";

import "./App.css";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="projects" element={<Projects />} />
          {/* <Route path="*" element={} /> */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
