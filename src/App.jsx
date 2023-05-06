import React, { useContext, useState } from "react";
import "./App.css";
import NumPad from "./components/NumPad";
import ThemeSwitch from "./components/ThemeSwitch";
import Results from "./components/Results";

function App() {
  const [operationText, setOperationText] = useState("");
  const [result, setResult] = useState("");
  const [theme, setTheme] = useState("1");
  const getOperation = (operation) => {
    setOperationText(operation);
  };
  const operateFunction = () => {
    setResult(eval(operationText));
  };
  const resetHandler = () => {
    setResult("");
    setOperationText("");
  };
  const deleteHandler = () => {
    setOperationText((prevState) => prevState.split("").slice(0, -1).join(""));
  };
  const getThemeHandler = (theme) => {
    setTheme(theme);
  };
  console.log(theme);
  let appClass;
  if (theme === "1") appClass = "App";
  if (theme === "2") appClass = "App white";
  if (theme === "3") appClass = "App fancy";
  return (
    <div className={appClass}>
      <ThemeSwitch theme={theme} onGetTheme={getThemeHandler} />
      <Results
        theme={theme}
        result={result}
        onGetOperation={getOperation}
        operation={operationText}
      />
      <NumPad
        theme={theme}
        onDelete={deleteHandler}
        onReset={resetHandler}
        onOperate={operateFunction}
        result={operationText}
        onGetOperation={getOperation}
      />
    </div>
  );
}

export default App;
