import React from 'react';
import {Box, Paper, Typography, Stack, IconButton, useMediaQuery} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CountdownTimer from './CountdownTimer';
import {Trans, useTranslation} from "react-i18next";
import theme from "./Theme";

interface EarlyBirdOfferCardProps {
  onClose?: () => void;
  targetDate: Date;
}

const EarlyBirdOfferCard: React.FC<EarlyBirdOfferCardProps> = ({
                                                                 onClose,
                                                                 targetDate,
                                                               }) => {
  const {t} = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Paper
      elevation={3}
      sx={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%)',
        backgroundColor: '#FFFAF4',
        position: 'relative',
        overflow: 'hidden',
        minHeight: isMobile ? '50vh' : '60vh',

        p: 2,
        borderRadius: '51px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'flex-start',
      }}
    >
      { !isMobile && <Box
        component="img"
        src="/bird.svg"
        alt="Bird"
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: 'auto',
          zIndex: -1,
          rotate: '-30deg',
          translate: '30%'
        }}
      />}

      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 2,
        }}
      >
        <CloseIcon/>
      </IconButton>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        pr: 2,
        mt: 'auto',
        mb: 'auto'
      }}>
        <Typography
          variant="earlyBirdTitle"
          dangerouslySetInnerHTML={{__html: t("PromoText.title")}}
        />

        <Typography variant="discountValue" sx={{ my: 0, lineHeight: 1 }}>10%</Typography>
        <Typography variant="discountDescription">
          <Trans
            i18nKey="PromoText.description"
          />
        </Typography>
      </Box>

      <Stack direction="column" alignItems="center" marginTop="auto" spacing={2}>
        <CountdownTimer targetDate={targetDate}/>

      </Stack>
    </Paper>
  );
};

export default EarlyBirdOfferCard;
