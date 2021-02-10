import React from "react";

import styles from "./styles.scss";

const About = () => (
  <div className={styles.root}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <a href="#nutrition" className={styles.link}>
          Nutrition
        </a>
      </li>
      <li className={styles.item}>
        <a href="#ingredients" className={styles.link}>
          Ingredients
        </a>
      </li>
      <li className={styles.item}>
        <a href="#other" className={styles.link}>
          Other
        </a>
      </li>
    </ul>
  </div>
);

export default About;
