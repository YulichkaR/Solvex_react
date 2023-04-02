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
        "https://www.google.com/maps?q=%D0%9A%D0%BE%D0%BD%D0%B4%D0%B8%D1%82%D0%B5%D1%80%D1%81%D1%8C%D0%BA%D0%B0-%D0%B0%D0%BF%D1%82%D0%B5%D0%BA%D0%B0+%22%D0%9F%D1%96%D0%B4+%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D1%8E+%D0%B7%D1%96%D1%80%D0%BA%D0%BE%D1%8E%22&sxsrf=APwXEddeTk5WFtC52KLQcTxO-e_RxBLFsw:1680401743165&uact=5&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIGCAAQFhAeMgYIABAWEB4yAggmSgQIQRgAUABYAGCaBmgAcAF4AIABYIgBYJIBATGYAQCgAQKgAQHAAQE&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiFwajTkIr-AhVHlYsKHfq7BDEQ_AUoAnoECAEQBA",
    },
  ];

  return (
    <div>
      <Header />
      <div>
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

