import React from "react";
import CardList from "./CardList";

const Card = ({ data }) => {
  return (
    <article
      id={"card-" + data.id}
      className="card display-flex flex-column nice-box-shadow"
    >
      <h2 id="card-title" className="card-heading">
        {data.title}
      </h2>
      {/* without the require this doesn't work. Require tells webpack to actually include the image instead of not and wasting AN HOUR OF MY TIME AAA */}
      <img
        src={require("./../../../Photos/Elden-Ring/" + data.photo_path)}
        id="card-image"
        alt={data.description}
        className="card-image"
      />
      <p id="card-text" className="card-text">
        {data.description}
      </p>
      <CardList id={data.id} />
    </article>
  );
};

export default Card;
