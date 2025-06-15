import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import StarsRating from "./StarsRating";
import Alert from "@mui/material/Alert";
import { Box, TextField, Typography, useMediaQuery, Grid } from "@mui/material";
import theme from "../../elements/Theme";
import emailjs from "@emailjs/browser";
import OrangeHighlightButton from "../../elements/OrangeHighlightButton";

interface FeedbackFormFrameProps {
  formRef?: React.RefObject<HTMLFormElement | null>;
}

const FeedbackFormFrame: React.FC<FeedbackFormFrameProps> = ({ formRef }) => {
  const { t, i18n } = useTranslation();
  let currentLanguage = i18n.language;

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formValues, setFormValues] = useState({
    parentNameFB: "",
    email: "",
    comments: "",
  });
  const [captchaValue, setCaptchaValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleCaptchaChange = (value: string | null) => {
    if (value) {
      setCaptchaValue(value);
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!captchaValue) {
      setCaptchaError(true);
      return;
    }

    setCaptchaError(false);
    emailjs.init("0VR9T4-49oj__IUhF");
    emailjs
      .sendForm(
        "service_z9nsi2d",
        "template_r62oktm",
        form,
        "0VR9T4-49oj__IUhF"
      )
      .then(() => {
        setIsSubmitted(true);
      });
  };

  return (
    <Box
      px={isMobile ? "10px" : "73px"}
      sx={{
        display: "flex",
        flexDirection: "column",

        backgroundColor: theme.palette.primary.main,
        alignItems: "center",
      }}
    >
      <Grid
        xs={12}
        spacing={5}
        container
        flexDirection="row"
        display="flex"
        mt={isMobile ? "2vh" : "5vh"}
        mb={isMobile ? "10vh" : "20vh"}
      ></Grid>
      <Box ref={formRef}>
        <Typography
          variant={"h3"}
          sx={{ color: theme.palette.text.disabled }}
          textAlign="center"
          fontFamily="Open Sans Bold"
          mb="5vh"
        >
          {t("FeedbackFormFrame.title")}
        </Typography>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: 4,
          mb: isMobile ? "10vh" : "20vh",
          border: `5px solid ${theme.palette.secondary.main}`,
          width: { sm: "80%", xs: "100%" },
          "& .MuiTextField-root": {
            margin: "8px 0",
            "&.Mui-focused": {
              color: "black", // or any color you want for the focused state
            },
          },
          "& .MuiButton-root": { marginTop: "16px" },
          "& .MuiFormControlLabel-root": { display: "block", margin: "8px 0" },
          "& .MuiRadio-root": {
            color: theme.palette.secondary.main,
            "&.Mui-checked": {
              color: theme.palette.secondary.main,
            },
            "&.Mui-focused": {
              color: "black", // or any color you want for the focused state
            },
          },
          "& .MuiTypography-root": {
            color: theme.palette.text.primary,
          },
          "& .MuiInputBase-input": {
            color: theme.palette.text.primary,
          },
          "& .MuiFormLabel-root": {
            color: theme.palette.text.primary,
            "&.Mui-focused": {
              color: theme.palette.text.primary,
            },
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.secondary.main,
          },
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.secondary.main,
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: theme.palette.secondary.main,
            },
        }}
      >
        <Box>
          <StarsRating />
        </Box>
        <TextField
          fullWidth
          name="parentNameFB"
          label={t("FeedbackFormFrame.Your full name")}
          variant="outlined"
          required
          value={formValues.parentNameFB}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          name="email"
          label={t("FeedbackFormFrame.Your email")}
          variant="outlined"
          required
          value={formValues.email}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          multiline
          rows={4}
          name="comments"
          label={t("FeedbackFormFrame.Special requirements or comments")}
          variant="outlined"
          value={formValues.comments}
          onChange={handleInputChange}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <br />

          <ReCAPTCHA
            key={currentLanguage}
            sitekey="6Lenza8pAAAAAPT8mtC5aQgPfXfvGB9lVxAt_0In"
            onChange={handleCaptchaChange}
            hl={
              currentLanguage === "en"
                ? "en"
                : currentLanguage === "ru"
                ? "ru"
                : "sr-Latn"
            }
          />
          {captchaError && (
            <Alert variant="outlined" severity="error" sx={{ mt: 2 }}>
              Please complete the captcha
            </Alert>
          )}

          <br />
          {!isSubmitted ? (
            <OrangeHighlightButton type="submit">
              <Typography
                variant="h3"
                fontFamily="Open Sans Bold"
                sx={{ color: "white !important" }}
              >
                {t("FeedbackFormFrame.SUBMIT")}
              </Typography>
            </OrangeHighlightButton>
          ) : (
            <Typography variant={"h3"}>
              {t("FeedbackFormFrame.Thank you for your submission!")}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default FeedbackFormFrame;
