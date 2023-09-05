import React from "react";
import ReactDOM from "react-dom/client";

export default class Prova extends React.Component {
  state = {
    tot: 0,
  };

  add = () => {
    this.setState({ tot: this.state.tot + 1 });
  };

  render() {
    return (
      <div>
        <div>CIAO IL TOTALE E {this.state.tot}</div>
        <button onClick={this.add}>INCREMENTA</button>
      </div>
    );
  }
}
