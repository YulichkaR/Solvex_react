import React from "react";
import { HeaderForThreePages } from "../HeaderForThreePages";
import { Footer } from "../common/Header/Footer";
import { TopHookahsInstitution } from "./Hookahs/TopHookahsInstitutions";
export const Hookahs = () => {
  let titleThreePages = "Кальянні";
  let photoToEachPage = "background-for-page-hookahs";
  return (
    <div className="main-page">
      <HeaderForThreePages
        titleThreePages={titleThreePages}
        photoToEachPage={photoToEachPage}
      />
      <TopHookahsInstitution />
      <Footer />
    </div>
  );
};
