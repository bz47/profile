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
      <h1 className={styles.personal}>Personal</h1>
      <div className={styles.container}>
        <div className={styles.about}>
          <div className={styles.cards}>
            <div className={styles.adjust}>
              <h1 className={styles.theme}>Interests</h1>
            </div>
            <ul className={styles.ul}>
              <li className={styles.li}>Environmental Conservation</li>
              <li className={styles.li}>AI</li>
              <li className={styles.li}>Language and Culture</li>
              <li className={styles.li}>Science</li>
            </ul>
          </div>
          <div className={styles.cards}>
            <div className={styles.adjust}>
              <h1 className={styles.theme}>Goals</h1>
            </div>
            <ul>
              <li className={styles.li}>Become Fullstack Developer</li>
              <li className={styles.li}>Start Permaculture Farm</li>
              <li className={styles.li}>Keep Mentally and Emotionally Fit</li>
              <li className={styles.li}>
                Become conversational in 5 languages
              </li>
            </ul>
          </div>
          <div className={styles.cards}>
            <div className={styles.adjust}>
              <h1 className={styles.theme}>Hobbies</h1>
            </div>{" "}
            <ul>
              <li className={styles.li}>Coding</li>
              <li className={styles.li}>Playing Guitar</li>
              <li className={styles.li}>Exercising</li>
              <li className={styles.li}>Reading</li>
            </ul>
          </div>
        </div>
        <button onClick={() => home()}>Home</button>
      </div>
    </>
  );
}

export default Personal;
