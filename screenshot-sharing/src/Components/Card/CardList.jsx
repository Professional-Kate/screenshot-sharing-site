import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const icons = require("@fortawesome/free-solid-svg-icons");

const CardList = ({ id }) => {
  const [rating, setRating] = useState({ likes: 0, dislikes: 0 });

  const increaseRating = (string) =>
    setRating((rating) => {
      const newRating = { ...rating };
      newRating[string]++;
      return newRating;
    });

  return (
    <div>
      <ul
        id="card-list"
        className="display-flex card-list flex-justify-center card-rating"
      >
        <li id={`card-${id}-thumbs-up`}>
          <FontAwesomeIcon
            onClick={() => increaseRating("likes")}
            icon={icons.faThumbsUp}
            className="cursor-pointer fa-2x"
          />
          <h3 id="card-thumbs-up-number">{rating.likes}</h3>
        </li>
        <li id={`card-${id}-thumbs-down`}>
          <FontAwesomeIcon
            onClick={() => increaseRating("dislikes")}
            icon={icons.faThumbsDown}
            className="cursor-pointer fa-2x"
          />
          <h3 id="card-thumbs-down-number">{rating.dislikes}</h3>
        </li>
      </ul>
      {!(rating.likes === 0 && rating.dislikes === 0) && (
        <progress
          className="card-progress"
          id="card-rating"
          max={rating.likes + rating.dislikes}
          value={rating.likes}
        />
      )}
    </div>
  );
};

export default CardList;
