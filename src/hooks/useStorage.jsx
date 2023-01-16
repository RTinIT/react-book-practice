import React, { useState, useEffect } from "react";
import { loadJSON, saveJSON } from "../utils/commonFunc";

const useStorage = (key, defaultValue) => {
  const [value, setValue] = useState(
    localStorage.getItem(key) ? loadJSON(key) : defaultValue
  );

  useEffect(() => {
    saveJSON(key, value);
  }, [value, key]);

  return [value, setValue];
};

export default useStorage;
