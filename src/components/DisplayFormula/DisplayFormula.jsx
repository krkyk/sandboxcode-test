import React from "react";
import "./DisplayFormula.css";

export const DisplayFormula = ({
  leftValue,
  operator,
  displayOperator,
  rightValue,
  isClickEqual,
  isClickPercent,
  isClickRoot,
  isClickTax
}) => {
  return (
    <div className="formula">
      {leftValue === 0 ? "" : leftValue}
      {operator === null || displayOperator}
      {rightValue === 0 || rightValue}
      {isClickRoot && "√"}
      {isClickEqual && "="}
      {isClickPercent && "%"}
      {isClickTax && "=>"}
    </div>
  );
};
