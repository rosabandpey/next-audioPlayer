import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Favorite({ handleFavorite, favorite,  }) {
  return (
    <IconButton aria-label="add to favorites" onClick={handleFavorite}>
      {favorite ? (
        <FavoriteIcon sx={{ color: "red" }} />
      ) : (
        <FavoriteBorderIcon sx={{ color: "red" }} />
      )}
    </IconButton>
  );
}
