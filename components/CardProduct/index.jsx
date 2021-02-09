import React from "react";

import Card from "../Card/index.jsx";
// import Description from "../Description/index.jsx";
import Header from "../Header/index.jsx";
import Recommend from "../Recommend/index.jsx";
import styles from "./styles.scss";

const CardProduct = ({ cards, card, addCardInCart, deleteCardInCart }) => (
  <div className={styles.root}>
    <Header title="Milk-Cheese" />
    <Card
      type="product"
      card={card}
      addCardInCart={addCardInCart}
      deleteCardInCart={deleteCardInCart}
    />
    <Recommend
      cards={cards}
      currentCard={card}
      addCardInCart={addCardInCart}
      deleteCardInCart={deleteCardInCart}
    />
    {/* <Description card={card} /> */}
  </div>
);

export default CardProduct;
