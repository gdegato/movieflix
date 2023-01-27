import { Review } from 'types/review'
import './styles.css'

type Props = {
  reviews: Review[]
}

const ReviewListing = ({ reviews }: Props) => {
  console.log(reviews)
  return (
    <div className="container-information">
      <h3>Nome do usuário</h3>
      <p>Comentario do filme</p>
    </div>
  )
}

export default ReviewListing
