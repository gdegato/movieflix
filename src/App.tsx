import React, { useState } from 'react'
import './assets/styles/custom.scss'
import './App.css'
import Routes from 'Routes'
import { AuthContext, AuthContextData, AuthContextType } from 'AuthContext'

function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  const contextValue: AuthContextType = {
    authContextData,
    setAuthContextData,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <Routes />
    </AuthContext.Provider>
  );
}

export default App
