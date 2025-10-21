import React from "react";
import posts from "./posts.json";

function PostList() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Hi This is a Title
      </h1>
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white shadow-lg rounded-lg p-4 mb-4 border border-gray-200 hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
          <p className="text-gray-600 mt-2">{post.content}</p>
          <p className="text-sm text-gray-400 mt-1">{post.date}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
