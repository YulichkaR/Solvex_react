import React from "react";
import { Link } from "react-router-dom";
export const HeaderForThreePages = ({ photoToEachPage, titleThreePages }) => {
  return (
    <header className={`${photoToEachPage}`}>
      <div className="navbar">
        <div>
          <p className="logo-name">Solvex</p>
        </div>
        <nav>
          <div>
            <ul>
              <li>
                <Link to="/">Головна</Link>
              </li>
              <li>
                <Link to="/restaurant">Ресторани</Link>
              </li>
              <li>
                <Link to="/hookahs">Кальянні</Link>
              </li>
              <li>
                <Link to="/pubs">Паби</Link>
              </li>
              <li>
                <Link to="/aboutus">Про нас</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="header-for-three-pages">
        <h1 className="header-three-pages-text">{titleThreePages}</h1>
      </div>
    </header>
  );
};
