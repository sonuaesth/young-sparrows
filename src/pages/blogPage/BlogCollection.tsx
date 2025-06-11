import React from "react";
import { blogs } from "./blog-collection";
import BlogItem from "./BlogItem";

const BlogCollection: React.FC = () => {
  const sortedBlogs = blogs.sort((a, b) => {
    const dateA = new Date(a.date.split("/").reverse().join("/"));
    const dateB = new Date(b.date.split("/").reverse().join("/"));
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div
      style={{
        marginTop: "10vh",
        paddingBottom: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 40px",
        }}
      >
        {sortedBlogs.map((blog) => (
          <BlogItem key={blog.id} blogData={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogCollection;
