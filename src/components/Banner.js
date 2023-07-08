import React from "react";
import styles from "../../src/Banner.module.css";

function Banner() {
  return (
    <div className={styles.background}>
      <div className={styles.me}></div>
      <div className={styles.text}>
        <h2 className={styles.hello}>Well Hello!</h2>
        <p className={styles.intro}>
          Driven by dreams and seting goals to realize them, I find myself on a
          journey characterized by growth, learning and evolution. I'm curious
          to see what all I'm capable of!
          {<br></br>}
          {<br></br>}
          If you're interested in learning more about me or would like to
          collaborate on a project don't hesitate to reach out!
        </p>
      </div>
    </div>
  );
}

export default Banner;
