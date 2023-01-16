import Star from "./Star";
import { createArray } from "../utils/commonFunc";
import "./style.css";

const StarRating = ({
  totalStars = 5,
  selectedStars = 0,
  style = {},
  onSelect = (it) => it,
}) => {
  return (
    <div className="star-rating">
      <p style={{ padding: "0 5px" }}>Rating:</p>
      {createArray(totalStars).map((it, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onSelect(i + 1)}
        />
      ))}
      <p style={{ padding: "0 10px" }}>{selectedStars}</p>
    </div>
  );
};

export default StarRating;
