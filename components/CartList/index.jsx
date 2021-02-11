import React from "react";
import pluralize from "pluralize";

import Card from "../Card/index.jsx";
import DeliveryAddressForm from "../DeliveryAddressForm/index.jsx";
import styles from "./styles.scss";

const CartList = ({
  cards,
  address,
  addCardInCart,
  deleteCardInCart,
  clearAddress,
  onChange,
}) => {
  const count = cards.filter((card) => card.countInCart > 0).length;

  return (
    <div className={styles.root}>
      <DeliveryAddressForm
        address={address}
        onChange={onChange}
        clearAddress={clearAddress}
      />
      <div className={styles.count}>{pluralize("item", count, true)}</div>
      {cards.map(
        (card) =>
          card.countInCart > 0 && (
            <Card
              type="horizontal"
              card={card}
              addCardInCart={addCardInCart}
              deleteCardInCart={deleteCardInCart}
            />
          )
      )}
    </div>
  );
};

export default CartList;
