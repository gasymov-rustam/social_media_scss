import { ToastContainer } from 'react-toastify';
import { AppRouter, useTheme } from './providers';
import 'react-toastify/dist/ReactToastify.css';
import './styles/index.css';

export const App = () => {
  const theme = useTheme();

  return (
    <div className={`theme-${theme}`}>
      <AppRouter />
      <ToastContainer
        position='bottom-right'
        autoClose={2000}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme={theme}
      />
    </div>
  );
};
