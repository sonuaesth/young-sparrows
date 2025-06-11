import React from "react";
import { useTranslation } from "react-i18next";
import theme from "../../elements/Theme";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { Card, renderCards } from "../../utils/renderCards";

const ApproachFrame: React.FC = () => {
  const { t } = useTranslation();

  const cards: Card[] = [
    {
      imagePath: "/approachPage/card1.webp",
      text: t("ApproachFrame.text1"),
      description: t("ApproachFrame.description1"),
    },
    {
      imagePath: "/approachPage/card2.webp",
      text: t("ApproachFrame.text2"),
      description: t("ApproachFrame.description2"),
    },
    {
      imagePath: "/approachPage/card3.webp",
      text: t("ApproachFrame.text3"),
      description: t("ApproachFrame.description3"),
    },
  ];
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        px: isMobile ? "20px" : "73px",
        flexDirection: "column",
        alignItems: "center",
        my: isMobile ? "10vh" : "20vh",
      }}
    >
      <Typography variant="h2" mx="auto" textAlign="center">
        {t("ApproachFrame.title")}
      </Typography>
      <Grid container xs={12} spacing={4}>
        {renderCards(cards)}
      </Grid>
    </Box>
  );
};

export default ApproachFrame;
