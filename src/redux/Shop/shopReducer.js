import * as actionTypes from "./shopTypes";

const initialState = {
  products : [
    {
      id: 1,
      imgUrl: "001.jpg",
      name : "Margherita",
      price: 19.99,
      desc: "Loremipsum dolor sit amet."
    },
    {
      id: 2,
      imgUrl: "001.jpg",
      name : "Diabolo",
      price: 24.99,
      desc: "Diabolo dolor sit amet."
    }
  ],
  cart: []
}

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find(product => product.id === action.payload.id);
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }]
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id)
      }

    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: + action.payload.qty }
            : item
        )
      }

    default:
      return state;      
  }
}

export default shopReducer;
