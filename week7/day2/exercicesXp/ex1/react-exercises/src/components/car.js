// src/components/Car.js
/*part1:
import React from "react";

const Car = ({ carInfo }) => {
  return (
    <div>
      <h2>This car is {carInfo.model}</h2>
    </div>
  );
};

export default Car;
*/

/*
//part2:
import React from "react";

const Car = ({ carInfo }) => {
  const color = "Red"; // static color

  return (
    <div>
      <h2>This car is {carInfo.model}</h2>
      <p>Color: {color}</p>
    </div>
  );
};

export default Car;
*/

//part3:
import React from "react";
import Garage from "./Garage";

const Car = ({ carInfo }) => {
  const color = "Red";  

  return (
    <div>
      <h2>
        This car is {color} {carInfo.model}
      </h2>
      <Garage size="small" />
    </div>
  );
};

export default Car;
