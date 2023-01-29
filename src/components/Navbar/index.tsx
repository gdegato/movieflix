import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getTokenData, isAuthenticated, TokenData } from 'util/auth'
import { removeAuthData } from 'util/storage'
import history from 'util/history'
import { AuthContext } from 'AuthContext'


import './styles.css'

type AuthData = {
  authenticated: boolean
  tokenData?: TokenData
}

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext)

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      })
    } else {
      setAuthContextData({
        authenticated: false,
      })
    }
  }, [setAuthContextData])
  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    removeAuthData()
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
          {authContextData.authenticated ? (
            <div>
              <ul className="navbar-nav offset-md-2 main-menu-nav">
                <li>
                  <Link to="/" onClick={handleLogoutClick}>
                    SAIR
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
