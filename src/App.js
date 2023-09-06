import React from "react";
import Welcome from "./Welcome";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome age={64} name={"John"} />
      </div>
    );
  }
}
