import React, { useState, useEffect } from "react";
import "./Rating.css";

interface RatingProps {
  value?: number;
  onChange?: (value: number) => void;
  readOnly?: boolean;
}

const Rating: React.FC<RatingProps> = ({ value = 0, onChange, readOnly }) => {
  const [rating, setRating] = useState(value);

  const handleClick = (val: number) => {
    if (readOnly) return;
    setRating(val);
    onChange?.(val);
  };

  return (
    <div className="rating-container" role="radiogroup" aria-label="Rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          role="radio"
          aria-checked={rating === star}
          tabIndex={0}
          onClick={() => handleClick(star)}
          onKeyPress={(e) => e.key === "Enter" && handleClick(star)}
          className={star <= rating ? "star selected" : "star"}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
