import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import theme from "../../elements/Theme";
import { meals } from "./menu-week";
import { images_week1, images_week2 } from "./food-images";
import MealsCard from "../../elements/MealsCard";
import ImagesCard from "../../elements/ImagesCard";

const NutritionFrame: React.FC = () => {
  const { t } = useTranslation();

  const [week, setWeek] = React.useState<string>("week1");
  const [images, setImages] = React.useState<string[]>(images_week1);
  const [animate, setAnimate] = React.useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const textColor = theme.palette.text;

  const handleClick = () => {
    setAnimate(true);
    const timer = setTimeout(() => {
      setAnimate(false);
      if (week === "week1") {
        setImages(images_week2);
        setWeek("week2");
      } else {
        setImages(images_week1);
        setWeek("week1");
      }
    }, 300);
    return () => clearTimeout(timer);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      px={isMobile ? "20px" : "73px"}
      mb={isMobile ? "10vh" : "20vh"}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
        my="5vh"
      >
        <Button
          sx={{
            borderRadius: "53px",
            backgroundColor:
              week === "week1" ? textColor.disabled : textColor.secondary,
            paddingLeft: "20px",
            paddingRight: "20px",
            "&:hover": {
              backgroundColor:
                week === "week1" ? textColor.disabled : textColor.secondary,
            },
          }}
          onClick={handleClick}
        >
          <Typography
            variant="h3"
            color={week === "week1" ? textColor.secondary : textColor.disabled}
            sx={{
              transition:
                "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
            }}
          >
            {t("NutritionFrame.Week I")}
          </Typography>
        </Button>
        <Button
          onClick={handleClick}
          sx={{
            borderRadius: "53px",
            backgroundColor:
              week === "week2" ? textColor.disabled : textColor.secondary,
            paddingLeft: "20px",
            paddingRight: "20px",
            "&:hover": {
              backgroundColor:
                week === "week2" ? textColor.disabled : textColor.secondary,
            },
          }}
        >
          <Typography
            variant="h3"
            color={week === "week2" ? textColor.secondary : textColor.disabled}
            sx={{
              transition:
                "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
            }}
          >
            {t("NutritionFrame.Week 2")}
          </Typography>
        </Button>
      </Box>
      <Grid
        overflow="hidden"
        container
        sx={{ py: "20px" }}
      >
        {!isMobile && (
          <>
            <Grid item xs={12} md={4}>
              <Grid container sx={{ height: "100%" }}>
                {images.map((image) => {
                  return (
                    <Grid
                      item
                      xs={2.4}
                      md={12}
                      sx={{
                        opacity: animate ? 0 : 1,
                        transition: "opacity 0.3s ease-in-out",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <ImagesCard image={image} />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </>
        )}
        <Grid item xs={12} md={8} sx={{ marginTop: isMobile ? "24px" : "0px" }}>
          <Grid container spacing={3}>
            {meals[week].map((subject) => {
              return (
                <Grid
                  item
                  xs={12}
                  sx={{
                    opacity: animate ? 0 : 1,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p="1vh"
                    px={"0px"}
                  >
                    <MealsCard
                      day={subject.day}
                      breakfast={subject.breakfast}
                      fruitsnack={subject.fruitsnack}
                      lunch={subject.lunch}
                      afternoonsnack={subject.afternoonsnack}
                      images={images}
                    />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NutritionFrame;
