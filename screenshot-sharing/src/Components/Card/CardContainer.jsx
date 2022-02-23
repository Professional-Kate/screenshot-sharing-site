import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardContainer = ({ fa, icons }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async function () {
      const result = await fetch("http://127.0.0.1:5000/");
      const formattedData = await result.json();

      setData((data) => {
        const newData = [...data];
        formattedData.map((data) => newData.push(data));
        return newData;
      });
    };

    fetchData();
  }, []);

  return (
    <section
      id="card-container"
      className="display-flex flex-column flex-align-center"
    >
      {!(data.length === 0) &&
        data.map((photo, index) => (
          <Card data={photo} key={index} id={index} fa={fa} icons={icons} />
        ))}
    </section>
  );
};

export default CardContainer;
