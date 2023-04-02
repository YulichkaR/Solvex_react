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
        "https://www.google.com/maps/place/%D0%93%D0%B0%D1%80%D1%8F%D1%87%D0%B0+%D0%A7%D0%B0%D1%88%D0%B0/@49.841567,24.0309023,17z/data=!3m1!4b1!4m6!3m5!1s0x473add6c50bf7869:0xf99f908f73d0f174!8m2!3d49.841567!4d24.033091!16s%2Fg%2F11f29xytxv",
    },
  ];

  return (
    <div>
      <Header />
      <div>
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
