import React from "react";

import htmlSvg from "../assets/img/svg/skills/html.svg";
import cssSvg from "../assets/img/svg/skills/css.svg";
import javascriptSvg from "../assets/img/svg/skills/javascript.svg";
import reactSvg from "../assets/img/svg/skills/react.svg";
import nodeSvg from "../assets/img/svg/skills/nodejs.svg";
import typescriptSvg from "../assets/img/svg/skills/typescript.svg";
import sassSvg from "../assets/img/svg/skills/sass.svg";

type skillsProps = {
  title: string;
  subtitle: string;
  description: string;
};

export const Skills = ({ title, subtitle, description }: skillsProps) => {
  return (
    <section className="skills" id="skills">
      <div className="skills__title">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="skills__container">
        <p>{description}</p>
        <ul>
          <ItemSkill image={htmlSvg} description="html" />
          <ItemSkill image={cssSvg} description="css" />
          <ItemSkill image={javascriptSvg} description="javascript" />
          <ItemSkill image={reactSvg} description="reactjs" />
          <ItemSkill image={nodeSvg} description="nodejs" />
          <ItemSkill image={typescriptSvg} description="typescript" />
          <ItemSkill image={sassSvg} description="sass" />
        </ul>
      </div>
    </section>
  );
};

type ItemProps = {
  image: string;
  description: string;
};

const ItemSkill = ({ image, description }: ItemProps) => {
  return (
    <li>
      <img src={image} alt={description} />
    </li>
  );
};
