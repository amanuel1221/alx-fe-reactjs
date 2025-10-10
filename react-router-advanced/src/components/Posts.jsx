import React from "react";
import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "React Router Basics" },
  { id: 2, title: "Understanding Dynamic Routes" },
  { id: 3, title: "Protected Routes Explained" },
];

const Posts = () => {
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <Link to={`/posts/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
