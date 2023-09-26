import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  function handleNavigate(path) {
    navigate(path);
  }
  return (
    <div>
      CIAO
      <button
        onClick={() => {
          handleNavigate("/counter");
        }}
      >
        COUNTER
      </button>
    </div>
  );
};

export default Welcome;
