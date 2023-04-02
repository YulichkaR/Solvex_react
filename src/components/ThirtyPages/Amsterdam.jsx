import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Amsterdam = () => {
  const Amsterdam = [
    {
      thirtyPagesTitle: "Amsterdam Lounge Bar",
      differentImages: "thirty-pages-amsterdam",
      thirtyPagesText:
        "Дві зали розраховані на великі компанії. Кухня (європейська/американська). Бар – широкий асортимент алкоголю та різноманітних коктейлів. Кальяни – великий вибір табаку (своя рецептура забивки, «міксологія табаку на високому рівні»). Настільні ігри знаходяться у вільному доступі гостей.",
      thirtyPagesAddress: "м. Львів, вулиця Валова, 15",
      thirtyPagesWorkTime: "12:00-23:00",
      thirtyPagesNumber: "+380 (67) 976 09 86",
      thirtyPagesLink: "https://amsterdamlviv.com.ua/",
      thirtyPagesInstagram: "https://www.instagram.com/amsterdamlviv/",
      thirtyPagesMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.1286344553255!2d24.028766234096803!3d49.840040473143546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6c179ab3dd%3A0xee486f48d878cd6a!2sAmsterdam%20Lounge%20Bar!5e0!3m2!1suk!2sua!4v1680439962492!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
        {Amsterdam.map((block) => {
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
