import React, { useRef } from "react";
import { fadeInDown } from "react-animations";
import styled, { keyframes } from "styled-components";

import jhosep from "../assets/img/jhosep.jpg";

type NavProps = {
  title: string;
  list: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  subtitle: string;
  paragraph: string;
  textButton: string;
};

const bounceAnimation = keyframes`${fadeInDown}`;

const BouncyDiv = styled.div`
  animation: 1.4s ${bounceAnimation};
`;

export const NavBar = ({
  title,
  list: { home, about, skills, projects, contact },
  subtitle,
  paragraph,
  textButton,
}: NavProps) => {
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
          <h1 className="header__title">{title}</h1>
        </div>
        <ul id="menu" ref={menuRef}>
          <li>
            <a href="#">{home}</a>
          </li>
          <li>
            <a href="#">{about}</a>
          </li>
          <li>
            <a href="#">{skills}</a>
          </li>
          <li>
            <a href="#">{projects}</a>
          </li>
          <li>
            <a href="#">{contact}</a>
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
        <BouncyDiv className="header__containerText">
          <h2 className="header__subtitle"> {subtitle} </h2>
          <p className="header__paragraph">{paragraph}</p>
          <button className="header__button">{textButton}</button>
        </BouncyDiv>
      </div>
    </header>
  );
};
