import React from 'react'

const PHOTOS = ['/photos/6.jpeg','/photos/7.jpeg','/photos/12.jpeg','/photos/18.jpeg','/photos/24.jpeg','/photos/15.jpeg']

export default function Introduccion(){
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

  // 3 left photos (indexes 0,1,2) and 3 right photos (indexes 3,4,5)
  // centered closer to the text content
  const positions = [
    { left: -50, top: 15, rot: -14 },    // left - top (photo 6)
    { left: -50, top: 50, rot: -6 },    // left - middle (photo 7)
    { left: -50, top: 85, rot: 8 },     // left - bottom (photo 12)
    { right: -50, top: 15, rot: 12 },    // right - top (photo 18)
    { right: -50, top: 50, rot: 6 },    // right - middle (photo 24)
    { right: -50, top: 85, rot: -10 }   // right - bottom (photo 15)
  ]

  return (
    <section 
      ref={sectionRef}
      id="introduccion" 
      className={`introduccion ${isVisible ? 'is-visible' : ''}`}
      aria-labelledby="intro-title"
    >
      <div className="introduccion-canvas">
        <div className="introduccion-collage" aria-hidden>
          {PHOTOS.map((src, i) => {
            const pos = positions[i]
            const style = {
              position: 'absolute',
              top: `${pos.top}%`,
              zIndex: 1,
              pointerEvents: 'none',
              '--rotation': `${pos.rot}deg`
            }
            if (pos.left !== undefined) style.left = `${pos.left}%`
            if (pos.right !== undefined) style.right = `${pos.right}%`
            const className = `polaroid p${i+1}`
            return <img key={i} src={src} alt="" className={className} style={style} />
          })}
        </div>

        <div className="introduccion-copy">
          <h2 id="intro-title">Una noche para recordar</h2>

          <p className="lead">Esta no es solo una cena.<br/>
          Es una pausa para mirar todo lo que hemos vivido.</p>

          <p>Cada platillo representa una etapa, un momento que nos trajo hasta aquí.<br/>
          Y en nuestras manos, una copa fresca que acompaña este recorrido y celebra lo que hemos construido juntos.</p>

          <p>Hay historias que comienzan sin grandes planes.<br/>
          La nuestra empezó con ganas, con tiempo compartido y con la certeza de que valía la pena intentarlo.</p>

          <p>Desde aquellos días de 2017, cuando 50 minutos de transporte no importaban,<br/>
          cuando cocinar juntos era suficiente,<br/>
          cuando lo sencillo se sentía enorme.</p>

          <p>Hoy esa historia se sirve en la mesa.<br/>
          No para idealizarla, sino para recordar que lo más grande que tenemos comenzó de forma simple.</p>
        </div>

        <button 
          className="start-button introduccion-next-btn" 
          onClick={() => {
            document.getElementById('entrada')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Entrada
        </button>
      </div>
    </section>
  )
}

