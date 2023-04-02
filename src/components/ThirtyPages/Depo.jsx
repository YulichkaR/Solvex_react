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
      thirtyPagesAddress: "м. Львів, вулиця Валова, 15",
      thirtyPagesWorkTime: "08:00-22:00",
      thirtyPagesNumber: "+380 (68) 535 89 37",
      thirtyPagesLink: "https://www.facebook.com/Depo-Lounge-110630580835034/",
      thirtyPagesInstagram: "https://www.instagram.com/kalyandepo_family/",
      thirtyPagesMap:
        "https://www.google.com/maps/search/depo+lounge+%D0%BB%D1%8C%D0%B2%D1%96%D0%B2+%D1%81%D0%B0%D0%B9%D1%82+%D1%96%D0%BD%D1%81%D1%82%D0%B0%D0%B3%D1%80%D0%B0%D0%BC/@49.8350351,24.0161656,15z/data=!3m1!4b1",
    },
  ];

  return (
    <div>
      <Header />
      <div>
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
