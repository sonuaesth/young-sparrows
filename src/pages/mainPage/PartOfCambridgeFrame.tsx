import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import theme from "../../elements/Theme";
import ResizableImage from "../../elements/ResizableImage";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";

export interface IconTypographyI {
  text: string;
}

const IconTypography = ({ text }: IconTypographyI) => (
  <Typography variant={"h3"} fontWeight={400} sx={{ display: "inline-flex" }}>
    <SchoolSharpIcon
      fontSize="large"
      sx={{ color: theme.palette.primary.main }}
    />
    {text}
    <br />
    <br />
  </Typography>
);

const PartOfCambridgeFrame: React.FC = () => {
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
        mb: isMobile ? "8vh" : "20vh",
      }}
    >
      <Grid
        container
        spacing={{ md: 12, xs: 5 }}
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
          <Typography
            variant={isMobile ? "h2" : "h3"}
            fontWeight={800}
            textAlign={isMobile ? "center" : "start"}
            mb="1rem"
          >
            {t("PartOfCambridgeFrame.title")}
          </Typography>
          <Typography variant={"h3"} fontWeight={400}>
            {t("PartOfCambridgeFrame.text1")}
            <br />
            <br />
            {t("PartOfCambridgeFrame.text2")}
            <br />
            <br />
            {t("PartOfCambridgeFrame.text3")}
            <br />
            <br />
            <IconTypography text={t("PartOfCambridgeFrame.iconText1")} />
            <IconTypography text={t("PartOfCambridgeFrame.iconText2")} />
            <IconTypography text={t("PartOfCambridgeFrame.iconText3")} />
          </Typography>
        </Grid>
        <Grid item md={5} xs={12}>
          <ResizableImage src={"/homePage/proudPart.webp"} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PartOfCambridgeFrame;
