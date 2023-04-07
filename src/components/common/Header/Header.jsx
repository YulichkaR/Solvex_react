import React from "react";
import { Link } from "react-router-dom";

export const Header = ({ havingAPhoho = false, photoToEachPage = "" }) => {
  return (
    <header className={`${havingAPhoho && photoToEachPage}`}>
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
      {havingAPhoho && (
        <>
          <div className="main-header-for-all-pages">
            <h1 className="header-text">Знайди своє місце</h1>
            <p className="header-subtext">
              Проєкт, покликаний зробити твій вечір затишним
            </p>
          </div>
        </>
      )}
    </header>
  );
};
