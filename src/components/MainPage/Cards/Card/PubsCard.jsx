import React from "react";
import { Card } from "./Card";
import CartonaPub from "../../../../img/CartonaPub.png";
import Rengen from "../../../../img/100Rengen.png";
import DobryiDrug from "../../../../img/DobryiDrug.png";

export const PubsCards = () => {
  const PubsCards = [
    {
      cardClass: "pub-cartona-club",
      cardTitle: "Cantona Pub",
      cardImage: { src: CartonaPub, alt: "CartonaPub" },
      cardDescription:
        "Атмосферний паб у Львові, прекрасне місце для перегляду футбольних матчів у дружній компанії, досить широкий вибір пива крафтових броварень України, смачні та великі бургери, британська кухня, закуски до пива. Регулярно в закладі проходять трансляції футбольних матчів та спортивних подій.",
      workTime: "  🍺Bar. ⏱13:00 - 23:00.   ",
      cardNumber: "+380 (96) 997 0655.",
      cardAddress:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.3266575754146!2d24.02700841598417!3d49.83631943930463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6f1431709f%3A0x9c463fff056b2b1!2z0JrQsNC90YLQvtC90LA!5e0!3m2!1suk!2sua!4v1678032327782!5m2!1suk!2sua",
    },
    {
      cardClass: "pub-100-rengen",
      cardTitle: "Паб 100 Рентген",
      cardImage: { src: Rengen, alt: "100 Rengen" },
      cardDescription:
        "100 рентген - сталкерський паб в центрі Львова з особливою атмосферою! Особливістю закладу є великий вибір розливного і пляшкового пива від українських і європейських броварень.  Ви зрозумієте, яким повинен бути відпочинок, наповнений новими враженнями, смаками та емоціями.",
      workTime: " 🍺Bar. ⏱12:00 - 23:00. ",
      cardNumber: "+380 (98) 314 9414.",
      cardAddress:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.2796020707224!2d24.017076334996144!3d49.83720367334443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add706d33115b%3A0x6b1b0043205dfc9d!2zMTAwINCg0LXQvdGC0LPQtdC9!5e0!3m2!1suk!2sua!4v1678032365459!5m2!1suk!2sua",
    },
    {
      cardClass: "pub-dobryi-grug",
      cardTitle: "Паб Добрий друг",
      cardImage: { src: DobryiDrug, alt: "DobryiDrug" },
      cardDescription:
        "Рустикальний паб із терасою в самому центрі Львова, де подають величезні порції домашньої їжі, а також пиво, сидр, коктейлі і хороший настрій. В доброму друзі подача нехай і авторська, але все просто та комфортно, а порції, величезні: ми ж друзі, тому все щедро. «Добрий Друг» зібрав 24 позиції пінного. Все крафтове та живе. ",
      workTime: " 🍺Bar. ⏱12:00 - 23:00. ",
      cardNumber: "+380 (50) 537 1246",
      cardAddress:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.9244357235993!2d24.02856451598429!3d49.84387733876456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6d5d9c4531%3A0x45f947dbf8fcc596!2z0JTQvtCx0YDQuNC5INCU0YDRg9Cz!5e0!3m2!1suk!2sua!4v1678032393529!5m2!1suk!2sua",
    },
  ];

  return (
    <div className="main-page-hoohaks-section">
      <p className="main-page-restaurant-text-description">
        Для любителів пива та “чогось алкогольного”, мандрівка до Львова – це
        майже як паломництво. У місті є чимало барів, що спеціалізуються на
        смачному крафтовому пиві і вишуканих настоянках.
      </p>
      <div className="main-page-three-cards-of-restaurants">
        {PubsCards.map((card) => {
          return (
            <Card
              cardClass={card.cardClass}
              cardTitle={card.cardTitle}
              cardImage={card.cardImage}
              cardDescription={card.cardDescription}
              workTime={card.workTime}
              cardNumber={card.cardNumber}
              cardAddress={card.cardAddress}
            />
          );
        })}
      </div>
      <div className="line"></div>
    </div>
  );
};
