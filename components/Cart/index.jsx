import React from "react";

import CartList from "../CartList/index.jsx";
import Header from "../Header/index.jsx";
// import Payment from "../Payment/index.jsx";
import styles from "./styles.scss";

const Cart = ({ cards, addCardInCart, deleteCardInCart }) => (
  <div className={styles.root}>
    <Header title="Cart" />
    <CartList
      cards={cards}
      addCardInCart={addCardInCart}
      deleteCardInCart={deleteCardInCart}
    />
    {/* <Payment /> */}
  </div>
);

export default Cart;
