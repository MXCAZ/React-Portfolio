import { React, useEffect } from "react";
import "./Projects.css";
import Tilt from "react-vanilla-tilt";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Projects = () => {
  useEffect(() => {
    document.title = ` <FS/> | Projects `;
  }, []);

  const { t } = useTranslation();
  const projects = [
    {
      id: 4,
      title: "E-commerce restaurant website",
      languages: "HTML, CSS, Javascript, React",
      packages: " Express, Vite, Mongo, Framer Mui, Framer Motion",
      image: new URL("./images/homePage.png", import.meta.url),
      description: `${t("description4")}`,
      repo: "https://github.com/MXCAZ/tacosLosPanchosExample",
      site: "https://tacoslospanchosexample-4b92243c5b07.herokuapp.com/",
    },
    {
      id: 0,
      title: "Twytter",
      languages: "HTML, CSS, Javascript, Handlebars",
      packages: "Express.js, Bycrypt, Env, SQL",
      image: new URL("./images/twytter.png", import.meta.url),
      description: `${t("description")}`,
      repo: "https://github.com/MXCAZ/twytter",
      site: "https://twytter-redo.herokuapp.com/",
    },

    {
      id: 1,
      title: "Weather Dashboard",
      languages: "Html, CSS, Javascript, Bootstrap",
      packages: "None",
      image: new URL("./images/weather-app.png", import.meta.url),
      description: `${t("description1")}`,
      repo: "https://github.com/MXCAZ/Weather-Dashboard",
      site: "https://mxcaz.github.io/Weather-Dashboard/",
    },

    {
      id: 2,
      title: "Concert Finder",
      languages: "HTML, CSS, Javascript, Bulma",
      packages: "None",
      image: new URL("./images/concertFinder.png", import.meta.url),
      description: `${t("description2")}`,
      repo: "https://github.com/MXCAZ/project-01-music-suggester",
      site: "https://prkrgreenwell.github.io/project-01-music-suggester/firstindex.html",
    },

    {
      id: 3,
      title: "Text-Editor",
      languages: "HTML, CSS, Javascript, Bootstrap ",
      packages: "Concurrently, Express, Webpack",
      image: new URL("./images/text-editor.png", import.meta.url),
      description: `${t("description3")}`,
      repo: "https://github.com/MXCAZ/PWA-Text-editor",
      site: "https://francisco-pwa-text-editor.herokuapp.com/",
    },
  ];

  const glare = () => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      glare: true,
      reverse: true,
      "max-glare": 0.5,
      scale: 1.2,
    });
  };
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: 0 }}
        transition={{ duration: 1 }}
        className="projectsContainer">
        {projects.map((project) => (
          <div className="cardContainer1">
            <Tilt
              options={{ scale: 2 }}
              style={{
                width: "auto",
                transformStyle: "preserve-3d",
                transform: "perspective(1000px)",
                scale: 1.2,
                speed: 1000,
                max: 30,
              }}>
              <div className="card1" onMouseOver={glare}>
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${project.image})` }}></div>
                <div className="card-text">
                  <h2 key={project.id}>{project.title}</h2>
                  <br />
                  <h3 style={{ color: "black" }}>Languages:</h3>
                  <p className="date">{project.languages}</p>
                  <br />
                  <p className="date">
                    {" "}
                    <h3 style={{ color: "black" }}> Npm packages: </h3>{" "}
                    {project.packages}
                  </p>
                  <br />
                  <p>{project.description}</p>
                </div>
                <div className="card-stats">
                  <div className="stat">
                    <a
                      className="aLink"
                      href={project.repo}
                      target="_blank"
                      // style={{ "--hover-color": "black" }}
                      rel="noreferrer">
                      <div className="value">
                        <p>{t("repo")}</p>
                      </div>
                      <div className="type">
                        <i className="fa-brands fa-github"></i>
                      </div>
                    </a>
                  </div>
                  <div className="stat" id="border">
                    <a
                      href={project.site}
                      target="_blank"
                      className="aLink"
                      // style={{ "--hover-color": "black" }}
                      rel="noreferrer">
                      <div>
                        <p> {t("live_site")}</p>
                      </div>
                      <div className="type">
                        <i className="fa-solid fa-code"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Projects;
