import React from "react";
import { HeaderForThreePages } from "../HeaderForThreePages";
import { Footer } from "../common/Header/Footer";
import { TopPubsInstitution } from "./Pubs/TopPubsInstitutions";
export const Pubs = () => {
  let titleThreePages = "Паби";
  let photoToEachPage = "background-for-page-pubs";
  return (
    <div className="main-page">
      <HeaderForThreePages
        titleThreePages={titleThreePages}
        photoToEachPage={photoToEachPage}
      />
      <TopPubsInstitution />
      <Footer />
    </div>
  );
};
