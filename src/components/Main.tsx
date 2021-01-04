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
        subtitle="Front-end Developer"
        paragraphSubtitle="My name is Joseph Davila and I am a front-end developer,self-taught, passionate about the web and I have experience in freelance web development."
        textButton="Donwload cv"
        data={{
          email: "jhosepdb149@gmail.com",
          city: "Buenos Aires, Argentina",
          age: "29 April 1998",
          name: "Jhosep Davila Bustamante",
        }}
      />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};
