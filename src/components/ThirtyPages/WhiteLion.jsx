import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Lion = () => {
  const Lion = [
    {
      thirtyPagesTitle: "Білий лев",
      differentImages: "thirty-pages-lion",
      thirtyPagesText:
        "Розташована при вході мальовнича 3D картина переносить у XVII століття. Тут справжні монахи за рецептурою своїх предків готують та смакують благородний хмільний напій – пиво. У пабі «Білий Лев» можна повноцінно пообідати за спеціальним обіднім меню або обрати будь-яку із традиційних українських страв.",
      thirtyPagesAddress: "м. Львів, вулиця Лесі Українки, 15",
      thirtyPagesWorkTime: "12:00-00:00",
      thirtyPagesNumber: "+380 (322) 35 46 25",
      thirtyPagesLink: "http://www.white-lion.com.ua/",
      thirtyPagesInstagram: "https://www.instagram.com/white.lion.pub/",
      thirtyPagesMap:
        "https://www.google.com/maps/place/%D0%91%D1%96%D0%BB%D0%B8%D0%B9+%D0%9B%D0%B5%D0%B2/@49.8438404,24.028155,17z/data=!3m1!4b1!4m6!3m5!1s0x473add6d60c6f503:0x78de839587766624!8m2!3d49.8438404!4d24.0303437!16s%2Fg%2F11b5wjllb0",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        {Lion.map((block) => {
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
