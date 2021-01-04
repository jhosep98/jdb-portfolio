import React from "react";
import board from "../assets/img/Board.png";
import todo from "../assets/img/todo.png";
import weather from "../assets/img/weather.png";
import effects from "../assets/img/effects.png";
import brb from "../assets/img/brb.png";
import login from "../assets/img/login.png";

type ProjectItemProps = {
  image: string;
  title: string;
  view: string;
  code: string;
};

export const Projects = () => {
  return (
    <section className="projects">
      <h2>Portfolio</h2>
      <p>My works</p>
      <div className="projects__container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          accusamus necessitatibus odit autem dicta recusandae? Delectus, quod
          accusantium doloremque dignissimos minus quo voluptas reprehenderit
          fuga! Rem minima aperiam sit dignissimos?
        </p>
        <ProjectItem
          image={board}
          title="Drawing Board"
          view="https://jhosep98.github.io/jdbsPaint-con-Reactjs/"
          code="https://github.com/jhosep98/jdbsPaint-con-Reactjs"
        />
        <ProjectItem
          image={todo}
          title="To-do App"
          view="https://jhosep98.github.io/jdb-todo-typescript/"
          code="https://github.com/jhosep98/jdb-todo-typescript"
        />
        <ProjectItem
          image={weather}
          title="Weather App"
          view="https://jhosep98.github.io/the-weather-search/"
          code="https://github.com/jhosep98/the-weather-search"
        />
        <ProjectItem
          image={effects}
          title="Image Effects"
          view="https://jhosep98.github.io/effects-for-images/"
          code="https://github.com/jhosep98/effects-for-images"
        />
        <ProjectItem
          image={brb}
          title="Breaking Bad Quotes"
          view="https://jhosep98.github.io/breaking-bad-characters/"
          code="https://github.com/jhosep98/breaking-bad-characters"
        />
        <ProjectItem
          image={login}
          title="Login landing page"
          view="https://jhosep98.github.io/login_example/"
          code="https://github.com/jhosep98/login_example"
        />
      </div>
    </section>
  );
};

const ProjectItem = ({ image, title, view, code }: ProjectItemProps) => {
  return (
    <div className="container">
      <img src={image} alt="Avatar" className="image" />
      <div className="overlay">
        <div className="text">
          {title}
          <div className="icons">
            <div title="view live version">
              <a href={view} target="_blank">
                <i className="fa fa-eye"></i>
              </a>
            </div>
            <div title="view on github">
              <a href={code} target="_blank">
                <i className="fa fa-code"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
