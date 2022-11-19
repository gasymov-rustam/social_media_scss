import { Navigate } from 'react-router-dom';
import { useAuth } from '../../AuthProvider';

export const ProtectedRoute = ({ children }) => {
  const isAuth = useAuth();

  if (!isAuth) {
    return <Navigate to='/login' />;
  }

  return children;
};
