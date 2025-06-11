import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, SvgIcon, Typography, useMediaQuery } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import theme from "../../elements/Theme";
import ResizableImage from "../../elements/ResizableImage";

const AcademicDirectorQuoteFrame: React.FC = () => {
  const { t, i18n } = useTranslation();
  let currentLanguage = i18n.language;

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        p: isMobile ? "20px" : "73px",
        mt: isMobile ? "10vh" : "20vh",
        mx: "5vh",
        border: `2px solid ${theme.palette.secondary.main}`,
        boxShadow: `0px 0px 10px ${theme.palette.secondary.main}`,
        borderRadius: "16px",
      }}
    >
      <Typography
        variant="h2"
        mx="auto"
        mb="5vh"
        textAlign="center"
        color={theme.palette.secondary.main}
      >
        {t("AcademicDirectorQuoteFrame.title")}
      </Typography>
      <Grid container spacing={isMobile ? 5 : 20}>
        <Grid
          item
          xs={12}
          md={7}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant={"h3"} fontFamily="Open Sans Light Italic">
            {currentLanguage !== "ru" ? (
              <FormatQuoteIcon
                sx={{
                  transform: "rotate(180deg)",
                  color: theme.palette.secondary.main,
                }}
              />
            ) : (
              <SvgIcon>
                <text x="0" y="24" fontFamily="Arial" fontSize="30" color={theme.palette.secondary.main}>
                «
                </text>
              </SvgIcon>
            )}

            {t("AcademicDirectorQuoteFrame.quote1")}
            <br />
            <br />

            {t("AcademicDirectorQuoteFrame.quote2")}
            <br />
            <br />

            {t("AcademicDirectorQuoteFrame.quote3")}
            {currentLanguage !== "ru" ? (
              <FormatQuoteIcon sx={{ color: theme.palette.secondary.main }} />
            ) : (
              <SvgIcon>
                <text x="0" y="24" fontFamily="Arial" fontSize="30" color={theme.palette.secondary.main}>
                »
                </text>
              </SvgIcon>
            )}
            <br />
            <br />
          </Typography>
          <Typography
            variant={"h5"}
            fontWeight={400}
            color={theme.palette.secondary.main}
          >
            <b>Danielle Bogicevic</b>,<br />
            {t("AcademicDirectorQuoteFrame.charge")}
          </Typography>
        </Grid>
        <Grid item xs={6} md={5} order={isMobile ? -1 : 1}>
          <ResizableImage
            src={"/homePage/AcademicDirector.webp"}
            alt={`Danielle Bogicevic, ${t("AcademicDirectorQuoteFrame.charge")}`}
            maxWidth={isMobile ? "140%" : "100%"}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AcademicDirectorQuoteFrame;
