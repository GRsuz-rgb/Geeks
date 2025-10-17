/*
//part1:
import React from "react";

const Phone = () => {
  const phone = {
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020,
  };

  return (
    <div style={{ border: "2px solid gray", padding: "20px", width: "300px", borderRadius: "10px" }}>
      <h2>My Phone is {phone.brand}</h2>
      <p>it is <strong>{phone.color} {phone.model}</strong></p>
      <p>from<strong>{phone.year}</strong></p>
    </div>
  );
};

export default Phone;
*/
//part2:
import React, { useState } from "react";

const Phone = () => {
  const [phone, setPhone] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020,
  });

  // Function to change color
  const changeColor = () => {
    setPhone({ ...phone, color: "blue" });
  };

  return (
    <div style={{ border: "2px solid gray", padding: "20px", width: "300px", borderRadius: "10px" }}>
      <h2>My Phone is {phone.brand}</h2>
      <p>it is <strong>{phone.color} {phone.model}</strong></p>
      <p>from<strong>{phone.year}</strong></p>
    
      <button onClick={changeColor}>Change color</button>
    </div>
  );
};

export default Phone;
