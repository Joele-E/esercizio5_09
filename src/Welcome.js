import React from "react";
import Age from "./Age";

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome {this.props.name ? this.props.name : "USER"}</p>
        {this.props.age > 18 ? <Age age={this.props.age} /> : <p></p>}
      </div>
    );
  }
}
