import React from "react";
export const HookahsInstitutionsPages = ({
  hookahIntitutionblock,
  hookahInstitutiontextblock,
  hookahInstitutionTitle,
  hookahIntitutionText,
  hookahIntitutionNumber,
}) => {
  return (
    <div className={`${hookahIntitutionblock}`}>
      <div className={`hookah-page__text-block ${hookahInstitutiontextblock}`}>
        <h2 className="hookah-page__title">{hookahInstitutionTitle}</h2>
        <div className="hookah-page-ten-lines"></div>
        <p className="hookah-page__address">{hookahIntitutionText}</p>
        <a
          href="tel: ${hookahIntitutionNumber}"
          className={`top-institutions-content-phone`}
        >
          {hookahIntitutionNumber}
        </a>
      </div>
    </div>
  );
};
