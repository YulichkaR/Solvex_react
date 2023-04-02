import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Depo = () => {
  const Depo = [
    {
      thirtyPagesTitle: "Depo Lounge",
      differentImages: "thirty-pages-depo",
      thirtyPagesText:
        "Depo Lounge – кальян бар, де кожен гість з першої миті справді може почуватися «як удома». Сучасний та затишний стиль, великий вибір тютюну та напоїв, професійна команда з багаторічним досвідом, все це дозволить Вам відпочити від особистих турбот, а після відвідування викличе бажання повернути час назад, але можемо Вас порадувати, машина часу Вам не знадобиться, бо двері нашого заклади відкриті щодня, незалежно від погоди та будь-яких інших обставин.",
      thirtyPagesAddress: "м. Львів,  вулиця Героїв Майдану, 10-12",
      thirtyPagesWorkTime: "08:00-22:00",
      thirtyPagesNumber: "+380 (68) 535 89 37",
      thirtyPagesLink: "https://www.facebook.com/Depo-Lounge-110630580835034/",
      thirtyPagesInstagram: "https://www.instagram.com/kalyandepo_family/",
      thirtyPagesMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1310708.1268100135!2d23.600806714672164!3d50.086721040184194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add632ffca409%3A0x7b4e47e9e7d586bd!2z0J_QsNCxINCU0LXQv9C-!5e0!3m2!1suk!2sua!4v1680440951334!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
        {Depo.map((block) => {
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
