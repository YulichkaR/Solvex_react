import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Valentino = () => {
  const Valentino = [
    {
      thirtyPagesTitle: "Валентино",
      differentImages: "thirty-pages-valentino",
      thirtyPagesText:
        "Розкішно. Витончено. Італійською - такий слоган нового ресторану італійської кухні Валентино. Ресторан розташований у старому будинку, у самому центрі міста, поряд із Площею Ринок.",
      thirtyPagesAddress: "м. Львів, вулиця Нижанківського, 20",
      thirtyPagesWorkTime: "08:00-22:00",
      thirtyPagesNumber: "+380 (32) 235 67 66",
      thirtyPagesLink: "https://valentino.lviv.ua/ru/",
      thirtyPagesInstagram: "https://www.instagram.com/valentino__restaurant/",
      thirtyPagesMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.242307456511!2d24.03003851570931!3d49.83790447939552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add692ceaa9f5%3A0xd93b3b001c1cf02e!2z0JLQsNC70LXQvdGC0LjQvdC-IChWYWxlbnRpbm8gcmVzdGF1cmFudCk!5e0!3m2!1suk!2sua!4v1680442536273!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
        {Valentino.map((block) => {
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
