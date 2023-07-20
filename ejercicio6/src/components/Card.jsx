import React from "react";
import "../App.css";
export default function Card({ card }) {
  return (
    <div className="card">
      <div key={card.id}>
        <h6>{card.name}</h6>
        <img src={card.image} alt={card.name} />
      </div>
    </div>
  );
}
