import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import theme from "../../elements/Theme";
import ResizableImage from "../../elements/ResizableImage";
import OrangeHighlightButton from "../../elements/OrangeHighlightButton";
import { useHistory } from "react-router-dom";

export interface IconTypographyI {
  text: string;
}

const IconTypography = ({ text }: IconTypographyI) => (
  <Typography variant={"h3"} fontWeight={400} sx={{ display: "inline-flex" }}>
    <SchoolSharpIcon
      fontSize="large"
      sx={{ width: "0.9em", height: "0.9em", color: "#F89C27" }}
    />
    {text}
    <br />
    <br />
  </Typography>
);

const WorldClassFrame: React.FC = () => {
  const { t } = useTranslation();

  let history = useHistory();
  const handleClick = (path: string) => {
    history.push(`/${path}`);
  };
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        px: isMobile ? "20px" : "73px",
        flexDirection: "column",
      }}
    >
      <Typography variant={"h2"} mx="auto" textAlign="center" gutterBottom>
        {t("WorldClassFrame.title")}
      </Typography>
      <Typography variant={"h2"} fontFamily="Open Sans" mx="auto">
        {t("WorldClassFrame.subtitle")}
      </Typography>
      <Grid container spacing={{ md: 12, xs: 5 }}>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant={"h3"} fontWeight={400}>
            {t("WorldClassFrame.intro")}
            <br />
            <br />
            <IconTypography text={t("WorldClassFrame.iconText1")} />
            <IconTypography text={t("WorldClassFrame.iconText2")} />
            <IconTypography text={t("WorldClassFrame.iconText3")} />
            <IconTypography text={t("WorldClassFrame.iconText4")} />
            <IconTypography text={t("WorldClassFrame.iconText5")} />
          </Typography>
        </Grid>
        <Grid item md={4} xs={12} order={{ xs: -1, md: 1 }}>
          <ResizableImage src={"/homePage/worldClass.webp"} />
        </Grid>
      </Grid>
      <Box marginX="auto" mt="5vh">
        <OrangeHighlightButton onClick={() => handleClick("approach")}>
          <Typography variant={"h3"} fontFamily="Open Sans Bold">
            {t("WorldClassFrame.button")}
          </Typography>
        </OrangeHighlightButton>
      </Box>
    </Box>
  );
};

export default WorldClassFrame;
