import React from "react";
import { useTranslation } from "react-i18next";
import theme from "../../elements/Theme";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import ResizableImage from "../../elements/ResizableImage";

const EducationalThinkingFrame: React.FC = () => {
  const { t } = useTranslation();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        p: isMobile ? "20px" : "73px",
      }}
    >
      <Typography variant={"h2"} mx="auto" mb="0" fontFamily="Open Sans">
        {t("EducationalThinkingFrame.title")}
      </Typography>
      <Typography variant={"h2"} mx="auto" textAlign="center">
        {t("EducationalThinkingFrame.subtitle")}
      </Typography>
      <Grid container spacing={2}>
        {isMobile && (
          <Grid item xs={12} md={5}>
            <ResizableImage src={"/programPage/leadingThinking.webp"} />
          </Grid>
        )}
        <Grid item xs={12} md={7}>
          <Typography variant="h3" fontWeight={400}>
            {t("EducationalThinkingFrame.text1")}
            <br />
            <br />
            {t("EducationalThinkingFrame.text2")}
            <br />
            <br />
            {t("EducationalThinkingFrame.text3")}
          </Typography>
        </Grid>
        {!isMobile && (
          <Grid item xs={12} md={5}>
            <ResizableImage src={"/programPage/leadingThinking.webp"} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default EducationalThinkingFrame;
