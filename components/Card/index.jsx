import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import { PATH, CURRENCY } from "../../constants.js";
import About from "../About/index.jsx";
import Button from "../Button/index.jsx";
import Icon from "../Icon/index.jsx";
import styles from "./styles.scss";

const Card = ({
  type = "vertical",
  card,
  addCardInCart,
  deleteCardInCart,
  setFavorites,
}) => {
  const isInCart = card.countInCart > 0;
  const fullPrice = (card.price * card.countInCart).toFixed(2);
  const price = (
    <div className={styles.price}>
      {type === "horizontal" ? "·" : ""} 1 pc / {`${CURRENCY}${card.price}`}
    </div>
  );
  let iconSize = 38;
  if (type === "horizontal") iconSize = 28;
  if (type === "recommend") iconSize = 24;

  let favoritesIconSize = 20;
  if (type === "recommend") favoritesIconSize = 16;

  return (
    <div className={cn(styles.root, styles[`root_type_${type}`])}>
      <div className={styles.container}>
        {type !== "horizontal" && (
          <div
            className={
              card.isFavorites
                ? cn(styles.favorites, styles.favorites_active)
                : styles.favorites
            }
          >
            <Button
              title={
                card.isFavorites
                  ? "Удалить из избранного"
                  : "Добавить в избранное"
              }
              onClick={() => setFavorites(card.id)}
            >
              <Icon
                icon="favorites"
                active={card.isFavorites}
                size={favoritesIconSize}
              />
            </Button>
          </div>
        )}
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
        {type !== "horizontal" && price}
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
                <Button
                  title="Удалить из корзины"
                  onClick={() => deleteCardInCart(card.id)}
                >
                  <Icon icon="delete" type="filled" size={iconSize} />
                </Button>
              )}
              {isInCart && (
                <span className={styles.count}>{card.countInCart}</span>
              )}
              <Button
                title="Добавить в корзину"
                onClick={() => addCardInCart(card.id)}
              >
                {!isInCart && (
                  <>
                    <span className={styles.addText}>Add</span>
                    <Icon icon="add" type="filled" size={iconSize} />
                  </>
                )}
                {isInCart && <Icon icon="add" type="filled" size={iconSize} />}
              </Button>
            </div>
          </div>
        </div>
      </div>
      {type === "vertical" && <About />}
    </div>
  );
};

export default Card;
