import CardList from "./CardList";

const Card = () => {
  return (
    <article id="card" className="card display-flex flex-column">
      <h2 id="card-title">Title</h2>
      <p id="card-text">Some text</p>
      <img id="card-image" alt="PIC-TURE" />
      <CardList />
    </article>
  );
};

export default Card;
