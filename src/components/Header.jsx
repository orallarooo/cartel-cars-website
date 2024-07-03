import logo from "../img/logo.svg";
import clock from "../img/clock.svg";
import vector_gold_bigger from "../img/vector-gold-bigger.svg";

import React, { useState } from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu  = () => {
        setIsOpen((open) => !open);
    }

  return (
    <header>
      <div className="container">
        <div className="header__inner">
          <button onClick={toggleMenu} className={`header-burger-btn ${isOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a href="#" className="header__logo">
            <img src={logo} alt="logo" />
          </a>
          <div className="header__clock">
            <img src={clock} alt="clock" />
            10:00 - 22:00
          </div>
          <div className={`header__nav nav-head ${isOpen ? "active" : ""}`}>
            <ul className="nav-head__ul">
              <li className="nav-head__li">
                <a href="#" className="nav-head__link">
                  Автопарк
                </a>
              </li>
              <li className="nav-head__li">
                <a href="#" className="nav-head__link">
                  Условия аренды
                </a>
              </li>
              <li className="nav-head__li">
                <a href="#" className="nav-head__link">
                  FAQ
                </a>
              </li>
            </ul>
            <a href="#" className="nav__prime-link">
              <p>БЫСТРАЯ БРОНЬ</p>
              <img src={vector_gold_bigger} alt="vector" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
