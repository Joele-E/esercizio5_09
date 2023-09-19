import React, { useEffect, useState } from "react";

export default function ClickCounter({ onCounterChange }) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    onCounterChange(count);
  }, [count, onCounterChange]);
  function addCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>The count is: {count}</p>
      <button onClick={addCount}>INCREMENTA</button>
    </div>
  );
}
