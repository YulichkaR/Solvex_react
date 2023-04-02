import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Warshava = () => {
  const Warshava = [
    {
      thirtyPagesTitle: "Варшава",
      differentImages: "thirty-pages-warshava",
      thirtyPagesText:
        "Ресторан «Варшава» – це місце натхнення, приємного відпочинку та вишуканої кухні. У нас можна провести ділові переговори, замовити романтичну вечерю на двох, відсвяткувати у вузькому колі чи з великим розмахом будь-яку подію. Професійні дизайнери створили для вас неповторний інтер’єр у спокійних тонах, а досвідчені шеф-кухарі – розробили меню на будь-які смаки. Кваліфікований персонал забезпечить якісне обслуговування та запропонує допомогу у виборі страв та напоїв з великої колекції.",
      thirtyPagesAddress: "с. Малехів, вулиця Жовківська, 1",
      thirtyPagesWorkTime: "08:00-23:00",
      thirtyPagesNumber: "+380 (97) 203 10 20",
      thirtyPagesLink: "http://warszawa-hotel.com.ua/cuisine/",
      thirtyPagesInstagram: "https://www.instagram.com/warszawa.lviv/",
      thirtyPagesMap:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2570.666489136887!2d24.05516!3d49.8862894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473adc8bdb83dbdb%3A0x1d1ce4d4934e75f5!2z0JPQvtGC0LXQu9GMLdGA0LXRgdGC0L7RgNCw0L0g0JLQsNGA0YjQsNCy0LAgKFdhcnN6YXdhKQ!5e0!3m2!1suk!2sua!4v1680442595040!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
        {Warshava.map((block) => {
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
