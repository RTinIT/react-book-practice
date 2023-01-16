export const createArray = (length) => [...Array(length)];

export const generateId = () => {
  return Math.round(Date.now() * Math.random());
};

export const loadJSON = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const saveJSON = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
