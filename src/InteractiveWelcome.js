import React from "react";
import Welcome from "./Welcome";

export default class InteractiveWelcome extends React.Component {
  state = {
    name: "",
  };
  handleInput = (event) => {
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleInput} />
        <Welcome name={this.state.name} />
      </div>
    );
  }
}

/* 
Create an InteractiveWelcome component that renders an input tag and the Welcome component. 
Pass the current content of the input tag to the name prop of
 the Welcome component. The input tag should be a controlled component. */
