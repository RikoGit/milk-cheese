export const ADD_CARD_IN_CART = "ADD_CARD_IN_CART";
export const DELETE_CARD_IN_CART = "DELETE_CARD_IN_CART";
export const ON_CHANGE = "ON_CHANGE";
export const SET_FAVORITES = "SET_FAVORITES";
export const CLEAR_ADDRESS = "CLEAR_ADDRESS";

export const addCardInCart = (id) => ({ type: ADD_CARD_IN_CART, payload: id });
export const deleteCardInCart = (id) => ({
  type: DELETE_CARD_IN_CART,
  payload: id,
});
export const setFavorites = (id) => ({ type: SET_FAVORITES, payload: id });
export const onChange = (name, value) => ({
  type: ON_CHANGE,
  payload: { name, value },
});
export const clearAddress = () => ({ type: CLEAR_ADDRESS });
