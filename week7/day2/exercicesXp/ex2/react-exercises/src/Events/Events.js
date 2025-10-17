import React, { useState } from "react";

const Events = () => {
  // Part I
  const clickMe = () => {
    alert("I was clicked");
  };

  // Part II
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert(`The Enter key was pressed, your input is: ${event.target.value}`);
    }
  };

  // Part III
  const [isToggleOn, setIsToggleOn] = useState(true);

  const toggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Part I */}
      <button onClick={clickMe}>Click Me</button>
      <br />
      <br />

      {/* Part II */}
      <input
        type="text"
        placeholder="Press the ENTER key!"
        onKeyDown={handleKeyDown}
      />
      <br />
      <br />

      {/* Part III */}
      <button onClick={toggle}>
        {isToggleOn ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default Events;
