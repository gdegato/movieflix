import { Link } from 'react-router-dom'

import './styles.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>MovieFlix</h4>
        </Link>

        <div>
          <div>
            <ul className="navbar-nav offset-md-2 main-menu-nav">
              <li>
                <Link to="/">SAIR</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
