import * as React from "react";
import Box from "@mui/joy/Box";
import { useMediaQuery, Typography } from "@mui/material";
import Card from "@mui/joy/Card";
import feedbacks from "../../assets/feedback.json";
import { useTranslation } from "react-i18next";
import theme from "../../elements/Theme";
import { Fullscreen } from "@mui/icons-material";

const FeedbackCarouselFrame: React.FC = () => {
  const { t, i18n } = useTranslation();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ px: 2, py: 10 }}>
      <Typography
        variant={isMobile ? "h2" : "h1"}
        fontFamily="Open Sans Bold"
        sx={{ mb: "2vh" }}
        textAlign="center"
      >
        {t("FeedbackCarouselFrame.title")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "1vh",
          py: "5vh",
          overflow: "auto",
          width: "full",
          scrollSnapType: "x mandatory",
          "& > *": {
            scrollSnapAlign: "center",
          },
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {feedbacks.map((item, index) => (
          <Card
            orientation="horizontal"
            size="lg"
            key={index}
            variant="outlined"
            sx={{
              minWidth: isMobile ? "50vh" : "40vh",
              minHeight: isMobile ? "30vh" : "40vh",
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                whiteSpace: "normal",
                mx: 1,
                maxWidth: isMobile ? "40vh" : "30vh",
              }}
            >
              <Typography variant="h3" fontWeight={"bold"}>
                Rating: {item.rating} ⭐
              </Typography>
              <Typography variant="h4">{item.name}</Typography>
              <Typography variant="body1" fontStyle={"italic"}>
                {item.comment}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
export default FeedbackCarouselFrame;
