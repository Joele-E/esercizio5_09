import React, { useState } from "react";

export default function ClickCounter() {
  const [count, setCount] = useState(1);

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
