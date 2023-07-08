import React from "react";
import styles from "../../src/Main.module.css";
import Banner from "./Banner";
import Professional from "./Professional";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function Main() {
  const nav = useNavigate();

  const back = () => {
    return nav(-1);
  };

  const forward = () => {
    return nav(+1);
  };
  return (
    <>
      <Header />
      <div className={styles.background}>
        <Banner />
        <Professional />
      </div>
    </>
  );
}

export default Main;
