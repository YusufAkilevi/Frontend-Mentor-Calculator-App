import React, { useState } from "react";
import classes from "./Results.module.css";
const Results = (props) => {
  const changeHandler = (e) => {
    props.onGetOperation(e.target.value);
  };
  let resultClass;
  if (props.theme === "1") resultClass = `${classes.results}`;
  if (props.theme === "2") resultClass = `${classes.results} ${classes.white}`;
  if (props.theme === "3") resultClass = `${classes.results} ${classes.fancy}`;
  return (
    <input
      onChange={changeHandler}
      value={String(props.result).length !== 0 ? props.result : props.operation}
      type="text"
      className={resultClass}
    />
  );
};

export default Results;
