import { React, useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const Navbar = () => {
  const [classIcon, setIcon] = useState(false);
  const [closeNav, setCloseNav] = useState(false);
  function handleClick() {
    setIcon((classIcon) => !classIcon);
    setCloseNav((closeNav) => !closeNav);
  }
  let toogleIcon = classIcon ? "fa-times" : "fa-bars";
  let toogleNav = closeNav ? "nav-menu active" : "nav-menu";

  const languages = [
    {
      code: "es",
      name: "Español",
      country_code: "es",
    },
    {
      code: "en",
      name: "English",
      country_code: "us",
    },
  ];

  const { t } = useTranslation();
  return (
    <>
      <nav className="navbarItems">
        <div className="iconContainer">
          <div className="iLogo" id="loading"></div>
          <div className="fs ">
            <h2 className="fs">&lt; FS/&gt; </h2>
          </div>
        </div>
        <div className="menu-icons">
          <i className={`fas ${toogleIcon}`} onClick={handleClick}></i>
        </div>
        <ul className={toogleNav}>
          <li>
            <a href="/" className="nav-links">
              <i className=" fa-solid fa-house-user"></i>
              {t("home")}
            </a>
          </li>
          <li>
            <a href="/About" className="nav-links">
              <i className=" fa-solid fa-circle-info"></i>
              {t("about")}
            </a>
          </li>
          <li>
            <a href="/Projects" className="nav-links">
              <i className=" fa-solid fa-diagram-project"></i>
              {t("projects")}
            </a>
          </li>
          {/* <li>
            <a href="/Contact" className="nav-links">
              <i className=" fa-solid fa-address-book"></i>
              {t("contact")}
            </a>
          </li> */}
          <li>
            <a href="/Resume" className="nav-links">
              <i className=" fa-solid fa-folder-open"></i>
              {t("resume")}
            </a>
          </li>
          <li>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <i className="fa-solid fa-globe"></i>
              </button>
              <ul className="dropdown-menu">
                {languages.map((language) => (
                  <li key={language.country_code}>
                    <button
                      className="dropdown-item"
                      onClick={() => i18next.changeLanguage(language.code)}>
                      <img
                        src={`https://flagcdn.com/${language.country_code}.svg`}
                        alt="flag"
                        className="flag"
                      />
                      {language.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
