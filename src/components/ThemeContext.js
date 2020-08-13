import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { backgroundColor } from "./theme";

const ThemeToggleContext = React.createContext();

export const useTheme = () => React.useContext(ThemeToggleContext);

export const PokeThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = React.useState({
    mode: "electric",
  });

  const Wrapper = styled.div`
    background-color: ${backgroundColor};
  `;

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
        <Wrapper>{children}</Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;
