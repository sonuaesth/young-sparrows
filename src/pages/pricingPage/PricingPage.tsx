import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Box, CssBaseline, Typography, useMediaQuery } from "@mui/material";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import PricingFrame from "./PricingFrame";
import EnrollFrame from "../../elements/EnrollFrame";
import HeroSection from "../../elements/HeroSection";
import CambridgeFrame from "../../elements/CambridgeFrame";
import theme from "../../elements/Theme";

export interface IconTypographyI {
  isMobile: boolean;
  text: string;
}

const IconTypography = ({ isMobile, text }: IconTypographyI) => (
  <Typography
    variant={"h3"}
    fontWeight={400}
    textAlign={"start"}
    sx={{ display: "inline-flex" }}
  >
    {!isMobile ? (
      text
    ) : (
      <>
        <SchoolSharpIcon
          fontSize="large"
          sx={{ width: "0.9em", height: "0.9em", mr: "5px", color: "#F89C27" }}
        />
        {text}
        <br />
        <br />
      </>
    )}
  </Typography>
);

const PricingPage: React.FC = () => {
  const { t } = useTranslation();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CssBaseline />
      <HeroSection
        mainTitle={<>{t("PricingPage.mainTitle")}</>}
        secondaryTitle={
          <>
            <IconTypography
              isMobile={isMobile}
              text={t("PricingPage.iconText1")}
            />
            <br />
            <IconTypography
              isMobile={isMobile}
              text={t("PricingPage.iconText2")}
            />
            <br />
            <IconTypography
              isMobile={isMobile}
              text={t("PricingPage.iconText3")}
            />
            <br />
            <IconTypography
              isMobile={isMobile}
              text={t("PricingPage.iconText4")}
            />
          </>
        }
        backgroundImageUrl={"/pricingPage/hero.webp"}
        altImage="Kid learning in our school at Young Sparrows"
        isPricingPage
      />
      <Box my={"5vh"}>
        <CambridgeFrame />
      </Box>

      <PricingFrame />
      <EnrollFrame />
    </>
  );
};

export default PricingPage;
