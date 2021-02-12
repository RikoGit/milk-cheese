import React from "react";
import cn from "classnames";

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
        <label
          className={
            address[STREET].trim() !== ""
              ? cn(styles.label, styles.label_filled)
              : styles.label
          }
        >
          <input
            value={address[STREET]}
            onChange={() => onChange(STREET, event.target.value)}
            className={styles.input}
          />
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>{STREET}</legend>
          </fieldset>
        </label>
      </div>
      <div className={styles.address}>
        <label
          className={
            address[FLAT].trim() !== ""
              ? cn(styles.label, styles.label_filled)
              : styles.label
          }
        >
          <input
            value={address[FLAT]}
            onChange={() => onChange(FLAT, event.target.value)}
            className={styles.input}
          />
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>{FLAT}</legend>
          </fieldset>
        </label>
        <label
          className={
            address[FLOOR].trim() !== ""
              ? cn(styles.label, styles.label_filled)
              : styles.label
          }
        >
          <input
            value={address[FLOOR]}
            onChange={() => onChange(FLOOR, event.target.value)}
            className={styles.input}
          />
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>{FLOOR}</legend>
          </fieldset>
        </label>
        <label
          className={
            address[BLOCK].trim() !== ""
              ? cn(styles.label, styles.label_filled)
              : styles.label
          }
        >
          <input
            value={address[BLOCK]}
            onChange={() => onChange(BLOCK, event.target.value)}
            className={styles.input}
          />
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>{BLOCK}</legend>
          </fieldset>
        </label>
      </div>
    </div>
  </section>
);

export default DeliveryAddressForm;
