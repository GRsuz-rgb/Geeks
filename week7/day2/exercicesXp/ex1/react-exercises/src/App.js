// src/App.js
import React from "react";
import Car from "./components/car.js";

function App() {
  const carInfo = { name: "Ford", model: "Mustang" };

  return (
    <div>
      <h1>Car and Components</h1>
      <Car carInfo={carInfo} />
    </div>
  );
}

export default App;
