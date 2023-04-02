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
        "https://www.google.com/maps/place/FILIN+lounge+bar/@49.8403539,24.0215168,17z/data=!3m1!4b1!4m6!3m5!1s0x473addd37dc6902b:0x9d73a25294b35f92!8m2!3d49.8403539!4d24.0237055!16s%2Fg%2F11g0zxjb6d",
    },
  ];

  return (
    <div>
      <Header />
      <div>
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
