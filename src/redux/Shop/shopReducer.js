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
      imgUrl: "002.jpg",
      name : "Diabolo",
      price: 22.99,
      desc: "Diabolo dolor sit amet."
    },
    {
      id: 3,
      imgUrl: "003.jpg",
      name : "Tomato",
      price: 18.99,
      desc: "Tomato dolor sit amet."
    },
    {
      id: 4,
      imgUrl: "004.jpg",
      name : "Marinara",
      price: 19.99,
      desc: "Marinara dolor sit amet."
    },
    {
      id: 5,
      imgUrl: "005.jpg",
      name : "Cheese Pizza",
      price: 17.99,
      desc: "Cheese Pizza dolor sit amet."
    },
    {
      id: 6,
      imgUrl: "006.jpg",
      name : "Mozzarella",
      price: 21.99,
      desc: "Mozzarella dolor sit amet."
    },
    {
      id: 7,
      imgUrl: "007.jpg",
      name : "Cucumber Pizza",
      price: 16.99,
      desc: "Cucumber dolor sit amet."
    },
    {
      id: 8,
      imgUrl: "001.jpg",
      name : "Extra Margherita",
      price: 21.99,
      desc: "Loremipsum dolor sit amet."
    },
    {
      id: 9,
      imgUrl: "002.jpg",
      name : "Extra Diabolo",
      price: 24.99,
      desc: "Diabolo dolor sit amet."
    },
    {
      id: 10,
      imgUrl: "003.jpg",
      name : "Extra Tomato",
      price: 20.99,
      desc: "Tomato dolor sit amet."
    },
    {
      id: 11,
      imgUrl: "004.jpg",
      name : "Extra Marinara",
      price: 21.99,
      desc: "Marinara dolor sit amet."
    },
    {
      id: 12,
      imgUrl: "005.jpg",
      name : "Extra Cheese Pizza",
      price: 19.99,
      desc: "Cheese Pizza dolor sit amet."
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
