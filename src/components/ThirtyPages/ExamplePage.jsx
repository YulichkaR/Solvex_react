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
      <h1>{thirtyPagesTitle}</h1>
      <div className="thirty-pages-content__block">
        <div className={`thirty-pages-images ${differentImages}`}></div>
        <p className="thirty-pages-paragragh">{thirtyPagesText}</p>
        <p className="thirty-pages-address">Адреса: {thirtyPagesAddress} </p>
        <p className="thirty-pages-worktime">⏱ {thirtyPagesWorkTime} </p>
        <a
          href="tel: ${thirtyPagesNumber}"
          className="thirty-pages-phone-number"
        >
          📞
          {thirtyPagesNumber}
        </a>
        <a className="thirty-pages-link" href="{thirtyPagesLink}">
          🌏{thirtyPagesLink}
        </a>
        <a href="{thirtyPagesInstagram}">
          <img
            className="thirty-pages-instagram"
            src="https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM"
            alt="Instagram"
          />
          {thirtyPagesInstagram}
        </a>
      </div>
      <iframe src={thirtyPagesMap} className="thirty-pages-map" />
    </div>
  );
};
