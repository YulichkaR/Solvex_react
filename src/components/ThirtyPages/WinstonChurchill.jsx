import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Сhurchill = () => {
  const Сhurchill = [
    {
      thirtyPagesTitle: "Вінстона Черчілля",
      differentImages: "thirty-pages-churchill",
      thirtyPagesText:
        "У Галицькому районі Львова розташований атмосферний британський паб Winston Churchill Pub. В інтер'єрі чорно-червоні кольори, меблі з темних порід дерев, шкіряні дивани. Стіни прикрашені чорно-білими світлинами Вінстона Черчилля та пейзажами Великобританії.",
      thirtyPagesAddress: "м. Львів, вулиця Академіка Гнатюка, 4",
      thirtyPagesWorkTime: "12:00-00:00",
      thirtyPagesNumber: "+380 (68) 123 46 67",
      thirtyPagesLink: "https://www.facebook.com/WinstonChurchillPubLviv/",
      thirtyPagesInstagram: "https://www.instagram.com/winston_churchill_pub/",
      thirtyPagesMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.055239481716!2d24.024120915709414!3d49.841419579395875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add721a7914c3%3A0x990470eb16afd6ea!2z0J_QsNCxINCS0ZbQvdGB0YLQvtC90LAg0KfQtdGA0YfRltC70LvRjyAo0JLRltC90YHRgtC-0L0g0KfQtdGA0YfQuNC70LvRjCDQv9Cw0LEp!5e0!3m2!1suk!2sua!4v1680442744809!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
        {Сhurchill.map((block) => {
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
