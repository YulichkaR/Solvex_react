import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Panorama = () => {
  const Panorama = [
    {
      thirtyPagesTitle: "Панорама",
      differentImages: "thirty-pages-panorama",
      thirtyPagesText:
        "Бажаєте побачити центр Львова як на долоні? Ресторан Панорама у Львові запрошує всіх відвідувачів помилуватися унікальним видом міста, зручно влаштувавшись на терасі або в залі.Вишукана атмосфера ресторану «Панорама», стильний інтер'єр та чудовий краєвид зроблять Ваше перебування тут незабутнім.",
      thirtyPagesAddress: "м. Львів, Проспект Свободи, 45",
      thirtyPagesWorkTime: "08:00-22:00",
      thirtyPagesNumber: "+38 (032) 225 90 09",
      thirtyPagesLink: "https://panorama-hotel.com.ua/ru/",
      thirtyPagesInstagram: "https://www.instagram.com/panorama.lviv/",
      thirtyPagesMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.933869755741!2d24.023364416059515!3d49.843700079396285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add83b0f3dab5%3A0x45a28c060ee13de5!2z0KDQtdGB0YLQvtGA0LDQvSDCq9Cf0LDQvdC-0YDQsNC80LDCuw!5e0!3m2!1suk!2sua!4v1680392929197!5m2!1suk!2sua",
    },
  ];
  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
        {Panorama.map((block) => {
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
