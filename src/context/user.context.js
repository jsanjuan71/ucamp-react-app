import { useState, createContext, useEffect } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [token, setToken] = useState( () => window.localStorage.getItem('token') || null )

  useEffect( () => {    
    window.localStorage.setItem('token', token);
  }, [token])

  const login = (newToken) => setToken(newToken)

  const logout = () => setToken(null)

  return (
    <UserContext.Provider value={{ token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider }