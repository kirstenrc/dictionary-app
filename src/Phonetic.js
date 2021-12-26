import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a
        href={props.phonetic.audio}
        className="audio"
        target="_blank"
        rel="noreferrer noopener"
      >
        audio
      </a>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
