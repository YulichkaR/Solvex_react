import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Leopolis = () => {
  const Leopolis = [
    {
      thirtyPagesTitle: "Grand Cafe Leopolis",
      differentImages: "thirty-pages-leopolis",
      thirtyPagesText:
        "Тут можна дізнатися про цікавинки й події, які ставалися у Львові відтоді, як люди навчилися фотографувати. Про лижний трамплін на Знесінні, про страйки, канатну дорогу у Стрийському парку, перші польоти й інші пригоди нашого міста розповідають близько 700 фотографій на стінах Grand Cafe Leopolis.",
      thirtyPagesAddress: "м. Львів, площа Ринок, 1",
      thirtyPagesWorkTime: "09:00-22:30",
      thirtyPagesNumber: "+380 (97) 997 55 65",
      thirtyPagesLink:
        "https://www.fest.lviv.ua/uk/restaurants/grandcafeleopolis/",
      thirtyPagesInstagram: "https://www.instagram.com/grandcafeleopolis/",
      thirtyPagesMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.0332170733536!2d24.02893961570949!3d49.841833379395936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473addbfc5c37d2b%3A0xfb05241ec204fd30!2sGrand%20Cafe%20Leopolis!5e0!3m2!1suk!2sua!4v1680441445355!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
        {Leopolis.map((block) => {
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
