// categoriesReducer.js
import { SET_SELECTED_CATEGORY } from './actions';

const initialState = {
  categories: [],
  selectedCategory: null,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_CATEGORY:
       return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
