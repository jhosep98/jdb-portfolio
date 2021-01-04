import React from "react";

import htmlSvg from "../assets/img/svg/skills/html.svg";
import cssSvg from "../assets/img/svg/skills/css.svg";
import javascriptSvg from "../assets/img/svg/skills/javascript.svg";
import reactSvg from "../assets/img/svg/skills/react.svg";
import nodeSvg from "../assets/img/svg/skills/nodejs.svg";
import typescriptSvg from "../assets/img/svg/skills/typescript.svg";
import sassSvg from "../assets/img/svg/skills/sass.svg";

export const Skills = () => {
  return (
    <section className="skills">
      <div className="skills__title">
        <h2>Skills</h2>
        <p>Skills technologys</p>
      </div>
      <div className="skills__container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iure
          officia excepturi sint. Cum qui velit modi, exercitationem iste alias,
          placeat dolorum, voluptas nulla itaque corporis? Ipsa quaerat nesciunt
          magnam?
        </p>
        <ul>
          <li>
            <img src={htmlSvg} alt="html" />
            <span>Hmtl</span>
          </li>
          <li>
            <img src={cssSvg} alt="linkedin" />
            <span>Css</span>
          </li>
          <li>
            <img src={javascriptSvg} alt="linkedin" />
            <span>Javascript</span>
          </li>
          <li>
            <img src={reactSvg} alt="linkedin" />
            <span>Reactjs</span>
          </li>
          <li>
            <img src={nodeSvg} alt="linkedin" />
            <span>Nodejs</span>
          </li>
          <li>
            <img src={typescriptSvg} alt="linkedin" />
            <span>Typescript</span>
          </li>
          <li>
            <img src={sassSvg} alt="linkedin" />
            <span>Sass</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
