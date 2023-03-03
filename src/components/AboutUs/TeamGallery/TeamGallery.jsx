import React from "react";
import Julia from "../../../img/image-7.png";
import Solomia from "../../../img/image-6.png";
import Nazar from "../../../img/image-16.png";
import Valeryi from "../../../img/image-8.png";
import Sofia from "../../../img/image-10.png";
import Sviatoslav from "../../../img/image-9.png";

export const TeamGallery = () => {
  return (
    <div className="gallery__block">
      <ul className="photo__list">
        <li className="photo-list-element">
          <div className="title__block">
            <h2 className="list__title">Solvex</h2>
          </div>
        </li>
        <li className="photo-list-element">
          <img src={Julia} className="list__image" alt="Yulia" />
        </li>
        <li className="photo-list-element">
          <div className="title__block">
            <h2 className="list__title">Project</h2>
          </div>
        </li>
        <li className="photo-list-element">
          <img src={Solomia} className="list__image" alt="Solomia" />
        </li>
        <li className="photo-list-element">
          <div className="title__block">
            <h2 className="list__title">Знайди своє місце</h2>
          </div>
        </li>
        <li className="photo-list-element">
          <img src={Valeryi} className="list__image" alt="Valeriy" />
        </li>
        <li className="photo-list-element">
          <img src={Sviatoslav} className="list__image" alt="Sviatoslav" />
        </li>
        <li className="photo-list-element">
          <img src={Nazar} className="list__image" alt="Nazar" />
        </li>
        <li className="photo-list-element">
          <img src={Sofia} className="list__image" alt="Sofia" />
        </li>
      </ul>
    </div>
  );
};
