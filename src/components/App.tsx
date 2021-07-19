import React from "react";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { NavBar } from "./NavBar";

export const App = () => {
  return (
    <>
      <NavBar
        title="Jhosep Davila"
        list={{
          home: "Home",
          about: "About",
          skills: "Skills",
          projects: "Projects",
          contact: "Contact",
        }}
        subtitle="Jhosep Davila"
        paragraph="Front-end Developer"
      />
      <Main />
      <Footer />
    </>
  );
};
