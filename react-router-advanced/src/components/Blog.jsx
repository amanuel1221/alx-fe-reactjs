import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = [
    { id: 1, title: "Learning React Router" },
    { id: 2, title: "Understanding Nested Routes" },
    { id: 3, title: "Implementing Protected Routes" },
  ];

  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {blogs.map((b) => (
          <li key={b.id}>
            <Link to={`/blog/${b.id}`}>{b.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
