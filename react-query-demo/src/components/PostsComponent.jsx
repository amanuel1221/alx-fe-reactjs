// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

const PostsComponent = () => {
  const { data, isLoading, isError, refetch } = useQuery("posts", fetchPosts);

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error fetching posts!</p>;

  return (
    <div>
      <button
        onClick={() => refetch()}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Refetch Posts
      </button>

      <ul>
        {data.slice(0, 10).map((post) => ( // Display first 10 posts for demo
          <li key={post.id} className="border p-2 mb-2 rounded">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
