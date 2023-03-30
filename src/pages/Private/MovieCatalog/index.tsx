import './styles.css'
import Card from 'components/Card'
import Pagination from 'components/Pagination'
import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Movie } from 'types/movie'
import { AxiosRequestConfig } from 'axios'
import { SpringPage } from 'types/vendors/spring'
import { BASE_URL, requestBackend } from 'util/requests'
import MovieFilter, { MovieFilterData } from 'components/MovieFilter'

type ControlComponentsData = {
  activePage: number
  filterData: MovieFilterData
}

const Movies = () => {
  const [page, setPage] = useState<SpringPage<Movie>>()

  const [controlComponentsData, setControlComponentsData] = useState<
    ControlComponentsData
  >({
    activePage: 0,
    filterData: { name: '', genre: null },
  })

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    })
  }
  const handleSubmitFilter = (data: MovieFilterData) => {
    setControlComponentsData({
      activePage: 0,
      filterData: data,
    })
  }

  const getMovies = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `${BASE_URL}/movies`,
      params: {
        page:  controlComponentsData.activePage,
        size: 4,
        name: controlComponentsData.filterData.name,
        genreId: controlComponentsData.filterData.genre?.id
      },
      withCredentials: true,
    }
    console.log(config)

    requestBackend(config).then((response) => {
      setPage(response.data)
    })
  }, [controlComponentsData]);

  useEffect(() => {
    getMovies()
  }, [getMovies])

  return (
    <div className="container my-4">
      <div className="submit-filter-catalog">
         <MovieFilter onSubmitFilter={handleSubmitFilter} />
      </div>
     
      <div className="row container-movie ">
        {page?.content.map((movie) => (
          <div className="col-sm-6 col-xl-3  movie-card-catalog " key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <Card movie={movie}></Card>
            </Link>
          </div>
        ))}
      </div>
      <div className="row">
        <Pagination
          pageCount={page ? page.totalPages : 0}
          range={3}
          onChange={handlePageChange}
        />
      </div>
    </div>
  )
}

export default Movies
