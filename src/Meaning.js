import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">
              {definition.definition}
              <br />
              <div className="example">{definition.example}</div>
              <br />
              <Synonyms synonyms={definition.synonyms} />
              <br />
              <hr />
              <br />
            </div>
          </div>
        );
      })}
    </div>
  );
}
