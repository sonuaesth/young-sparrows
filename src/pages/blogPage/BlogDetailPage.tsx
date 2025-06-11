import React, { useEffect } from "react";
import { CssBaseline } from "@mui/material";
import BlogDetail from "./BlogDetail";
import EnrollFrame from "../../elements/EnrollFrame";

const BlogDetailPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CssBaseline />
      <BlogDetail />
      <EnrollFrame />
    </>
  );
};

export default BlogDetailPage;
