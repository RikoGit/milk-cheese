import React from "react";

import styles from "./styles.scss";

const Header = ({ title }) => (
  <header className={styles.header}>
    <h2 className={styles.title}>{title}</h2>
  </header>
);

export default Header;
