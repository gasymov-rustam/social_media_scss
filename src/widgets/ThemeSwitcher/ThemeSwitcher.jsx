import { useTheme, toggleTheme } from '../../app/providers';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

export const ThemeSwitcher = () => {
  const theme = useTheme();

  return (
    <>
      {theme === 'dark' ? (
        <WbSunnyOutlinedIcon onClick={toggleTheme} />
      ) : (
        <DarkModeOutlinedIcon onClick={toggleTheme} />
      )}
    </>
  );
};
