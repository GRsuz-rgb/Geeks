import React, { Component } from "react";
import data from "./data.json";

class Example1 extends Component {
  render() {
    return (
      <div className="p-4 bg-white shadow-md rounded-md mb-6">
        <h2 className="text-xl font-bold mb-3 text-blue-500">Social Media</h2>
        {data.SocialMedias.map((media, index) => (
          <div key={index} className="p-2 border-b border-gray-200">
            {media}
          </div>
        ))}
      </div>
    );
  }
}

export default Example1;
