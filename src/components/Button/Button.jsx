import React from "react";
import "./Button.css";

export const Button = ({
  clickNumber,
  clickOperator,
  clickEqual,
  clickClear,
  clickToggleSign,
  clickPercent,
  clickRoot,
  clickInTax,
  clickWithoutTax
}) => {
  return (
    <>
      <button className="clear-btn" onClick={() => clickClear()}>
        AC
      </button>
      <button onClick={() => clickRoot()}>√</button>
      <button onClick={() => clickPercent()}>%</button>
      <button className="tax-btn" onClick={() => clickInTax()}>
        税込
      </button>
      <button className="tax-btn" onClick={() => clickWithoutTax()}>
        税抜
      </button>
      <div>
        {[9, 8, 7].map((num, index) => {
          return (
            <button onClick={() => clickNumber(num)} key={index}>
              {num}
            </button>
          );
        })}
        <button onClick={() => clickOperator("+")}>+</button>
      </div>
      <div>
        {[6, 5, 4].map((num, index) => {
          return (
            <button onClick={() => clickNumber(num)} key={index}>
              {num}
            </button>
          );
        })}
        <button onClick={() => clickOperator("-")}>-</button>
      </div>
      <div>
        {[3, 2, 1].map((num, index) => {
          return (
            <button onClick={() => clickNumber(num)} key={index}>
              {num}
            </button>
          );
        })}
        <button onClick={() => clickOperator("*")}>×</button>
      </div>
      <div>
        <button onClick={() => clickNumber(0)}>0</button>
        <button onClick={() => clickToggleSign()}>+/-</button>
        <button onClick={() => clickEqual()}>=</button>
        <button onClick={() => clickOperator("/")}>÷</button>
      </div>
    </>
  );
};
