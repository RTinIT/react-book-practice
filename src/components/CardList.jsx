import React from "react";
import Card from "./Card";
import { useColors } from "./ColorProvider";

const CardList = () => {
  const { colors } = useColors();
  if (!colors.length) {
    return <h2>There are no colors.</h2>;
  }

  return (
    <div className="card-list">
      {colors.map((color, i) => (
        <Card key={color.id} {...color} />
      ))}
    </div>
  );
};

export default CardList;
