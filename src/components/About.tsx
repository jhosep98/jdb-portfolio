import React from "react";
import { fadeInRight } from "react-animations";
import styled, { keyframes } from "styled-components";

const FadeInRightDiv = keyframes`${fadeInRight}`;

const FadeInRight = styled.div`
  animation: 1.1s ${FadeInRightDiv};
`;

type NavProps = {
  title: string;
  paragraph: string;
  paragraphSubtitle: string;
  textButton: string;
  data: {
    email: string;
    city: string;
    age: string;
    name: string;
  };
};

export const About = ({
  title,
  paragraph,
  paragraphSubtitle,
  textButton,
  data: { email, city, age, name },
}: NavProps) => {
  return (
    <section className="about" id="about">
      <div className="about__title">
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </div>
      <div className="about__row">
        <FadeInRight className="about__description">
          <p>{paragraphSubtitle}</p>
          <div className="about__data">
            <div className="about__left">
              <ul>
                <li>
                  <p>
                    <i className="fa fa-user-circle-o"></i>
                    <span>{name}</span>
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
            <a
              className="btn"
              href="https://jhosep98.github.io/jhosep-cv/"
              target="_blank"
            >
              <i className="fa fa-user"></i>
              {textButton}
            </a>
          </div>
        </FadeInRight>
      </div>
    </section>
  );
};
