import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleInput(event) {
    let newData = {};
    setFormData((formData) => {
      return {
        ...formData,
        [event.target.name]: event.target.value,
      };
    });
  }
  function handleReset() {
    setFormData({
      username: "",
      password: "",
    });
  }

  return (
    <div>
      <input
        name="username"
        type="text"
        onChange={handleInput}
        value={formData["username"]}
      />
      <input
        name="password"
        type="password"
        onChange={handleInput}
        value={formData["password"]}
      />

      <button
        disabled={
          formData["username"] !== "" && formData["password"] !== ""
            ? false
            : true
        }
        onClick={() => console.log(formData)}
      >
        Login
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

/* 
Add a "reset" button to the Login component that clears the content of all three inputs when clicked */
