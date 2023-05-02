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
  const [isClickPercent, setIsClickPercent] = useState(false);
  const [isClickRoot, setIsClickRoot] = useState(false);

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
    setIsClickPercent(false);
    setIsClickRoot(false);
  };

  const clickToggleSign = () => {
    if (leftValue !== 0 && rightValue === 0) {
      setLeftValue(-leftValue);
    }
    if (operator !== null && rightValue !== 0) {
      setRightValue(-rightValue);
    }
  };

  const clickPercent = () => {
    if (operator === "+") {
      setAnswer(leftValue + (rightValue / 100) * leftValue);
    }
    if (operator === "-") {
      setAnswer(leftValue - (rightValue / 100) * leftValue);
    }
    if (operator === "/") {
      setAnswer((leftValue / rightValue) * 100);
    }
    if (operator === "*") {
      setAnswer(leftValue * (rightValue / 100));
    }
    setIsClickPercent(true);
  };

  const clickRoot = () => {
    setIsClickEqual(true);
    setIsClickRoot(true);
    setAnswer(leftValue ** (1 / 2));
  };

  return (
    <div className="container">
      <DisplayAnswer
        leftValue={leftValue}
        operator={operator}
        displayOperator={displayOperator}
        rightValue={rightValue}
        isClickEqual={isClickEqual}
        isClickPercent={isClickPercent}
        isClickRoot={isClickRoot}
        answer={answer}
      />
      <Button
        clickNumber={clickNumber}
        clickOperator={clickOperator}
        clickEqual={clickEqual}
        clickClear={clickClear}
        clickToggleSign={clickToggleSign}
        clickPercent={clickPercent}
        clickRoot={clickRoot}
      />
    </div>
  );
}
