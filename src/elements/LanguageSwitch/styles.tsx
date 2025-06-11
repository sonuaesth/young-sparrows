import { Button, Menu } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MenuStyled = styled(Menu)(({ theme }) => ({
  ...theme.typography.h6,
  ".MuiMenu-paper": {
    fontWeight: "bold",
    backgroundColor: "00FFFFFF",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "00FFFFFF",
      color: "#212529",
    },
  },
}));

export const LanguageSelectorButton = styled(Button)(({ theme }) => ({
  ...theme.typography.h6,
  height: "50px",
  fontWeight: "bold",
  backgroundColor: "00FFFFFF",
  textTransform: "none",
  paddingTop: "0",
  "&:hover": {
    backgroundColor: "00FFFFFF",
    color: "#212529",
  },
}));

export const Flag = styled("img")(() => ({}));
