import { useEffect, useState } from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  // const [name, setName] = useState(
  //   // ternary operator
  //   // when we reload the website after entering data - memory dispaly , becoz its stored in localstorage
  //   localStorage.getItem("username") ? localStorage.getItem("username") : ""
  // );

  // useEffect(() => {
  //   // its add data to localstorage - when name is empty
  //   localStorage.setItem("username", name);
  // }, [name]);

  const [name, setName] = useLocalStorage("username", "");
  const [id, setId] = useLocalStorage("userId", "");
  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <h2>hello ,{name}!</h2>
      <input
        type="number"
        placeholder="Enter your id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
      <h2>user id {id}!</h2>
    </>
  );
}

export default App;
