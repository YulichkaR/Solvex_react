import React from "react";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
import { BestLvivPlaces } from "./BestLvivPlaces/BestLvivPlaces";
import { RestaurantCards } from "./Cards/Card/RestaurantCards";
import { HookahsCards } from "./Cards/Card/HookahsCards";
import { PubsCards } from "./Cards/Card/PubsCards";
export const MainPage = () => {
  let havingAPhoho = true;
  let photoToEachPage = "background-for-main-page";
  return (
    <div className="main-page">
      <Header havingAPhoho={havingAPhoho} photoToEachPage={photoToEachPage} />
      <BestLvivPlaces />
      <RestaurantCards />
      <HookahsCards />
      <PubsCards />
      <Footer />
    </div>
  );
};
