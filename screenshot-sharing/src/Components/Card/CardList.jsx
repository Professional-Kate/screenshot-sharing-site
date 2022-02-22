import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const icons = require("@fortawesome/free-solid-svg-icons");

const CardList = ({ id }) => {
  const [rating, setRating] = useState(0);

  const shouldIncreaseRating = (bool) =>
    setRating((rating) => (rating += bool ? 1 : -1));

  return (
    <ul
      id="card-list"
      className="display-flex card-list flex-justify-center card-rating"
    >
      <li id={`card-${id}-thumbs-up`}>
        <FontAwesomeIcon
          onClick={() => shouldIncreaseRating(true)}
          icon={icons.faThumbsUp}
          className="cursor-pointer fa-2x"
        />
      </li>
      <li>
        <h3 id="card-rating">{rating}</h3>
      </li>
      <li id={`card-${id}-thumbs-down`}>
        <FontAwesomeIcon
          onClick={() => shouldIncreaseRating(false)}
          icon={icons.faThumbsDown}
          className="cursor-pointer fa-2x"
        />
      </li>
    </ul>
  );
};

export default CardList;
