import React from 'react'

export default function PlatilloPrincipal(){
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
      id="platillo" 
      className={`platillo ${isVisible ? 'is-visible' : ''}`}
      aria-labelledby="platillo-title"
    >
      <div className="platillo-container">
        {/* Foto principal izquierda */}
        <div className="platillo-main-photo">
          <img src="/photos/10.jpeg" alt="" />
        </div>

        {/* Contenido central con texto */}
        <div className="platillo-content">
          <h2 id="platillo-title" className="platillo-title">Donde comenzó nuestro para siempre</h2>
          
          <div className="platillo-description">
            <p className="platillo-dish">
              Un rib eye a la mantequilla, sellado a la perfección, acompañado de puré de papa cremoso y espárragos salteados.
            </p>

            <p className="platillo-lead">
              Un corte firme y lleno de carácter, como la decisión que cambió nuestras vidas.<br/>
              Suave por dentro, intenso en esencia, equilibrado con la calidez del puré y la frescura de los espárragos.
            </p>

            <p>
              Cada elemento en este plato representa armonía: fuerza y ternura, intensidad y dulzura.
            </p>

            <p>
              Así como aquel día no fue solo una pregunta,<br/>
              fue la promesa de caminar juntos el resto del camino.
            </p>

            <p className="platillo-finale">
              Este no es solo el centro de la cena…<br/>
              es el símbolo del momento en que elegimos escribir nuestra historia para siempre.
            </p>

            <button 
              className="start-button platillo-next-btn" 
              onClick={() => {
                document.getElementById('postre')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Postre
            </button>
          </div>
        </div>

        {/* Fotos polaroid derecha */}
        <div className="platillo-polaroids">
          <div className="platillo-polaroid platillo-polaroid-1">
            <img src="/photos/9.jpeg" alt="" />
          </div>
          <div className="platillo-polaroid platillo-polaroid-2">
            <img src="/photos/11.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
