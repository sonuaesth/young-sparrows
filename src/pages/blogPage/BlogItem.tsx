import React from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { Blog } from "./blog-collection";
import theme from "../../elements/Theme";
import ResizableImage from "../../elements/ResizableImage";
import WhiteButton from "../../elements/WhiteButton";

const BlogItem: React.FC<{ blogData: Blog }> = ({ blogData }) => {
  const { t, i18n } = useTranslation();
  const history = useHistory();

  const handleClick = () => {
    const currentLanguage = i18n.language;
    const blogSlug = blogData?.slugs?.[currentLanguage];
    const route =
      currentLanguage === "en"
        ? `/blog/${blogSlug}`
        : `/${currentLanguage}/blog/${blogSlug}`;
    history.push(route);
  };  

  return (
    <div
      style={{
        width: "450px",
        height: "580px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        backgroundColor: theme.palette.secondary.main,
        padding: "14px 10px",
        borderRadius: "5px",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h5"
        mb="14px"
        px="14px"
        textAlign="center"
        fontFamily="Open Sans Bold"
        color={theme.palette.text.secondary}
        sx={{ height: "16%" }}
      >
        {t(`BlogPage.blogs.blog_${blogData.id}.${blogData.titleKey}`)}
      </Typography>
      <ResizableImage
        src={blogData.image}
        alt={t(`AltImages.${blogData.altImage}`)}
        height="49%"
      />
      <div
        style={{
          width: "100%",
          height: "28%",
          padding: "14px",
          boxSizing: "border-box",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Typography
          variant="h5"
          color={theme.palette.text.secondary}
          sx={{
            maxHeight: "100%",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#f1f1f1",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#ffffff",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#a8a8a8",
            },
          }}
        >
          {t(`BlogPage.blogs.blog_${blogData.id}.${blogData.descriptionKey}`)}
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center", height: "7%" }}>
        <WhiteButton onClick={handleClick}>
          {t("BlogPage.see more")}
        </WhiteButton>
      </div>
    </div>
  );
};

export default BlogItem;
