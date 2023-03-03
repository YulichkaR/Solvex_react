import React from "react";
export const Header = () => {
  return (
    <header className="background-for-page-about-us">
      <div className="navbar">
        <div>
          <p className="logo-name">Solvex</p>
        </div>
        <nav>
          <div>
            <ul>
              <li>
                <a href="#">Головна</a>
              </li>
              <li>
                <a href="#">Ресторани</a>
              </li>
              <li>
                <a href="#">Кальянні</a>
              </li>
              <li>
                <a href="#">Паби</a>
              </li>
              <li>
                <a href="#">Про нас</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <h1 className="header-text"> Знайди своє місце</h1>
      <p className="header-subtext">
        Проєкт, покликаний зробити твій вечір затишним
      </p>
    </header>
  );
};
