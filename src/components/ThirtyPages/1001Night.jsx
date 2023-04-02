import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Night = () => {
  const Night = [
    {
      thirtyPagesTitle: "1000+1 ніч",
      differentImages: "thirty-pages-1001night",
      thirtyPagesText:
        "Кальян-бар 1000+1 ніч - це чудове місце для проведення вечора у компанії друзів чи романтичних посиденьок з другою половинкою. Особливістю закладу є його чайна церемонія, що проводиться при подачі справжнього тайванського чаю. ",
      thirtyPagesAddress: "м. Львів, вулиця Братів Рогатинців, 19",
      thirtyPagesWorkTime: "14:00-23:00",
      thirtyPagesNumber: "+380 (32) 297 03 48",
      thirtyPagesLink:
        "https://lviv.virtual.ua/ua/object/82058/Romantic-bar-1000+1-night.html",
      thirtyPagesInstagram: "https://www.facebook.com/1000i1night/",
      thirtyPagesMap:
        "https://www.google.com/maps/search/1000%2B1+%D0%BD%D1%96%D1%87+%D1%81%D0%B0%D0%B9%D1%82/@49.8403264,24.0304188,17z/data=!3m1!4b1",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        {Night.map((block) => {
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
