import React from "react";
import { useTranslation } from "react-i18next";
import theme from "../../elements/Theme";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";

const VideoFrame: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLaptop = useMediaQuery(theme.breakpoints.up("lg"));
  const lines = [
    t("videoFrame.line1"),
    t("videoFrame.line2"),
    t("videoFrame.line3"),
    t("videoFrame.line4"),
    t("videoFrame.line5"),
    t("videoFrame.line6"),
    t("videoFrame.line7"),
    t("videoFrame.line8"),
  ];

  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        paddingLeft: isMobile ? "20px" : "73px",
        paddingRight: isMobile ? "20px" : "73px",
      }}
    >
      <Typography
        variant="h2"
        fontWeight="800"
        mx="auto"
        textAlign="center"
        gutterBottom
      >
        {t("videoFrame.title")}
      </Typography>
      <Typography
        variant="h2"
        fontFamily="Open Sans"
        mx="auto"
        textAlign="center"
      >
        {t("videoFrame.subtitle")}
      </Typography>
      <a
        href="https://kindergarten-littlesparrows.com/"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Typography
          variant="h5"
          color={theme.palette.secondary.main}
          fontWeight={700}
          textAlign="center"
          sx={{ textDecoration: "underline", mb: 4 }}
        >
          {t("videoFrame.textLink")}
        </Typography>
      </a>
      <Grid container spacing="5">
        <Grid item xs={12} lg={4}>
          <Box
            display="flex"
            justifyContent={!isMobile && !isLaptop ? "center" : "left"}
            height="100%"
          >
            <Grid
              container
              spacing={2}
              xs={11}
              md={11}
              lg={12}
              sx={{ marginTop: isMobile ? 1 : 0 }} // Add margin top for mobile
            >
              {lines.map((line, index) => (
                <Grid item xs={12} md={6} lg={12} key={index}>
                  <Typography
                    variant="h3"
                    fontWeight="400"
                    sx={{ display: "inline-flex" }}
                  >
                    <SchoolSharpIcon
                      fontSize="large"
                      sx={{ color: theme.palette.secondary.main }}
                    />
                    {line}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} lg={8} order={isLaptop ? 1 : -1}>
          <Box
            width={{ ms: "70%", xs: "100%" }}
            mx="auto"
            style={{
              padding: "5px",
              border: "1px solid #009dda",
              boxShadow: "rgba(0, 157, 218, 0.6) 0px 0px 10px 5px inset",
            }}
          >
            <video
              width="100%"
              controls
              autoPlay
              loop
              muted
              poster="/homePage/cover-page.webp"
            >
              <source src="sample-5s.mp4" type="video/mp4" />
            </video>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VideoFrame;
