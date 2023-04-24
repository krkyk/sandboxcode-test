import React, { useState } from "react";
import { Button } from "./components/Button";
import "./styles.css";

export default function App() {
  const [leftValue, setLeftValue] = useState(0);
  const [operator, setOperator] = useState(null);
  const [rightValue, setRightValue] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [isClickEqual, setIsClickEqual] = useState(false);

  const clickNumber = (num) => {
    if (operator === null) {
      setLeftValue(leftValue * 10 + num);
    } else if (!isClickEqual) {
      setRightValue(rightValue * 10 + num);
    }
  };

  const clickOperator = (ope) => {
    if (leftValue !== 0 && operator === null) {
      setOperator(ope);
    }
  };

  const clickEqual = () => {
    if (operator === "+") {
      setAnswer(leftValue + rightValue);
    }
    if (operator === "-") {
      setAnswer(leftValue - rightValue);
    }
    if (operator === "/") {
      setAnswer(leftValue / rightValue);
    }
    if (operator === "*") {
      setAnswer(leftValue * rightValue);
    }
    setIsClickEqual(true);
  };

  const clickClear = () => {
    setLeftValue(0);
    setRightValue(0);
    setOperator(null);
    setAnswer(0);
    setIsClickEqual(false);
  };

  return (
    <div class="container">
      <div className="ans">
        {leftValue}
        {operator === null || operator}
        {rightValue === 0 || rightValue}
        {answer === 0 || "="}
        {answer === 0 || answer}
      </div>
      <Button
        clickNumber={clickNumber}
        clickOperator={clickOperator}
        clickEqual={clickEqual}
        clickClear={clickClear}
      />
    </div>
  );
}
