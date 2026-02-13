import React from 'react'

export default function Hero(){
  return (
    <header className="hero">
      <div className="hero-card" role="banner">
        <div className="subtitle">Menú de San Valentín</div>
        <h1 className="title">Una noche para nosotros</h1>
        <p style={{marginTop:6, color:'#6b6b6b'}}>Cena de 3 tiempos con cariño, fotos y detalles</p>
        <div className="couple-photos" aria-hidden>
          <img src="/photos/WhatsApp%20Image%202026-02-11%20at%207.26.15%20PM.jpeg" alt="Pareja - foto 1" />
          <img src="/photos/WhatsApp%20Image%202026-02-11%20at%207.26.14%20PM.jpeg" alt="Pareja - foto 2" />
        </div>
      </div>
    </header>
  )
}
