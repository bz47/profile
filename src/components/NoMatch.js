import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function NoMatch() {
  const nav = useNavigate();

  const home = () => {
    return nav("/");
  };

  return (
    <div>
      <h1>No Match Found</h1>
      <button onClick={home}>Home</button>
    </div>
  );
}

export default NoMatch;
