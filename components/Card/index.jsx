import React from "react";
import { Link } from "react-router-dom";
// import cn from "classnames";

import { PATH, CURRENCY } from "../../constants.js";
import styles from "./styles.scss";

const Card = ({ type, card, addCardInCart, deleteCardInCart }) => {
  const isInCart = Boolean(card.countInCart > 0);
  const fullPrice = (card.price * card.countInCart).toFixed(2);

  return (
    <div className={styles.root}>
      <Link to={`/${PATH}/${card.id}`} className={styles.link}>
        <div className={styles.image}>
          <img src={`images/${card.image}`} alt={card.title} />
        </div>
      </Link>
      <Link to={`/${PATH}/${card.id}`} className={styles.link}>
        <div className={styles.title}>{card.title}</div>
      </Link>
      <div className={styles.price}>1 pc / {`${CURRENCY}${card.price}`}</div>
      <div className={styles.full_price}>{`${CURRENCY}${fullPrice}`}</div>
      <div className={styles.buttons}>
        {isInCart && (
          <button
            className={styles.delete}
            type="button"
            onClick={() => deleteCardInCart(card.id)}
            title="удалить из корзины"
          >
            {" "}
          </button>
        )}
        {isInCart ? (
          <span className={styles.count}>{card.countInCart}</span>
        ) : (
          <span className={styles.addText}>Add</span>
        )}
        <button
          className={styles.add}
          type="button"
          onClick={() => addCardInCart(card.id)}
          title="добавить в корзину"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
