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
        "https://www.google.com/maps/dir//%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9B%D0%B5%D1%81%D1%96+%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%BA%D0%B8,+20,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79008/@49.8435687,23.9616109,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x473addc926018305:0x84058202a18287a6!2m2!1d24.0316505!2d49.8435898",
    },
  ];

  return (
    <div>
      <Header />
      <div>
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
