import React from "react";
import { useTranslation } from "react-i18next";
import theme from "./Theme";
import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import OrangeHighlightButton from "./OrangeHighlightButton";
import { useHistory } from "react-router-dom";

const EnrollFrame: React.FC = () => {
  const { t, i18n } = useTranslation();
  let currentLanguage = i18n.language;

  let history = useHistory();
  const handleClick = (path: string) => {
    history.push(`/${path}`);
  };
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Divider
        sx={{
          borderColor: theme.palette.secondary.main,
          borderBottomWidth: "2px",
        }}
      />
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          display: "flex",
          flexDirection: "column",
          paddingTop: "30px",
          px: isMobile ? "20px" : "73px",
          mb: isMobile ? "10vh" : "20vh",
          mt: isMobile ? "4vh" : "8vh",
        }}
      >
        <Box sx={{ flexGrow: 3 }} />
        <Typography variant={"h2"} mx="auto" mb="0" textAlign="center">
          {t("EnrollFrame.title")}
        </Typography>
        <Box sx={{ minHeight: "2vh" }} />
        <Typography variant={"h3"} textAlign="center">
          {/* Reserve your child's place in our September 2024 Year 1 and Year 2 classes before May and enjoy a
                    5% Early Bird discount on the yearly tuition. Don't miss out - spots are filling up quickly! */}
          {t("EnrollFrame.subtitle")}
          {currentLanguage === "en" ? " " : <br />}
          {t("EnrollFrame.subtitle0")}
        </Typography>
        <Box sx={{ minHeight: "5vh" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <OrangeHighlightButton onClick={() => handleClick("enroll")}>
            <Typography variant="h3" fontFamily="Open Sans Bold">
              {t("EnrollFrame.button")}
            </Typography>
          </OrangeHighlightButton>
          <Typography variant="h5">{t("EnrollFrame.text")}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default EnrollFrame;
