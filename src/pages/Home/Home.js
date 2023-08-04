import React, { useEffect, useState } from "react";
import "./Home.css";

import { useTranslation } from "react-i18next";

import Technologies from "./technologies/technologies";
import Languages from "./languages/languages";
import Weather from "./weather/weather";
import Modal from "./modal/modal";
import Contact from "../Contact/Contact";
import {
  MessageLanguage,
  MessageCertification,
  MessageAbout,
  MessageBenito,
} from "./modal/messages";

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.title = ` <FS/> | Frontend Developer `;
    const elements = document.querySelectorAll(".welcome, .letters");
    elements.forEach((element) => {
      changeLetters(element);
    });
  }, []);

  useEffect(() => {
    // Set a timer to hide the div after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  const [modal, setModal] = useState(false);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ.";

  const changeLetters = (element) => {
    let interval = null;
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      element.innerText = element.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return element.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= element.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  const { t } = useTranslation();

  return (
    <>
      <div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: 0 }}
        transition={{ duration: 1 }}
        className="homeContainer">
        <main>
          <section className="principalContainer1">
            <div className="welcome-container">
              <h2 className="name">
                {t("salute")} <span className="color">!!</span>
              </h2>
              <h2 className="name1">{t("present")}</h2>
              <h2
                data-value="Full-Stack"
                className="welcome"
                onMouseOver={(e) => changeLetters(e.target)}>
                LKNSGFDFGD
              </h2>
              <h2
                className="welcome"
                data-value="Web-Developer"
                onMouseOver={(e) => changeLetters(e.target)}>
                ASDFASADSSVXDD{" "}
              </h2>
            </div>
            <div className="secondWelcome">
              <div className="language">
                {isVisible && <MessageLanguage />}
                <Languages />
              </div>
              <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/francisco-sanchez-a3717b214/"
                  className="a"
                  target="_blank"
                  rel="noreferrer">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </section>
          <section className="secondMainContainer">
            {isVisible && <MessageCertification />}
            <div className="badge1">
              <a
                href="https://www.credly.com/badges/2ff384ba-9ac3-4296-a951-3b1924188896/public_url"
                target="_blank"
                rel="noreferrer">
                <img
                  src={require("./images/badge.png")}
                  alt="badge"
                  className="badgeImg"
                />
              </a>
              <div className="badgeText">
                <h3
                  className="letters"
                  style={{ textAlign: "initial" }}
                  data-value={t("badge")}
                  onMouseOver={(e) => changeLetters(e.target)}>
                  SCDE-VBAET
                </h3>
                <h3
                  className="letters"
                  style={{ textAlign: "initial" }}
                  data-value={t("badge2")}
                  onMouseOver={(e) => changeLetters(e.target)}>
                  FDGVEADFGV
                </h3>
                <h3 style={{ textAlign: "initial" }}>{t("badge3")}</h3>
                <h3
                  className="letters"
                  style={{ textAlign: "initial", margin: 0 }}
                  data-value={t("badge4")}
                  onMouseOver={(e) => changeLetters(e.target)}>
                  VCXCCXVB H
                </h3>

                <br />
                <h4>{t("Marzo")}</h4>
              </div>
            </div>
            <div className="homeProjects">
              <img
                className="cat"
                src={require("./images/myProjects.gif")}
                alt="pugProgramming"
              />

              <div className="projectText">
                <a
                  href="/Projects"
                  style={{ textDecoration: "none", color: "white" }}>
                  <i
                    className="fa-solid fa-diagram-project"
                    style={{ fontSize: "30px", marginBottom: "15px" }}></i>
                  <i
                    className="fa-solid fa-arrow-right-to-bracket"
                    style={{
                      position: "absolute",
                      right: "20px",
                      fontSize: "20px",
                    }}></i>
                  <h3>{t("Projects")}</h3>

                  <p>{t("pDescription")}</p>
                </a>
              </div>
            </div>
          </section>
          <section className="thirdContainer">
            <div className="githubContainer">
              <img
                className="pug"
                src={require("./images/pugAnimation.gif")}
                alt="catProgramming"
              />
              <div className="githubText">
                <a
                  href="https://github.com/MXCAZ"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "black" }}>
                  <i
                    className="fa-brands fa-github"
                    style={{ fontSize: "50px", marginBottom: "15px" }}></i>
                  <i
                    className="fa-solid fa-arrow-right-to-bracket"
                    style={{
                      position: "absolute",
                      right: "20px",
                      fontSize: "20px",
                    }}></i>

                  <h3
                    className="letters"
                    style={{ textAlign: "initial" }}
                    data-value="Github"
                    onMouseOver={(e) => changeLetters(e.target)}>
                    FDGVEAD
                  </h3>

                  <p style={{ fontSize: "24px" }}>{t("Github")}</p>
                </a>
              </div>
            </div>
            <div className="tecContainer">
              <Technologies />
              <div className="mail">
                {isVisible && <MessageAbout />}
                <img
                  src={require("./images/moreAboutMe.gif")}
                  alt="About"
                  className="aboutPug"
                />
                <i
                  className="fa-solid fa-arrow-right-to-bracket"
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "20px",
                    fontSize: "20px",
                  }}></i>
                <div style={{ position: "absolute" }}>
                  <a
                    href="about"
                    style={{ textDecoration: "none", color: "#fff" }}>
                    <p style={{ margin: 0, fontSize: "16px" }}>{t("mAbout")}</p>
                    <p>:D</p>
                    <i
                      className="fa-solid fa-address-card"
                      style={{ fontSize: "30px" }}></i>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="forthContainer">
            <div className="tecContainer">
              <div className="chatBenito">
                <div
                  style={{
                    height: "170px",
                    width: "170px",
                    borderRadius: "50%",
                    position: "relative",
                  }}
                  onClick={() => setModal(!modal)}>
                  <MessageBenito />
                  <img
                    src={require("./images/benito.png")}
                    alt="pug"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <Modal state={modal} changeState={setModal}></Modal>
              </div>

              <div className="moreAboutMe">
                <div className="loaderContainer">
                  <div className="box1"></div>
                  <div className="box2"></div>
                  <div className="box3"></div>
                </div>
              </div>
            </div>
            <div className="weatherContainer">
              <Weather />
            </div>
          </section>
          <section className="fifthContainer">
            <Contact />
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
