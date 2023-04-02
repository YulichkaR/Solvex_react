import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Boat = () => {
  const Boat = [
    {
      thirtyPagesTitle: "Човен",
      differentImages: "thirty-pages-boat",
      thirtyPagesText:
        "Пивний паб «Човен», що розташовується в самому центрі Львова, пропонує своїм відвідувачам шістнадцять сортів українського крафтового розливного пива. Тут є нефільтроване світле, напівтемне, темне біле пиво, а також елі й сидр. У пабі часто проходять трансляції спортивних матчів і подій. Інтер'єр закладу оформлений в класичному «барному» стилі - масивні дерев'яні меблі, довга барна стійка, стіни прикрашені візерунками, що нагадують пивні бокали, на ліхтарях написи з різними назвами сортів хмелю.",
      thirtyPagesAddress: "м. Львів, вулиця Вірменська, 33",
      thirtyPagesWorkTime: "12:00-21:00",
      thirtyPagesNumber: "+380 (68) 380 50 72",
      thirtyPagesLink:
        "https://www.facebook.com/groups/436132229914890/?locale=uk_UA",
      thirtyPagesInstagram:
        "https://www.instagram.com/explore/locations/1025102179/",
      thirtyPagesMap:
        "https://www.google.com/maps/place/%D0%A7%D0%BE%D0%B2%D0%B5%D0%BD/@49.843397,24.0309949,17z/data=!3m1!4b1!4m6!3m5!1s0x473add6d18fbb801:0x1b294fa8b33cfd2!8m2!3d49.843397!4d24.0331836!16s%2Fg%2F1pp2v3cwt",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        {Boat.map((block) => {
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
