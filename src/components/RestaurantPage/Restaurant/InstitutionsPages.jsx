import React from "react";
export const InstitutionsPages = ({
  restaurantIntitutionblock,
  restaurantInstitutiontextblock,
  retaurantInstitutionTitle,
  restaurantIntitutionText,
  restaurantIntitutionNumber,
}) => {
  return (
    <div className={`${restaurantIntitutionblock}`}>
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
