import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, useMediaQuery } from "@mui/material";
import theme from "../../elements/Theme";
import { Card, renderCards } from "../../utils/renderCards";

const CardsFrame: React.FC = () => {
  const { t } = useTranslation();

  const cards: Card[] = [
    {
      imagePath: "/approachPage/card4.webp",
      text: t("CardsFrameApproachPage.text1"),
      description: t("CardsFrameApproachPage.description1"),
    },
    {
      imagePath: "/approachPage/card5.webp",
      text: t("CardsFrameApproachPage.text2"),
      description: t("CardsFrameApproachPage.description2"),
    },
    {
      imagePath: "/approachPage/card6.webp",
      text: t("CardsFrameApproachPage.text3"),
      description: t("CardsFrameApproachPage.description3"),
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
        my: isMobile ? "10vh" : "20vh",
      }}
    >
      <Box sx={{ flexGrow: 1 }} />
      <Grid container xs={12} spacing={4}>
        {renderCards(cards)}
      </Grid>
    </Box>
  );
};

export default CardsFrame;
