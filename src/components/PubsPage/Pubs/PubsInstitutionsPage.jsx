import React from "react";
export const PubsInstitutionsPages = ({
  pubIntitutionblock,
  pubInstitutiontextblock,
  pubInstitutionTitle,
  pubIntitutionText,
  pubIntitutionNumber,
}) => {
  return (
    <div className={`${pubIntitutionblock}`}>
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
