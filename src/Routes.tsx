import React from 'react'
import history from 'util/history'
import MovieCatalog from 'pages/Private/MovieCatalog'
import MovieDetails from 'pages/Private/MovieDetails'
import Navbar from 'components/Navbar'
import { Route, Router, Switch } from 'react-router-dom'
import Home from 'pages/Home'
import PrivateRoute from 'components/PrivateRoute'

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <PrivateRoute path="/movies" exact>
        <MovieCatalog />
      </PrivateRoute>
      <PrivateRoute path="/movies/:movieId">
        <MovieDetails />
      </PrivateRoute>
    </Switch>
  </Router>
)

export default Routes
