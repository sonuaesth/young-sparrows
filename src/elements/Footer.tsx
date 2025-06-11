import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import theme from "../elements/Theme";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import SocialMediaIcon from "./SocialMediaIcon";
import { Telegram, WhatsApp } from "@mui/icons-material";
import ResizableImage from "./ResizableImage";

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  let currentLanguage = i18n.language;

  const isMobile = useMediaQuery("(max-width:900px)");

  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMapLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: "20vh",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          px={isMobile ? "20px" : "73px"}
          sx={{
            backgroundColor: theme.palette.secondary.main,
          }}
        >
          <Typography variant="h3" fontWeight={800} color="white" mt={5} mb={2}>
            {t("Footer.title")}
          </Typography>
          <Typography variant="h5" color="white" fontWeight="400" mb={2}>
            {t("Footer.subtitle")}
          </Typography>
          <a href="tel:+381606062011" style={{ textDecoration: "none" }}>
            <Box
              sx={{ display: "flex", alignItems: "center", color: "info.main" }}
            >
              <LocalPhoneIcon />
              <Typography variant="h5" color="white" fontWeight={700} ml={2}>
                +381 60 606 2011
              </Typography>
            </Box>
          </a>
          <a
            href="mailto:office@youngsparrows.com"
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", color: "info.main" }}
            >
              <EmailIcon />
              <Typography
                variant="h5"
                color="white"
                fontWeight={700}
                ml={2}
                mt={1}
                mb={1}
              >
                office@youngsparrows.com
              </Typography>
            </Box>
          </a>
          <Box
            sx={{ display: "flex", alignItems: "center", color: "info.main" }}
          >
            <LocationOnIcon />
            <Typography variant="h5" color="white" fontWeight={700} ml={2}>
              Radoslava Grujića 7, Beograd 11000,  {currentLanguage === "en" ? "Serbia" : currentLanguage === "ru" ? "Сербия" : "Srbija"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <SocialMediaIcon href={"https://www.instagram.com/young.sparrows/"}>
              <InstagramIcon color={"info"} fontSize={"large"} />
            </SocialMediaIcon>
            <SocialMediaIcon href={"https://t.me/+381606062011"}>
              <Telegram color={"info"} fontSize={"large"} />
            </SocialMediaIcon>
            <SocialMediaIcon href={"https://wa.me/381606062011"}>
              <WhatsApp color={"info"} fontSize={"large"} />
            </SocialMediaIcon>
          </Box>
          <a
            href="https://kindergarten-littlesparrows.com/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
              <Box width={100}>
                <ResizableImage src="/logo192.webp" alt="Little Sparrows Kindergarten" />
              </Box>
              <Typography
                variant="h5"
                color="white"
                fontWeight={700}
                ml={2}
                sx={{ textDecoration: "underline" }}
              >
                {t("Footer.text")}
              </Typography>
            </Box>
          </a>
        </Grid>
        <Grid item xs={12} md={6} order={{ md: 1, xs: -1 }}>
        {isMapLoaded ? (
          <iframe
            title="map"
            src={`https://www.google.com/maps/embed/v1/place?q=7,+Radoslava+Grujica+Street,+Belgrade,+Serbia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&language=${currentLanguage === "en" ? "en" : currentLanguage === "ru" ? "ru" : "sr-Latn"}`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
          />
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", border: "2px solid #F89C27" }}>
              <Typography variant="h5" color="#F89C27" fontWeight="400">
                {t("Footer.textLoading")}
              </Typography>
          </Box>
        )}
        </Grid>
      </Grid>

      <Box
        sx={{
          backgroundColor: theme.palette.secondary.dark,
          display: "flex",
          flexDirection: "row",
          px: isMobile ? "20px" : "73px",
          height: "100px",
          alignItems: "center",
        }}
      >
        {!isMobile && (
          <>
            <ResizableImage src={"/eralyYearsCambridgeFooter.webp"} alt="Cambridge | Early Years Centre" />
            <Box sx={{ flexGrow: 1 }} />
            <ResizableImage src={"/anotherCambridgeFooter.webp"} alt="Cambridge Assessment | International Education" />
            <Box sx={{ flexGrow: 1 }} />
            <ResizableImage src={"/gerbSerb.webp"} alt="Ministry of Education of the Republic of Serbia" />
          </>
        )}
      </Box>
    </Box>
  );
};

export default Footer;
