import React from "react";

import { STREET, FLOOR, FLAT, BLOCK } from "../../constants.js";
import styles from "./styles.scss";

const DeliveryAddressForm = ({ address, onChange, clearAddress }) => (
  <section className={styles.root}>
    <h3 className={styles.title}>Delivery address</h3>
    <button
      className={styles.clear}
      type="button"
      title="Очистить"
      onClick={clearAddress}
    >
      {" "}
    </button>
    <div className={styles.form}>
      <div className={styles.address}>
        <input
          placeholder={STREET}
          value={address[STREET]}
          onChange={() => onChange(STREET, event.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.address}>
        <input
          placeholder={FLAT}
          value={address[FLAT]}
          onChange={() => onChange(FLAT, event.target.value)}
          className={styles.input}
        />
        <input
          placeholder={FLOOR}
          value={address[FLOOR]}
          onChange={() => onChange(FLOOR, event.target.value)}
          className={styles.input}
        />
        <input
          placeholder={BLOCK}
          value={address[BLOCK]}
          onChange={() => onChange(BLOCK, event.target.value)}
          className={styles.input}
        />
      </div>
    </div>
  </section>
);

export default DeliveryAddressForm;
