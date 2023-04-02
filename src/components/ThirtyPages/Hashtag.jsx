import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Hashtag = () => {
  const Hashtag = [
    {
      thirtyPagesTitle: "HASHTAG LOUNGE BAR",
      differentImages: "thirty-pages-hashtag",
      thirtyPagesText:
        "#Hashtag Lounge Bar – це душевне місце із затишною атмосферою, димними кальянами, чудовою кухнею і баром в самому центрі нашого міста.",
      thirtyPagesAddress: "м. Львів, вулиця Галицька, 20",
      thirtyPagesWorkTime: "11:00-23:00",
      thirtyPagesNumber: "+380 (98) 922 52 09",
      thirtyPagesLink: "https://hashtag-bar.com.ua/",
      thirtyPagesInstagram: "https://www.instagram.com/hashtag_lviv/",
      thirtyPagesMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.1603576444895!2d24.029478015709394!3d49.83944437939577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6e9de0e7e1%3A0x8ab3c770d1b7b9e1!2z0KXQtdGI0YLQtdCz!5e0!3m2!1suk!2sua!4v1680441516455!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
        {Hashtag.map((block) => {
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
