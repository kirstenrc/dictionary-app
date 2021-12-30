import React from "react";
import Dictionary from "./Dictionary";
import dictionary from "./dictionary-banner2.png";

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
          Open-source code
        </a>{" "}
        by Kirsten Cox
      </footer>
    </div>
  );
}

export default App;
