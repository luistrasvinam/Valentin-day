import React from 'react'

export default function Entrada(){
  const [isVisible, setIsVisible] = React.useState(false)
  const sectionRef = React.useRef(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="entrada" 
      className={`entrada ${isVisible ? 'is-visible' : ''}`}
      aria-labelledby="entrada-title"
    >
      <div className="entrada-container">
        {/* Foto izquierda con efecto rasgado */}
        <div className="entrada-photo entrada-photo-left">
          <img src="/photos/4.jpeg" alt="" />
        </div>

        {/* Contenido central */}
        <div className="entrada-content">
          <h2 id="entrada-title" className="entrada-main-title">ENTRADA</h2>
          <h3 className="entrada-subtitle">Nuestros Primeros Pasos</h3>
          
            <p className="entrada-intro">
            Cuatro tapas que representan el origen de nuestra historia,
            servidas como un recorrido por aquellos días en que todo comenzaba.<br/>
            Pequeños bocados que guardan grandes sentimientos.
            </p>

          <div className="entrada-tapas">
            <div className="tapa-item">
              <h4>Los 50 Minutos</h4>
              <p>"Esta es por cada viaje que hacía solo para verte… y que siempre valía la pena."</p>
            </div>

            <div className="tapa-item">
              <h4>Tu Cocina</h4>
              <p>"Esta es por cada vez que me cocinaste… sin saber que estabas alimentando algo más grande."</p>
            </div>

            <div className="tapa-item">
              <h4>Citas Pequeñas, Sentimientos Grandes</h4>
              <p>"Esta es por nuestras primeras citas… simples, jóvenes, pero llenas de algo que ya se sentía diferente."</p>
            </div>

            <div className="tapa-item">
              <h4>El Comienzo</h4>
              <p>"Y esta… es por el 2017. Cuando no sabíamos que estábamos empezando nuestra historia."</p>
            </div>
          </div>

          <button 
            className="start-button entrada-next-btn" 
            onClick={() => {
              document.getElementById('platillo')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Platillo Principal
          </button>
        </div>

        {/* Foto derecha con efecto rasgado */}
        <div className="entrada-photo entrada-photo-right">
          <img src="/photos/28.jpeg" alt="" />
        </div>
      </div>
    </section>
  )
}
