import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import MuiRating from "./Rating";
import AudioPlayer from "./AudioPlayer";
import Favorite from "./Favorite";
import styles from "../styles/Card.module.css";

export default function MediaControlCard({
  title,
  imgSrc,
  sound,
  totalDuration,
  id,
}) {
  const [RatingValue, setRatingValue] = useState(
    JSON.parse(localStorage.getItem("rateValue"))
  );
  const [favorite, setFavorite] = useState({});

  const ratingonChange = (event, newValue) => {
    setRatingValue(() => ({
      ...RatingValue,
      [id]: newValue,
    }));

    localStorage.setItem(
      "rateValue",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("rateValue")),
        [id]: newValue,
      })
    );
  };

  const handleFavorite = () => {
    setFavorite((state) => ({
      ...favorite,
      [id]: !state[id],
    }));
  };

  return (
    <Card className={styles.divCard}>
      <Box className={styles.boxCard}>
        <CardContent>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
        </CardContent>

        <CardMedia
          component="img"
          className={styles.cardMedia}
          image={imgSrc}
          alt={title}
        />
        <Box className={styles.boxAudio}>
          <Favorite
            favorite={favorite == null ? false : favorite[id]}
            handleFavorite={() => handleFavorite()}
          />
          <AudioPlayer src={sound} totalDuration={totalDuration} />
        </Box>
        <MuiRating
          value={ RatingValue == null ? 0 : RatingValue[id]}
          ratingOnchange={ratingonChange}
          size={"large"}
        />
      </Box>
    </Card>
  );
}
