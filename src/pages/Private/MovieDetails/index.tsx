import './styles.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { AxiosRequestConfig } from 'axios'
import ReviewListing from 'components/ReviewListing'
import Button from 'components/Button'
import { Movie } from 'types/movie'
import { Review } from 'types/review'
import { requestBackend, requestBackendReview } from 'util/requests'
import { hasAnyRoles } from 'util/auth'
import Pagination from 'components/Pagination'

type FormData = {
  text: string
}

type UrlParams = {
  movieId: string;
}

const MovieDetails = () => {

  const { movieId } = useParams<UrlParams>()
  const [reviews, setReviews] = useState<Review[]>([])
  const [details, setDetails] = useState<Movie>()
  const [loading, setLoading] = useState(false);
  const [reviewCount, setReviewCount] = useState(0);
  const [hasError, setHasError] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 5;
  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id)
  
  const start = currentPage * reviewsPerPage
  const currentReviews = sortedReviews.slice(start, start + reviewsPerPage)
  const pageCount = Math.ceil(reviews.length / reviewsPerPage)

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}`,
      withCredentials: true,
    }
    setLoading(true);
    requestBackend(params)
      .then((response) => {
        setDetails(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [movieId]);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    setLoading(true);
    requestBackend(params)
      .then((response) => {
        setReviews(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [movieId, reviewCount]);

  const onSubmit = (data: FormData) => {
    requestBackendReview(parseInt(movieId), data.text)
      .then(() => {
        setReviewCount(reviewCount + 1);
        setHasError(false);
      })
      .catch((error) => {
        setHasError(true);
        console.log(error);
      });
  }

  return (
    <div className="container">
      <nav className="text-start d-block w-100" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/movies">Voltar</a></li>
          <li className="breadcrumb-item active" aria-current="page">{details?.title}</li>
        </ol>
      </nav>
      <div className="container-details">
        <div className="container-rota-details">
          <img src={details?.imgUrl} alt={details?.title} />
        </div>
        <div className="card-top-container">
          <h3>{details?.title}</h3>
          <h4>{details?.year}</h4>
          <p>{details?.subTitle}</p>

          <div className="card-details-container">
            <p>{details?.synopsis}</p>
          </div>
        </div>
      </div>
      {hasError && (
        <div className="alert alert-danger">Erro ao tentar enviar o review</div>
      )}
      {hasAnyRoles(['ROLE_MEMBER']) && (
        <div className="review-form">
          <form onSubmit={handleSubmit(onSubmit)} className="container-review-form">
            <div className="mb-4 input-review-form">
              <input
                type="text"
                className="form-control"
                placeholder="Deixe sua avaliação aqui"
                {...register('text', {
                  required: 'Campo obrigatório',
                })}
              />
            </div>
            <div className="button-review-form">
              <Button text={'Salvar avaliação'} />
            </div>
          </form>
        </div>
      )}
      <div className="review-listing">
        {loading
          ?
          <div> Carregando...</div>
          :
          <>
            <span className="text-end d-block">
              Total de reviews: {pageCount}
            </span>
            <ReviewListing reviews={currentReviews} />
          </>
        }
      </div>
      <Pagination pageCount={pageCount} range={4} onChange={setCurrentPage} />
    </div>
  )
}
export default MovieDetails

