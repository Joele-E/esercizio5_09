import React from "react";

export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div>
        <input name="username" type="text" onChange={this.handleInput} />
        <input name="password" type="password" onChange={this.handleInput} />

        <button
          disabled={
            this.state.username !== "" && this.state.password !== ""
              ? false
              : true
          }
          onClick={this.props.onLogin}
        >
          Login
        </button>
      </div>
    );
  }
}

/* 
Add a "login" button to the Login component. This button should be disabled as long as the username 
and password inputs are empty. When clicked, the event handler attached to the 
button should call an onLogin function passed as a prop to the Login component, passing it the state. */
