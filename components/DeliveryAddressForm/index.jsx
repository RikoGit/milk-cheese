import React from "react";
import cn from "classnames";

import { STREET, FLOOR, FLAT, BLOCK } from "../../constants.js";
import Button from "../Button/index.jsx";
import Icon from "../Icon/index.jsx";
import styles from "./styles.scss";

const DeliveryAddressForm = ({ address, onChange, clearAddress }) => (
  <section className={styles.root}>
    <h3 className={styles.title}>Delivery address</h3>
    <div className={styles.clear}>
      <Button title="Очистить" onClick={clearAddress}>
        <Icon icon="delete" size={22} />
      </Button>
    </div>
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
            onChange={(event) => onChange(STREET, event.target.value)}
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
            onChange={(event) => onChange(FLAT, event.target.value)}
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
            onChange={(event) => onChange(FLOOR, event.target.value)}
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
            onChange={(event) => onChange(BLOCK, event.target.value)}
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
