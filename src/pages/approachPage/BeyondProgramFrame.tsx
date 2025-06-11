import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import theme from "../../elements/Theme";
import ResizableImage from "../../elements/ResizableImage";

export interface IconTypographyI {
  text: string;
  isMobile: boolean;
}

const IconTypography = ({ text, isMobile }: IconTypographyI) => (
  <Typography
    variant={"h3"}
    fontWeight={400}
    mb={isMobile ? 2 : 0}
    sx={{ display: "inline-flex", alignItems: isMobile ? "center" : "start" }}
  >
    <SchoolSharpIcon
      fontSize="large"
      sx={{ color: theme.palette.secondary.main }}
    />
    {text}
    <br />
  </Typography>
);

const BeyondProgramFrame: React.FC = () => {
  const { t } = useTranslation();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        px: isMobile ? "20px" : "73px",
        flexDirection: "column",
        mt: isMobile ? "5vh" : "10vh",
      }}
    >
      <Typography mx="auto" variant="h2" textAlign="center" gutterBottom>
        {t("BeyondProgramFrame.title")}
      </Typography>
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
            justifyContent: "space-between",
          }}
          md={7}
          xs={12}
        >
          <Typography
            variant={"h3"}
            fontWeight={800}
            mt={4}
            sx={{
              display: "flex",
              alignItems: "center",
              color: theme.palette.secondary.main,
            }}
          >
            {t("BeyondProgramFrame.subtitle")}
            <Diversity1Icon
              fontSize="large"
              sx={{ ml: isMobile ? 2 : 4, color: theme.palette.secondary.main }}
            />
          </Typography>
          <br />
          <Typography variant={"h3"} fontWeight={400}>
            {t("BeyondProgramFrame.text1")}
            <br />
            <br />
          </Typography>
          <Typography variant={"h3"} fontWeight={400}>
            {t("BeyondProgramFrame.text2")}
            {!isMobile && (
              <>
                <br />
                <br />
              </>
            )}
          </Typography>
          {!isMobile && (
            <>
              <IconTypography
                text={t("BeyondProgramFrame.iconText1")}
                isMobile={isMobile}
              />
              <IconTypography
                text={t("BeyondProgramFrame.iconText2")}
                isMobile={isMobile}
              />
              <IconTypography
                text={t("BeyondProgramFrame.iconText3")}
                isMobile={isMobile}
              />
            </>
          )}
        </Grid>
        <Grid item md={5}>
          <ResizableImage src={"/approachPage/extension.webp"} />
          {isMobile && (
            <>
              <IconTypography
                text={t("BeyondProgramFrame.iconText1")}
                isMobile={isMobile}
              />
              <IconTypography
                text={t("BeyondProgramFrame.iconText2")}
                isMobile={isMobile}
              />
              <IconTypography
                text={t("BeyondProgramFrame.iconText3")}
                isMobile={isMobile}
              />
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default BeyondProgramFrame;
