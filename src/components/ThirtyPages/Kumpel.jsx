import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Kumpel = () => {
  const Kumpel = [
    {
      thirtyPagesTitle: "Кумпель",
      differentImages: "thirty-pages-kumpel",
      thirtyPagesText:
        "Атмосфера ресторану створює всі умови, щоб відчути себе справжнім львівським батяром. На вході до закладу відвідувачів зустрічає легендарна «Пивна циця» - копія скульптури Венери Мілоської, і кожен бажаючий, правильно обласканий даму, отримає в подарунок стаканчик пива.",
      thirtyPagesAddress:
        "м. Львів, вулиця Володимира Винниченка, площа Митна, 6",
      thirtyPagesWorkTime: "10:00-22:00",
      thirtyPagesNumber: "+380 (68) 998 99 94",
      thirtyPagesLink: "https://kumpel-beer.com/pyvovarnya/",
      thirtyPagesInstagram: "https://www.instagram.com/kumpel_lviv/",
      thirtyPagesMap:
        "https://www.google.com/maps/place/%D0%A0%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD-%D0%BF%D0%B8%D0%B2%D0%BE%D0%B2%D0%B0%D1%80%D0%BD%D1%8F+%D0%BC%D1%96%D1%81%D1%86%D0%B5%D0%B2%D0%BE%D1%97+%D0%BA%D1%83%D1%85%D0%BD%D1%96+%D0%9A%D1%83%D0%BC%D0%BF%D0%B5%D0%BB%D1%8C/@49.8392466,24.0339419,17z/data=!3m1!4b1!4m6!3m5!1s0x473add6bef37f283:0x243d7f628f6bdd4f!8m2!3d49.8392466!4d24.0361306!16s%2Fg%2F1hdzv6h1w",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        {Kumpel.map((block) => {
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
