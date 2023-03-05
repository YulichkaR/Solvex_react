import React from "react";

export const BestLvivPlaces = () => {
  return (
    <div className="best-lviv-places">
      <h2 className="best-lviv-places__title">Найкращі Заклади Львова</h2>
      <div className="best-lviv-places-images">
        <div className="best-lviv-places-restaurant-image best-lviv-places-three-images">
          <p className="best-lviv-places-restaurant__text best-lviv-places-three-texts">
            Ресторани
          </p>
        </div>
        <div className="best-lviv-places-hookahs-image best-lviv-places-three-images">
          <p className="best-lviv-places-hookahs__text best-lviv-places-three-texts">
            Кальянні
          </p>
        </div>
        <div className="best-lviv-places-pubs-image best-lviv-places-three-images">
          <p className="best-lviv-places-pubs__text best-lviv-places-three-texts">
            Паби
          </p>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};
