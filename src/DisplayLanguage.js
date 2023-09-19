import React from "react";
import { LanguageContext } from "./LanguageContext";

export default class DisplayLanguage extends React.Component {
  state = {
    language: "it",
  };

  render() {
    return (
      <LanguageContext.Consumer>
        {(language) => {
          return (
            <div>
              <h1>LINGUA SELEZIONATA: {language}</h1>
            </div>
          );
        }}
      </LanguageContext.Consumer>
    );
  }
}
