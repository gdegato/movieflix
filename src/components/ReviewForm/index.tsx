import { AxiosRequestConfig } from 'axios'
import Button from 'components/Button'
import { useForm } from 'react-hook-form'
import { Review } from 'types/review'
import { requestBackend } from 'util/requests'

import './styles.css'

type Props = {
  movieId: string
  onInsertReview: (review: Review) => void
}

type FormData = {
  movieId: number
  text: string
}

const ReviewForm = ({ movieId, onInsertReview }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>()

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId)

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      data: formData,
      withCredentials: true,
    }

    requestBackend(config)
      .then((response) => {
        setValue('text', '')
        onInsertReview(response.data)
      })
      .catch((error) => {
        console.log('Erro ao salvar', error)
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="container-review-form">
        <div className="mb-4 input-review-form">
          <input
            {...register('text', {
              required: 'Campo obrigatório',
            })}
            type="text"
            className="form-control"
            name="text"
            placeholder="Deixe sua avaliação aqui"
          />
          {errors.text?.message}
        </div>
        <div className="button-review-form">
           <Button text={'Salvar avaliação'} />
        </div>
       
      </form>
    </>
  )
}

export default ReviewForm
