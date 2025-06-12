import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CssBaseline, Typography, useMediaQuery } from "@mui/material";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import CambridgeFrame from "../../elements/CambridgeFrame";
import VideoFrame from "./VideoFrame";
import ReserveNPricingLinkFrame from "./ReserveNPricingLinkFrame";
import WorldClassFrame from "./WorldClassFrame";
import AcademicDirectorQuoteFrame from "./AcademicDirectorQuoteFrame";
import PartOfCambridgeFrame from "./PartOfCambridgeFrame";
import TransitioningFrame from "./TransitioningFrame";
import EnrollFrame from "../../elements/EnrollFrame";
import CardsFrame from "./CardsFrame";
import HeroSection from "../../elements/HeroSection";
import theme from "../../elements/Theme";
import BlogsFrame from "./BlogsFrame";
import SpecialOfferModal from "../../elements/SpecialOfferModal";
import FeedbackCarouselFrame from "./FeedbackCarouselFrame";
import { CssVarsProvider } from "@mui/joy";

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
      </>
    )}
  </Typography>
);

const MainPage: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [offerOpen, setOfferOpen] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const targetDate = new Date("2025-04-30T23:59:59Z");
  return (
    <>
      <CssBaseline />
      <SpecialOfferModal
        open={offerOpen}
        onClose={() => setOfferOpen(false)}
        targetDate={targetDate}
      />
      <HeroSection
        mainTitle={
          <>
            {t("mainPage.mainTitle1")}
            <br />
            {t("mainPage.mainTitle2")}
          </>
        }
        secondaryTitle={
          <>
            <IconTypography
              isMobile={isMobile}
              text={t("mainPage.secondaryTitle1")}
            />
            <br />
            <br />
            <IconTypography
              isMobile={isMobile}
              text={t("mainPage.secondaryTitle2")}
            />
            <br />
            <br />
            <IconTypography
              isMobile={isMobile}
              text={t("mainPage.secondaryTitle3")}
            />
          </>
        }
        backgroundImageUrl={"/homePage/hero.webp"}
        altImage="Kids learing in International School Belgrade Young Sparrows"
        buttonText={t("mainPage.buttonText")}
        buttonOnClickPath={"enroll"}
        underButtonText={t("mainPage.underButtonText")}
      />
      <CambridgeFrame />
      <VideoFrame />
      <BlogsFrame />
      <ReserveNPricingLinkFrame />
      <WorldClassFrame />
      <AcademicDirectorQuoteFrame />
      <CardsFrame />
      <PartOfCambridgeFrame />
      <TransitioningFrame />
      <CssVarsProvider>
        <FeedbackCarouselFrame />
      </CssVarsProvider>
      <EnrollFrame />
    </>
  );
};

export default MainPage;
