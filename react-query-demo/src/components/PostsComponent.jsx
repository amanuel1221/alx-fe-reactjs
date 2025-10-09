// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

// Function to fetch posts
const fetchPosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

const PostsComponent = () => {
  const { data, isLoading, isError, error, refetch } = useQuery("posts", fetchPosts);

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>; // <-- use 'error'

  return (
    <div>
      <button
        onClick={() => refetch()} // <-- data refetch interaction
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Refetch Posts
      </button>

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} className="border p-2 mb-2 rounded">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <p className="text-sm text-gray-500 mt-2">
        Cached by React Query: navigate away and return to see data load instantly.
      </p>
    </div>
  );
};

export default PostsComponent;
