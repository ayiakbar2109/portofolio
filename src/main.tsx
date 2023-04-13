import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navbar from "./components/Navbar";
import Sidenav from "./components/Sidenav";
import "./index.css";
import "./fonts/GothamMedium.ttf";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Sidenav />
    <App />
  </React.StrictMode>
);

debugger;
