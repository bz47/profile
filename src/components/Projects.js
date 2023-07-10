import React from "react";
import styles from "../../src/Projects.module.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

function Projects() {
  const nav = useNavigate();

  const home = () => {
    return nav("/");
  };

  return (
    <>
      <Header />
      <div className={styles.background}>
        <h1>Projects</h1>
        <div className={styles.projects}>
          <div className={styles.cards}>
            <div className={styles.img2}></div>
            <div className={styles.holder}>
              <h3 className={styles.title}>JS Calculator</h3>
              <p className={styles.desc}>
                Project to practice connecting JS to HTML
              </p>
              <a
                className={styles.anchor}
                href="https://bz-js-calculator.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                JS Calculator App
              </a>
            </div>
          </div>

          <div className={styles.cards}>
            <div className={styles.img5}></div>
            <div className={styles.holder}>
              <h3 className={styles.title}>Color Generator</h3>
              <p className={styles.desc}> JS function practice.</p>
              <a
                className={styles.anchor}
                href="https://bz-colorz.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Color Generator App
              </a>
            </div>
          </div>
        </div>
        <button onClick={() => home()}>Home</button>
      </div>
    </>
  );
}

export default Projects;
