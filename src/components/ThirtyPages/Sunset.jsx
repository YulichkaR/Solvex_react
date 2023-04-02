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
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.6789124355237!2d24.022346700000003!3d49.84849039999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add59442e7393%3A0x1f20e0b525a677a8!2z0JrQsNC70YzRj9C9INCx0LDRgCAtIFN1bnNldCBMb3VuZ2UgQmFy!5e0!3m2!1suk!2sua!4v1680442276392!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
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
