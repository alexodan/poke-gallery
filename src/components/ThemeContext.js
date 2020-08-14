import React from "react";
import { ThemeProvider } from "styled-components";

const ThemeToggleContext = React.createContext();

export const useTheme = () => React.useContext(ThemeToggleContext);

export const PokeThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = React.useState({
    mode: "default",
  });

  const changeTheme = (pokemonType) => {
    setThemeState({ mode: pokemonType });
  };

  return (
    <ThemeToggleContext.Provider value={{ changeTheme }}>
      <ThemeProvider
        theme={{
          mode: themeState.mode,
        }}
      >
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;
