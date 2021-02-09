import { ADD_CARD_IN_CART, DELETE_CARD_IN_CART } from "./actions.js";

export default (state, { type, payload }) => {
  switch (type) {
    case ADD_CARD_IN_CART: {
      const cards = state.cards.map((card) => {
        if (card.id === payload) {
          return { ...card, countInCart: card.countInCart + 1 };
        }

        return card;
      });

      return {
        ...state,
        cards,
      };
    }

    case DELETE_CARD_IN_CART: {
      const cards = state.cards.map((card) => {
        if (card.id === payload) {
          return { ...card, countInCart: card.countInCart - 1 };
        }

        return card;
      });

      return {
        ...state,
        cards,
      };
    }

    default:
      return state;
  }
};
