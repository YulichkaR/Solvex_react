import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Goldenstar = () => {
  const Goldenstar = [
    {
      thirtyPagesTitle: "Під золотою зіркою",
      differentImages: "thirty-pages-goldenstar",
      thirtyPagesText:
        "Інтерактивний музей-кондитерська «Під золотою зіркою» у Львові запрошує львів'ян та гостей міста поринути у вир гастрономічної насолоди і пізнати різноманіття смаків! Кулінарна вітрина вражає асортиментом м'ясних, рибних, овочевих пирогів, кішів, кексів, булочок та солодощами на будь-який смак від легендарної, знаної далеко за межами Львівщини кондитерської марки «Вероніка»: торти, тістечка, цукерки, мармелад, макаруни та шоколад ручної роботи. ",
      thirtyPagesAddress: "м. Львів, вулиця Миколи Коперника, 1",
      thirtyPagesWorkTime: "09:00-23:00",
      thirtyPagesNumber: "+380 (32) 297 10 79",
      thirtyPagesLink: "https://veronica.ua/restaurants/apothecary-restaurant/",
      thirtyPagesInstagram: "https://www.instagram.com/undergoldstar/",
      thirtyPagesMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.175982480939!2d24.026220815709248!3d49.83915077939568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6e69655555%3A0x3f1d361a3dba1a0d!2z0JrQvtC90LTQuNGC0LXRgNGB0YzQutCwLdCw0L_RgtC10LrQsCDQhtC-0L3QvtCy0LjRhSDQn9GW0LQg0LfQvtC70L7RgtC-0Y4g0LfRltGA0LrQvtGO!5e0!3m2!1suk!2sua!4v1680442483464!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
        {Goldenstar.map((block) => {
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
