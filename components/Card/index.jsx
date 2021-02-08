import React from "react";
import { Link } from "react-router-dom";

import { PATH } from "../../constants.js";
import styles from "./styles.scss";

const Card = ({ card, addCardInCart, deleteCardInCart }) => {
  const isInCart = Boolean(card.countInCart > 0);

  return (
    <div className={styles.root}>
      <Link to={`/${PATH}/${card.id}`} className={styles.link}>
        <div className={styles.title}>{card.title}</div>
      </Link>
      <div className={styles.price}>{card.price}</div>
      <Link to={`/${PATH}/${card.id}`} className={styles.link}>
        <div className={styles.image}>
          <img src={`images/${card.image}`} alt={card.title} />
        </div>
      </Link>

      {isInCart && (
        <button
          type="button"
          onClick={() => deleteCardInCart(card.id)}
          title="удалить из корзины"
        >
          -
        </button>
      )}
      {isInCart ? card.countInCart : "Add"}
      <button
        type="button"
        onClick={() => addCardInCart(card.id)}
        title="добавить в корзину"
      >
        +
      </button>
    </div>
  );
};

export default Card;
