import React from "react";
import { Header } from "../common/Header/Header";
import { BestLvivPlaces } from "./BestLvivPlaces/BestLvivPlaces";
import { Footer } from "../common/Header/Footer";
import { RestaurantCards } from "./Cards/Card/RestaurantCards";
import { HookahsCards } from "./Cards/Card/HookahsCard";
import { PubsCards } from "./Cards/Card/PubsCard";

export const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <BestLvivPlaces />
      <RestaurantCards />
      <HookahsCards />
      <PubsCards />
      <Footer />
    </div>
  );
};
