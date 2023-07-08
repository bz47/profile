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
            <div className={styles.img}>
              <img src="/Users/brandonreleford/Desktop/DevProjects/reactApps/profile/public/Screenshot.png" />
            </div>
            <div className={styles.holder}>
              <h3 className={styles.title}>Whatsapp CopyCat</h3>
              <p className={styles.desc}>
                {" "}
                An attempt at recreating the Whatsapp website
              </p>
              <a
                href="https://whatsappcopycat.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Netlify App
              </a>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.img}></div>
            <div className={styles.holder}>
              <h3 className={styles.title}>Netlify App</h3>
              <p className={styles.desc}> This is an app for netlify</p>
              <a
                href="https://github.com/bz47/netlifypracticeapp"
                target="_blank"
                rel="noreferrer"
              >
                Netlify App
              </a>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.img}></div>
            <div className={styles.holder}>
              <h3 className={styles.title}>Netlify App</h3>
              <p className={styles.desc}> This is an app for netlify</p>
              <a
                href="https://github.com/bz47/netlifypracticeapp"
                target="_blank"
                rel="noreferrer"
              >
                Netlify App
              </a>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.img}></div>
            <div className={styles.holder}>
              <h3 className={styles.title}>Netlify App</h3>
              <p className={styles.desc}> This is an app for netlify</p>
              <a
                href="https://github.com/bz47/netlifypracticeapp"
                target="_blank"
                rel="noreferrer"
              >
                Netlify App
              </a>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.img}></div>
            <div className={styles.holder}>
              <h3 className={styles.title}>Netlify App</h3>
              <p className={styles.desc}> This is an app for netlify</p>
              <a
                href="https://github.com/bz47/netlifypracticeapp"
                target="_blank"
                rel="noreferrer"
              >
                Netlify App
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
