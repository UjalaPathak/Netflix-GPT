import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//React.StrictMode->(extra re-rendering) just checkes the inconsistent due to which sometime we see things being called twice in console this happenes only on development and its for good

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
