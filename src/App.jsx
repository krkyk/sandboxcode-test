import React, { useState } from "react";

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
    setOperator(ope);
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
    <>
      <div>計算結果：{answer}</div>
      <div className="num-btn">
        <button onClick={() => clickNumber(0)}>0</button>
        <button onClick={() => clickNumber(1)}>1</button>
        <button onClick={() => clickNumber(2)}>2</button>
        <button onClick={() => clickNumber(3)}>3</button>
        <button onClick={() => clickNumber(4)}>4</button>
        <button onClick={() => clickNumber(5)}>5</button>
        <button onClick={() => clickNumber(6)}>6</button>
        <button onClick={() => clickNumber(7)}>7</button>
        <button onClick={() => clickNumber(8)}>8</button>
        <button onClick={() => clickNumber(9)}>9</button>
      </div>
      <div className="ope-btn">
        <button onClick={() => clickOperator("+")}>+</button>
        <button onClick={() => clickOperator("-")}>-</button>
        <button onClick={() => clickOperator("/")}>÷</button>
        <button onClick={() => clickOperator("*")}>x</button>
        <button onClick={() => clickEqual()}>=</button>
      </div>
      <button onClick={() => clickClear()}>c</button>
    </>
  );
}
