import React from "react";
import styles from "../../src/Contact.module.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

function Contact() {
  const nav = useNavigate();

  const home = () => {
    return nav("/");
  };
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>Contact</h1>
        <div className={styles.info}>
          <h2>Email Address: bezsworldtour@gmail.com </h2>
          <h2>GitHub: github.com/bz74</h2>
        </div>
        <button onClick={() => home()}>Home</button>
      </div>
    </div>
  );
}

export default Contact;
