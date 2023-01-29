import { Review } from 'types/review'
import './styles.css'

type Props = {
  reviews: Review[]
}

const ReviewListing = ({ reviews }: Props) => {
  return (
    <div className="container-review-list">
      <h3>Mais perdida que cusco em tiroteio</h3>
      <p>Comentario do filme</p>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.user.name}</p>
            <p>{review.text}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReviewListing
