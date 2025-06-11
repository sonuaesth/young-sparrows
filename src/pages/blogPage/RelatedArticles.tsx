import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import { Blog, blogs } from "./blog-collection";
import BlogItem from "./BlogItem";
import theme from "../../elements/Theme";

interface RelatedArticlesProps {
  currentBlogId: number | undefined;
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ currentBlogId }) => {
  const { t } = useTranslation();

  const relatedArticles: Blog[] = useMemo(() => {
    const filteredBlogs = blogs.filter((blog) => blog.id !== currentBlogId);
    const shuffled = filteredBlogs.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  }, [currentBlogId]);

  return (
    <Box sx={{ mb: 8 }}>
      <Typography
        variant="h4"
        textAlign="center"
        fontFamily="Open Sans Bold"
        color={theme.palette.secondary.main}
        mb={6}
      >
        {t("BlogPage.Related Articles")}
      </Typography>
      <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
        {relatedArticles.map((blog) => (
          <BlogItem key={blog.id} blogData={blog} />
        ))}
      </Box>
    </Box>
  );
};

export default RelatedArticles;
