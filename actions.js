export const ADD_CARD_IN_CART = "ADD_CARD_IN_CART";
export const DELETE_CARD_IN_CART = "DELETE_CARD_IN_CART";

export const addCardInCart = (id) => ({ type: ADD_CARD_IN_CART, payload: id });
export const deleteCardInCart = (id) => ({
  type: DELETE_CARD_IN_CART,
  payload: id,
});
