import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Sunset = () => {
  const Sunset = [
    {
      thirtyPagesTitle: "Sunset Lounge Bar",
      differentImages: "thirty-pages-sunset",
      thirtyPagesText:
        "Sunset Lounge Bar — це димні кальяни, різноманіття смачних страв, настільні ігри та сучасні консолі. А ще — це грандіозний вибір крутих коктейлів.",
      thirtyPagesAddress: "м. Львів, вулиця Газова, 26",
      thirtyPagesWorkTime: "12:00-00:00",
      thirtyPagesNumber: "+380 (50) 801 55 39",
      thirtyPagesLink: "https://www.facebook.com/sunsetlviv/",
      thirtyPagesInstagram: "https://www.instagram.com/sunset_lviv/",
      thirtyPagesMap:
        "https://www.google.com/maps/place/%D0%9A%D0%B0%D0%BB%D1%8C%D1%8F%D0%BD+%D0%B1%D0%B0%D1%80+-+Sunset+Lounge+Bar/@49.8484904,24.020158,17z/data=!3m1!4b1!4m6!3m5!1s0x473add59442e7393:0x1f20e0b525a677a8!8m2!3d49.8484904!4d24.0223467!16s%2Fg%2F11fnrdz6wc",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        {Sunset.map((block) => {
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
