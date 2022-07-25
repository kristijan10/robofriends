import React from "react";
import "./Card.css";

const Card = ({ id, name, email }) => {
  return (
    <div className="card" key={id}>
      <img
        src={`https://robohash.org/random${id}`}
        alt="robots"
        style={{ maxWidth: "200px", maxHeight: "200px" }}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
