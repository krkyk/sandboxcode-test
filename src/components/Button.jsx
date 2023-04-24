import React from "react";

export const Button = ({
  clickNumber,
  clickOperator,
  clickEqual,
  clickClear
}) => {
  return (
    <>
      <div>
        {[9, 8, 7].map((num) => {
          return <button onClick={() => clickNumber(num)}>{num}</button>;
        })}
        <button onClick={() => clickOperator("+")}>+</button>
      </div>
      <div>
        {[6, 5, 4].map((num) => {
          return <button onClick={() => clickNumber(num)}>{num}</button>;
        })}
        <button onClick={() => clickOperator("-")}>-</button>
      </div>
      <div>
        {[3, 2, 1].map((num) => {
          return <button onClick={() => clickNumber(num)}>{num}</button>;
        })}
        <button onClick={() => clickOperator("*")}>×</button>
      </div>
      <div>
        <button onClick={() => clickNumber(0)}>0</button>
        <button onClick={() => clickClear()}>C</button>
        <button onClick={() => clickEqual()}>=</button>
        <button onClick={() => clickOperator("/")}>÷</button>
      </div>
    </>
  );
};
