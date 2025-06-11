import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mui/system";
import { Typography } from "@mui/material";
import { Blog, blogs } from "./blog-collection";
import BlogContent from "./BlogContent";
import RelatedArticles from "./RelatedArticles";
import theme from "../../elements/Theme";

const BlogDetail: React.FC = () => {
  const { t, i18n } = useTranslation();

  const { slug } = useParams<{ slug: string }>();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [blog, setBlog] = useState<Blog | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const fetchBlogData = () => {
      const blogData = blogs.find((item) => {
        const currentSlug = item.slugs?.[i18n.language];
        return currentSlug === slug;
      });
      setBlog(blogData);
      setLoading(false);
    };
    fetchBlogData();
  }, [slug, i18n.language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        background: blog?.image
          ? `url(${blog.image}) center/cover no-repeat`
          : theme.palette.secondary.main,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: blog?.image
            ? "rgba(0, 0, 0, 0.4)"
            : theme.palette.secondary.main,
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "relative",
          padding: "0 4%",
          width: isMobile ? "90%" : "70%",
          margin: isMobile ? "112px auto" : "187px auto",
          backgroundColor: theme.palette.primary.main,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          zIndex: 2,
          border: `3px solid ${theme.palette.secondary.main}`,
        }}
      >
        <div
          style={{
            padding: "6% 9.5%",
            backgroundColor: theme.palette.primary.main,
            textAlign: "center",
          }}
        >
          {loading ? (
            <Typography variant="h5" textAlign="center" mt="20px">
              {t("BlogPage.loading")}...
            </Typography>
          ) : !blog ? (
            <Typography variant="h5" textAlign="center" mt="20px">
              {t("BlogPage.Blog not found")}...
            </Typography>
          ) : (
            <>
              <Typography
                variant="h2"
                mb="40px"
                textAlign="center"
                fontFamily="Open Sans Bold"
                color={theme.palette.secondary.main}
              >
                {t(`BlogPage.blogs.blog_${blog.id}.${blog.titleKey}`)}
              </Typography>
              {blog.image && (
                <img
                  src={blog.image}
                  alt={t(`AltImages.${blog.altImage}`)}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "16px",
                  }}
                />
              )}
              <BlogContent blogData={blog} />
            </>
          )}
        </div>
        <RelatedArticles currentBlogId={blog?.id} />
      </div>
    </div>
  );
};

export default BlogDetail;
