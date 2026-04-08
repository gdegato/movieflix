import './styles.css'
import Card from 'components/Card'
import Pagination from 'components/Pagination'
import { Link } from 'react-router-dom'
import { Movie } from 'types/movie'
import MovieFilter from 'components/MovieFilter'

const movies: Movie[] = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    subTitle: 'Two imprisoned men bond over a number of years',
    year: 1994,
    imgUrl: 'https://raw.githubusercontent.com/devsuperior/movieflix/main/assets/movie1.jpg',
    synopsis: 'Sample synopsis',
  },
  {
    id: 2,
    title: 'The Godfather',
    subTitle: 'The aging patriarch of an organized crime dynasty transfers control',
    year: 1972,
    imgUrl: 'https://raw.githubusercontent.com/devsuperior/movieflix/main/assets/movie2.jpg',
    synopsis: 'Sample synopsis',
  },
  {
    id: 3,
    title: 'Pulp Fiction',
    subTitle: 'The lives of two mob hitmen, a boxer, and more',
    year: 1994,
    imgUrl: 'https://raw.githubusercontent.com/devsuperior/movieflix/main/assets/movie3.jpg',
    synopsis: 'Sample synopsis',
  },
  {
    id: 4,
    title: 'Fight Club',
    subTitle: 'An insomniac office worker and a soap maker form a club',
    year: 1999,
    imgUrl: 'https://raw.githubusercontent.com/devsuperior/movieflix/main/assets/movie4.jpg',
    synopsis: 'Sample synopsis',
  },
]

const Movies = () => {
  return (
    <div className="container my-4">
      <div className="submit-filter-catalog">
        <MovieFilter />
      </div>

      <div className="row container-movie ">
        {movies.map((movie) => (
          <div className="col-sm-6 col-xl-3  movie-card-catalog " key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <Card movie={movie}></Card>
            </Link>
          </div>
        ))}
      </div>
      <div className="row">
        <Pagination pageCount={4} range={3} />
      </div>
    </div>
  )
}

export default Movies
