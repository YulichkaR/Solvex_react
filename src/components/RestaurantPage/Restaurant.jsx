import React from "react";
import { HeaderForThreePages } from "../HeaderForThreePages";
import { Footer } from "../common/Header/Footer";
import { TopRestaurantInstitution } from "./Restaurant/TopRestaurantInstitution";
export const Restaurant = () => {
  let titleThreePages = "Ресторани";
  let photoToEachPage = "background-for-page-restaurant ";
  return (
    <div className="main-page">
      <HeaderForThreePages
        titleThreePages={titleThreePages}
        photoToEachPage={photoToEachPage}
      />
      <TopRestaurantInstitution />
      <Footer />
    </div>
  );
};
