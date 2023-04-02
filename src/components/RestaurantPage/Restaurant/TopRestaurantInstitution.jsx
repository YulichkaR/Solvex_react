import React from "react";
import { InstitutionsPages } from "./InstitutionsPages";

export const TopRestaurantInstitution = () => {
  const TopRestaurantInstitution = [
    {
      restaurantIntitutionblock: "restaurant-page-panorama",
      restaurantInstitutiontextblock: "restaurant-page-panorama-image",
      retaurantInstitutionTitle: "Ресторан Панорама",
      restaurantIntitutionText: "Проспект Свободи, 45",
      restaurantIntitutionNumber: "+380 (32) 225 90 09",
      whereToNavigate: "/",
    },
    {
      restaurantIntitutionblock: "restaurant-page-warsava",
      restaurantInstitutiontextblock: "restaurant-page-warsava-image",
      retaurantInstitutionTitle: "Ресторан Варшава",
      restaurantIntitutionText: "с. Малехів, вулиця Жовківська, 1",
      restaurantIntitutionNumber: "+380 (97) 203 10 20",
    },
    {
      restaurantIntitutionblock: "restaurant-page-rebernia",
      restaurantInstitutiontextblock: "restaurant-page-rebernia-image",
      retaurantInstitutionTitle: "Реберня Під Арсеналом",
      restaurantIntitutionText: "вулиця Підвальна, 5",
      restaurantIntitutionNumber: "+380 (67) 373 41 51",
    },
    {
      restaurantIntitutionblock: "restaurant-page-bachevskih",
      restaurantInstitutiontextblock: "restaurant-page-bachevskih-image",
      retaurantInstitutionTitle: "Ресторація Бачевських",
      restaurantIntitutionText: "вулиця Шевська, 8",
      restaurantIntitutionNumber: "+380 (98) 224 44 44",
    },
    {
      restaurantIntitutionblock: "restaurant-page-valentino",
      restaurantInstitutiontextblock: "restaurant-page-valentino-image",
      retaurantInstitutionTitle: "Ресторан Валентино",
      restaurantIntitutionText: "вулиця Нижанківського, 20",
      restaurantIntitutionNumber: "+380 (32) 235 67 66",
    },
    {
      restaurantIntitutionblock: "restaurant-page-understar",
      restaurantInstitutiontextblock: "restaurant-page-understar-image",
      retaurantInstitutionTitle: "Кондитерська-аптека Під золотою зіркою",
      restaurantIntitutionText: "вулиця Миколи Коперника, 1",
      restaurantIntitutionNumber: "+380(32) 297 10 79",
    },
    {
      restaurantIntitutionblock: "restaurant-page-leopolis",
      restaurantInstitutiontextblock: "restaurant-page-leopolis-image",
      retaurantInstitutionTitle: "Grand Cafe Leopolis",
      restaurantIntitutionText: "площа Ринок, 1",
      restaurantIntitutionNumber: "+380 (97) 997 55 65",
    },
    {
      restaurantIntitutionblock: "restaurant-page-cloud",
      restaurantInstitutiontextblock: "restaurant-page-panorama-image",
      retaurantInstitutionTitle: "CLOUD no.7 Panorama",
      restaurantIntitutionText: "Соборна площа, 14",
      restaurantIntitutionNumber: "+380 (98) 111 00 07",
    },
    {
      restaurantIntitutionblock: "restaurant-page-gasova",
      restaurantInstitutiontextblock: "restaurant-page-gasova-image",
      retaurantInstitutionTitle: "Гасова лямпа",
      restaurantIntitutionText: "вулиця Вірменська, 20",
      restaurantIntitutionNumber: "+380 (50) 371 09 08",
    },
    {
      restaurantIntitutionblock: "restaurant-page-stymari",
      restaurantInstitutiontextblock: "restaurant-page-stymari-image",
      retaurantInstitutionTitle: "Ресторан грузинської кухні Стумарі",
      restaurantIntitutionText: "вулиця Лесі Українки, 20",
      restaurantIntitutionNumber: "+380 (67) 238 24 94",
    },
  ];

  return (
    <div className="restaurant-page">
      <p className="restaurant-page-main-text">
        Плануєш відпочинок зі сім’єю чи великою родиною?! Обирай найкращі
        ресторани міста Лева з українською кухнею, страродавньою історією та
        принадливими краєвидами
      </p>
      <div className="restaurant-line"></div>
      <div className="ten-restaurants">
        {TopRestaurantInstitution.map((block) => {
          return (
            <InstitutionsPages
              restaurantIntitutionblock={block.restaurantIntitutionblock}
              restaurantInstitutiontextblock={
                block.restaurantInstitutiontextblock
              }
              retaurantInstitutionTitle={block.retaurantInstitutionTitle}
              restaurantIntitutionText={block.restaurantIntitutionText}
              restaurantIntitutionNumber={block.restaurantIntitutionNumber}
              whereToNavigate={block.whereToNavigate}
            />
          );
        })}
      </div>
    </div>
  );
};
