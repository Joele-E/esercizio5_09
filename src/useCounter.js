import { useState } from "react";

export default function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  function handleIncrement() {
    setCounter((c) => c + 1);
  }
  function handleDecrement() {
    setCounter((c) => c - 1);
  }
  function handleReset() {
    setCounter(0);
  }

  return {
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onCounterReset: handleReset,
    counter: counter,
  };
}
