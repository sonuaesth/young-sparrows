import React from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { blogs } from "../blogPage/blog-collection";
import BlogItem from "../blogPage/BlogItem";
import theme from "../../elements/Theme";
import OrangeHighlightButton from "../../elements/OrangeHighlightButton";

const BlogsFrame: React.FC = () => {
  const { t, i18n } = useTranslation();
  let currentLanguage = i18n.language || "en";

  const history = useHistory();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  function handleClick() {
    let route = currentLanguage === "en" ? "/blog" : `/${currentLanguage}/blog`;
    history.push(route);
  }

  const sortedBlogs = blogs.sort((a, b) => {
    const dateA = new Date(a.date.split("/").reverse().join("/"));
    const dateB = new Date(b.date.split("/").reverse().join("/"));
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div
      style={{
        marginTop: isMobile ? "10vh" : "16vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        fontWeight="800"
        mx="auto"
        mb={8}
        textAlign="center"
      >
        {t("BlogPage.title")}
      </Typography>
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
        {sortedBlogs.slice(0, 2).map((blog) => (
          <BlogItem key={blog.id} blogData={blog} />
        ))}
      </div>
      <Box sx={{ mt: isMobile ? "1.5rem" : "3rem" }}>
        <OrangeHighlightButton onClick={handleClick}>
          <Typography
            variant="h5"
            color={theme.palette.text.secondary}
            fontFamily="Open Sans Bold"
          >
            {t("BlogPage.See all")}
          </Typography>
        </OrangeHighlightButton>
      </Box>
    </div>
  );
};

export default BlogsFrame;
