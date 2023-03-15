import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social_icon">
        <li className="li">
          <a
            href="https://www.linkedin.com/in/francisco-sanchez-a3717b214/"
            className="a"
            target="_blank"
            rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li className="li">
          <a
            href="https://github.com/MXCAZ"
            className="a"
            target="_blank"
            rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>
      <p className="p">
        My Full Development Portfolio - a React site by Francisco Sanchez
      </p>
    </footer>
  );
};

export default Footer;
