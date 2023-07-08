import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Projects from "./Projects/Projects";

function Root() {
  return (
    <div>
      <Header projects={Projects} />
      <Main />
    </div>
  );
}

export default Root;
