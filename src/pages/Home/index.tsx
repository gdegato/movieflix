import './styles.css'
import { ReactComponent as Desenho } from 'assets/images/Desenho.svg'
import Login from './Login'
import { getTokenData } from 'util/auth'


const Home = () => {
  return (
    <div className="container">
      <h1>{getTokenData()?.user_name}</h1>
      <h1 className="">Avalie Filmes</h1>
      <p>Diga o que você achou do seu filme favorito.</p>
      <Desenho />
      <div>
        <Login />
      </div>
    </div>
  )
}

export default Home
