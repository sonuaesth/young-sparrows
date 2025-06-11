import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { CssBaseline } from "@mui/material";
import HeroSection from "../../elements/HeroSection";
import BlogCollection from "./BlogCollection";
import EnrollFrame from "../../elements/EnrollFrame";

const BlogPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CssBaseline />
      <HeroSection
        mainTitle={
          <>
            {t("BlogPage.title")}
          </>
        }
        secondaryTitle={<></>}
        backgroundImageUrl={"/programPage/card3.webp"}
        altImage="Kids learing in International School Belgrade Young Sparrows"
      />
      <BlogCollection />
      <EnrollFrame />
    </>
  );
};

export default BlogPage;
