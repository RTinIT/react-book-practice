import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = (it) => it }) => {
  return (
    <FaStar
      size={"20px"}
      color={selected ? "gold" : "grey"}
      onClick={onSelect}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Star;
