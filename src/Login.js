import { createRef } from "react";
import React from "react";

export default class Login extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    let username = event.target.elements.username.value;
    let password = event.target.elements.password.value;
    console.log(username, password);
  };

  render() {
    return (
      <div>
        <form ref={this._formRef} onSubmit={this.handleSubmit}>
          <input name="username" type="text" autoFocus />
          <input name="password" type="password" />

          <button type="submit">Login</button>
          <button type="reset">reset</button>
        </form>
      </div>
    );
  }
}

/* 
Implement an UncontrolledLogin component that implements all the operations of the Login component, 
but does so using uncontrolled components.*/
