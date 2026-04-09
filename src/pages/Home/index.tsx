import './styles.css'
import React from 'react'
import { ReactComponent as Desenho } from 'assets/images/Desenho.svg'
import Login from './Login'

const Home = () => {
  return (
    <div className="container-home">
      <div className="banner-container-home">
        <h1>Avalie Filmes</h1>
        <p>Diga o que você achou do seu filme favorito.</p>
        <Desenho />
      </div>
      <div>
        <Login />
      </div>
    </div>
  )
}

export default Home
