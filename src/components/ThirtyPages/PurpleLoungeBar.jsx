import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Purple = () => {
  const Purple = [
    {
      thirtyPagesTitle: "Purple Lounge",
      differentImages: "thirty-pages-purple",
      thirtyPagesText:
        "Purple lounge - це перш за все лаунж-бар для відпочинку, що знаходиться в самому серці Львова - на вулиці Курбаса, що розташований в 5 хвилинах ходьби від Оперного театру. Майстри кальянної Purple lounge із задоволенням запропонують Вам покурити кальян на будь-який смак, колір, запах, відчуття і настрій. Наші клієнти та гості можуть замовити не тільки запропоновані мікси, але і вибрати будь-який смак або мікс на свій розсуд. А можна нічого і не вибирати, а просто попросити нашого майстра зробити «щось літнє», «щось солоденьке», «щось міцне» або взагалі мікс-сюрприз на смак наших майстрів. ",
      thirtyPagesAddress: "м. Львів, вулиця Леся Курбаса, 8",
      thirtyPagesWorkTime: "12:00-22:00",
      thirtyPagesNumber: "+380 (73) 600 33 31",
      thirtyPagesLink: "https://puprle-lounge.business.site/",
      thirtyPagesInstagram: "https://www.instagram.com/purple.lounge_lviv/",
      thirtyPagesMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.0115234008163!2d24.0259085!3d49.842240999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add724099c295%3A0xf21d51061ee4f88e!2sPurple%20Lounge!5e0!3m2!1suk!2sua!4v1680442066044!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
        {Purple.map((block) => {
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
