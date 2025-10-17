import React, { useState, useEffect } from "react";

function Color() {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    alert("useEffect reached");
  }, [favoriteColor]);

const changeColor = () => {
  setFavoriteColor("yellow");
  setTimeout(() => {
    setFavoriteColor("blue");
  }, 1000); // changes to blue after 1 second
};

  return (
    <div>
      <h1>My favorite color is {favoriteColor}</h1>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Color;
