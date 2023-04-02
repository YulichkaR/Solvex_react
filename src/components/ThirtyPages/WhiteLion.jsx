import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Lion = () => {
  const Lion = [
    {
      thirtyPagesTitle: "Білий лев",
      differentImages: "thirty-pages-lion",
      thirtyPagesText:
        "Розташована при вході мальовнича 3D картина переносить у XVII століття. Тут справжні монахи за рецептурою своїх предків готують та смакують благородний хмільний напій – пиво. У пабі «Білий Лев» можна повноцінно пообідати за спеціальним обіднім меню або обрати будь-яку із традиційних українських страв.",
      thirtyPagesAddress: "м. Львів, вулиця Лесі Українки, 15",
      thirtyPagesWorkTime: "12:00-00:00",
      thirtyPagesNumber: "+380 (322) 35 46 25",
      thirtyPagesLink: "http://www.white-lion.com.ua/",
      thirtyPagesInstagram: "https://www.instagram.com/white.lion.pub/",
      thirtyPagesMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.9264016668135!2d24.0303437!3d49.8438404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6d60c6f503%3A0x78de839587766624!2z0JHRltC70LjQuSDQm9C10LI!5e0!3m2!1suk!2sua!4v1680442646938!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
        {Lion.map((block) => {
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
