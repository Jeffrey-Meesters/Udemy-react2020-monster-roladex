import React from "react";
import "./card.styles.css";

export const Card = props => {
  return (
    <div className="card-container">
      <img
        width="180px"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h1>{props.monster.username}</h1>
      <h2>{props.monster.email}</h2>
    </div>
  );
};
