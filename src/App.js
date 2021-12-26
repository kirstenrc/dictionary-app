import React from "react";
import Dictionary from "./Dictionary";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Dictionary</div>
      </header>
      <main>
        <Dictionary defaultWord="sunset" />
      </main>
      <footer>Coded by Kirsten Cox</footer>
    </div>
  );
}

export default App;
