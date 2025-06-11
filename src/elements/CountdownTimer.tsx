import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {Typography, Stack} from '@mui/material';
import i18n from "i18next";
import RedButton from "./RedButton";
import {useHistory} from "react-router-dom";

type CountdownTimerProps = {
  targetDate: Date;
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({targetDate}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });
  const history = useHistory()
  const handleRedirection = () => {
    const path =
      currentLanguage === "en" ? "/enroll" : `/${currentLanguage}/enroll`;
    history.push(path);
  };
  const {t} = useTranslation();
  let currentLanguage = i18n.language;

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({days: 0, hours: 0, minutes: 0});
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);

      setTimeLeft({days, hours, minutes});
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [targetDate]);

  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems="center"
      justifyContent="center"
      sx={{p: 2, backgroundColor: '#ffffff', borderRadius: '35px', boxShadow: '0px 5.71px 5.71px 0px #00000040'}}
    >
      <Stack sx={{textAlign: 'center', verticalAlign: 'middle', minWidth: 60, display: 'flex'}} direction={"row"}>
        <Typography variant="timer" fontWeight="bold">
          {String(timeLeft.days).padStart(2, '0')}
        </Typography>
        <Typography variant="timer">|</Typography>
        <Typography variant="timer" fontWeight="bold">
          {String(timeLeft.hours).padStart(2, '0')}
        </Typography>
        <Typography variant="timer">|</Typography>
        <Typography variant="timer" fontWeight="bold">
          {String(timeLeft.minutes).padStart(2, '0')}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
        sx={{width: '100%', textAlign: 'center'}}
      >
        <Typography variant="timerTags" sx={{ flex: 1 }}>{t("CountdownTimer.days")}</Typography>
        <Typography variant="timerTags" sx={{ flex: 1 }}>{t("CountdownTimer.hours")}</Typography>
        <Typography variant="timerTags" sx={{ flex: 1 }}> {t("CountdownTimer.minutes")}</Typography>
      </Stack>
      <RedButton
        onClick={() => handleRedirection()}
      >
        {t('EnrollFrame.button')}
      </RedButton>
    </Stack>
  );
};

export default CountdownTimer;
