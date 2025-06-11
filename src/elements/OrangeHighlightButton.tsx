import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
    width: 'fit-content',
    background: theme.palette.text.disabled,
    borderRadius: '52px',
    paddingLeft: '30px',
    paddingRight: '30px',
    color: theme.palette.text.secondary,
    '&:hover': {
      background: '#DD851B',
    },
}));

interface ReserveASpotButtonProps extends ButtonProps {}

const OrangeHighlightButton: React.FC<ReserveASpotButtonProps> = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default OrangeHighlightButton;
