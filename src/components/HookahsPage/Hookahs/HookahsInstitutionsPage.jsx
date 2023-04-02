import React from "react";
import { useNavigate } from "react-router-dom";

export const HookahsInstitutionsPages = ({
  hookahIntitutionblock,
  hookahInstitutiontextblock,
  hookahInstitutionTitle,
  hookahIntitutionText,
  hookahIntitutionNumber,
  whereToNavigate,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log(whereToNavigate);

    navigate(`${whereToNavigate}`);
  };
  return (
    <div onClick={handleClick} className={`${hookahIntitutionblock}`}>
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
