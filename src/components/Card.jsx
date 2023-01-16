import React, { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { useColors } from "./ColorProvider";
import StarRating from "./StarRating";

const Card = ({ title, color, rating, id }) => {
  const { removeColor, updateRating } = useColors();

  return (
    <div className="card" style={{ backgroundColor: color }}>
      <h3 className="card-title">{title}</h3>
      <button className="card-btn" onClick={() => removeColor(id)}>
        <FaTrash size={"17"} color={"var(--mask)"} />
      </button>
      <StarRating
        totalStars={10}
        style={{ backgroundColor: "var(--bg-color)" }}
        selectedStars={rating}
        onSelect={(rating) => updateRating(id, rating)}
      />
    </div>
  );
};

export default Card;
