import React from "react";
import "../styles/photoCard.scss";

export type PhotoCardProps = {
  id: string;
  index: number;
  picture: string;
  date: string;
  location: string;
};

const PhotoCard = (props: PhotoCardProps) => {
  const { id, index, picture, date, location } = props;
  return (
    <div className="photoCard">
      <img src={picture} alt={id} />
      <div className="details">
        <span className="index">{index + 1}</span>
        <p>{date}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default PhotoCard;
