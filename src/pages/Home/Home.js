import React, { useEffect } from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Home = () => {
  useEffect(() => {
    document.title = ` <FS/> | Home `;
  }, []);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ.";

  let interval = null;

  const changeLetters = (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  const { t } = useTranslation();
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: 0 }}
        transition={{ duration: 1 }}
        className="homeContainer">
        <div className="Welcome-container">
          <h2 className="name">
            {t("salute")} <span className="color">!!</span>
          </h2>
          <h2 className="name1 ">{t("present")}</h2>
          <h2
            data-value="Full-Stack"
            onMouseOver={changeLetters}
            className="welcome">
            LKNSGFDFGD
          </h2>
          <h2
            className="welcome"
            data-value="Web-Developer"
            onMouseOver={changeLetters}>
            ASDFASADSSVXND{" "}
          </h2>
          {/* <h2
            className="welcome"
            data-value="Junior"
            onMouseOver={changeLetters}>
            {" "}
            DFGSFG
          </h2> */}
          {/* <div className="text">
            <p>Hover the big white letters to see the magic</p>
          </div> */}
        </div>
      </motion.div>
    </>
  );
};

export default Home;
