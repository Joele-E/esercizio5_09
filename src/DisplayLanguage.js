import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const DisplayLanguage = () => {
  const language = useContext(LanguageContext);

  return <div>LINGUA SCELTA: {language}</div>;
};

export default DisplayLanguage;
