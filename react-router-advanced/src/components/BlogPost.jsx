import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div>
      <h3>Blog Post ID: {id}</h3>
      <p>This is the dynamic route for blog post {id}.</p>
    </div>
  );
};

export default BlogPost;
