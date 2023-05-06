import React, { useState } from "react";
import classes from "./NumPad.module.css";
const NumPad = (props) => {
  const operationHandler = (e) => {
    props.onGetOperation(props.result + e.target.textContent);
  };
  let numpadClass;
  if (props.theme === "1") numpadClass = `${classes.numpad}`;
  if (props.theme === "2") numpadClass = `${classes.numpad} ${classes.white}`;
  if (props.theme === "3") numpadClass = `${classes.numpad} ${classes.fancy}`;
  return (
    <section className={numpadClass}>
      <div className={classes.numbers}>
        <button onClick={operationHandler} className={classes.key}>
          7
        </button>
        <button onClick={operationHandler} className={classes.key}>
          8
        </button>
        <button onClick={operationHandler} className={classes.key}>
          9
        </button>
        <button onClick={props.onDelete} className={classes["blue-key"]}>
          DEL
        </button>
        <button onClick={operationHandler} className={classes.key}>
          4
        </button>
        <button onClick={operationHandler} className={classes.key}>
          5
        </button>
        <button onClick={operationHandler} className={classes.key}>
          6
        </button>
        <button onClick={operationHandler} className={classes.key}>
          +
        </button>
        <button onClick={operationHandler} className={classes.key}>
          1
        </button>
        <button onClick={operationHandler} className={classes.key}>
          2
        </button>
        <button onClick={operationHandler} className={classes.key}>
          3
        </button>
        <button onClick={operationHandler} className={classes.key}>
          -
        </button>
        <button onClick={operationHandler} className={classes.key}>
          .
        </button>
        <button onClick={operationHandler} className={classes.key}>
          0
        </button>
        <button onClick={operationHandler} className={classes.key}>
          /
        </button>
        <button onClick={operationHandler} className={classes.key}>
          *
        </button>
      </div>
      <div className={classes.buttons}>
        <button onClick={props.onReset} className={classes["blue-key"]}>
          Reset
        </button>
        <button onClick={props.onOperate} className={classes.equal}>
          =
        </button>
      </div>
    </section>
  );
};

export default NumPad;
