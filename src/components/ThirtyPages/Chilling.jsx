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
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.04569074563!2d24.026818499999997!3d49.841598999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6991963b85%3A0x4d9795c3d3ee1bbc!2zQ2hpbGxpbmcgTHZpdiAtINCn0LjQu9GW0L3QsyDQm9GM0LLRltCy!5e0!3m2!1suk!2sua!4v1680440273710!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
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
