import React from "react";

import i18next from "i18next";

export default function Languages() {
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
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        <i className="fa-solid fa-globe globe" id="globe"></i>
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
  );
}
