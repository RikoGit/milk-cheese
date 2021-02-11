import React from "react";

import CartList from "../CartList/index.jsx";
import Header from "../Header/index.jsx";
// import Payment from "../Payment/index.jsx";
import styles from "./styles.scss";

const Cart = ({
  cards,
  address,
  addCardInCart,
  deleteCardInCart,
  clearAddress,
  onChange,
}) => (
  <div className={styles.root}>
    <Header type="cart" />
    <CartList
      cards={cards}
      address={address}
      addCardInCart={addCardInCart}
      deleteCardInCart={deleteCardInCart}
      clearAddress={clearAddress}
      onChange={onChange}
    />
    {/* <Payment /> */}
  </div>
);

export default Cart;
