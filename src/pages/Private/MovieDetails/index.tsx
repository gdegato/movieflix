import { AxiosRequestConfig } from 'axios'
import Card from 'components/Card'
import ReviewForm from 'components/ReviewForm'
import ReviewListing from 'components/ReviewListing'
import ReviewSynopsis from 'components/ReviewSynopsis'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Movie } from 'types/movie'
import { Review } from 'types/review'
import { hasAnyRoles } from 'util/auth'
import { BASE_URL, requestBackend } from 'util/requests'
import MovieDetailsLoader from './MovieDetailsLoader'

import './styles.css'

type urlParams = {
  movieId: string
}

const MovieDetails = () => {
  const { movieId } = useParams<urlParams>()

  const [movie, setMovie] = useState<Movie>()

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `${BASE_URL}/movies/${movieId}`,
      withCredentials: true,
    }

    requestBackend(params).then((response) => {
      setMovie(response.data)
    })
  }, [])

  const [reviews, setReviews] = useState<Review[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    }
    setIsLoading(true)

    requestBackend(config)
      .then((response) => {
        setReviews(response.data)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [movieId])

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews]

    clone.push(review)
    setReviews(clone)
  }

  return (
    <div className="container ">
      <div className="container-details">
        <div className="container-rota-details">
          <img src={movie?.imgUrl} alt={movie?.title} />
        </div>

        <div className="card-top-container">
          <h3>{movie?.title}</h3>
          <h4>{movie?.year}</h4>
          <p>{movie?.subTitle}</p>

          <div className="card-details-container">
            <p>{movie?.synopsis}</p>
          </div>
        </div>
      </div>
      <div className="review-form">
        {hasAnyRoles(['ROLE_MEMBER']) && (
          <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />
        )}
      </div>
      {isLoading ? (
        <MovieDetailsLoader />
      ) : (
        <div className="review-listing">
          <ReviewListing reviews={reviews} />
        </div>
      )}
    </div>
  )
}

export default MovieDetails
