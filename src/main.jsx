import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { AuthProvider, ThemeProvider } from './app/providers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
