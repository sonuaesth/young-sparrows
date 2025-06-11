import React from "react";
import { useTranslation } from "react-i18next";
import theme from "../../elements/Theme";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { Card, renderCards } from "../../utils/renderCards";
import OrangeHighlightButton from "../../elements/OrangeHighlightButton";
import { useHistory } from "react-router-dom";

const DifferenceFrame: React.FC = () => {
  const { t } = useTranslation();

  let history = useHistory();
  const cards: Card[] = [
    {
      text: t("DifferenceFrame.text1"),
      description: t("DifferenceFrame.description1"),
      imagePath: "/programPage/card1.webp",
    },
    {
      text: t("DifferenceFrame.text2"),
      description: t("DifferenceFrame.description2"),
      imagePath: "/programPage/card2.webp",
    },
    {
      text: t("DifferenceFrame.text3"),
      description: t("DifferenceFrame.description3"),
      imagePath: "/programPage/card3.webp",
    },
  ];

  function handleClick() {
    history.push("/pricing");
  }

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: isMobile ? "20px" : "73px",
        mt: isMobile ? "10vh" : "20vh",
        mb: isMobile ? "5vh" : "15vh",
      }}
    >
      <Typography variant={"h2"} mx="auto" textAlign="center">
        {t("DifferenceFrame.title")}
      </Typography>
      <Grid container xs={12} spacing={4}>
        {renderCards(cards)}
      </Grid>
      <Box mx="auto" my="5vh">
        <OrangeHighlightButton onClick={handleClick}>
          <Typography variant="h3" fontFamily="Open Sans Bold">
            {t("ReserveNPricingLinkFrame.button2")}
          </Typography>
        </OrangeHighlightButton>
      </Box>
    </Box>
  );
};

export default DifferenceFrame;
