import React from "react";
import Dictionary from "./Dictionary";
import dictionary from "./dictionary-banner3.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={dictionary} alt="neon dictionary" className="img-fluid" />
        </div>
      </header>
      <main>
        <Dictionary defaultWord="sky" />
      </main>
      <footer>
        <a
          href="https://github.com/kirstenrc/dictionary-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          Open-source
        </a>{" "}
        code by{" "}
        <a
          href="https://vibrant-galileo-0d7b3f.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Kirsten Cox
        </a>
      </footer>
    </div>
  );
}

export default App;
