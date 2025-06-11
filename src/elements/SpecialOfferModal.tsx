import React from 'react';
import {Box, Backdrop} from '@mui/material';
import EarlyBirdOfferCard from './EarlyBirdOfferCard';

type SpecialOfferModalProps = {
  open: boolean;
  onClose: () => void;
  targetDate: Date;
};

const SpecialOfferModal: React.FC<SpecialOfferModalProps> = ({open, onClose, targetDate}) => {
  if (!open) return null;

  return (
    <>
      <Backdrop
        open={open}
        onClick={onClose}
        sx={{
          zIndex: 1200,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      />
      <Box
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1300,
        }}
      >
        <EarlyBirdOfferCard onClose={onClose} targetDate={targetDate}/>
      </Box>
    </>
  );
};


export default SpecialOfferModal;
