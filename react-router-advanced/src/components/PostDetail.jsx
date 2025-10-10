import React from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h3>Post Detail for ID: {id}</h3>
      <p>This is a dynamically rendered post page.</p>
    </div>
  );
};

export default PostDetail;
