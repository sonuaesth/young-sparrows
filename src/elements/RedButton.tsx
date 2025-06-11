import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({ theme }) => ({
  width: "fit-content",
  maxHeight: "55px",
  background: "#ec1b1b",
  color: theme.palette.text.secondary,
  borderRadius: "52px",
  paddingLeft: "10px",
  paddingRight: "10px",
  "&:hover": {
    background: "#DD851B",
  },
}));

interface RedButtonProps extends ButtonProps {}

const RedButton: React.FC<RedButtonProps> = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default RedButton;
