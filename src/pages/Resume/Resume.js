import { React, useState, useEffect } from "react";
import "./Resume.css";
import { motion } from "framer-motion";
import resume from "./image/francisco-resume.pdf";
import { useTranslation } from "react-i18next";

const Resume = () => {
  useEffect(() => {
    document.title = ` <FS/> | Resume `;
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const { t } = useTranslation();

  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: 0 }}
        transition={{ duration: 1 }}
        className="resumeContainer">
        <h2 className="skillsTitle">{t("skills")}</h2>

        <div className="skillsAnimationContainer">
          <motion.div
            layoutTransition={{ duration: 1 }}
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            onClick={() => setIsOpen(!isOpen)}
            className="cardResume"
            style={{
              borderRadius: "18px",
              boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.9)",
            }}>
            {" "}
            <motion.h2 Layout="position">Front-End</motion.h2>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
                className="motion">
                <ul className="skillsList">
                  <li className="skills">
                    <img
                      src={require("./image/HTML.ico")}
                      alt="HTML"
                      className="skillsImage"
                    />
                    <p>HTML</p>
                  </li>
                  <li className="skills">
                    <img
                      src={require("./image/CSS.ico")}
                      alt="CSS"
                      className="skillsImage"
                    />
                    <p>CSS</p>
                  </li>
                  <li className="skills">
                    <img
                      src={require("./image/Javascript.ico")}
                      alt="Javascript"
                      className="skillsImage"
                    />
                    <p>Javascript</p>
                  </li>
                </ul>
                <ul className="skillsList">
                  <li className="skills">
                    <img
                      src={require("./image/bootstrap.ico")}
                      alt="boostrap"
                      className="skillsImage"
                    />
                    <p>Boostrap</p>
                  </li>
                  <li className="skills">
                    <img
                      src={require("./image/react.ico")}
                      alt="React"
                      className="skillsImage"
                    />
                    <p>React</p>
                  </li>
                </ul>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            layoutTransition={{ duration: 1 }}
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            onClick={() => setIsOpen1(!isOpen1)}
            className="cardResume"
            style={{
              borderRadius: "18px",
              boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.9)",
            }}>
            <motion.h2 Layout="position">Back-End</motion.h2>
            {isOpen1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
                className="motion">
                <ul className="skillsList">
                  <li className="skills">
                    <img
                      src={require("./image/node.ico")}
                      alt="Node.js"
                      className="skillsImage"
                    />
                    <p>Node</p>
                  </li>
                  <li className="skills">
                    <img
                      src={require("./image/MYSQL.ico")}
                      alt="MYSQL"
                      className="skillsImage"
                    />
                    <p>MYSQL</p>
                  </li>
                  <li className="skills">
                    <img
                      src={require("./image/Mongo.ico")}
                      alt="MongoDB"
                      className="skillsImage"
                    />
                    <p>MongoDB</p>
                  </li>
                </ul>
                <ul className="skillsList">
                  <li className="skills">
                    <img
                      src={require("./image/webpack.ico")}
                      alt="webpack"
                      className="skillsImage"
                    />
                    <p>Webpack</p>
                  </li>
                  <li className="skills">
                    <img
                      src={require("./image/sequelize.ico")}
                      alt="sequelize"
                      className="skillsImage"
                    />
                    <p>Sequelize</p>
                  </li>
                </ul>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            layoutTransition={{ duration: 1 }}
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            onClick={() => setIsOpen2(!isOpen2)}
            className="cardResume"
            style={{
              borderRadius: "18px",
              boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.9)",
            }}>
            <motion.h2 Layout="position">{t("tools")}</motion.h2>
            {isOpen2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
                className="motion">
                <ul className="skillsList">
                  <li className="skills">
                    <img
                      src={require("./image/git.ico")}
                      alt="git"
                      className="skillsImage"
                    />
                    <p>Git</p>
                  </li>
                  <li className="skills">
                    <img
                      src={require("./image/heroku.ico")}
                      alt="heroku"
                      className="skillsImage"
                    />
                    <p>Heroku</p>
                  </li>
                  <li className="skills">
                    <img
                      src={require("./image/figma.ico")}
                      alt="figma"
                      className="skillsImage"
                    />
                    <p>Figma</p>
                  </li>
                </ul>
                <ul className="skillsList">
                  <li className="skills">
                    <img
                      src={require("./image/vs-code.ico")}
                      alt="vs-code"
                      className="skillsImage"
                    />
                    <p>Vs-Code</p>
                  </li>
                </ul>
              </motion.div>
            )}
          </motion.div>
        </div>
        <div className="downloadContainer">
          <h2 className="resume">{t("resume1")}</h2>
          <br />
          <br />
          <a href={resume} download="resume" className="download-btn">
            {t("download")} <i className="fa fa-download"></i>
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Resume;
