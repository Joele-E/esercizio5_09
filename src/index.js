import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

/* 
Add a "login" button to the Login component. This button should be disabled as long as the username 
and password inputs are empty. When clicked, the event handler attached to the 
button should call an onLogin function passed as a prop to the Login component, passing it the state. */
