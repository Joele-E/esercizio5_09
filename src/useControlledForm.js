import { useState } from "react";

export default function useControlledForm() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  function handleInput(event) {
    setData(() => {
      return {
        ...data,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleLogin() {
    console.log(data);
  }
  return {
    onInput: handleInput,
    data: data,
    onLogin: handleLogin,
  };
}
