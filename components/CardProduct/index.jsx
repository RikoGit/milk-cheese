import React from "react";

import Card from "../Card/index.jsx";
import Description from "../Description/index.jsx";
import Recommend from "../Recommend/index.jsx";
import styles from "./styles.scss";

const CardProduct = ({ cards, card, addCardInCart, deleteCardInCart }) => (
  <div className={styles.root}>
    <header>
      <h2>Milk-Cheese</h2>
    </header>
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
    <Description card={card} />
  </div>
);

export default CardProduct;
