import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { CssBaseline } from "@mui/material";
import ApproachFrame from "./ApproachFrame";
import ForwardThinkingFrame from "./ForwardThinkingFrame";
import CardsFrame from "./CardsFrame";
import EnrollFrame from "../../elements/EnrollFrame";
import BeyondProgramFrame from "./BeyondProgramFrame";
import HeroSection from "../../elements/HeroSection";
import NutritionFrame from "./NutritionFrame";
import NutritionQuoteFrame from "./NutritionQuoteFrame";

const ApproachPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CssBaseline />
      <HeroSection
        mainTitle={<>{t("ApproachPage.mainTitle")}</>}
        secondaryTitle={<>{t("ApproachPage.secondaryTitle")}</>}
        backgroundImageUrl={"/approachPage/hero.webp"}
        altImage="Kids learning with our academic programs in Young Sparrows"
        buttonText={t("mainPage.buttonText")}
        buttonOnClickPath={"enroll"}
        underButtonText={t("mainPage.underButtonText")}
        isApproachPage={true}
      />
      <ApproachFrame />
      <ForwardThinkingFrame />
      <BeyondProgramFrame />
      <CardsFrame />
      <NutritionQuoteFrame />
      <NutritionFrame />
      <EnrollFrame />
    </>
  );
};

export default ApproachPage;
