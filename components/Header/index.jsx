import React from "react";
import { Link } from "react-router-dom";

import { PATH } from "../../constants.js";
import styles from "./styles.scss";

const Header = ({ type }) => (
  <header className={styles.header}>
    {type === "product" && (
      <Link to={`/${PATH}`} className={styles.back}>
        {" "}
      </Link>
    )}
    <h2 className={styles.title}>{type === "cart" ? "Cart" : "Milk-Cheese"}</h2>
  </header>
);

export default Header;
