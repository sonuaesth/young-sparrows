import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, useMediaQuery } from "@mui/material";
import theme from "../../elements/Theme";
import { Card, renderCards } from "../../utils/renderCards";

const CardsFrame: React.FC = () => {
  const { t } = useTranslation();

  const cards: Card[] = [
    {
      imagePath: "/homePage/card1.webp",
      text: t("CardsFrameMainPage.text1"),
      description: t("CardsFrameMainPage.description1"),
    },
    {
      imagePath: "/homePage/card2.webp",
      text: t("CardsFrameMainPage.text2"),
      description: t("CardsFrameMainPage.description2"),
    },
    {
      imagePath: "/homePage/card3.webp",
      text: t("CardsFrameMainPage.text3"),
      description: t("CardsFrameMainPage.description3"),
    },
    {
      imagePath: "/homePage/card4.webp",
      text: t("CardsFrameMainPage.text4"),
      description: t("CardsFrameMainPage.description4"),
    },
    {
      imagePath: "/homePage/card5.webp",
      text: t("CardsFrameMainPage.text5"),
      description: t("CardsFrameMainPage.description5"),
    },
    {
      imagePath: "/homePage/card6.webp",
      text: t("CardsFrameMainPage.text6"),
      description: t("CardsFrameMainPage.description6"),
    },
  ];
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: isMobile ? "20px" : "73px",
        mt: "10vh",
        mb: isMobile ? "10vh" : "20vh",
      }}
    >
      <Box sx={{ height: "10vh" }} />
      <Grid container xs={12} spacing={4}>
        {renderCards(cards)}
      </Grid>
    </Box>
  );
};

export default CardsFrame;
