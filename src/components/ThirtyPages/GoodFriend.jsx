import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Friend = () => {
  const Friend = [
    {
      thirtyPagesTitle: "Добрий друг",
      differentImages: "thirty-pages-friend",
      thirtyPagesText:
        "Хочеш вишуканих мега маленьких аристократичних страв?  Нажаль, друже, не до Good Friend. У доброго друга подача нехай і авторська, але все просто та комфортно, а порції, вибач, величезні: ми ж друзі, тому все щедро.",
      thirtyPagesAddress: "м. Львів, вулиця Лесі Українки, 19",
      thirtyPagesWorkTime: "12:00-23:00",
      thirtyPagesNumber: "+380 (50) 537 12 46.",
      thirtyPagesLink: "https://www.goodfriend.net.ua/",
      thirtyPagesInstagram: "https://instagram.com/pubgoodfriend_lviv",
      thirtyPagesMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20582.51448611719!2d23.998437278736468!3d49.8459464813632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6d5d9c4531%3A0x45f947dbf8fcc596!2z0JTQvtCx0YDQuNC5INCU0YDRg9Cz!5e0!3m2!1suk!2sua!4v1680441389437!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
        {Friend.map((block) => {
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
