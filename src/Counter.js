import React from "react";

export default class Counter extends React.Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ counter: this.state.counter + 1 }),
      1000
    );
  }
  render() {
    return (
      <div>
        <h1>The count is {this.state.counter}</h1>
      </div>
    );
  }
}
