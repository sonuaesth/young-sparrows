import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { CssBaseline } from "@mui/material";
import SkillFrame from "./SkillFrame";
import EducationalThinkingFrame from "./EducationalThinkingFrame";
import DifferenceFrame from "./DifferenceFrame";
import EnrollFrame from "../../elements/EnrollFrame";
import CambridgeFrame from "../../elements/CambridgeFrame";
import ProgramFrame from "./ProgramFrame";
import HeroSection from "../../elements/HeroSection";

const ProgramPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CssBaseline />
      <HeroSection
        mainTitle={<>{t("ProgramPage.mainTitle")}</>}
        secondaryTitle={
          <>
            {t("ProgramPage.secondaryTitle1")}
            <br />
            {t("ProgramPage.secondaryTitle2")}
            <br />
            {t("ProgramPage.secondaryTitle3")}
            <br />
            {t("ProgramPage.secondaryTitle4")}
          </>
        }
        buttonText={t("mainPage.buttonText")}
        buttonOnClickPath={"enroll"}
        backgroundImageUrl={"/programPage/hero.webp"}
        altImage="Playtime and Quality education for our children"
        underButtonText={t("mainPage.underButtonText")}
      />
      <CambridgeFrame />
      <SkillFrame />
      <EducationalThinkingFrame />
      <DifferenceFrame />
      <ProgramFrame />
      <EnrollFrame />
    </>
  );
};

export default ProgramPage;
