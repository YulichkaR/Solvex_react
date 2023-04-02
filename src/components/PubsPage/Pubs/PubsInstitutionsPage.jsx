import React from "react";
import { useNavigate } from "react-router-dom";

export const PubsInstitutionsPages = ({
  pubIntitutionblock,
  pubInstitutiontextblock,
  pubInstitutionTitle,
  pubIntitutionText,
  pubIntitutionNumber,
  whereToNavigate,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${whereToNavigate}`);
  };
  return (
    <div onClick={handleClick} className={`${pubIntitutionblock}`}>
      <div className={`pub-page__text-block ${pubInstitutiontextblock}`}>
        <h2 className="pub-page__title">{pubInstitutionTitle}</h2>
        <div className="pub-page-ten-lines"></div>
        <p className="pub-page__address">{pubIntitutionText}</p>
        <a
          href="tel: ${pubIntitutionNumber}"
          className={`top-institutions-content-phone`}
        >
          {pubIntitutionNumber}
        </a>
      </div>
    </div>
  );
};
