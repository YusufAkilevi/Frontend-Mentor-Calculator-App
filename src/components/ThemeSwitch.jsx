import React from "react";
import classes from "./ThemeSwitch.module.css";
const ThemeSwitch = (props) => {
  const changeHandler = (e) => {
    props.onGetTheme(e.target.value);
  };
  let switchClass;
  if (props.theme === "1") switchClass = `${classes.switcher}`;
  if (props.theme === "2") switchClass = `${classes.switcher} ${classes.white}`;
  if (props.theme === "3") switchClass = `${classes.switcher} ${classes.fancy}`;
  return (
    <React.Fragment>
      <div className={switchClass}>
        <div className={classes.switches}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div>Calculator</div>
        <form>
          <label htmlFor="switch">THEME</label>
          <input
            defaultValue="1"
            onChange={changeHandler}
            className={classes.switch}
            id="switch"
            type="range"
            min="1"
            max="3"
          />
        </form>
      </div>
    </React.Fragment>
  );
};

export default ThemeSwitch;
