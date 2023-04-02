import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Chilling = () => {
  const Chilling = [
    {
      thirtyPagesTitle: "Chilling",
      differentImages: "thirty-pages-сhilling",
      thirtyPagesText:
        "Кальян-бар «Chiling» у Львові — місце, в якому легко кинути виклик буденним клопотам і обрати для себе найкращу формулу відпочинку: димний кальян, смачну страву, коктейль та неймовірну атмосферу закладу. Посиденьки з друзями за ароматним кальяном, який готують наші вправні кальянщики, зустріч з колегами чи просто релакс на одинці з власними думками — неспішно насолоджуйтесь найкращими міксами і нехай весь світ зачекає, поки ви відновлюєте внутрішній баланс.",
      thirtyPagesAddress: "м. Львів, проспект Свободи, 19",
      thirtyPagesWorkTime: "13:00-23:00",
      thirtyPagesNumber: "+380 (50) 555 80 13",
      thirtyPagesLink: "https://chillinglviv.com/",
      thirtyPagesInstagram: "https://www.instagram.com/chillinglviv/",
      thirtyPagesMap:
        "https://www.google.com/maps/place/Chilling+Lviv+-+%D0%A7%D0%B8%D0%BB%D1%96%D0%BD%D0%B3+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2/@49.841599,24.0246298,17z/data=!3m1!4b1!4m6!3m5!1s0x473add6991963b85:0x4d9795c3d3ee1bbc!8m2!3d49.841599!4d24.0268185!16s%2Fg%2F11fm71nrfj",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        {Chilling.map((block) => {
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
