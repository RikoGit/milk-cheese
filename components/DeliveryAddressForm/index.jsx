import React from "react";

import { STREET, FLOOR, FLAT, BLOCK } from "../../constants.js";
import Button from "../Button/index.jsx";
import DeliveryAddressField from "../DeliveryAddressField/index.jsx";
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
      <div className={styles.fields}>
        <DeliveryAddressField
          name={STREET}
          value={address[STREET]}
          onChange={onChange}
          text="Street"
        />
      </div>
      <div className={styles.fields}>
        <DeliveryAddressField
          name={FLAT}
          value={address[FLAT]}
          onChange={onChange}
          text="Flat"
        />
        <DeliveryAddressField
          name={FLOOR}
          value={address[FLOOR]}
          onChange={onChange}
          text="Floor"
        />

        <DeliveryAddressField
          name={BLOCK}
          value={address[BLOCK]}
          onChange={onChange}
          text="Block"
        />
      </div>
    </div>
  </section>
);

export default DeliveryAddressForm;
