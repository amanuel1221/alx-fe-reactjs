import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

const PostsComponent = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery(
    "posts",
    fetchPosts,
    {
      // React Query caching options
      cacheTime: 300000, // cacheTime in milliseconds
      staleTime: 30000, // staleTime in milliseconds
      refetchOnWindowFocus: true, // refetchOnWindowFocus enabled
      keepPreviousData: true, // keepPreviousData enabled
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>

      <button
        onClick={() => refetch()} // Data refetch interaction
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Refetch Posts
      </button>

      <ul>
        {data?.slice(0, 10).map((post) => (
          <li key={post.id} className="border p-2 mb-2 rounded">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <p className="text-sm text-gray-500 mt-2">
        React Query caching demonstrated with cacheTime, staleTime, refetchOnWindowFocus, and keepPreviousData.
      </p>
    </div>
  );
};

export default PostsComponent;
