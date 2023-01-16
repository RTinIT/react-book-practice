import React, { createContext, useContext, useEffect, useState } from "react";
import { colors as colorsData } from "../data/content";
import useStorage from "../hooks/useStorage";
import { generateId } from "../utils/commonFunc";

const ColorContext = createContext();

export const useColors = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
  const [colors, setColors] = useStorage("colors", colorsData);

  const addColor = (title, color) => {
    setColors((colors) => [
      ...colors,
      { title, color, id: generateId(), rating: 0 },
    ]);
  };

  const removeColor = (id) => {
    setColors((colors) => colors.filter((color) => color.id !== id));
  };

  const updateRating = (id, rating) => {
    setColors((colors) =>
      colors.map((color) => (color.id === id ? { ...color, rating } : color))
    );
  };

  return (
    <ColorContext.Provider
      value={{ colors, addColor, removeColor, updateRating }}
    >
      {children}
    </ColorContext.Provider>
  );
};
