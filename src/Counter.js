import React from "react";

export default class Counter extends React.Component {
  state = {
    counter: this.props.initialCount ? this.props.initialCount : 0,
  };

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          counter:
            this.state.counter +
            (this.props.increment ? this.props.increment : 1),
        }),
      this.props.interval ? this.props.interval : 1000
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
