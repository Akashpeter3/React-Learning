import ReactDOM from "react-dom/client";
import React from "react";

import App from "./App.jsx";
import "./index.css";
import Header from "./App.jsx";

const entryPoint = document.getElementById("root");
//ReactDOM.createRoot(entryPoint).render(<App />);
ReactDOM.createRoot(entryPoint).render(React.createElement(App));
