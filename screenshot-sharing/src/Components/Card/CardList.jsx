import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const icons = require("@fortawesome/free-solid-svg-icons");

const CardList = () => {
  return (
    <ul id="card-list" className="display-flex card-list flex-justify-center">
      <li id="card-thumbs-up">
        <FontAwesomeIcon
          icon={icons.faThumbsUp}
          className="cursor-pointer fa-2x"
        />
      </li>
      <li>
        <h3 id="card-rating">Rating</h3>
      </li>
      <li id="card-thumbs-down">
        <FontAwesomeIcon
          icon={icons.faThumbsDown}
          className="cursor-pointer fa-2x"
        />
      </li>
    </ul>
  );
};

export default CardList;
