import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Truth = () => {
  const Truth = [
    {
      thirtyPagesTitle: "Правда",
      differentImages: "thirty-pages-truth",
      thirtyPagesText:
        "Правду створено для того, щоб світове розмаїття сортів було і в Україні. Тому ми варимо широку палітру сортів — від класики до сауерів. Вважаємо, що кожне пиво базується передусім на технологічній досконалості і збалансованості, у якій першу скрипку грає робота наших маленьких партнерів — дріжджів, а ми їм тільки допомагаємо. І якщо закладено правильну основу, пиво не має дефектів і помарок, тоді у гру вступають екзотичні хмелі й інші спеції.",
      thirtyPagesAddress: "м. Львів, площа Ринок, 32",
      thirtyPagesWorkTime: "11:00-22:30",
      thirtyPagesNumber: "+380 (50) 374 49 86",
      thirtyPagesLink: "https://www.pravda.beer/",
      thirtyPagesInstagram: "https://www.instagram.com/pravdabeer/?hl=uk",
      thirtyPagesMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20590.926740397306!2d24.003136978690815!3d49.826186631208174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6dbd59ba5b%3A0xa97158de035899b5!2z0KLQtdCw0YLRgCDQv9C40LLQsCDCq9Cf0YDQsNCy0LTQsMK7!5e0!3m2!1suk!2sua!4v1680442388145!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
        {Truth.map((block) => {
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
