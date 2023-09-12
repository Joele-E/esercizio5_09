import React from "react";

export default class ClickCounter extends React.Component {
  state = {
    count: 0,
  };

  addCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <p>The count is: {this.state.count}</p>
        <button onClick={this.addCount}>INCREMENTA</button>
      </div>
    );
  }
}
