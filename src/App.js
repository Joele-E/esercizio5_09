import React from "react";
import Counter from "./Counter";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Counter increment={0.5} interval={500} />
      </div>
    );
  }
}
