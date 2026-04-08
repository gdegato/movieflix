import ReviewForm from 'components/ReviewForm'
import ReviewListing from 'components/ReviewListing'
import { Movie } from 'types/movie'
import { Review } from 'types/review'

import './styles.css'

const movie: Movie = {
  id: 1,
  title: 'The Shawshank Redemption',
  subTitle: 'Two imprisoned men bond over a number of years',
  year: 1994,
  imgUrl: 'https://raw.githubusercontent.com/devsuperior/movieflix/main/assets/movie1.jpg',
  synopsis:
    'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
}

const reviews: Review[] = [
  {
    id: 1,
    text: 'Excelente filme, roteiro muito bem construído.',
    movieId: 1,
    user: {
      id: 1,
      name: 'Maria Brown',
      email: 'maria@email.com',
    },
  },
  {
    id: 2,
    text: 'Gostei bastante da atuação e da direção.',
    movieId: 1,
    user: {
      id: 2,
      name: 'Alex Green',
      email: 'alex@email.com',
    },
  },
]

const MovieDetails = () => {
  return (
    <div className="container ">
      <div className="container-details">
        <div className="container-rota-details">
          <img src={movie.imgUrl} alt={movie.title} />
        </div>

        <div className="card-top-container">
          <h3>{movie.title}</h3>
          <h4>{movie.year}</h4>
          <p>{movie.subTitle}</p>

          <div className="card-details-container">
            <p>{movie.synopsis}</p>
          </div>
        </div>
      </div>
      <div className="review-form">
        <ReviewForm />
      </div>
      <div className="review-listing">
        <ReviewListing reviews={reviews} />
      </div>
    </div>
  )
}

export default MovieDetails
