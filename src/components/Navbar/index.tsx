import './styles.css'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from 'AuthContext'
import { getTokenData, isAuthenticated } from 'util/auth'
import { removeAuthData } from 'util/storage'
import history from 'util/history'



const Navbar = () => {

  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      const newData = {
        authenticated: true,
        tokenData: getTokenData()
      };
      setAuthContextData(newData);
      console.log('auth', newData)
    }
    else {
      setAuthContextData({
        authenticated: false
      })
    }
  }, []);

  const handleLogoutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    })
    history.replace('/')
  }

  return (
    <nav className="navbar navbar-expand-md bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>MovieFlix</h4>
        </Link>
        <div>
          <div> {authContextData.authenticated ? (
            <>
              <span>{authContextData.tokenData?.user_name}</span>
              <ul className="navbar-nav offset-md-2 main-menu-nav">
                <li>
                  <Link onClick={handleLogoutClick} to="/">SAIR</Link>
                </li>
              </ul>
            </>
          ) : ('')
          }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
