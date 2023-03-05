import React from "react";
import { Header } from "../common/Header/Header";
import { BestLvivPlaces } from "./BestLvivPlaces/BestLvivPlaces";
import { Footer } from "../common/Header/Footer";
export const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <BestLvivPlaces />
      <Footer />
    </div>
  );
};
