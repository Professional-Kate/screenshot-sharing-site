import React from "react";
import CardList from "./CardList";

const Card = ({ data }) => {
  return (
    <article id="card" className="card display-flex flex-column">
      <h2 id="card-title">{data.title}</h2>
      {/* without the require this doesn't work. Require tells webpack to actually include the image instead of not and wasting AN HOUR OF MY TIME AAA */}
      <img
        src={require("./../../../Photos/Elden-Ring/" + data.photo_path)}
        id="card-image"
        alt="PIC-TURE"
      />
      <p id="card-text">{data.description}</p>
      <CardList />
    </article>
  );
};

export default Card;
