import React from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import Card from "./Card";
import { robots } from "./robots";

ReactDOM.render(
  <React.StrictMode>
    <div className="roboto">
      <Card name={robots[0].name} email={robots[0].email} />
      <Card name={robots[0].name} email={robots[0].email} />
      <Card name={robots[0].name} email={robots[0].email} />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
