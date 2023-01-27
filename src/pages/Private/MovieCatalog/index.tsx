import axios, { AxiosRequestConfig } from 'axios'
import { useEffect, useState } from 'react'
import { Movie } from 'types/movie'
import { BASE_URL, requestBackend } from 'util/requests'
import './styles.css'

const Movies = () => {
  // const [movie, setMovie] = useState<Movie>()

  // useEffect(() => {
  //   const params: AxiosRequestConfig = {
  //     url: BASE_URL + '/movies/1',
  //     withCredentials: true,
  //   }

  //   requestBackend(params).then((response) => {
  //     setMovie(response.data)
  //   })
  // }, [])

  return (
    <div className="container">
      <h1>Tela listagem de movies</h1>
      <ul className="navbar-nav">
        <li>
          <a href="/movies/1">Acessar/movies/1</a>
        </li>
        <li>
          <a href="/movies/2">Acessar/movies/2</a>
        </li>
      </ul>
    </div>
  )
}

export default Movies
