import React from "react";
import { InstitutionsPages } from "./InstitutionsPages";

export const TopRestaurantInstitution = () => {
  const TopRestaurantInstitution = [
    {
      restaurantIntitutionblock: "restaurant-page-panorama",
      restaurantInstitutiontextblock: "restaurant-page-panorama-image",
      retaurantInstitutionTitle: "Ресторан Панорама",
      restaurantIntitutionText: "м. Львів, Проспект Свободи, 45",
      restaurantIntitutionNumber: "+380 (32) 225 90 09",
      whereToNavigate: "/panorama",
    },
    {
      restaurantIntitutionblock: "restaurant-page-warsava",
      restaurantInstitutiontextblock: "restaurant-page-warsava-image",
      retaurantInstitutionTitle: "Ресторан Варшава",
      restaurantIntitutionText: "с. Малехів, вулиця Жовківська, 1",
      restaurantIntitutionNumber: "+380 (97) 203 10 20",
      whereToNavigate: "/warsava",
    },
    {
      restaurantIntitutionblock: "restaurant-page-rebernia",
      restaurantInstitutiontextblock: "restaurant-page-rebernia-image",
      retaurantInstitutionTitle: "Реберня Під Арсеналом",
      restaurantIntitutionText: "м. Львів, вулиця Підвальна, 5",
      restaurantIntitutionNumber: "+380 (67) 373 41 51",
      whereToNavigate: "/arsenal",
    },
    {
      restaurantIntitutionblock: "restaurant-page-bachevskih",
      restaurantInstitutiontextblock: "restaurant-page-bachevskih-image",
      retaurantInstitutionTitle: "Ресторація Бачевських",
      restaurantIntitutionText: "м. Львів, вулиця Шевська, 8",
      restaurantIntitutionNumber: "+380 (98) 224 44 44",
      whereToNavigate: "/bachevsky",
    },
    {
      restaurantIntitutionblock: "restaurant-page-valentino",
      restaurantInstitutiontextblock: "restaurant-page-valentino-image",
      retaurantInstitutionTitle: "Ресторан Валентино",
      restaurantIntitutionText: "м. Львів, вулиця Нижанківського, 20",
      restaurantIntitutionNumber: "+380 (32) 235 67 66",
      whereToNavigate: "/valentino",
    },
    {
      restaurantIntitutionblock: "restaurant-page-understar",
      restaurantInstitutiontextblock: "restaurant-page-understar-image",
      retaurantInstitutionTitle: "Кондитерська-аптека Під золотою зіркою",
      restaurantIntitutionText: "м. Львів, вулиця Миколи Коперника, 1",
      restaurantIntitutionNumber: "+380(32) 297 10 79",
      whereToNavigate: "/goldenstar",
    },
    {
      restaurantIntitutionblock: "restaurant-page-leopolis",
      restaurantInstitutiontextblock: "restaurant-page-leopolis-image",
      retaurantInstitutionTitle: "Grand Cafe Leopolis",
      restaurantIntitutionText: "м. Львів, площа Ринок, 1",
      restaurantIntitutionNumber: "+380 (97) 997 55 65",
      whereToNavigate: "/leopolis",
    },
    {
      restaurantIntitutionblock: "restaurant-page-cloud",
      restaurantInstitutiontextblock: "restaurant-page-panorama-image",
      retaurantInstitutionTitle: "CLOUD no.7 Panorama",
      restaurantIntitutionText: "м. Львів, Соборна площа, 14",
      restaurantIntitutionNumber: "+380 (98) 111 00 07",
      whereToNavigate: "/panorama",
    },
    {
      restaurantIntitutionblock: "restaurant-page-gasova",
      restaurantInstitutiontextblock: "restaurant-page-gasova-image",
      retaurantInstitutionTitle: "Гасова лямпа",
      restaurantIntitutionText: "м. Львів, вулиця Вірменська, 20",
      restaurantIntitutionNumber: "+380 (50) 371 09 08",
      whereToNavigate: "/lampa",
    },
    {
      restaurantIntitutionblock: "restaurant-page-stymari",
      restaurantInstitutiontextblock: "restaurant-page-stymari-image",
      retaurantInstitutionTitle: "Ресторан грузинської кухні Стумарі",
      restaurantIntitutionText: "м. Львів, вулиця Лесі Українки, 20",
      restaurantIntitutionNumber: "+380 (67) 238 24 94",
      whereToNavigate: "/stumari",
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
