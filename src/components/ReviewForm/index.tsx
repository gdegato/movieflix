import { AxiosRequestConfig } from 'axios'
import { useForm } from 'react-hook-form'
import { Review } from 'types/review'
import { requestBackend } from 'util/requests'

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
        console.log('Sucesso ao salvar!!!!', response)
      })
      .catch((error) => {
        console.log('Erro ao salvar', error)
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register('text', {
              required: 'Campo obrigatório',
            })}
            type="text"
            name="text"
            placeholder="Deixe sua avaliação aqui"
          />
          {errors.text?.message}
        </div>
        <button type="submit">Salvar avaliação</button>
      </form>
    </>
  )
}

export default ReviewForm
