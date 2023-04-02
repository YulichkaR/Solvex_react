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
        "https://www.google.com/maps/place/Purple+Lounge/@49.842241,24.0237198,17z/data=!3m1!4b1!4m6!3m5!1s0x473add724099c295:0xf21d51061ee4f88e!8m2!3d49.842241!4d24.0259085!16s%2Fg%2F11f0_dm3pt",
    },
  ];

  return (
    <div>
      <Header />
      <div>
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
