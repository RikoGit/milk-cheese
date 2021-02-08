import React from "react";

import Card from "../Card/index.jsx";
import styles from "./styles.scss";

const CartList = ({ cards, addCardInCart, deleteCardInCart }) => {
  return (
    <div className={styles.root}>
      <div className={styles.count}>
        {cards.filter((card) => card.countInCart > 0).length} items(?)
      </div>
      {cards.map(
        (card) =>
          card.countInCart > 0 && (
            <Card
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
