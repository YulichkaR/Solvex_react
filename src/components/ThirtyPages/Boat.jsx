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
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.9500000775465!2d24.033183599999997!3d49.84339699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6d18fbb801%3A0x1b294fa8b33cfd2!2z0KfQvtCy0LXQvQ!5e0!3m2!1suk!2sua!4v1680440181594!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
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
