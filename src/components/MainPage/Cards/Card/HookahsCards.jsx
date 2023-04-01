import React from "react";
import { Card } from "./Card";
import SecretBar from "../../../../img/SecretBar.png";
import HashTag from "../../../../img/HashTag.png";
import LoungeBar from "../../../../img/LoungeBar.png";

export const HookahsCards = () => {
  const HookahsCards = [
    {
      cardClass: "hookahs-secretbar",
      cardTitle: "Secret Bar Lviv",
      cardImage: { src: SecretBar, alt: "SecretBar" },
      cardDescription:
        "Атмосферний гастро лаунж бар у місті Лева. Інтер’єр закладу виконано в рожевих неонах і теплих тонах. Заклад має відкриту кальянну зону – гості можуть самостійно обрати чашу, апарат, смак тютюну та поспостерігати за процесом приготування кальяну.",
      workTime: "🍸Cocktail bar. ⏱14:00 - 23:00.",
      cardNumber: "+380 (96) 996 9062.",
      cardAddress:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.1921238832338!2d24.02374087661875!3d49.83884747148183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add71ab53e345%3A0xd5d57d4acdd9041a!2sSecret%20Bar%20Lviv!5e0!3m2!1sru!2sua!4v1680119427921!5m2!1sru!2sua",
    },
    {
      cardClass: "hookahs-hashtag",
      cardTitle: "Hash Tag",
      cardImage: { src: HashTag, alt: "HashTag" },
      cardDescription:
        "Душевне місце з затишною і приємною атмосферою, димними кальянами, баром і кухнею. Кальян-бар розташувався на вулиці Галицькій у самому центрі Львова. Одна з візитних карток закладу – кальяни: класика, авторські, екстремальні.",
      workTime: "🍸Cocktail bar. ⏱11:00 - 23:00. ",
      cardNumber: " +380 (98) 922 5209.",
      cardAddress:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.160358065653!2d24.029091776618735!3d49.83944437148188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6e9de0e7e1%3A0x8ab3c770d1b7b9e1!2sHashtag%20Lounge%20%26%20Bar!5e0!3m2!1sru!2sua!4v1680119675642!5m2!1sru!2sua",
    },
    {
      cardClass: "hookahs-loungebar",
      cardTitle: "FILIN LOUNGE BAR",
      cardImage: { src: LoungeBar, alt: "FILIN LOUNGE BAR" },
      cardDescription:
        "Атмосферний, сучасний заклад що знаходиться у центрі міста та здатен перевернути вашу думку про ідеальний відпочинок! Меню що здатне здивувати навіть гурманів, велика коктейльна карта та надзвичайно димні та смачні кальяни. Більше диму - менше стресу",
      workTime: "🍸Cocktail bar. ⏱12:00 - 23:00. ",
      cardNumber: " +380 (93) 360 2486",
      cardAddress:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.111955767783!2d24.021130576618887!3d49.84035387148208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473addd37dc6902b%3A0x9d73a25294b35f92!2sFILIN%20lounge%20bar!5e0!3m2!1sru!2sua!4v1680119844005!5m2!1sru!2sua",
    },
  ];

  return (
    <div className="main-page-restaurant-section">
      <p className="main-page-restaurant-text-description">
        П’янкий ароматний дим, дрібка кислинки, м’яти та солоденького – кальян –
        це завжди гарна ідея. Львів пропонує безліч варіантів: від класики до
        неймовірних технологічних новинок. Смачні страви американської та
        європейської кухонь, напої, трансляція спортивних матчів, святкування
        урочистих подій. Настільні ігри, відеоігри, алкогольні та безалкогольні
        коктейлі.
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
