import React from "react";
import styles from "../../src/Header.module.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Main from "./Main";

function Header() {
  const nav = useNavigate();

  const home = () => {
    return nav("/");
  };

  return (
    <nav className={styles.background}>
      <div className={styles.side1}>
        <p className="material-symbols-outlined">
          <Link to="/">Forest</Link>
        </p>
        Brandon Releford
      </div>
      <ul className={styles.side2}>
        <li className={styles.buttons}>
          <NavLink exact to="../Projects">
            Projects
          </NavLink>
        </li>
        <li className={styles.buttons}>
          <NavLink exact to="../Personal">
            Personal
          </NavLink>
        </li>
        <li className={styles.buttons}>
          <a
            href="https://www.linkedin.com/in/brele2023/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className={styles.buttons}>
          <NavLink exact to="../Contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
