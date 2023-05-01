import React from "react";
import "./DisplayAnswer.css";

export const DisplayAnswer = ({
  leftValue,
  operator,
  displayOperator,
  rightValue,
  isClickEqual,
  isClickPercent,
  answer
}) => {
  return (
    <div className="ans">
      {leftValue}
      {operator === null || displayOperator}
      {rightValue === 0 || rightValue}
      {isClickEqual && "="}
      {isClickPercent && "%"}
      {answer === 0 || answer}
    </div>
  );
};
