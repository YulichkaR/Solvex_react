import React from "react";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
import { TopHookahsInstitution } from "./Hookahs/TopHookahsInstitutions";
export const Hookahs = () => {
  return (
    <div className="main-page">
      <Header />
      <TopHookahsInstitution />
      <Footer />
    </div>
  );
};
