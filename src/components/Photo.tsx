import React, { useState } from "react";
import PhotoCard, { PhotoCardProps } from "./photoCard";
import imageData from "../data/imageData";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { IconButton } from "@material-ui/core";
import "../styles/photo.css";

const Photo = () => {
  const [cardProperty, setCardProperty] = useState<PhotoCardProps>(
    imageData.properties[0]
  );

  function onClickNext() {
    setCardProperty(imageData.properties[cardProperty.index + 1]);
  }

  function onClickPrevious() {
    setCardProperty(imageData.properties[cardProperty.index - 1]);
  }

  return (
    <div className="photo">
      <div>
        <h2 className="font">My beloved Doudou's life photos</h2>
        <PhotoCard
          id={cardProperty.id}
          index={cardProperty.index}
          picture={cardProperty.picture}
          date={cardProperty.date}
          location={cardProperty.location}
        />
      </div>

      <div>
        <IconButton
          onClick={onClickPrevious}
          disabled={cardProperty.index === 0}
        >
          <ArrowLeftIcon />
        </IconButton>
        <IconButton
          onClick={onClickNext}
          disabled={cardProperty.index === imageData.properties.length - 1}
        >
          <ArrowRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Photo;
