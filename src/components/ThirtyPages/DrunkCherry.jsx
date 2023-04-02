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
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d82338.0971646781!2d23.9650584!3d49.8412261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6c7b56c1ab%3A0x7c6c8f39da093dd6!2z0J8n0Y_QvdCwINCS0LjRiNC90Y8!5e0!3m2!1suk!2sua!4v1680441074408!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
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
