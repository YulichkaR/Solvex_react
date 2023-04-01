import React from "react";
import { Card } from "./Card";
import CantonaPub from "../../../../img/CartonaPub.png";
import Rengen100 from "../../../../img/100Rengen.png";
import DobryiDrug from "../../../../img/DobryiDrug.png";

export const PubsCards = () => {
  const PubsCards = [
    {
      cardClass: "pubs-cantona",
      cardTitle: "Cantona Pub",
      cardImage: { src: CantonaPub, alt: "CantonaPub" },
      cardDescription:
        "Атмосферний паб у Львові, прекрасне місце для перегляду футбольних матчів у дружній компанії, досить широкий вибір пива крафтових броварень України, смачні та великі бургери, британська кухня, закуски до пива.",
      workTime: "  🍺Bar. ⏱13:00 - 23:00. ",
      cardNumber: "+380 (96) 997 0655.",
      cardAddress:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.326842118304!2d24.026622176618602!3d49.83631597148143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6f1431709f%3A0x9c463fff056b2b1!2sCantona%20Pub!5e0!3m2!1sru!2sua!4v1680122392038!5m2!1sru!2sua",
    },
    {
      cardClass: "pubs-rengen",
      cardTitle: "Паб 100 Рентген",
      cardImage: { src: Rengen100, alt: "Rengen100" },
      cardDescription:
        "100 рентген - сталкерський паб в центрі Львова із найкращим пивом у місті і також з особливою атмосферою! Особливістю закладу є великий вибір розливного і пляшкового пива від українських і європейських броварень.",
      workTime: "  🍺Bar. ⏱12:00 - 23:00. ",
      cardNumber: " +380 (98) 314 9414.",
      cardAddress:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.279783105839!2d24.018986076618663!3d49.83720027148157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add706d33115b%3A0x6b1b0043205dfc9d!2zMTAwINCg0LXQvdGC0LPQtdC9!5e0!3m2!1sru!2sua!4v1680122584796!5m2!1sru!2sua",
    },
    {
      cardClass: "pubs-dobryidrug",
      cardTitle: "Паб Добрий друг",
      cardImage: { src: DobryiDrug, alt: "Добрий друг" },
      cardDescription:
        "Рустикальний паб із терасою в самому центрі Львова, де подають величезні порції домашньої їжі, а також пиво, сидр, коктейлі і хороший настрій.Все крафтове та живе. Пивний годинник, схеми пивоваріння.",
      workTime: "  🍺Bar. ⏱12:00 - 23:00.",
      cardNumber: " +380 (50) 537 1246.",
      cardAddress:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.924620258218!2d24.028178276619027!3d49.84387387148275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6d5d9c4531%3A0x45f947dbf8fcc596!2z0JTQvtCx0YDRi9C5INCU0YDRg9Cz!5e0!3m2!1sru!2sua!4v1680122756430!5m2!1sru!2sua",
    },
  ];

  return (
    <div className="main-page-restaurant-section">
      <p className="main-page-restaurant-text-description">
        Для любителів пива та “чогось алкогольного”, мандрівка до Львова – це
        майже як паломництво. У місті є чимало барів, що спеціалізуються на
        смачному крафтовому пиві і вишуканих настоянках. Йде пильне стеження не
        лише за якістю самого пива, а й за належним функціонуванням всієї
        системи — пиво оживає лише у твоєму бокалі.
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
