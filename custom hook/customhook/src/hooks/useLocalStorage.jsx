import React from "react";
import { useEffect, useState } from "react";

// using key - it will retrive the data from local storage
const useLocalStorage = (key, initalValue) => {
  const [name, setName] = useState(
    // ternary operator
    // when we reload the website after entering data - memory dispaly , becoz its stored in localstorage
    localStorage.getItem(key) ? localStorage.getItem(key) : initalValue
  );

  useEffect(() => {
    // its add data to localstorage - when name is empty
    localStorage.setItem(key, name);
  }, [name, key]);

  return [name, setName];
};

export default useLocalStorage;
