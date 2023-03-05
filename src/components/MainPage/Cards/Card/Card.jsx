import React from "react";
export const Card = ({
  cardClass,
  cardTitle,
  cardImage,
  cardDescription,
  workTime,
  cardNumber,
  cardAddress,
}) => {
  return (
    <div className={`main-page-card ${cardClass}`}>
      <h2 className="main-page-card-title">{cardTitle}</h2>
      <img
        src={cardImage.src}
        alt={cardImage.alt}
        className="main-page-card-image"
      />
      <p className="main-page-card-description">{cardDescription}</p>
      <p className="main-page-card-worktime">{workTime}</p>
      <a href="tel:${cardnumber}" className="main-page-card-phone">
        Бронь: {cardNumber}
      </a>
      <iframe src={cardAddress} className="main-page-card-map" />
    </div>
  );
};
