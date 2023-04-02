import React from "react";
export const ExamplePage = ({
  thirtyPagesTitle,
  differentImages,
  thirtyPagesText,
  thirtyPagesAddress,
  thirtyPagesWorkTime,
  thirtyPagesNumber,
  thirtyPagesLink,
  thirtyPagesInstagram,
  thirtyPagesMap,
}) => {
  return (
    <div className="thirty-pages-main-block">
      <h1 className="thirty-pags__title">{thirtyPagesTitle}</h1>
      <div className="thirty-pages-content__block">
        <div className={`thirty-pages-images ${differentImages}`}></div>
        <div className="thirty-pages-information thirty-pages-text__block">
          <p className="thirty-pages-information thirty-pages-paragragh">
            {thirtyPagesText}
          </p>
          <div className="thirty-pages-details">
            <p className="thirty-pages-information thirty-pages-address">
              Адреса: {thirtyPagesAddress}{" "}
            </p>
            <p className="thirty-pages-information thirty-pages-worktime">
              ⏱ {thirtyPagesWorkTime}{" "}
            </p>
            <a
              href="tel: ${thirtyPagesNumber}"
              className="thirty-pages-information thirty-pages-phone-number"
            >
              📞
              {thirtyPagesNumber}
            </a>
            <a
              className="thirty-pages-information thirty-pages-link"
              href="{thirtyPagesLink}"
            >
              🌏{thirtyPagesLink}
            </a>
            <a
              className="thirty-pages-information"
              href="{thirtyPagesInstagram}"
            >
              <img
                className="thirty-pages-instagram"
                src="https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM"
                alt="Instagram"
              />
              {thirtyPagesInstagram}
            </a>
          </div>
        </div>
      </div>
      <iframe src={thirtyPagesMap} className="thirty-pages-map" />
    </div>
  );
};
