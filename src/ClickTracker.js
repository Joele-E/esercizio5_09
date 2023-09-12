import React from "react";

export default class ClickTracker extends React.Component {
  state = {
    button: "",
  };

  handleButtonEvent = (event) => {
    let buttonPressed = event.target.id;
    this.setState({ button: buttonPressed });
  };
  render() {
    return (
      <div>
        <h1>You Clicked Button {this.state.button}</h1>
        <button id="1" onClick={this.handleButtonEvent}>
          Button1
        </button>
        <button id="2" onClick={this.handleButtonEvent}>
          Button2
        </button>
        <button id="3" onClick={this.handleButtonEvent}>
          Button3
        </button>
      </div>
    );
  }
}
