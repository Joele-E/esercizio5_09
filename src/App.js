import React from "react";
import ClickCounter from "./ClickCounter";

export default function App() {
  function handleCount(count) {
    console.log("The count is", count);
  }

  return (
    <div>
      <ClickCounter onCounterChange={handleCount} />
    </div>
  );
}

/* Create a ClickCounter class component that increments a counter every time a user 
clicks on a button. Render both the current value of the counter and the button within the ClickCounter component. */
