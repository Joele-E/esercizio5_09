import React from "react";

export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleReset = () => {
    this.setState({
      username: "",
      password: "",
    });
  };
  render() {
    return (
      <div>
        <input
          name="username"
          type="text"
          onChange={this.handleInput}
          value={this.state.username}
        />
        <input
          name="password"
          type="password"
          onChange={this.handleInput}
          value={this.state.password}
        />

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
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

/* 
Add a "reset" button to the Login component that clears the content of all three inputs when clicked */
