import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Cloud = () => {
  const Cloud = [
    {
      thirtyPagesTitle: "CLOUD no.7 Panorama",
      differentImages: "thirty-pages-cloud",
      thirtyPagesText:
        "Cloud no.7 Panorama — локація, що стане Вашим улюбленим місцем у самому центрі Львова! Романтична вечеря на панорамній терасі, День народження у колі друзів чи, навіть, грандіозне весілля — все можливо у Cloud no.7 Panorama. У меню CLOUDno.7 вишукані страви з усіх країн світу! А ще - масштабна винна карта від кращих сомельє та власна коктейльна лабораторія. Саме тому напої смакують по-особливому!",
      thirtyPagesAddress: "Соборна площа, 14",
      thirtyPagesWorkTime: "11:00-00:00",
      thirtyPagesNumber: "+380 (98) 111 00 07",
      thirtyPagesLink: "https://cloud7.com.ua/",
      thirtyPagesInstagram: "https://www.instagram.com/cloud.lviv/",
      thirtyPagesMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.209009416273!2d24.031844915709346!3d49.83853017939565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add8387dfb1c3%3A0x9bc87667eed65dbe!2sCLOUD%20no.7%20Panorama!5e0!3m2!1suk!2sua!4v1680440382745!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
        {Cloud.map((block) => {
          return (
            <ExamplePage
              thirtyPagesTitle={block.thirtyPagesTitle}
              differentImages={block.differentImages}
              thirtyPagesText={block.thirtyPagesText}
              thirtyPagesAddress={block.thirtyPagesAddress}
              thirtyPagesWorkTime={block.thirtyPagesWorkTime}
              thirtyPagesNumber={block.thirtyPagesNumber}
              thirtyPagesLink={block.thirtyPagesLink}
              thirtyPagesInstagram={block.thirtyPagesInstagram}
              thirtyPagesMap={block.thirtyPagesMap}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
