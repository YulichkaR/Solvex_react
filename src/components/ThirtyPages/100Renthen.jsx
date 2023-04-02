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
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.2797826846904!2d24.019372315709226!3d49.837200279395454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add706d33115b%3A0x6b1b0043205dfc9d!2zMTAwINCg0LXQvdGC0LPQtdC9!5e0!3m2!1suk!2sua!4v1680439647930!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
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
