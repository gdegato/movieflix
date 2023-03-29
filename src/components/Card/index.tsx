import { Movie } from 'types/movie'
import './styles.css'

type Props = {
  movie: Movie
  children?: React.ReactNode
  reduzirImagem?: boolean  
  cardRotaDetails?: boolean

}

const Card = ({ movie, children, reduzirImagem, cardRotaDetails }: Props) => {
  return (    
    <div className={cardRotaDetails? 'container-rota-details': 'container-movie-card' }>
      <div className={reduzirImagem ? 'imagem-reduzida' : 'card-top-container'}>
        <img src={movie.imgUrl} alt={movie.title} />
      </div>
      <div className='card-bottom-container'>
        <h3>{movie.title}</h3>
        <h4>{movie.year}</h4>
        <p>{movie.subTitle}</p>
      </div>
      <div className="bottom-review">
        <>{children}</>
      </div>
    </div>
  )
}

export default Card
