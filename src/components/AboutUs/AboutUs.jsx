import React from "react";
import { Header } from "../common/Header/Header";
import { TeamDescription } from "./TeamDescription/TeamDescription";
import { TeamGallery } from "./TeamGallery/TeamGallery";
import { Footer } from "../common/Header/Footer";
export const AboutUs = () => {
  let havingAPhoho = true;
  let photoToEachPage = "background-for-page-about-us";
  return (
    <div className="abous-us">
      <Header havingAPhoho={havingAPhoho} photoToEachPage={photoToEachPage} />
      <TeamGallery />
      <TeamDescription />
      <Footer />
    </div>
  );
};
