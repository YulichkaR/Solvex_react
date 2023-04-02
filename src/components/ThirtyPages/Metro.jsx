import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Metro = () => {
  const Metro = [
    {
      thirtyPagesTitle: "Метро",
      differentImages: "thirty-pages-metro",
      thirtyPagesText:
        "Чудове місце для вечору з друзями! Тут хороша музика та приємна атмосфера. Бармени працюють швидко та якісно, із розумінням ставляться до всіх клієнтів. Закуски смачні, замовлення приносять дуже швидко. Словом, це бар, куди хочеться повертатися. ",
      thirtyPagesAddress: "м. Львів, вулиця Січових Стрільців, 10",
      thirtyPagesWorkTime: "12:00-22:00",
      thirtyPagesNumber: "+380 (67) 476 49 75",
      thirtyPagesLink:
        "https://lviv.virtual.ua/ua/object/421867/Stantsiia-Universytetska-Subway-Station-Pub.html",
      thirtyPagesInstagram: "https://www.instagram.com/mpublviv/",
      thirtyPagesMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.1026792742155!2d24.02197761570945!3d49.84052817939586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473adda989690661%3A0x98441a68265090d8!2z0JzQtdGC0YDQvi3Qv9Cw0LEgwqvQodGC0LDQvdGG0ZbRjyDQo9C90ZbQstC10YDRgdC40YLQtdGC0YHRjNC60LDCuw!5e0!3m2!1suk!2sua!4v1680442002010!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
        {Metro.map((block) => {
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
