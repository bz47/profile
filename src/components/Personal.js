import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import styles from "../../src/Personal.module.css";

function Personal() {
  const nav = useNavigate();

  const home = () => {
    return nav("/");
  };

  return (
    <>
      <Header />
      <h1>Personal</h1>
      <div className={styles.container}>
        <div className={styles.about}>
          <div className={styles.cards}></div>
          <div className={styles.cards}></div>
          <div className={styles.cards}>
            <h2></h2>
          </div>
        </div>
        <button onClick={() => home()}>Home</button>
      </div>
    </>
  );
}

export default Personal;
