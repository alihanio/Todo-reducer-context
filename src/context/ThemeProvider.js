import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case'toggleTheme':
    return !state 
    default:
      return state;
  }
};
export const ThemeProvider = ({ children }) => {
  const [isDark, dispatch] = useReducer(ThemeReducer, null, () => {
    const theme = localStorage.getItem("theme");
    return theme ? theme === "true" : false;
  });

  useEffect(() => {
    localStorage.setItem("theme", isDark.toString());
    if (isDark) {
      document.querySelector(".body").classList.add("dark");
    } else {
      document.querySelector(".body").classList.remove("dark");
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
