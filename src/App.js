import React from "react";
import ClickCounter from "./ClickCounter";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ClickCounter />
      </div>
    );
  }
}

/* Create a ClickCounter class component that increments a counter every time a user 
clicks on a button. Render both the current value of the counter and the button within the ClickCounter component. */
