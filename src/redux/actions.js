// actions.js
export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';

export const setSelectedCategory = (selectedCategory) => ({
  type: SET_SELECTED_CATEGORY,
  payload: selectedCategory,
});
