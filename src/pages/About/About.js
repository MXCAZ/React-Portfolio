import React, { useEffect } from "react";
import "./About.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  useEffect(() => {
    document.title = ` <FS/> | About `;
  }, []);

  const { t } = useTranslation();

  return (
    <motion.div
      // initial={{ width: 0 }}
      // animate={{ width: "100%" }}
      // exit={{ x: 0 }}
      // transition={{ duration: 0.5 }}
      className="aboutContainer ">
      <motion.div
        drag
        dragConstraints={{
          top: -100,
          right: 500,
          bottom: 500,
          left: -500,
        }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        dragElastic={0.5}
        className="about">
        <div className="cloud"> {/* <h2 className="drag">Drag Me</h2> */}</div>
      </motion.div>
      <div className="container1">
        <div className="aboutMeContainer">
          <motion.div
            animate={{ y: "move" ? 20 : -20 }}
            transition={{ type: "spring", bounce: 2 }}
            className="aboutImageContainer">
            <img
              src={require("./images/blob.png")}
              alt="profile-pic"
              className="blob"
            />
            <img
              className="picture"
              src={require("./images/benito.png")}
              alt="profile-pic"
            />
          </motion.div>
          <motion.div
            animate={{ y: "move" ? -20 : 20 }}
            transition={{ type: "spring", bounce: 2 }}
            className="pContainer">
            <h4 className="bits">{t("present")}</h4>
            <p className="pAbout">{t("p1")}</p>
            <p className="pAbout">{t("p2")}</p>
            <p className="pAbout">{t("p3")}</p>
            <p className="pAbout">{t("p4")}</p>
          </motion.div>
        </div>
      </div>
      <div className="stars1"></div>

      <div className="stars2"></div>
    </motion.div>
  );
};

export default About;
