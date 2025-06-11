import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
    width: 'fit-content',
    background: theme.palette.secondary.main,
    borderRadius: '52px',
    color: theme.palette.primary.main,
    paddingLeft: "12px",
    paddingRight: "12px",
    border: `solid 2px ${theme.palette.primary.main}`,
    '&:hover': {
      background: theme.palette.primary.main,
      color: theme.palette.secondary.main,
    },
}));

interface WhiteButtonProps extends ButtonProps {}

const WhiteButton: React.FC<WhiteButtonProps> = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default WhiteButton;
