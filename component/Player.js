import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import MuiRating from "./Rating";
import styles from "../styles/Card.module.css";

export default function Player({ title, imgSrc, id }) {
  const [ratingValue, setRatingValue] = React.useState({});

  React.useEffect(() => {
    setRatingValue(() => JSON.parse(localStorage.getItem("rateValue")));
  }, []);

  return (
    <Card className={styles.cardPlayer}>
      <Box className={styles.boxPlayer}>
        <MuiRating disabled value={ratingValue == null ? 0 : ratingValue[id]} />
        <CardMedia
          component="img"
          sx={{ width: "100%" }}
          image={imgSrc}
          alt={title}
        />

        <Typography component="div" variant="h5">
          {title}
        </Typography>

        <Box className={styles.boxAudio}></Box>
      </Box>
    </Card>
  );
}
