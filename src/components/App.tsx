import React from "react";
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
        textButton="Know me"
      />
    </>
  );
};
