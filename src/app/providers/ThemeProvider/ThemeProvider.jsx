import { createContext, useContext, useState } from 'react';
import { getTheme } from '../../../shared';

export const themes = {
  DARK: 'dark',
  LIGHT: 'light',
};

const ThemeContext = createContext();

export let toggleTheme = null;

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);

  toggleTheme = () => {
    setTheme((prev) => {
      let newTheme = '';

      switch (prev) {
        case themes.DARK:
          newTheme = themes.LIGHT;
          break;
        case themes.LIGHT:
          newTheme = themes.DARK;
          break;
        default:
          newTheme = themes.LIGHT;
          break;
      }

      window.localStorage.setItem('theme', JSON.stringify(newTheme));
      return newTheme;
    });
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
