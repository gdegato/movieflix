import './styles.css'
import { ReactComponent as Desenho } from 'assets/images/Desenho.svg'
import Login from './Login'


const Home = () => {
  return (
    <div className="container">
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
