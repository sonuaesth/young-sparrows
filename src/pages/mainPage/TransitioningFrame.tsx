import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import theme from "../../elements/Theme";
import ResizableImage from "../../elements/ResizableImage";

const TransitioningFrame: React.FC = () => {
  const { t } = useTranslation();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLaptop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        paddingTop: "30px",
        paddingLeft: isMobile ? "20px" : "73px",
        paddingRight: isMobile ? "20px" : "73px",
        flexDirection: "column",
        mb: isMobile ? "6vh" : "10vh",
      }}
    >
      <Typography variant={"h2"} mx="auto" textAlign="center">
        {t("TransitioningFrame.title")}
      </Typography>
      <Grid
        container
        spacing={{ xs: 5, md: 12 }}
        sx={{ display: "flex", flexDirection: "row" }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
          xs={12}
          md={7}
        >
          <Typography variant={"h3"} fontWeight={400}>
            {t("TransitioningFrame.text1")}
            <br />
            <br />
            {t("TransitioningFrame.text2")}
            <br />
            <br />
            {t("TransitioningFrame.text3")}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          order={isMobile ? -1 : 1}
          sx={{
            display: "flex",
            justifyContent: "center",
            maxHeight: isLaptop ? "650px" : "100%",
          }}
        >
          <ResizableImage src={"/homePage/transition.webp"} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TransitioningFrame;
