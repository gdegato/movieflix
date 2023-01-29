import { Review } from 'types/review'
import {ReactComponent as StarIcon} from './../../assets/images/star.svg'
import './styles.css'

type Props = {
  reviews: Review[]
}

const ReviewListing = ({ reviews }: Props) => {
  return (
    <div className="container-review-list"> 
      <ul className="review-list">
        {reviews.map((review) => (
          <li key={review.id}>
            <p className="review-list-name">
              <div className='review-list-icon'>
                 <StarIcon />
              </div>
             {review.user.name}</p>
            <p className="review-list-review">{review.text}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReviewListing
