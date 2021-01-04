import React from "react";
import jhosep from "../assets/img/jhosep.jpg";

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
        <div className="container">
          <img src={jhosep} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text">Hello World</div>
          </div>
        </div>
        <div className="container">
          <img src={jhosep} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text">Hello World</div>
          </div>
        </div>
        <div className="container">
          <img src={jhosep} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text">Hello World</div>
          </div>
        </div>
        <div className="container">
          <img src={jhosep} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text">Hello World</div>
          </div>
        </div>
        <div className="container">
          <img src={jhosep} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text">Hello World</div>
          </div>
        </div>
        <div className="container">
          <img src={jhosep} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text">Hello World</div>
          </div>
        </div>
        <div className="container">
          <img src={jhosep} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text">Hello World</div>
          </div>
        </div>
        <div className="container">
          <img src={jhosep} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text">Hello World</div>
          </div>
        </div>
        <div className="container">
          <img src={jhosep} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text">Hello World</div>
          </div>
        </div>
      </div>
    </section>
  );
};
