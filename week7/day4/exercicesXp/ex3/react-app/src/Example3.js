import React, { Component } from "react";
import data from "./data.json";

class Example3 extends Component {
  render() {
    return (
      <div className="p-4 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-bold mb-3 text-purple-500">Experiences</h2>
        {data.Experiences.map((exp) => (
          <div
            key={exp.company}
            className="mb-4 p-3 border border-gray-200 rounded-md"
          >
            <h4 className="font-bold">{exp.position}</h4>
            <p className="text-gray-600">{exp.years}{exp.company},{exp.country}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
