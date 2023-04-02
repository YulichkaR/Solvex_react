import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Secret = () => {
  const Secret = [
    {
      thirtyPagesTitle: "Secret Bar Lviv",
      differentImages: "thirty-pages-secret",
      thirtyPagesText:
        "Secret Bar Lviv - найкращий гастро-лаундж бар у Львові. Наш шеф-повар приготував для вас ідеально меню з різними позиціями, авторські бургери, брускети, закуски, пасти, салати, та багато іншого. Спробувавши якусь страву ви неодмінно захочете ще!",
      thirtyPagesAddress: "м. Львів, вулиця Миколи Коперника, 16",
      thirtyPagesWorkTime: "14:00-23:00",
      thirtyPagesNumber: "+380 (96) 996 9062",
      thirtyPagesLink: "https://www.secretbar.lviv.ua/",
      thirtyPagesInstagram: "https://www.instagram.com/secretbarlviv/",
      thirtyPagesMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.1921234620772!2d24.024127115709284!3d49.83884747939566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add71ab53e345%3A0xd5d57d4acdd9041a!2sSecret%20Bar%20Lviv!5e0!3m2!1suk!2sua!4v1680442137890!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
        {Secret.map((block) => {
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
