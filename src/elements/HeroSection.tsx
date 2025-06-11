import React, { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import BackgroundImage from "../elements/BackgroundImage";
import OrangeHighlightButton from "../elements/OrangeHighlightButton";
import theme from "../elements/Theme";
import RedButton from "./RedButton";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface HeroSectionProps {
  mainTitle: ReactNode;
  secondaryTitle: ReactNode;
  buttonText?: string;
  underButtonText?: string;
  buttonOnClickPath?: string;
  backgroundImageUrl?: string;
  altImage?: string;
  isApproachPage?: boolean;
  isPricingPage?: boolean;
  formRef?: React.RefObject<HTMLFormElement | null>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  mainTitle,
  secondaryTitle,
  buttonText,
  buttonOnClickPath,
  backgroundImageUrl,
  altImage,
  underButtonText,
  isApproachPage,
  isPricingPage,
  formRef,
}) => {
  let history = useHistory();

  const handleClick = (path?: string | null) => {
    if (path) {
      history.push(`/${path}`);
    }
    if (formRef) {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundImage
        imageUrl={backgroundImageUrl}
        altImage={altImage}
        isApproachPage={isApproachPage}
        isPricingPage={isPricingPage}
      >
        <Box
          sx={{
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            width: "fit-content",
            height: "100vh",
          }}
        >
          <Typography
            variant={"h1"}
            gutterBottom
            sx={{
              color: theme.palette.text.disabled,
              lineHeight: 1.05,
            }}
          >
            {mainTitle}
          </Typography>
          <Typography variant={"h3"} color={"white"}>
            {secondaryTitle}
          </Typography>
          {buttonText && buttonOnClickPath && <Box sx={{ height: "10vh" }} />}
          {buttonText && buttonOnClickPath && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <OrangeHighlightButton
                onClick={() => handleClick(buttonOnClickPath)}
              >
                <Typography
                  variant="h3"
                  color={theme.palette.text.secondary}
                  fontFamily="Open Sans Bold"
                >
                  {buttonText}
                </Typography>
              </OrangeHighlightButton>
              <Typography
                variant="h5"
                color={theme.palette.text.secondary}
                fontWeight={700}
                sx={{ mt: 2 }}
              >
                {underButtonText}
              </Typography>
            </Box>
          )}
          {formRef && (
            <>
              <br />
              <RedButton onClick={() => handleClick(null)}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="subtitle1"
                    color={theme.palette.text.secondary}
                    fontFamily="Open Sans Bold"
                    mr={1}
                  >
                    {buttonText}
                  </Typography>
                  <ArrowDownwardIcon sx={{ fontSize: 20 }} />
                </Box>
              </RedButton>
            </>
          )}
        </Box>
      </BackgroundImage>
    </Box>
  );
};

export default HeroSection;
