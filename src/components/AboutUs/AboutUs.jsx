import React from "react";
import { Header } from "../common/Header/Header";
import { TeamDescription } from "./TeamDescription/TeamDescription";
import { TeamGallery } from "./TeamGallery/TeamGallery";
import { Footer } from "../common/Header/Footer";
export const AboutUs = () => {
  return (
    <div className="abous-us">
      <Header />
      <TeamGallery />
      <TeamDescription />
      <Footer />
    </div>
  );
};
