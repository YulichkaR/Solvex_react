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
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.113418867055!2d24.03041881570936!3d49.84032637939588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6c3bf4023b%3A0x5c2f1968597007bf!2zMTAwMCsxINC90ZbRhw!5e0!3m2!1suk!2sua!4v1680439823027!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
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
