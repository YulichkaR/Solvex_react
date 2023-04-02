import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Kantona = () => {
  const Kantona = [
    {
      thirtyPagesTitle: "Кантона",
      differentImages: "thirty-pages-kantona",
      thirtyPagesText:
        "На вулиці Джохара Дудаєва розташований тематичний футбольний паб під назвою «Cantona Pub». Інтер'єр закладу витриманий у класичному «барному» стилі – темно-зелені відтінки, цегляне мурування стін, масивні меблі з натурального дерева. Меню складається з популярних європейських, італійських й американських страв. Акцент зроблений на закусках до пива. У барі представлений асортимент розливного та пляшкового пива. Регулярно в закладі проходять трансляції футбольних матчів та спортивних подій.",
      thirtyPagesAddress: "м. Львів, вулиця Джохара Дудаєва, 16/1",
      thirtyPagesWorkTime: "14:00-22:45",
      thirtyPagesNumber: "+380 (96) 997 06 55",
      thirtyPagesLink: "https://www.facebook.com/CantonaPub",
      thirtyPagesInstagram: "https://www.instagram.com/kanatoba_laundzh/",
      thirtyPagesMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.326841697161!2d24.02700841570928!3d49.836315979395295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6f1431709f%3A0x9c463fff056b2b1!2z0JrQsNC90YLQvtC90LA!5e0!3m2!1suk!2sua!4v1680441722383!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
        {Kantona.map((block) => {
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
