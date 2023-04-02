import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Filin = () => {
  const Filin = [
    {
      thirtyPagesTitle: "FILIN lounge bar",
      differentImages: "thirty-pages-filin",
      thirtyPagesText:
        "FILIN lounge bar  – це  атмосферний  заклад,  що поєднує  в  собі  авторську  коктейльну  карту  з  коктейлями  на будь-який  смак ,  унікальні  кальяни  з великим  вибором  тютюну  у Львові.",
      thirtyPagesAddress: "м. Львів, вулиця Січових Стрільців, 12",
      thirtyPagesWorkTime: "14:00-23:00",
      thirtyPagesNumber: "+380 (93) 360 24 86",
      thirtyPagesLink: "https://www.facebook.com/filinloungebar/?locale=ru_RU",
      thirtyPagesInstagram: "https://www.instagram.com/filin_lviv/",
      thirtyPagesMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.111954250089!2d24.023705500000002!3d49.840353900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473addd37dc6902b%3A0x9d73a25294b35f92!2sFILIN%20lounge%20bar!5e0!3m2!1suk!2sua!4v1680441240008!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
        {Filin.map((block) => {
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
