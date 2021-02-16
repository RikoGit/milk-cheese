import React from "react";

import styles from "./styles.scss";

const Button = ({ title = "", onClick, children = "" }) => (
  <button className={styles.root} type="button" onClick={onClick} title={title}>
    {children}
  </button>
);

export default Button;
