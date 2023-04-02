import React from "react";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
import { TopRestaurantInstitution } from "./Restaurant/TopRestaurantInstitution";
export const Restaurant = () => {
  return (
    <div className="main-page">
      <Header />
      <TopRestaurantInstitution />
      <Footer />
    </div>
  );
};
