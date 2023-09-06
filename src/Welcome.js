import React from "react";

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome {this.props.name ? this.props.name : "USER"}</p>
        <p>Your age is {this.props.age ? this.props.age : "0"}</p>
      </div>
    );
  }
}
