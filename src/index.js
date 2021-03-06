import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SearchBox from "./lib/components/SearchBox";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export { SearchBox };
