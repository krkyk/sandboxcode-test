import React from "react";
import "./DisplayAnswer.css";

export const DisplayAnswer = ({ answer }) => {
  return <div className="ans">{answer === 0 ? 0 : answer}</div>;
};
