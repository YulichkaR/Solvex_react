import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Renthen = () => {
  const Renthen = [
    {
      thirtyPagesTitle: "100 Рентген",
      differentImages: "thirty-pages-renthen",
      thirtyPagesText:
        " У нас ви знайдете те, що давно шукали. Ви відчуєте ті емоції, про які давно забули. Ви скуштуєте таке пиво, яке посмакує вам найбільше. Ви зрозумієте, яким повинен бути відпочинок, наповнений новими враженнями, смаками та емоціями.",
      thirtyPagesAddress: "м. Львів, вулиця Петра Дорошенка, 50",
      thirtyPagesWorkTime: "12:00-23:00",
      thirtyPagesNumber: "+380 (98) 314 94 14",
      thirtyPagesLink: "https://www.facebook.com/Pub100Rentgen/?locale=ru_RU",
      thirtyPagesInstagram: "https://www.instagram.com/pub100rentgen/",
      thirtyPagesMap:
        "https://www.google.com/maps/place/100+%D0%A0%D0%B5%D0%BD%D1%82%D0%B3%D0%B5%D0%BD/@49.8372003,24.021561,15z/data=!4m14!1m7!3m6!1s0x473add706d33115b:0x6b1b0043205dfc9d!2zMTAwINCg0LXQvdGC0LPQtdC9!8m2!3d49.8372003!4d24.021561!16s%2Fg%2F1pp2vhtb9!3m5!1s0x473add706d33115b:0x6b1b0043205dfc9d!8m2!3d49.8372003!4d24.021561!16s%2Fg%2F1pp2vhtb9",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        {Renthen.map((block) => {
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
