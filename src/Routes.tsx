import history from 'util/history'
import MovieCatalog from 'pages/Private/MovieCatalog'
import MovieDetails from 'pages/Private/MovieDetails'
import Navbar from 'components/Navbar'
import { Route, Router, Switch } from 'react-router-dom'
import Home from 'pages/Home'

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies" exact>
        <MovieCatalog />
      </Route>
      <Route path="/movies/:movieId">
        <MovieDetails />
      </Route>
    </Switch>
  </Router>
)

export default Routes
