import React from "react";

import "./App.css";

import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <Button onClick={() => console.log("oi")}>Learn React!!</Button>
      </main>
    </div>
  );
}

export default App;
