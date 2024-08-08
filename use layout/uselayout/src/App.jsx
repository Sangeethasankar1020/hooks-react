import { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("Message from use effect ");
  }, []);

  useLayoutEffect(() => {
    console.log("Message from use layouteffect ");
  }, []);

  return (
    <>
      <h1>Text message</h1>
      {Array.from({ length: 40000 }).map((_, index) => (
        <li key={index}>{Math.pow(Math.random(), 10)}</li>
      ))}
    </>
  );
}

export default App;
