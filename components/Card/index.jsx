import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import { PATH, CURRENCY } from "../../constants.js";
import About from "../About/index.jsx";
import styles from "./styles.scss";

const Card = ({ type = "vertical", card, addCardInCart, deleteCardInCart }) => {
  const isInCart = Boolean(card.countInCart > 0);
  const fullPrice = (card.price * card.countInCart).toFixed(2);
  const price = (
    <div className={styles.price}>
      {type === "horizontal" ? "·" : ""} 1 pc / {`${CURRENCY}${card.price}`}
    </div>
  );

  return (
    <div className={cn(styles.root, styles[`root_type_${type}`])}>
      <div className={styles.container}>
        <Link to={`/${PATH}/${card.id}`} className={styles.link}>
          <div className={styles.image}>
            <img
              src={`/${PATH}/images/${card.image}`}
              alt={card.title}
              className={styles.img}
            />
          </div>
        </Link>
        <Link to={`/${PATH}/${card.id}`} className={styles.link}>
          <div className={styles.title} title={card.title}>
            {card.title}
          </div>
        </Link>
        {type !== "horizontal" ? price : ""}
        <div className={styles.bottom}>
          <div className={styles.bottom__container}>
            <div className={styles.full_price}>
              {card.countInCart
                ? `${CURRENCY}${fullPrice}`
                : `${CURRENCY}${card.price}`}
              {type === "horizontal" && price}
            </div>
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
                {" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      {type === "vertical" && <About />}
    </div>
  );
};

export default Card;
