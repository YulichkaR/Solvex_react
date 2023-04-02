import React from "react";
import { useNavigate } from "react-router-dom";

export const InstitutionsPages = ({
  restaurantIntitutionblock,
  restaurantInstitutiontextblock,
  retaurantInstitutionTitle,
  restaurantIntitutionText,
  restaurantIntitutionNumber,
  whereToNavigate,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${whereToNavigate}`);
  };
  return (
    <div onClick={handleClick} className={`${restaurantIntitutionblock}`}>
      <div
        className={`restaurant-page__text-block ${restaurantInstitutiontextblock}`}
      >
        <h2 className="restaurant-page__title">{retaurantInstitutionTitle}</h2>
        <div className="restaurant-page-ten-lines"></div>
        <p className="restaurant-page__address">{restaurantIntitutionText}</p>
        <a
          href="tel: ${restaurantIntitutionNumber}"
          className={`top-institutions-content-phone`}
        >
          {restaurantIntitutionNumber}
        </a>
      </div>
    </div>
  );
};
