import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import theme from "./Theme";
import ResizableImage from "./ResizableImage";

const CambridgeFrame: React.FC = () => {
  const { t } = useTranslation();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        px: isMobile ? "20px" : "73px",
        mt: isMobile ? "5vh" : "10vh",
        mb: isMobile ? "10vh" : "20vh",
        height: "10 0%",
      }}
    >
      <Grid container spacing={5} style={{ height: "100%" }} p="0">
        <Grid
          item
          xs={12}
          md={9}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Typography variant={"h3"} sx={{ fontWeight: 400 }} mb="2rem">
            {t("cambridgeFrame.text1")}
          </Typography>
          <Typography variant={"h3"} sx={{ fontWeight: 400 }}>
            {t("cambridgeFrame.text2")}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          style={{
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            alignItems: isMobile ? "center" : "flex-end",
            justifyContent: isMobile ? "space-between" : "flex-start",
          }}
        >
          <Box sx={{ width: isMobile ? "45%" : "100%" }}>
            <ResizableImage src={"/cambridge.webp"} alt="Cambridge Assessment | International Education" />
          </Box>
          <Box sx={{ width: isMobile ? "45%" : "100%" }}>
            <ResizableImage src={"/LogoSerbian.webp"} alt="Ministry of Education of the Republic of Serbia" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CambridgeFrame;
