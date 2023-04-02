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
        "https://www.google.com/maps/place/%D0%93%D0%BE%D1%82%D0%B5%D0%BB%D1%8C-%D1%80%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD+%D0%92%D0%B0%D1%80%D1%88%D0%B0%D0%B2%D0%B0+(Warszawa)/@49.8862894,24.05516,17z/data=!4m9!3m8!1s0x473adc8bdb83dbdb:0x1d1ce4d4934e75f5!5m2!4m1!1i2!8m2!3d49.8875634!4d24.0581113!16s%2Fg%2F11xdm8ds5",
    },
  ];

  return (
    <div>
      <Header />
      <div>
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
