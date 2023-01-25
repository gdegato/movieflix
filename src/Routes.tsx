import history from 'util/history'
import MovieCatalog from 'pages/Private/MovieCatalog'
import MovieDetails from 'pages/Private/MovieDetails'
import Navbar from 'components/Navbar'
import { Route, Router, Switch } from 'react-router-dom'
import Login from 'pages/Home/Login'
import PrivateRoute from 'components/PrivateRoute'


const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <PrivateRoute path="/movies">
        <Route path="/movies" exact>
          <MovieCatalog />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetails />
        </Route>
      </PrivateRoute>
    </Switch>
  </Router>
)

export default Routes
