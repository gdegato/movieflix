import { Movie } from 'types/movie'
import './styles.css'

type Props = {
  movie: Movie
}
const ReviewSynopsis= ({ movie }: Props) => {
  return (
    <div className="container-movie-synopsis">
      <p>{movie.synopsis}</p>
    </div>
  )
}

export default ReviewSynopsis
