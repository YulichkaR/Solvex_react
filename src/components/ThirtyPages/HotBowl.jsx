import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Hotbowl = () => {
  const Hotbowl = [
    {
      thirtyPagesTitle: "Гаряча чаша",
      differentImages: "thirty-pages-hotbowl",
      thirtyPagesText:
        "Гаряча Чаша Lounge Bar - це стильний заклад з чудовою атмосферою, де можна насолоджуватися якісними напоями та смачними стравами.",
      thirtyPagesAddress: "м. Львів, вулиця Руська, 4",
      thirtyPagesWorkTime: "13:00-23:00",
      thirtyPagesNumber: "+380 (97) 961 04 40",
      thirtyPagesLink: "https://garia4a4asha.choiceqr.com/",
      thirtyPagesInstagram: "https://www.instagram.com/garia4a4asha/",
      thirtyPagesMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.0473937824017!2d24.033091!3d49.841567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6c50bf7869%3A0xf99f908f73d0f174!2z0JPQsNGA0Y_Rh9CwINCn0LDRiNCw!5e0!3m2!1suk!2sua!4v1680441569625!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
        {Hotbowl.map((block) => {
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
