import React from "react";
import { useTranslation } from "react-i18next";
import theme from "../../elements/Theme";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";

export interface IconTypographyI {
  variant: any;
  text: string;
  isMobile: boolean;
}

const IconTypography = ({ variant, text, isMobile }: IconTypographyI) => (
  <Typography
    variant={variant}
    mb={isMobile ? 2 : 0}
    sx={{
      display: "inline-flex",
      alignItems: isMobile ? "center" : "start",
      gap: 1,
    }}
  >
    <SchoolSharpIcon
      fontSize="large"
      sx={{
        width: "0.8em",
        height: "0.8em",
        color: theme.palette.secondary.main,
      }}
    />
    {text}
    <br />
  </Typography>
);

const SkillFrame: React.FC = () => {
  const { t } = useTranslation();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const lines = [
    t("SkillFrame.line1"),
    t("SkillFrame.line2"),
    t("SkillFrame.line3"),
    t("SkillFrame.line4"),
    t("SkillFrame.line5"),
  ];
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        border: `3px solid ${theme.palette.secondary.main}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: isMobile ? "15px" : "73px",
        m: isMobile ? "5vh" : "10vh",
      }}
    >
      <Typography
        variant="h3"
        mx="auto"
        mb="2rem"
        textAlign="center"
        fontFamily="Open Sans Bold"
        color={theme.palette.secondary.main}
      >
        {t("SkillFrame.title")}
      </Typography>
      {isMobile ? (
        <Box>
          {lines.map((line) => (
            <IconTypography variant="h3" text={line} isMobile={isMobile} />
          ))}
        </Box>
      ) : (
        <Box display="flex" alignItems="center" width="100%">
          <Grid
            container
            spacing={2}
          >
            {lines.map((line) => (
              <Grid
                item
                xs={4}
                sx={{ justifyContent: "start", alignItems: "start" }}
              >
                <IconTypography variant="h5" text={line} isMobile={isMobile} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default SkillFrame;
