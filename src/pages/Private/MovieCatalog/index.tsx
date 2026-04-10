import './styles.css'
import React, { useEffect, useState } from 'react'
import Card from 'components/Card'
import Pagination from 'components/Pagination'
import { Link } from 'react-router-dom'
import { Movie } from 'types/movie'
import MovieFilter from 'components/MovieFilter'
import { AxiosRequestConfig } from 'axios'
import { requestBackend } from 'util/requests'
import { SpringPage } from 'types/vendors/spring'


const Movies = () => {

  const [movies, setMovies] = useState<SpringPage<Movie>>();
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [pageCount, setPageCount] = useState(0)
  console.log("movies", movies)

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      params: {
        page: page,
        size: 4
      }
    };
    setLoading(true);
    requestBackend(params)
      .then((response) => {
        setMovies(response.data)
        setPageCount(response.data.totalPages)
      })
      .finally(() => {
        setLoading(false)
      });
  }, [page])



  return (
    <div className="container my-4">
      {/* <div className="submit-filter-catalog">
        <MovieFilter />
      </div> */}

      <div className="row container-movie">
        {loading && <div>Carregando ...</div>}
        {movies?.content.map((movie) => (
          <div className="col-sm-6 col-lg-4 col-xl-3 movie-card-catalog " key={movie.id}>
            <Link to={`/movies/${movie.id}`} className="w-100">
              <Card movie={movie}></Card>
            </Link>
          </div>
        ))}

      </div>
      <div className="row">
        <Pagination pageCount={pageCount} range={4} onChange={setPage} />
      </div>
    </div>
  )
}

export default Movies
