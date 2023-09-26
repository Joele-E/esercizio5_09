import React, { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import DisplayLanguage from "./DisplayLanguage";

const App = () => {
  const [language, setLanguage] = useState("en");

  function handleLanguage(event) {
    setLanguage(event.target.value);
  }
  return (
    <div>
      <select
        name="langSelect"
        id=""
        onChange={handleLanguage}
        value={language}
      >
        <option value="it">ITALIANO</option>
        <option value="en">ENGLISH</option>
      </select>
      <LanguageContext.Provider value={language}>
        <DisplayLanguage />
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
