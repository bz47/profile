import React from "react";
import styles from "../../src/Professional.module.css";

function Professional() {
  const skills = [
    "HTML5",
    "CSS3",
    "JS",
    "React",
    "Redux",
    "Node",
    "VS Code",
    "GitHub",
    "Mocha",
    "Jest",
    "Enzyme",
  ];

  return (
    <div className={styles.background}>
      <div className={styles.text}>
        <h2 className={styles.ex}>Experience</h2>
        <p className={styles.desc}>
          My web dev journey began in August 2022! While teaching students
          English online, a few of my students who happen to be developers
          themselves recommended I look into coding as they thought I would
          enjoy it. So, I decided to give coding a try and I signed up for
          CodeCademy's Professional Frontend Development course. Since signing
          up for the course, I've spent about 20-25 hrs per week coding and
          completed about 20 personal projects.
          {<br></br>}
          {<br></br>}Having recently completed my Frontend Development course, I
          now hope to take my frontend skills to the next level by getting a
          job, starting an internship or doing some freelance work.
        </p>
      </div>
      <div className={styles.skills}>
        {skills.map((skill) => (
          <h2 className={styles.tags}>{skill} </h2>
        ))}
      </div>
    </div>
  );
}

export default Professional;
