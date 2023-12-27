// store.js
import { createStore, combineReducers } from 'redux';
import appReducer from './reducer';
import categoriesReducer from './reducer'; // Dodaj import

const rootReducer = combineReducers({
  app: appReducer,
  categories: categoriesReducer, // Dodaj nowy reducer
});

const store = createStore(rootReducer);

export default store;
