import React from 'react'

const PHOTOS = [
  '/photos/3.jpeg','/photos/8.jpeg','/photos/12.jpeg','/photos/13.jpeg','/photos/14.jpeg',
  '/photos/20.jpeg','/photos/21.jpeg','/photos/22.jpeg','/photos/23.jpeg','/photos/26.jpeg',
  '/photos/27.jpeg'
]

export default function Gracias({onClose}) {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(t);
  }, []);
  return (
    <section className={"gracias-section" + (visible ? " is-visible" : "") }>
      <div className="gracias-polaroid-canvas">
        {/* Polaroids distribuidas manualmente alrededor del contenido */}
        {PHOTOS.map((src, i) => {
          if (i >= 11) return null;
          const pos = [
            { left: '1%',  top: '3%',  rot: -10 },
            { left: '14%', top: '1%',  rot: 7 },
            { left: '78%', top: '1%',  rot: -6 },
            { left: '88%', top: '4%',  rot: 11 },
            { left: '0%',  top: '30%', rot: -14 },
            { left: '87%', top: '30%', rot: 12 },
            { left: '0%',  top: '60%', rot: 8 },
            { left: '87%', top: '60%', rot: -9 },
            { left: '5%',  top: '82%', rot: -7 },
            { left: '42%', top: '88%', rot: -5 },
            { left: '80%', top: '82%', rot: 9 },
          ][i]
          if (!pos) return null;
          return (
            <div className="gracias-polaroid" key={i} style={{
              left: pos.left,
              top: pos.top,
              transform: `rotate(${pos.rot}deg)`
            }}>
              <img src={src} alt="" />
            </div>
          )
        })}
        <div className="gracias-content">
          <h2 className="gracias-title">Gracias</h2>
          <p>
            Y si algo hemos aprendido, es que nuestra historia no se trata solo de grandes momentos…<br/>
            sino de elegirnos cada día.
          </p>
          <p>
            Cada uno vive su mundo, enfrenta su propio día, sus retos, sus pensamientos.<br/>
            A veces discutimos. A veces pensamos diferente. A veces no todo es sencillo.
          </p>
          <p>
            Pero al final del día… volvemos al mismo lugar.<br/>
            <br/>
            A la misma cama.<br/>
            Al mismo espacio.<br/>
            Al mismo nosotros.
          </p>
          <p>
            Porque más allá de cualquier diferencia, siempre regresamos a lo esencial:<br/>
            escucharnos, entendernos, acompañarnos.
          </p>
          <p>
            No es la perfección lo que nos sostiene.<br/>
            Es la decisión de volver.
          </p>
          <p>
            Volver a ti.<br/>
            Volver a mí.<br/>
            Volver a nosotros.
          </p>
          <p>
            Y entender que, pase lo que pase allá afuera,<br/>
            al final…<br/>
            <b>somos nosotros.</b>
          </p>
          {onClose && (
            <button className="gracias-close-btn" onClick={onClose}>Cerrar</button>
          )}
        </div>
      </div>
    </section>
  )
}
