import React from "react";
import { Card } from "./Card";
import SecretBar from "../../../../img/SecretBar.png";
import HashTag from "../../../../img/HashTag.png";
import LoungeBar from "../../../../img/LoungeBar.png";

export const HookahsCards = () => {
  const HookahsCards = [
    {
      cardClass: "hookah-secret-bar",
      cardTitle: "Secret Bar Lviv",
      cardImage: { src: SecretBar, alt: "SecretBar" },
      cardDescription:
        "Атмосферний гастро лаунж бар у місті Лева. Інтер’єр закладу виконано в рожевих неонах і теплих тонах. Заклад має відкриту кальянну зону – гості можуть самостійно обрати чашу, апарат, смак тютюну та поспостерігати за процесом приготування кальяну.",
      workTime: "🍸Cocktail bar. ⏱14:00 - 23:00.  ",
      cardNumber: "+380 (96) 996 9062.",
      cardAddress:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.191939343111!2d24.024127115984232!3d49.838850939123745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add71ab53e345%3A0xd5d57d4acdd9041a!2sSecret%20Bar%20Lviv!5e0!3m2!1suk!2sua!4v1678030855514!5m2!1suk!2sua",
    },
    {
      cardClass: "hookah-hash-tag",
      cardTitle: "Hash Tag",
      cardImage: { src: HashTag, alt: "HashTag" },
      cardDescription:
        "Душевне місце з затишною і приємною атмосферою, димними кальянами, баром і кухнею. Кальян-бар розташувався на вулиці Галицькій у самому центрі Львова. Одна з візитних карток закладу – кальяни: класика, авторські, екстремальні.",
      workTime: "🍸Cocktail bar. ⏱11:00 - 23:00.",
      cardNumber: "+380 (98) 922 5209.",
      cardAddress:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.1622862889644!2d24.029242915984135!3d49.83940813908398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6e9de0e7e1%3A0x8ab3c770d1b7b9e1!2z0KXQtdGI0YLQtdCz!5e0!3m2!1suk!2sua!4v1678030914542!5m2!1suk!2sua",
    },
    {
      cardClass: "hookah-filin-lounge-bar",
      cardTitle: "FILIN LOUNGE BAR",
      cardImage: { src: LoungeBar, alt: "LoungeBar" },
      cardDescription:
        "Атмосферний, сучасний заклад що знаходиться у центрі міста та здатен перевернути вашу думку про ідеальний відпочинок! Меню що здатне здивувати навіть гурманів, велика коктейльна карта та надзвичайно димні та смачні кальяни. Все це та набагато більше у FILIN Lounge Bar. ",
      workTime: "🍸Cocktail bar. ⏱12:00 - 23:00. ",
      cardNumber: "+380 (93) 360 2486",
      cardAddress:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.111771229305!2d24.021516815984228!3d49.84035733901616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473addd37dc6902b%3A0x9d73a25294b35f92!2sFILIN%20lounge%20bar!5e0!3m2!1suk!2sua!4v1678030960653!5m2!1suk!2sua",
    },
  ];

  return (
    <div className="main-page-hoohaks-section">
      <p className="main-page-restaurant-text-description">
        П’янкий ароматний дим, дрібка кислинки, м’яти та солоденького – кальян –
        це завжди гарна ідея. Львів пропонує безліч варіантів: від класики до
        неймовірних технологічних новинок. Смачні страви американської та
        європейської кухонь, напої, трансляція спортивних матчів, святкування
        урочистих подій.
      </p>
      <div className="main-page-three-cards-of-restaurants">
        {HookahsCards.map((card) => {
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
