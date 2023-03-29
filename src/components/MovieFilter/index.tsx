import './styles.css'

import { useState, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'
import { requestBackend } from 'util/requests'
import { Genre } from 'types/genre'

export type MovieFilterData = {
  name: string
  genre: Genre | null
}

type Props = {
  onSubmitFilter: (data: MovieFilterData) => void
}

const MovieFilter = ({ onSubmitFilter }: Props) => {
  const [selectGenres, setSelectGenres] = useState<Genre[]>([])

  const { handleSubmit, getValues, setValue, control } = useForm<
    MovieFilterData
  >()

  const onSubmit = (formData: MovieFilterData) => {
    onSubmitFilter(formData)
  }

  const handleChangeCategory = (value: Genre) => {
    setValue('genre', value)

    const obj: MovieFilterData = {
      name: getValues('name'),
      genre: getValues('genre'),
    }

    onSubmitFilter(obj)
  }

  useEffect(() => {
    requestBackend({
      url: '/genres',
      withCredentials: true,
    }).then((response) => {
      setSelectGenres(response.data)
    })
  }, [])

  return (
    <>
      <div className="base-movie movie-filter-container">
        <form onSubmit={handleSubmit(onSubmit)} className="movie-filter-form">
          <div className="movie-filter-category-container">
            <Controller
              name="genre"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={selectGenres}              
                  classNamePrefix="movie-filter-select"
                  placeholder="Gênero"
                  isClearable                            
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: '#9E9E9E',
                      primary: '#9E9E9E',
                    },
                  })}
                  onChange={(value) => handleChangeCategory(value as Genre)}
                  getOptionLabel={(genre: Genre) => genre.name}
                  getOptionValue={(genre: Genre) => String(genre.id)}
                />
              )}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default MovieFilter
