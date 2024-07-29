import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: localStorage.getItem('token'), id: localStorage.getItem('id') });

  const login = (token, id) => {
    setAuth({ token, id });
    localStorage.setItem('token', token);
    localStorage.setItem('id', id);
  };

  const logout = () => {
    setAuth({ token: null, id: null });
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
