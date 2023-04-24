import React, { useState } from "react";
import { Button } from "./components/Button";
import "./styles.css";

export default function App() {
  const [leftValue, setLeftValue] = useState(0);
  const [operator, setOperator] = useState(null);
  const [rightValue, setRightValue] = useState(0);
  const [answer, setAnswer] = useState(0);

  const clickNumber = (num) => {
    if (operator === null) {
      setLeftValue(num);
    } else {
      setRightValue(num);
    }
  };

  const clickOperator = (ope) => {
    if (leftValue !== 0) {
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
  };

  const clickClear = () => {
    setLeftValue(0);
    setRightValue(0);
    setOperator(null);
    setAnswer(0);
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
