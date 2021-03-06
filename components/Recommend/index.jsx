import React from "react";

import Card from "../Card/index.jsx";
import styles from "./styles.scss";

const Recommend = ({
  cards,
  currentCard,
  addCardInCart,
  deleteCardInCart,
  setFavorites,
}) => {
  const recommendCards = cards.filter(
    (card) => card.group === currentCard.group && card !== currentCard
  );

  return (
    recommendCards.length > 0 && (
      <section className={styles.root}>
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
                  setFavorites={setFavorites}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  );
};

export default Recommend;
