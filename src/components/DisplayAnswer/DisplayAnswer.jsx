import React from "react";
import "./DisplayAnswer.css";

export const DisplayAnswer = ({
  leftValue,
  operator,
  displayOperator,
  rightValue,
  isClickEqual,
  isClickPercent,
  isClickRoot,
  isClickTax,
  answer
}) => {
  return (
    <div className="ans">
      {leftValue}
      {operator === null || displayOperator}
      {rightValue === 0 || rightValue}
      {isClickRoot && "√"}
      {isClickEqual && "="}
      {isClickPercent && "%"}
      {isClickTax && "=>"}
      {answer === 0 || answer}
    </div>
  );
};
