import React from "react";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
import { TopPubsInstitution } from "./Pubs/TopPubsInstitutions";
export const Pubs = () => {
  return (
    <div className="main-page">
      <Header />
      <TopPubsInstitution />
      <Footer />
    </div>
  );
};
