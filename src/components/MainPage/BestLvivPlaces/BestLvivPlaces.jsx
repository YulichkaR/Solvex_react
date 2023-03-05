import React from "react";
import Restaurants from "../../../img/Rectangle3.png";
import Hookahs from "../../../img/Rectangle4.png";
import Pubs from "../../../img/Rectangle5.png";

export const BestLvivPlaces = () => {
  return (
    <div className="best-lviv-places">
      <h2 className="best-lviv-places__title">Найкращі Заклади Львова</h2>
      <div className="best-lviv-places-images">
        <div className="best-lviv-places-restaurant-image best-lviv-places-three">
          <p className="best-lviv-places-restaurant__text">Ресторани</p>
        </div>
        <div className="best-lviv-places-hookahs-image best-lviv-places-three">
          <p className="best-lviv-places-hookahs__text">Кальянні</p>
        </div>
        <div className="best-lviv-places-pubs-image best-lviv-places-three">
          <p className="best-lviv-places-pubs__text">Паби</p>
        </div>
      </div>
    </div>
  );
};
