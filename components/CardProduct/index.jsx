import React from "react";

import Card from "../Card/index.jsx";
// import Description from "../Description/index.jsx";
import Header from "../Header/index.jsx";
import Recommend from "../Recommend/index.jsx";
import styles from "./styles.scss";

const CardProduct = ({
  cards,
  card,
  addCardInCart,
  deleteCardInCart,
  setFavorites,
}) => (
  <div className={styles.root}>
    <Header type="product" />
    <Card
      card={card}
      addCardInCart={addCardInCart}
      deleteCardInCart={deleteCardInCart}
      setFavorites={setFavorites}
    />
    <Recommend
      cards={cards}
      currentCard={card}
      addCardInCart={addCardInCart}
      deleteCardInCart={deleteCardInCart}
      setFavorites={setFavorites}
    />
    {/* <Description card={card} /> */}
  </div>
);

export default CardProduct;
