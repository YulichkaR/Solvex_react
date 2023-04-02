import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Amsterdam = () => {
  const Amsterdam = [
    {
      thirtyPagesTitle: "Amsterdam Lounge Bar",
      differentImages: "thirty-pages-amsterdam",
      thirtyPagesText:
        "Дві зали розраховані на великі компанії. Кухня (європейська/американська). Бар – широкий асортимент алкоголю та різноманітних коктейлів. Кальяни – великий вибір табаку (своя рецептура забивки, «міксологія табаку на високому рівні»). Настільні ігри знаходяться у вільному доступі гостей.",
      thirtyPagesAddress: "м. Львів, вулиця Валова, 15",
      thirtyPagesWorkTime: "12:00-23:00",
      thirtyPagesNumber: "+380 (67) 976 09 86",
      thirtyPagesLink: "https://amsterdamlviv.com.ua/",
      thirtyPagesInstagram: "https://www.instagram.com/amsterdamlviv/",
      thirtyPagesMap:
        "https://www.google.com/maps/place/Amsterdam+Lounge+Bar/@49.8400371,24.0310622,17z/data=!3m1!4b1!4m6!3m5!1s0x473add6c179ab3dd:0xee486f48d878cd6a!8m2!3d49.8400371!4d24.0332509!16s%2Fg%2F11gfjbh4q_",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        {Amsterdam.map((block) => {
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
