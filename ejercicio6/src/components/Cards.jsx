import React, { useEffect, useState } from "react";
import { getCards } from "../services/cardService";
import Card from "./Card";
import "../App.css";
import { Link } from "react-router-dom";

export default function Cards() {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCards(page).then((data) => {
      setCards(data.results);
    });
  }, [page]);

  const handleClick = () => {
    setPage(page + 1);
    console.log(page);
  };
  const handleClickLess = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
    console.log(page);
  };

  return (
    <div>
      <div className="cards">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
      <div className="bottons">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleClickLess}
        >
          PREV
        </button>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          NEXT
        </button>
      </div>
    </div>
  );
}
