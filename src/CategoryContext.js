import React, { createContext, useContext, useState } from 'react';

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [SelectedSubCategory, setSelectedSubCategory] = useState('');
  const [Product, setProduct] = useState('');
  

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory,SelectedSubCategory,setSelectedSubCategory,Product, setProduct}}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategory musi być użyte wewnątrz CategoryProvider');
  }
  return context;
};
