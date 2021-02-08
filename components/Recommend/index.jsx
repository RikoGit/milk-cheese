import React from "react";

import Card from "../Card/index.jsx";
import styles from "./styles.scss";

const Recommend = ({ cards, currentCard }) => {
  const recommendCards = cards.filter(
    (card) => card.group === currentCard.group && card !== currentCard
  );

  return (
    recommendCards.length > 0 && (
      <div className={styles.root}>
        <h3 className={styles.header}>Buy with this product</h3>
        <ul className={styles.list}>
          {recommendCards.map((recommendCard) => (
            <li className={styles.item}>
              <Card card={recommendCard} />
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default Recommend;
