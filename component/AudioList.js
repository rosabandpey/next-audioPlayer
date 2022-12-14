import { Box } from "@mui/system";
import React, { useState } from "react";
import myData from "../data/manifest.json";
import MediaControlCard from "./Card";
import Favorite from "./Favorite";
import Player from "./Player";
import styles from "../styles/AudioList.module.css";

export default function AudioList() {
  const data = myData;
  const [clickedIndex, setClickedIndex] = useState({});
  const [showList, setShowList] = useState(true);
  const [favorite, setFavorite] = useState({});

  const handleFavorite = (index) => {
    setFavorite((state) => ({
      [index]: !state[index],
    }));
  };

  const handleClick = (index) => {
    setClickedIndex((state) => ({
      [index]: !state[index],
    }));
    setShowList(false);
  };

  return (
    <Box className={styles.boxlistCard}>
      {data.map((item, index) => (
        <>
          {!clickedIndex[index] && (
            <>
              <div
                onClick={() => handleClick(index)}
                key={index}
                className={styles.divListCard}
              >
                {showList && (
                  <Player
                    title={item.title}
                    imgSrc={item.cover}
                    key={index}
                    id={index}
                  />
                )}
              </div>
              <div>
                {showList && (
                  <Favorite
                    key={index}
                    favorite={favorite[index]}
                    handleFavorite={() => handleFavorite(index)}
                    id={index}
                  />
                )}
              </div>
            </>
          )}

          {clickedIndex[index] && (
            <MediaControlCard
              id={index}
              title={item.title}
              sound={item.audio}
              imgSrc={item.cover}
              totalDuration={item.totalDurationMs}
            />
          )}
        </>
      ))}
    </Box>
  );
}
