import React, { useState, useEffect } from "react";

const CardList = ({ id, ratingObject, FontAwesomeIcon, icons }) => {
  const [rating, setRating] = useState({ ...ratingObject });

  useEffect(() => {
    const updateData = async function () {
      await fetch(`http://127.0.0.1:5000/ratings/update/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rating),
      });
    };

    updateData();
  }, [id, rating]);

  const shouldIncreaseRating = (string) =>
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
            icon={icons.faThumbsUp}
            className="cursor-pointer rating-button-up"
            onClick={() => shouldIncreaseRating("likes")}
          />
          <h3 id="card-thumbs-up-number">{rating.likes}</h3>
        </li>
        <li id={`card-${id}-thumbs-down`}>
          <FontAwesomeIcon
            icon={icons.faThumbsDown}
            className="cursor-pointer rating-button-down"
            onClick={() => shouldIncreaseRating("dislikes")}
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
