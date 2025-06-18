import React, { useState, useEffect } from "react";
import "./Rating.css";

interface RatingProps {
  value?: number;
  onChange?: (value: number) => void;
  readOnly?: boolean;
}

const Rating: React.FC<RatingProps> = ({ value = 0, onChange, readOnly }) => {
  const [rating, setRating] = useState(value);

  useEffect(() => {
    setRating(value);
  }, [value]);

  const handleClick = (val: number) => {
    if (readOnly) return;
    setRating(val);
    onChange?.(val);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLSpanElement>,
    star: number
  ) => {
    if (readOnly) return;
    if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      handleClick(star);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      handleClick(Math.max(1, rating - 1));
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      handleClick(Math.min(5, rating + 1));
    }
  };

  return (
    <div className="rating-container" role="radiogroup" aria-label="Rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          role="radio"
          aria-checked={rating === star}
          tabIndex={readOnly ? -1 : 0}
          onClick={() => handleClick(star)}
          onKeyDown={(e) => handleKeyDown(e, star)}
          className={star <= rating ? "star selected" : "star"}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
