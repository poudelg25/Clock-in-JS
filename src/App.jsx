//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import Clock from "./Clock";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Current Time</h1>
        <Clock />
      </div>
    </>
  );
}

export default App;
