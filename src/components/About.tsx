import React from "react";
import jhosep from "../assets/img/jhosep.jpg";
import PdfFile from "../assets/docs/jhoset-davila-cv.pdf";
import { fadeInLeft } from "react-animations";
import { fadeInRight } from "react-animations";
import styled, { keyframes } from "styled-components";

const FadeInLeftDiv = keyframes`${fadeInLeft}`;
const FadeInRightDiv = keyframes`${fadeInRight}`;

const FadeInLeft = styled.div`
  animation: 1.1s ${FadeInLeftDiv};
`;
const FadeInRight = styled.div`
  animation: 1.1s ${FadeInRightDiv};
`;

type NavProps = {
  title: string;
  paragraph: string;
  subtitle: string;
  paragraphSubtitle: string;
  textButton: string;
  data: {
    email: string;
    city: string;
    age: number;
    freelance: string;
  };
};

export const About = ({
  title,
  paragraph,
  subtitle,
  paragraphSubtitle,
  textButton,
  data: { email, city, age, freelance },
}: NavProps) => {
  return (
    <section className="about">
      <div className="about__title">
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </div>
      <div className="about__row">
        <FadeInLeft className="about__image">
          <img src={jhosep} alt="jhosep" />
        </FadeInLeft>
        <FadeInRight className="about__description">
          <h3>{subtitle}</h3>
          <p>{paragraphSubtitle}</p>
          <div className="about__data">
            <div className="about__left">
              <ul>
                <li>
                  <p>
                    <i className="fa fa-user-circle-o"></i>
                    <span>{freelance}</span>
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa fa-google"></i>
                    <span>{email}</span>
                  </p>
                </li>
              </ul>
            </div>
            <div className="about__right">
              <ul>
                <li>
                  <p>
                    <i className="fa fa-birthday-cake"></i>
                    <span>{age}</span>
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa fa-map-marker"></i>
                    <span>{city}</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="about__social">
            <a className="btn" href={PdfFile} target="_blank">
              <i className="fa fa-user"></i>
              {textButton}
            </a>
          </div>
        </FadeInRight>
      </div>
    </section>
  );
};
