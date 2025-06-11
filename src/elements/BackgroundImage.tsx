import React from "react";
import { Box, Container, useMediaQuery } from "@mui/material";
import theme from "./Theme";
import { useTranslation } from "react-i18next";

interface BackgroundImageProps {
  imageUrl?: string;
  altImage?: string;
  children: React.ReactNode;
  isApproachPage?: boolean;
  isPricingPage?: boolean;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  imageUrl,
  altImage,
  children,
  isApproachPage,
  isPricingPage,
}) => {

  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      sx={{
        position: "relative",
        height: "100vh",
        maxWidth: "none !important",
      }}
    >
      <Box 
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          "::before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor:
             isApproachPage ? 'rgba(255, 218, 185, .2)' : (isPricingPage ? 'rgba(0, 0, 0, 0.15)' : 'rgba(0, 0, 0, 0.35)'),
            zIndex: 1,
          },
        }}>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={altImage ? t(`SEO.${altImage}`) : "Image"}
          loading="eager"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
          }}
        />
      )}
      </Box>
      <Box
        sx={{ position: "relative", zIndex: 2, px: isMobile ? "20px" : "73px" }}
      >
        {children}
      </Box>
    </Container>
  );
};

export default BackgroundImage;
