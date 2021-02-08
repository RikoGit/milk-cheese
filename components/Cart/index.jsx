import React from "react";

import CartList from "../CartList/index.jsx";
import Payment from "../Payment/index.jsx";
import styles from "./styles.scss";

const Cart = ({ cards, addCardInCart, deleteCardInCart }) => (
  <div className={styles.root}>
    <header>
      <h2>Cart</h2>
    </header>
    <CartList
      cards={cards}
      addCardInCart={addCardInCart}
      deleteCardInCart={deleteCardInCart}
    />
    <Payment />
  </div>
);

export default Cart;
