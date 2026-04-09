import React from 'react'
import './styles.css'
import { Movie } from 'types/movie'

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
