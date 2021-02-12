import {
  ADD_CARD_IN_CART,
  CLEAR_ADDRESS,
  DELETE_CARD_IN_CART,
  SET_FAVORITES,
  ON_CHANGE,
} from "./actions.js";

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

    case SET_FAVORITES: {
      const cards = state.cards.map((card) => {
        if (card.id === payload) {
          return { ...card, isFavorites: !card.isFavorites };
        }

        return card;
      });

      return {
        ...state,
        cards,
      };
    }

    case CLEAR_ADDRESS: {
      const address = {};
      Object.keys(state.address).forEach((key) => {
        address[key] = "";
        return address;
      });

      return {
        ...state,
        address,
      };
    }

    case ON_CHANGE: {
      return {
        ...state,
        address: { ...state.address, [payload.name]: payload.value },
      };
    }

    default:
      return state;
  }
};
