import React, { useState } from "react";

const ThemeContext = React.createContext({ themeNum: "", setTheme: () => {} });

export const ThemeProvider = (props) => {
  const [themeState, setThemeState] = useState("");

  const themeCtx = {
    themeNum: "",
    setTheme: (num) => {
      if (num === "1") setThemeState("default");
      if (num === "2") setThemeState("white");
      if (num === "3") setThemeState("fancy");
    },
  };
  return (
    <ThemeContext.Provider value={themeCtx}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
