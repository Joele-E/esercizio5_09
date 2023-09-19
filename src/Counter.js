import React, { useEffect, useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div>
      <h1>The count is {counter}</h1>
    </div>
  );
}
