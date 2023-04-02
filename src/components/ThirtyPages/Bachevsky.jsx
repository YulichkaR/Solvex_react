import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Bachevsky = () => {
  const Bachevsky = [
    {
      thirtyPagesTitle: "Бачевських",
      differentImages: "thirty-pages-bachevsky",
      thirtyPagesText:
        "Ресторан нової галицької кухні в центрі Львова, вул. Шевська 8. Ресторація Бачевських – це оранжерея, три поверхи з різними тематичними залами, терасою і верандою, обіди в супроводі арфи та віолончелі, безлімітні сніданки під фортепіано, найбільший вибір наливок та коктейлів в Бар Бачевських.",
      thirtyPagesAddress: "м. Львів, вулиця Шевська, 8",
      thirtyPagesWorkTime: "08:30-22:00",
      thirtyPagesNumber: "+380 (98) 224 44 44",
      thirtyPagesLink: "https://baczewski.com.ua/",
      thirtyPagesInstagram: "https://www.instagram.com/baczewskirestauracja/",
      thirtyPagesMap:
        "https://www.google.com/maps/search/%D0%B1%D0%B0%D1%87%D0%B5%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D1%85/@49.8359906,24.0184622,15z/data=!3m1!4b1",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        {Bachevsky.map((block) => {
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
