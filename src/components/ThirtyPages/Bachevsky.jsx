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
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10293.376623557677!2d24.01846219204064!3d49.83599062032332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6d9bb8fee5%3A0x29a70f7e015e9f26!2z0KDQtdGB0YLQvtGA0LDRhtGW0Y8g0JHQsNGH0LXQstGB0YzQutC40YU!5e0!3m2!1suk!2sua!4v1680440122445!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
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
