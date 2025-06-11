import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import theme from "../../elements/Theme";
import { pricing } from "./pricing";

export interface IconTypographyI {
  text: string;
}

const IconTypography = ({ text }: IconTypographyI) => (
  <Typography
    variant={"h5"}
    fontWeight={400}
    mx="auto"
    sx={{ display: "inline-flex", alignItems: "center" }}
  >
    <FiberManualRecordRoundedIcon
      fontSize="large"
      sx={{
        width: "0.9em",
        height: "0.9em",
        color: theme.palette.secondary.main,
      }}
    />
    {text}
    <br />
  </Typography>
);

const PricingFrame: React.FC = () => {
  const { t } = useTranslation();

  let [year, setYear] = useState("year1");
  const [animate, setAnimate] = useState(false);

  const textColor = theme.palette.text;
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleClick = (selectedYear: string) => {
    setAnimate(true);
    const timer = setTimeout(() => {
      setAnimate(false);
      setYear(selectedYear);
    }, 300);
    return () => clearTimeout(timer);
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        px: isMobile ? "20px" : "73px",
        display: "flex",
        flexDirection: "column",
        mb: isMobile ? "10vh" : "20vh",
      }}
    >
      <Typography
        variant="h3"
        mx="auto"
        textAlign="center"
        mb="3rem"
        fontFamily="Open Sans Bold"
        color={theme.palette.secondary.main}
      >
        {t("PricingFrame.title")}
      </Typography>
      <Box display="flex" flexDirection="row" justifyContent="space-evenly">
        <Button
          sx={{
            borderRadius: "53px",
            backgroundColor:
              year === "year1" ? textColor.disabled : textColor.secondary,
            paddingLeft: "20px",
            paddingRight: "20px",
            "&:hover": {
              backgroundColor:
                year === "year1" ? textColor.disabled : textColor.secondary,
            },
          }}
          onClick={() => handleClick("year1")}
        >
          <Typography
            variant="h3"
            color={year === "year1" ? textColor.secondary : textColor.disabled}
            sx={{
              transition:
                "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
            }}
          >
            {t("PricingFrame.year1")}
          </Typography>
        </Button>
        <Button
          sx={{
            borderRadius: "53px",
            backgroundColor:
              year === "year2" ? textColor.disabled : textColor.secondary,
            paddingLeft: "20px",
            paddingRight: "20px",
            "&:hover": {
              backgroundColor:
                year === "year2" ? textColor.disabled : textColor.secondary,
            },
          }}
          onClick={() => handleClick("year2")}
        >
          <Typography
            variant="h3"
            color={year === "year2" ? textColor.secondary : textColor.disabled}
            sx={{ transition: "color 0.3s ease-in-out" }}
          >
            {t("PricingFrame.year2")}
          </Typography>
        </Button>
        <Button
          sx={{
            borderRadius: "53px",
            backgroundColor:
              year === "year3" ? textColor.disabled : textColor.secondary,
            paddingLeft: "20px",
            paddingRight: "20px",
            "&:hover": {
              backgroundColor:
                year === "year3" ? textColor.disabled : textColor.secondary,
            },
          }}
          onClick={() => handleClick("year3")}
        >
          <Typography
            variant="h3"
            color={year === "year3" ? textColor.secondary : textColor.disabled}
            sx={{ transition: "color 0.3s ease-in-out" }}
          >
            {t("PricingFrame.year3")}
          </Typography>
        </Button>
      </Box>
      <Typography
        variant="h3"
        mx="auto"
        mt={isMobile ? "2.5rem" : "4.5rem"}
        fontFamily="Open Sans Bold"
      >
        {year === "year1"
          ? t("PricingFrame.noteYear1")
          : year === "year2"
          ? t("PricingFrame.noteYear2")
          : t("PricingFrame.noteYear3")}
      </Typography>
      <Typography
        variant="h5"
        mx="auto"
        textAlign="center"
        mb={isMobile ? "2.5rem" : "4.5rem"}
      >
        {year === "year1"
          ? t("PricingFrame.equivalentYear1")
          : year === "year2"
          ? t("PricingFrame.equivalentYear2")
          : t("PricingFrame.equivalentYear3")}
      </Typography>
      <Box display="flex" justifyContent="center">
        <Grid
          container
          spacing={2}
          justifyContent="center"
          xs={12}
          md={10}
          lg={8}
          sx={{
            opacity: animate ? 0 : 1,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          {Object.values(pricing[year]).map((price, index) => (
            <Grid
              item
              xs={12}
              md={6}
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Typography variant="h3" fontFamily="Open Sans Bold" gutterBottom>
                {t(price.title)}
              </Typography>
              {price.title !== "Optional lessons:" &&
              price.title !== "Optional offer:"
                ? price.text.map((line, lineIndex) => (
                    <Typography
                      variant="h5"
                      fontWeight={400}
                      sx={{ display: "inline-flex", alignItems: "center" }}
                    >
                      <FiberManualRecordRoundedIcon
                        fontSize="large"
                        sx={{ color: theme.palette.secondary.main }}
                      />
                      {t(line)}
                    </Typography>
                  ))
                : price.text.map((line, lineIndex) => (
                    <Typography
                      variant="h5"
                      fontWeight={400}
                      sx={{ display: "inline-flex", alignItems: "center" }}
                    >
                      <AddIcon
                        fontSize="large"
                        sx={{ color: theme.palette.secondary.main }}
                      />
                      {t(line)}
                    </Typography>
                  ))}
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        mx="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt="5vh"
        mb="2vh"
      >
        <Box display="flex" flexWrap="wrap" justifyContent="center" mb="1vh">
          <Typography variant="h3" fontWeight={400}>
            {t("PricingFrame.tuition")}
          </Typography>
          &nbsp;
          <Typography
            variant="h3"
            color={textColor.disabled}
            fontFamily="Open Sans Bold"
            // sx={{ textDecoration: "line-through" }}
          >
            {year === "year1"
              ? t("PricingFrame.priceYear1")
              : year === "year2"
              ? t("PricingFrame.priceYear2")
              : t("PricingFrame.priceYear3")}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row">
          <Typography variant="h3" fontFamily="Open Sans Bold">
            {t("PricingFrame.earlybird")}
          </Typography>
          &nbsp;
          <Typography
            variant="h3"
            color={textColor.disabled}
            fontFamily="Open Sans Bold"
          >
            {year === "year1"
              ? t("PricingFrame.priceYear1earlybird")
              : year === "year2"
              ? t("PricingFrame.priceYear2earlybird")
              : t("PricingFrame.priceYear3earlybird")}
          </Typography>
          &nbsp;
          <Typography variant="h3" fontFamily="Open Sans Bold">
            {t("PricingFrame.until")} 30.4.2025
          </Typography>
        </Box>
      </Box>
      <Box mb="6vh" sx={{ display: "flex", flexDirection: "column" }}>
        <IconTypography text={t("PricingFrame.iconText1")} />
        <IconTypography text={t("PricingFrame.iconText2")} />
        <IconTypography text={t("PricingFrame.iconText3")} />
        <IconTypography text={t("PricingFrame.iconText4")} />
      </Box>
      {/* <Typography variant='h3' mx='auto' fontFamily='Open Sans Bold' gutterBottom>
                Optional fees (per month):
      </Typography> */}
      <Box display="flex" justifyContent="center" width="100%">
        <Grid
          container
          justifyContent="center"
          spacing={2}
          xs={12}
          md={10}
          lg={8}
        >
          <Grid item xs={12}>
            <Typography variant="h3" fontFamily="Open Sans Bold" gutterBottom>
              {t("PricingFrame.optionalFees")}
            </Typography>
          </Grid>
          {Object.values(
            pricing[year === "year1" ? "optional1" : "optional2"]
          ).map((price, index) => (
            <Grid
              item
              xs={12}
              key={index}
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                fontWeight={600}
                sx={{ color: theme.palette.secondary.main }}
              >
                {t(price.title)}
              </Typography>
              {price.text.map((line, lineIndex) => (
                <Typography variant="h5" fontWeight={400}>
                  {t(line)}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PricingFrame;
