import React from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export const Main = () => {
  return (
    <main>
      <About
        title="About"
        paragraph="Learn more about me"
        paragraphSubtitle="My name is Joseph Davila and I am a front-end developer,self-taught, passionate about the web and I have experience in freelance web development."
        textButton="Donwload cv"
        data={{
          email: "jhosepdb149@gmail.com",
          city: "Buenos Aires, Argentina",
          age: "April, 29, 1998",
          name: "Jhosep Davila Bustamante",
        }}
      />
      <Skills
        title="Skills"
        subtitle="Technological skills"
        description="The main area of my expertise is front end development (client side of the web). HTML, CSS, JS (TypeScript), building small and medium web apps with ReactJS 1+, animations, and coding interactive layouts."
      />
      <Projects
        title="Portfolio"
        subtitle="My works"
        description="Here are a few design projects I've worked on recently."
      />
      <Contact
        title="contact"
        subtitle="contact me"
        map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.26495778574!2d-58.503509784803484!3d-34.61580363807845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1609606681545!5m2!1ses-419!2sar"
      />
    </main>
  );
};
