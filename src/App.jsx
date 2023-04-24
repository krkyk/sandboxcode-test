import React, { useState } from "react";
import { Button } from "./components/Button/Button";
import { DisplayAnswer } from "./components/DisplayAnswer/DisplayAnswer";
import "./styles.css";

export default function App() {
  const [leftValue, setLeftValue] = useState(0);
  const [operator, setOperator] = useState(null);
  const [displayOperator, setDisplayOperator] = useState(null);
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
      if (ope === "*") {
        setDisplayOperator("×");
      } else if (ope === "/") {
        setDisplayOperator("÷");
      } else {
        setDisplayOperator(ope);
      }
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
    setDisplayOperator(null);
    setAnswer(0);
    setIsClickEqual(false);
  };

  return (
    <div class="container">
      <DisplayAnswer
        leftValue={leftValue}
        operator={operator}
        displayOperator={displayOperator}
        rightValue={rightValue}
        answer={answer}
      />
      <Button
        clickNumber={clickNumber}
        clickOperator={clickOperator}
        clickEqual={clickEqual}
        clickClear={clickClear}
      />
    </div>
  );
}
