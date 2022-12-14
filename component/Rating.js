import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function MuiRating({ value, ratingOnchange, disabled, size }) {
  return (
    <Stack spacing={1}>
      <Rating
        name="size-small"
        value={value != null ? value : 0}
        size={size}
        onChange={ratingOnchange}
        disabled={disabled}
      />
    </Stack>
  );
}
