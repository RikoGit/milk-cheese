import React from "react";
import cn from "classnames";

import styles from "./styles.scss";

const DeliveryAddressField = ({ name, value, onChange, text }) => (
  <label
    className={
      value.trim() !== "" ? cn(styles.root, styles.root_filled) : styles.root
    }
  >
    <input
      value={value}
      onChange={(event) => onChange(name, event.target.value)}
      className={styles.input}
    />
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{text}</legend>
    </fieldset>
  </label>
);

export default DeliveryAddressField;
