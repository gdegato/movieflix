import axios from 'axios'
import { useEffect, useState } from 'react'
import { Movie } from 'types/movie'
import { BASE_URL } from 'util/requests'
import './styles.css'

const Movies = () => {
  const [movie, setMovie] = useState<Movie>()

  useEffect(() => {
    axios.get(BASE_URL + '/movies/1').then((response) => {
      setMovie(response.data)
    })
  }, [])

  return (
    <div className="auth-container">
      <div className="auth-banner-container">
        <h1>Tela listagem de movies</h1>
        <ul className="navbar-nav">
          <li>Acessar /movies/1</li>
          <li>Acessar /movies/2</li>
        </ul>
      </div>
    </div>
  )
}

export default Movies
