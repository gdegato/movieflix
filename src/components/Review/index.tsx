import { Movie } from 'types/movie'
import './styles.css'

type Props = {
  movie: Movie
}
const Review = ({ movie }: Props) => {
  return (
    <div className="container-movie-review">
      <p>{movie.synopsis}</p>
    </div>
  )
}

export default Review
