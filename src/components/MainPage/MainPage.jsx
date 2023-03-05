import React from "react";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
import { BestLvivPlaces } from "./BestLvivPlaces/BestLvivPlaces";
import { RestaurantCards } from "./Cards/Card/RestaurantCards";
export const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <BestLvivPlaces />
      <RestaurantCards />
      <Footer />
    </div>
  );
};
