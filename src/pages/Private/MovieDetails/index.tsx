import { AxiosRequestConfig } from 'axios'
import ReviewForm from 'components/ReviewForm'
import ReviewListing from 'components/ReviewListing'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Review } from 'types/review'
import { hasAnyRoles } from 'util/auth'
import { requestBackend } from 'util/requests'
import MovieDetailsLoader from './MovieDetailsLoader'


import './styles.css'

type urlParams = {
  movieId: string
}

const MovieDetails = () => {
  const { movieId } = useParams<urlParams>()
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
    <div className="container">
      <h1>Tela detalhes do filme id: {movieId} </h1>

      <div className="review-form">
        {hasAnyRoles(['ROLE_MEMBER']) && (
          <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />
        )}
      </div>
      {isLoading ? <MovieDetailsLoader /> : (
        <div className="review-listing">
        <ReviewListing reviews={reviews} />
      </div>)}
    </div>
  )
}

export default MovieDetails
