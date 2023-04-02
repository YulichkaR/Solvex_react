import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Arsenal = () => {
  const Arsenal = [
    {
      thirtyPagesTitle: "Реберня Під Арсеналом",
      differentImages: "thirty-pages-arsenal",
      thirtyPagesText:
        "Pеберня «Під Арсеналом» є одним з наймолодших членів сім‘ї закладів Холдингу емоцій «!FEST». Перші ребра на мангалі тут приготували у травні 2016 року. Протягом цього часу ми вже встигли нагодувати чи не сотню тисяч голодних гостей. Реберня «Під Арсеналом» - найбрутальніший заклад міста Львова! Найсмачніші ребра в цілому світі. Приходь до нас - і переконайся в цьому!",
      thirtyPagesAddress: "м. Львів, вулиця Підвальна, 5",
      thirtyPagesWorkTime: "11:00-23:00",
      thirtyPagesNumber: "+380 (67) 373 41 51",
      thirtyPagesLink: "https://www.facebook.com/rebernia",
      thirtyPagesInstagram: "https://www.instagram.com/rebernialviv/",
      thirtyPagesMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.050464568553!2d24.0352128!3d49.8415093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6c880bd1a7%3A0xbdc0093e37e91a8d!2z0KDQtdCx0LXRgNC90Y8gItCf0ZbQtCDQkNGA0YHQtdC90LDQu9C-0Lwi!5e0!3m2!1suk!2sua!4v1680442433697!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
        {Arsenal.map((block) => {
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
