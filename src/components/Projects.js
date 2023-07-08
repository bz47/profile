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
            <div className={styles.img1}></div>
            <div className={styles.holder}>
              <h3 className={styles.title}>Whatsapp CopyCat</h3>
              <p className={styles.desc}>
                An attempt at recreating the Whatsapp website
              </p>
              <a
                href="https://whatsappcopycat.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Whatsapp App
              </a>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.img2}></div>
            <div className={styles.holder}>
              <h3 className={styles.title}>JS Calculator</h3>
              <p className={styles.desc}>
                Project to practice connecting JS to HTML
              </p>
              <a
                href="https://bz-js-calculator.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                JS Calculator App
              </a>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.img3}></div>
            <div className={styles.holder}>
              <h3 className={styles.title}>Piano Copycat</h3>
              <p className={styles.desc}> Remake of a piano on CodeCademy</p>
              <a
                href="https://bz-piano-copycat.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Piano
              </a>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.img4}></div>
            <div className={styles.holder}>
              <h3 className={styles.title}>Weather App</h3>
              <p className={styles.desc}>
                Practice w GET request and JSON data
              </p>
              <a
                href="https://bz-weather.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Weather App
              </a>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.img5}></div>
            <div className={styles.holder}>
              <h3 className={styles.title}>Color Generator</h3>
              <p className={styles.desc}> JS function practice.</p>
              <a
                href="https://github.com/bz47/color-generator.git"
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
