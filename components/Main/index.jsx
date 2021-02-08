import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import CardProduct from "../CardProduct/index.jsx";
import Cart from "../Cart/index.jsx";
import { PATH } from "../../constants.js";
import styles from "./styles.scss";

import { addCardInCart, deleteCardInCart } from "../../actions.js";

const Main = ({ cards, dispatchAddCardInCart, dispatchDeleteCardInCart }) => (
  <div className={styles.root}>
    <Switch>
      {cards.map((card) => (
        <Route path={`/${PATH}/${card.id}`} key={card.id}>
          <CardProduct
            cards={cards}
            card={card}
            addCardInCart={dispatchAddCardInCart}
            deleteCardInCart={dispatchDeleteCardInCart}
          />
        </Route>
      ))}
      <Route path="/">
        <Cart
          cards={cards}
          addCardInCart={dispatchAddCardInCart}
          deleteCardInCart={dispatchDeleteCardInCart}
        />
      </Route>
    </Switch>
  </div>
);

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {
  dispatchAddCardInCart: addCardInCart,
  dispatchDeleteCardInCart: deleteCardInCart,
})(Main);
