import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { CssBaseline } from "@mui/material";
import FeedbackFormFrame from "./FeedbackFormFrame";
import HeroSection from "../../elements/HeroSection";

const Feedback: React.FC = () => {
  const { t } = useTranslation();

  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CssBaseline />
      <HeroSection
        mainTitle={
          <>
            {t("FeedbackPage.mainTitle1")}
            <br />
            {t("FeedbackPage.mainTitle2")}
          </>
        }
        secondaryTitle={
          <>
            {/* Enroll your child before May 2024 and claim a 5%<br/>
                            early bird discount on yearly tuition. Limited<br/>
                            spots available. 
                            Enroll your child now to start their journey<br/>
                at Young Sparrows!*/}
          </>
        }
        backgroundImageUrl={"/enrollPage/hero.webp"}
        altImage="Group of kids in International School Belgrade"
        buttonText={t("NurceryPage.buttonText")}
        formRef={formRef}
      />
      <FeedbackFormFrame formRef={formRef} />;
    </>
  );
};

export default Feedback;
