import { useState } from 'react'
import imagemHero from './assets/imagem.svg'
import { Card } from './components/Card'

function App() {

  return (
    <div className="App">
      <section className="hero">
        <div className="hero-container container">
          <div className="hero-container-content">
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.</p>
            <button className="button">Botão</button>
          </div>
          <div className="image">
            <img src={imagemHero} alt="" />
          </div>
        </div>
      </section>

      <section className="cards">
        <div className="cards-container container">
          <ul className="cards-container-list">
            <Card color={'FF6363'} />
            <Card color={'63ECFF'} />
            <Card color={'F363FF'} />
            <Card color={'63FF73'} />
            <Card color={'FFDD63'} />
            <Card color={'6663FF'} />
          </ul>
        </div>
      </section>
      <section className="contact">
        <div className="contact-container container">
          <h2>Entre em contato</h2>

          <form>
            <input className="input" type="text" placeholder="Nome" />
            <input className="input" type="email" placeholder="E-mail" />
            <input className="input" type="tel" placeholder="Telefone" />
            <textarea className="input" cols={30} rows={10} placeholder="Mensagem..."></textarea>
            <button className="button button-block">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default App
