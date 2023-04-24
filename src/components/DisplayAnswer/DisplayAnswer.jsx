import React from "react";
import "./DisplayAnswer.css";

export const DisplayAnswer = ({ leftValue, operator, rightValue, answer }) => {
  return (
    <div className="ans">
      {leftValue}
      {operator === null || operator}
      {rightValue === 0 || rightValue}
      {answer === 0 || "="}
      {answer === 0 || answer}
    </div>
  );
};
