import './styles.css'

const Movies = () => {
  return (
    <div className="container-movie">
      <h1>Tela listagem de filmes</h1>
      <div className="container-movie-list">
        <ul className="navbar-nav">
          <li>
            <a href="/movies/1">Acessar /movies/1</a>
          </li>
          <li>
            <a href="/movies/2">Acessar /movies/2</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Movies
