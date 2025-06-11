import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import ResizableImage from "../../elements/ResizableImage";
import theme from "../../elements/Theme";

const ForwardThinkingFrame: React.FC = () => {
  const { t } = useTranslation();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.primary.main,
          p: isMobile ? "20px" : "73px",
        }}
      >
        <Typography variant={"h2"} mx="auto" textAlign="center">
          {t("ForwardThinkingFrame.title")}
        </Typography>
        <Grid container spacing={{ md: 12, xs: 5 }}>
          <Grid
            item
            md={8}
            xs={12}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography variant={"h3"} fontWeight={400}>
              {t("ForwardThinkingFrame.text1")}
              <br />
              <br />
              {t("ForwardThinkingFrame.text2")}
              <br />
              <br />
              {t("ForwardThinkingFrame.text3")}
            </Typography>
          </Grid>
          <Grid item md={4} xs={12} order={isMobile ? -1 : 1}>
            <ResizableImage src={"/approachPage/forwardThinking.webp"} />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          border: `3px solid ${theme.palette.secondary.main}`,
          p: isMobile ? "20px" : "73px",
          m: isMobile ? "5vh" : "10vh",
        }}
      >
        <Typography
          variant="h2"
          mx="auto"
          textAlign="center"
          color={theme.palette.secondary.main}
        >
          {t("ForwardThinkingFrame.boxTitle")}
        </Typography>
        <Typography variant="h3" fontWeight={400}>
          {t("ForwardThinkingFrame.boxText1")}
          <br />
          <br />
          {t("ForwardThinkingFrame.boxText2")}
          <br />
          <br />
          {t("ForwardThinkingFrame.boxText3")}
        </Typography>
      </Box>
    </Box>
  );
};

export default ForwardThinkingFrame;
