import React from "react";

export default function Technologies() {
  return (
    <div className="technologies">
      <ul className="skillsList1" style={{ paddingLeft: 0 }}>
        <li className="skills1">
          <img
            src={require("./image/HTML.ico")}
            alt="HTML"
            className="skillsImage1"
          />
        </li>
        <li className="skills1">
          <img
            src={require("./image/CSS.ico")}
            alt="CSS"
            className="skillsImage1"
          />
        </li>
        <li className="skills1">
          <img
            src={require("./image/Javascript.ico")}
            alt="Javascript"
            className="skillsImage1"
          />
        </li>
        <li className="skills1">
          <img
            src={require("./image/react.ico")}
            alt="React"
            className="skillsImage1"
          />
        </li>
      </ul>
      <ul className="skillsList1" style={{ paddingLeft: 0 }}>
        <li className="skills1">
          <img
            src={require("./image/node.ico")}
            alt="Node.js"
            className="skillsImage1"
          />
        </li>
        <li className="skills1">
          <img
            src={require("./image/MYSQL.ico")}
            alt="MYSQL"
            className="skillsImage1"
          />
        </li>
        <li className="skills1">
          <img
            src={require("./image/Mongo.ico")}
            alt="MongoDB"
            className="skillsImage1"
          />
        </li>

        <li className="skills1">
          <img
            src={require("./image/webpack.ico")}
            alt="webpack"
            className="skillsImage1"
          />
        </li>
      </ul>
      <ul className="skillsList1" style={{ paddingLeft: 0 }}>
        <li className="skills1">
          <img
            src={require("./image/git.ico")}
            alt="git"
            className="skillsImage1"
          />
        </li>
        <li className="skills1">
          <img
            src={require("./image/heroku.ico")}
            alt="heroku"
            className="skillsImage1"
          />
        </li>
        <li className="skills1">
          <img
            src={require("./image/figma.ico")}
            alt="figma"
            className="skillsImage1"
          />
        </li>
        <li className="skills1">
          <img
            src={require("./image/vs-code.ico")}
            alt="vs-code"
            className="skillsImage1"
          />
        </li>
      </ul>
    </div>
  );
}
