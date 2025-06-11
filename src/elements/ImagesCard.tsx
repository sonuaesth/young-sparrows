import React from "react";
import { Avatar, useMediaQuery } from "@mui/material";
import theme from "./Theme";

interface ImagesCardProps {
  image: string;
}

const ImagesCard: React.FC<ImagesCardProps> = ({ image }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Avatar
      alt="meal"
      src={image}
      sx={{
        width: isMobile ? "70px" : "250px",
        height: isMobile ? "70px" : "250px",
        "& .MuiAvatar-img": {
          objectFit: "contain",
        },
      }}
    />
  );
};

export default ImagesCard;
