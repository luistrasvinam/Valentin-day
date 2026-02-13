import React, { useEffect, useRef } from 'react'

export default function FirstSteps(){
  const containerRef = useRef(null)

  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    const cards = root.querySelectorAll('.step-card')
    const options = { threshold: 0.12 }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        }
      })
    }, options)

    cards.forEach(c => {
      c.classList.add('pre-animate')
      io.observe(c)
    })

    return () => io.disconnect()
  }, [])

  return (
    <section className="first-steps" aria-labelledby="first-steps-title">
      <div className="first-steps-inner container" ref={containerRef}>
        <header className="intro-text">
          <h2 id="first-steps-title">Nuestros Primeros Pasos</h2>
          <p>
            Esta entrada reúne los primeros momentos de una historia que comenzó en 2017:
            viajes largos, comidas hechas en casa y citas sencillas que, sin saberlo,
            fueron construyendo algo duradero. Aquí están cuatro tapas que simbolizan
            aquellos instantes íntimos y cotidianos que hoy recordamos con ternura.
          </p>
        </header>

        <div className="steps-grid">
          <article className="step-card" tabIndex={0}>
            <h3 className="step-title">Los 50 Minutos</h3>
            <blockquote className="step-quote">“Por cada viaje que hacía solo para verte… y que siempre valía la pena.”</blockquote>
          </article>

          <article className="step-card" tabIndex={0}>
            <h3 className="step-title">Tu Cocina</h3>
            <blockquote className="step-quote">“Por cada vez que me cocinaste… sin saber que estabas alimentando algo más grande.”</blockquote>
          </article>

          <article className="step-card" tabIndex={0}>
            <h3 className="step-title">Citas Pequeñas, Sentimientos Grandes</h3>
            <blockquote className="step-quote">“Nuestras primeras citas… simples, jóvenes, pero llenas de algo que ya se sentía diferente.”</blockquote>
          </article>

          <article className="step-card" tabIndex={0}>
            <h3 className="step-title">2017</h3>
            <blockquote className="step-quote">“El año 2017. Cuando no sabíamos que estábamos empezando nuestra historia.”</blockquote>
          </article>
        </div>
      </div>
    </section>
  )
}
