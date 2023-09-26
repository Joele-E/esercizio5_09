import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();
  function handleIncrement() {
    setCounter((c) => c + 1);
  }
  function handleNavigate(path) {
    navigate(path);
  }
  return (
    <div>
      COUNTER: {counter}
      <button onClick={handleIncrement}>Incrementa</button>
      <button
        onClick={() => {
          handleNavigate("/");
        }}
      >
        HOME
      </button>
    </div>
  );
};

export default Counter;
