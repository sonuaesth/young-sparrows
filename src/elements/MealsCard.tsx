import React from "react";
import theme from "../elements/Theme";
import { Avatar, Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

interface MealsCardProps {
  day: string;
  breakfast: string;
  fruitsnack: string;
  lunch: string;
  afternoonsnack: string;
  images: string[];
}

const MealsCard: React.FC<MealsCardProps> = ({
  day,
  breakfast,
  fruitsnack,
  lunch,
  afternoonsnack,
  images,
}) => {
  const { t } = useTranslation();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Create a helper array
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // Find the index of the current day in the helper array
  const dayIndex = daysOfWeek.indexOf(day);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        px: "73px",
      }}
    >
      <Typography
        variant={"h3"}
        fontWeight={800}
        color={theme.palette.text.disabled}
        mb={2}
      >
        {t(day)}
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant={"h5"}
            fontWeight={800}
            color={theme.palette.text.disabled}
          >
            {t("Breakfast")}
          </Typography>
          <Typography variant={"h5"} fontWeight={400}>
            {t(breakfast)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant={"h5"}
            fontWeight={800}
            color={theme.palette.text.disabled}
          >
            {t("Fruit Snack")}
          </Typography>
          <Typography variant={"h5"} fontWeight={400}>
            {t(fruitsnack)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant={"h5"}
            fontWeight={800}
            color={theme.palette.text.disabled}
          >
            {t("Lunch")}
          </Typography>
          <Typography variant={"h5"} fontWeight={400}>
            {t(lunch)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant={"h5"}
            fontWeight={800}
            color={theme.palette.text.disabled}
          >
            {t("Afternoon Snack")}
          </Typography>
          <Typography variant={"h5"} fontWeight={400}>
            {t(afternoonsnack)}
          </Typography>
        </Grid>
        {isMobile &&
          images.map(
            (image, index) =>
              index === dayIndex && (
                <Grid item xs={12} key={index}>
                  <br />
                  <Avatar
                    alt="meal"
                    src={image}
                    sx={{
                      width: "200px",
                      height: "200px",
                      "& .MuiAvatar-img": {
                        objectFit: "contain",
                      },
                    }}
                  />
                </Grid>
              )
          )}
      </Grid>
    </Box>
  );
};

export default MealsCard;
