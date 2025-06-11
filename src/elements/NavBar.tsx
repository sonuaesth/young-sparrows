import React, { useEffect, useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "./Theme";
import ResizableImage from "./ResizableImage";
import SocialMediaIcon from "./SocialMediaIcon";
import { Telegram, WhatsApp } from "@mui/icons-material";
import NavButton from "./NavButton";
import LanguageSwitch from "./LanguageSwitch";
import { useHistory, useLocation } from "react-router-dom";
import { blogs } from "../pages/blogPage/blog-collection";
import RedButton from "./RedButton";

const NavBar: React.FC<{ textColor?: string }> = ({ textColor }) => {
  const { i18n, t } = useTranslation();
  let currentLanguage_ = i18n.language || "en";
  const history = useHistory();
  const location = useLocation();

  const [currentLanguage, setCurrentLanguage] =
    useState<string>(currentLanguage_);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [iconWidth, setIconWidth] = useState<number>(0);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLaptop = useMediaQuery(theme.breakpoints.down("lg"));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIconWidth(70);
    } else {
      setIconWidth(scrolled ? 115 : 135);
    }
  }, [isMobile, scrolled]);

  useEffect(() => {
    setCurrentLanguage(currentLanguage_);
  }, [currentLanguage_]);

  const handleRedirection = () => {
    const path =
      currentLanguage === "en" ? "/enroll" : `/${currentLanguage}/enroll`;
    history.push(path);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleChangeLanguage = (languageCode: string) => {
    setCurrentLanguage(languageCode);
    i18n.changeLanguage(languageCode);

    let cleanPath = location.pathname.replace(/^\/(en|ru|sr)?(\/.*)?$/, "$2");
    const isBlogRoute = cleanPath.startsWith("/blog/");

    if (isBlogRoute) {
      const blogSlugFromUrl = cleanPath.split("/")[2];
      const blogData = blogs.find(
        (blog) => blog.slugs?.[currentLanguage_] === blogSlugFromUrl
      );

      if (blogData) {
        const blogSlug = blogData?.slugs?.[languageCode];

        if (blogSlug) {
          if (languageCode !== "en") {
            const route = `/${languageCode}/blog/${blogSlug}`;
            history.push(route);
          } else {
            const route = `/blog/${blogSlug}`;
            history.push(route);
          }
        }
      } else {
        const newPath =
          languageCode === "en" ? cleanPath : `/${languageCode}${cleanPath}`;
        history.push(newPath);
      }
    } else {
      const newPath =
        languageCode === "en" ? cleanPath : `/${languageCode}${cleanPath}`;
      history.push(newPath);
    }
  };

  const buttons = [
    {
      text: t("navbar.Home"),
      route: currentLanguage === "en" ? "/" : `/${currentLanguage}`,
    },
    {
      text: t("navbar.Why us"),
      route:
        currentLanguage === "en" ? "/approach" : `/${currentLanguage}/approach`,
    },
    {
      text: t("navbar.News"),
      route: currentLanguage === "en" ? "/blog" : `/${currentLanguage}/blog`,
    },
    {
      text: t("navbar.Program"),
      route:
        currentLanguage === "en"
          ? "/our-program"
          : `/${currentLanguage}/our-program`,
    },
    {
      text: t("navbar.Pricing"),
      route:
        currentLanguage === "en" ? "/pricing" : `/${currentLanguage}/pricing`,
    },
    {
      text: t("navbar.Enroll"),
      route:
        currentLanguage === "en" ? "/enroll" : `/${currentLanguage}/enroll`,
    },
  ];

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      //onClick={handleDrawerClose}
      onKeyDown={handleDrawerClose}
    >
      <List>
        {buttons.map((buttonData) => (
          <ListItem key={buttonData.route}>
            <NavButton
              route={buttonData.route}
              children={buttonData.text}
              textColor={"black"}
            />
          </ListItem>
        ))}
        <ListItem>
          <LanguageSwitch
            currentLanguage={currentLanguage}
            onChange={handleChangeLanguage}
            isMobile={isMobile}
          />
        </ListItem>
        {/* <ListItem>
          <SocialMediaIcon href={"https://t.me/+381606062011"}>
            <Telegram color={"warning"} fontSize={"large"} />
          </SocialMediaIcon>
          <SocialMediaIcon href={"https://wa.me/381606062011"}>
            <WhatsApp color={"warning"} fontSize={"large"} />
          </SocialMediaIcon>
        </ListItem> */}
      </List>
    </Box>
  );

  return (
    <Box
      alignItems={isMobile || scrolled ? "center" : "start"}
      padding={isMobile || scrolled ? "8px" : "25px"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? "white" : "transparent",
        transition: "all 0.3s ease-in-out",
        width: "100%",
      }}
    >
      <Box width={iconWidth}>
        <ResizableImage
          src="/logo.webp"
          alt="Primary International School Belgrade | Young Sparrows"
        />
      </Box>
      {isMobile ? (
        <>
          {location.pathname !== `/${currentLanguage}/enroll` &&
            location.pathname !== "/enroll" && (
              <RedButton onClick={handleRedirection}>
                <Typography
                  variant="subtitle1"
                  color={theme.palette.text.secondary}
                  fontFamily="Open Sans Bold"
                >
                  {t("mainPage.buttonText")}
                </Typography>
              </RedButton>
            )}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon color={scrolled ? "secondary" : "primary"} />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
            {drawer}
          </Drawer>
        </>
      ) : (
        <>
          {buttons.map((buttonData) => (
            <NavButton
              key={buttonData.route}
              route={buttonData.route}
              children={buttonData.text}
              textColor={scrolled ? "black" : textColor}
            />
          ))}
          <LanguageSwitch
            currentLanguage={currentLanguage}
            onChange={handleChangeLanguage}
            scrolled={scrolled}
          />
          {location.pathname !== `/${currentLanguage}/enroll` &&
            location.pathname !== "/enroll" && (
              <RedButton onClick={handleRedirection}>
                <Typography
                  variant="subtitle1"
                  color={theme.palette.text.secondary}
                  fontFamily="Open Sans Bold"
                >
                  {t("mainPage.buttonText")}
                </Typography>
              </RedButton>
            )}
        </>
      )}
      {!isLaptop && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "fit-content",
            maxHeight: "45px",
            borderRadius: "30px",
            backgroundColor: theme.palette.secondary.main,
          }}
        >
          <SocialMediaIcon href={"https://t.me/+381606062011"}>
            <Telegram color={"info"} fontSize={"large"} />
          </SocialMediaIcon>
          <SocialMediaIcon href={"https://wa.me/381606062011"}>
            <WhatsApp color={"info"} fontSize={"large"} />
          </SocialMediaIcon>
        </Box>
      )}
      {isLaptop && (
        <Box
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            padding: "10px",
            borderRadius: "30px",
            backgroundColor: theme.palette.secondary.main,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            zIndex: 1200,
            height: "fit-content",
            maxHeight: "55px",
          }}
        >
          <SocialMediaIcon href={"https://t.me/+381606062011"}>
            <Telegram color={"info"} fontSize={"large"} />
          </SocialMediaIcon>
          <SocialMediaIcon href={"https://wa.me/381606062011"}>
            <WhatsApp color={"info"} fontSize={"large"} />
          </SocialMediaIcon>
        </Box>
      )}
    </Box>
  );
};

export default NavBar;
