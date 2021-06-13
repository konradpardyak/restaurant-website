import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import shopReducer from './Shop/shopReducer';

const reducer = combineReducers({
  shop: shopReducer
});

const store = createStore(reducer, composeWithDevTools());

export default store;
