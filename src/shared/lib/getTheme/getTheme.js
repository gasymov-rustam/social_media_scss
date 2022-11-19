export const themes = {
  DARK: 'dark',
  LIGHT: 'light',
};

export const getTheme = () => {
  const theme = JSON.parse(window?.localStorage?.getItem('theme'));
  if (Object.values(themes).includes(theme)) return theme;

  const userMedia = window.matchMedia('(prefers-color-scheme: light)');
  if (userMedia.matches) {
    window.localStorage.setItem('theme', JSON.stringify(themes.LIGHT));
    return themes.LIGHT;
  }

  window.localStorage.setItem('theme', JSON.stringify(themes.DARK));
  return themes.DARK;
};
