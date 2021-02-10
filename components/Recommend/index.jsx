import React from "react";

import Card from "../Card/index.jsx";
import styles from "./styles.scss";

const Recommend = ({ cards, currentCard, addCardInCart, deleteCardInCart }) => {
  const recommendCards = cards.filter(
    (card) => card.group === currentCard.group && card !== currentCard
  );

  return (
    recommendCards.length > 0 && (
      <div className={styles.root}>
        <h3 className={styles.header}>Buy with this product</h3>
        <div className={styles.container}>
          <ul className={styles.list}>
            {recommendCards.map((recommendCard) => (
              <li className={styles.item}>
                <Card
                  type="recommend"
                  card={recommendCard}
                  addCardInCart={addCardInCart}
                  deleteCardInCart={deleteCardInCart}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default Recommend;
