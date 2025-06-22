import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function BasicRating() {
  const [value, setValue] = React.useState<number | null>(0);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box sx={{ "& > legend": { mt: 1 } }}>
      <Typography component="legend">Your rate</Typography>
      <Rating
        name="simple-uncontrolled"
        size="large"
        precision={0.5}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
    </Box>
  );
}
