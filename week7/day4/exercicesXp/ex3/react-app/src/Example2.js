import React, { Component } from "react";
import data from "./data.json";

class Example2 extends Component {
  render() {
    const { Programming, Tools } = data.Skills;
    return (
      <div className="p-4 bg-white shadow-md rounded-md mb-6">
        <h2 className="text-xl font-bold mb-3 text-green-500">Skills</h2>
        <h3 className="font-semibold">Programming:</h3>
        {Programming.map((skill, index) => (
          <div key={index} className="pl-4">
            • {skill}
          </div>
        ))}

        <h3 className="font-semibold mt-3">Tools:</h3>
        {Tools.map((tool, index) => (
          <div key={index} className="pl-4">
            • {tool}
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;
