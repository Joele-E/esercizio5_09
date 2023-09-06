import React from "react";
import Age from "./Age";

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome {this.props.name ? this.props.name : "USER"}</p>
        <Age age={this.props.age} />
      </div>
    );
  }
}
