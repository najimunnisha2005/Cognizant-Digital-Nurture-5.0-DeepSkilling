import React from "react";

function BlogDetails(props) {
  return (
    <div>
      {props.blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <h4>{blog.author}</h4>
          <p>{blog.description}</p>
          <br />
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;