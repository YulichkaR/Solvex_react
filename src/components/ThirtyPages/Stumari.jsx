import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Strumari = () => {
  const Strumari = [
    {
      thirtyPagesTitle: "Стумарі",
      differentImages: "thirty-pages-strumari",
      thirtyPagesText:
        "Кафе грузинської кухні «Стумарі» розмістилося в історичній будівлі, і займає 2 поверхи, а родзинкою інтер'єру є збережений фрагмент північної частини Львівської стіни, датований XIV століттям.",
      thirtyPagesAddress: "м. Львів, вулиця Лесі Українки, 20",
      thirtyPagesWorkTime: "08:00-22:00",
      thirtyPagesNumber: "+380 (67) 238 24 94",
      thirtyPagesLink:
        "https://reikartz.com/uk/restaurants/kafe-gruzinskoyi-kuhni-stumari-ul-lesi-ukrainki-lvov/?utm_source=organic&utm_medium=google_my_business",
      thirtyPagesInstagram: "https://www.instagram.com/stumari_lviv/",
      thirtyPagesMap:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d82334.10758288622!2d23.9616109!3d49.8435687!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473addc926018305%3A0x84058202a18287a6!2z0KHRgtGD0LzQsNGA0ZYgLSDQutCw0YTQtSDQs9GA0YPQt9C40L3RgdGM0LrQvtGXINC60YPRhdC90ZYsINCb0YzQstGW0LIgKNCb0LXRgdGWINCj0LrRgNCw0ZfQvdC60Lgp!5e0!3m2!1suk!2sua!4v1680442216056!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
        {Strumari.map((block) => {
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
