import * as React from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { useMediaQuery } from "@mui/material";
import Card from "@mui/joy/Card";
import feedbacks from "../../assets/feedback.json";
import { useTranslation } from "react-i18next";
import theme from "../../elements/Theme";
import { Fullscreen } from "@mui/icons-material";

const FeedbackCarouselFrame: React.FC = () => {
  const { t, i18n } = useTranslation();
  let currentLanguage = i18n.language || "en";

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ px: 2, py: 15 }}>
      <Typography
        fontFamily="Open Sans Bold"
        level="h1"
        sx={{ mb: 2 }}
        textAlign="center"
      >
        {t("FeedbackCarouselFrame.title")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          py: 5,
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
            sx={{ minWidth: 300, minHeight: 400, alignItems: "start" }}
          >
            <Box
              sx={{
                whiteSpace: "normal",
                mx: 1,
                maxWidth: 200,
              }}
            >
              <Typography
                fontSize={"xl3"}
                fontWeight={"bold"}
                level="body-xs"
                sx={{ mt: 0.5 }}
              >
                Rating: {item.rating} ⭐
              </Typography>
              <Typography fontSize={"xl"} level="title-md">
                {item.name}
              </Typography>
              <Typography fontSize={"md"} fontStyle={"italic"} level="body-sm">
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
