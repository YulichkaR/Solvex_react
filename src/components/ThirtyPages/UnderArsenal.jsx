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
        "https://www.google.com/maps/place/%D0%A0%D0%B5%D0%B1%D0%B5%D1%80%D0%BD%D1%8F+%22%D0%9F%D1%96%D0%B4+%D0%90%D1%80%D1%81%D0%B5%D0%BD%D0%B0%D0%BB%D0%BE%D0%BC%22/@49.8415093,24.0330241,17z/data=!3m1!4b1!4m6!3m5!1s0x473add6c880bd1a7:0xbdc0093e37e91a8d!8m2!3d49.8415093!4d24.0352128!16s%2Fg%2F11cnb5l_1f",
    },
  ];

  return (
    <div>
      <Header />
      <div>
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
