import React from 'react'
import Gracias from './Gracias'

export default function Postre(){
  const [isVisible, setIsVisible] = React.useState(false)
  const [showGracias, setShowGracias] = React.useState(false)
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

  if (showGracias) {
    return <Gracias />
  }

  return (
    <section 
      ref={sectionRef}
      id="postre" 
      className={`postre ${isVisible ? 'is-visible' : ''}`}
      aria-labelledby="postre-title"
    >
      <div className="postre-background">
        <img src="/photos/17.jpeg" alt="" />
        <div className="postre-overlay"></div>
      </div>

      <div className="postre-content-wrapper">
        <div className="postre-content">
          <h2 id="postre-title" className="postre-title">Nuestro hogar, nuestra vida</h2>
          
          <p className="postre-dish">
            Un cheesecake de fresa, suave y armonioso, sobre una base firme que lo sostiene todo.
          </p>

          <p className="postre-description">
            Como nuestro hogar.<br/>
            Como la vida que decidimos comenzar juntos.
          </p>

          <p className="postre-description">
            La base sostiene todo, firme y constante, como los pasos que dimos para llegar hasta aquí.<br/>
            El interior suave guarda la calma de saber que, pase lo que pase, siempre tendremos un lugar al cual volver.<br/>
            Y las fresas, dulces y vivas, son los pequeños momentos que llenan nuestros días de risa, complicidad y amor compartido.
          </p>

          <p className="postre-description">
            Aquel día no solo sostuvimos unas llaves en nuestras manos…<br/>
            sostuvimos el inicio de una nueva etapa.
          </p>

          <p className="postre-finale">
            El lugar donde nuestros sueños empezaron a tener dirección,<br/>
            donde cada amanecer comenzó a sentirse más nuestro,<br/>
            y donde dejamos de planear el futuro…<br/>
            para empezar a vivirlo juntos.
          </p>
          <button className="gracias-btn" onClick={()=>setShowGracias(true)}>Gracias</button>
        </div>
      </div>
    </section>
  )
}
