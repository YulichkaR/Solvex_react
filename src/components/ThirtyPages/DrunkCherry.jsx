import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Cherry = () => {
  const Cherry = [
    {
      thirtyPagesTitle: "П'яна Вишня",
      differentImages: "thirty-pages-cherry",
      thirtyPagesText:
        "Ліпша львівська настоянка – невід'ємна частина старого Львова. П'яну вишню здавна у Львові настоювали у кожній хаті. Кожна львівська господиня робила ту настоянку, і кожна панєнка знала той смак. Настоянка була така смачна, що жодна кобіта, незалежно від віку, не могла встояти перед тим смаком. І колєжанки, як здибалися попліткувати про хлопів, завше смакували настоянку.",
      thirtyPagesAddress: "м. Львів, вулиця Арсенальна, 3",
      thirtyPagesWorkTime: "12:00-21:00",
      thirtyPagesNumber: "+380 (67) 674 26 61.",
      thirtyPagesLink: "https://www.fest.lviv.ua/uk/restaurants/drunkcherry/",
      thirtyPagesInstagram: "https://www.instagram.com/pianavyshnia/",
      thirtyPagesMap:
        "https://www.google.com/maps/dir//3,+%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%90%D1%80%D1%81%D0%B5%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8412261,23.9650584,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x473add6c7b56c1ab:0x7c6c8f39da093dd6!2m2!1d24.035098!2d49.8412472",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        {Cherry.map((block) => {
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
