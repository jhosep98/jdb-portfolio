import React, { useRef } from "react";
import jhosep from "../assets/img/jhosep.jpg";

export const NavBar = () => {

  const menuRef = useRef<HTMLUListElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    if (menuRef && menuRef.current && navRef && navRef.current) {
      menuRef.current.classList.toggle("active");
      navRef.current.classList.toggle("active");
    }
  };

  return (
    <header className="header">
      <nav className="header__navbar">
        <div className="header__container">
          <img src={jhosep} alt="jhosep davila" className="header__profile" />
          <h1 className="header__title">Jhosep Davila</h1>
        </div>
        <ul id="menu" ref={menuRef}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div
          className="header__responsive"
          ref={navRef}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <div className="header__hero">
        <div>
          <h2 className="header__subtitle"> Jhosep Davila </h2>
          <p className="header__parrafo">Front-end Developer</p>
          <button className="header__button">Know me</button>
        </div>
      </div>
    </header>
  );
};
