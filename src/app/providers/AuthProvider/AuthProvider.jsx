import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export let userActions = null;

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem('user')) ?? null);

  userActions = {
    login: () => {
      const user = {
        id: 1,
        username: 'rustam',
        avatar:
          'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600}',
      };

      setUser(user);

      window.localStorage.setItem('user', JSON.stringify(user));
    },
    logout: () => {
      setUser(null);
      window.localStorage.removeItem('user');
    },
  };

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
