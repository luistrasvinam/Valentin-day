import React from 'react'

const bebidas = [
  {name:'Cóctel de bienvenida', desc:'Champaña con toque de frambuesa'},
  {name:'Opción sin alcohol', desc:'Mocktail de maracuyá y miel'}
]

const entrada = [
  {name:'Ensalada de pera y nuez', desc:'Rúcula, pera caramelizada y aderezo de miel'},
  {name:'Crema ligera de champiñones', desc:'Con aceite de trufa'}
]

const principal = [
  {name:'Salmón al horno', desc:'Salsa cítrica, puré de papa rústico'},
  {name:'Risotto de hongos', desc:'Risotto cremoso con parmesano'}
]

const postre = [
  {name:'Tarta de frutos rojos', desc:'Base crujiente y crema ligera'},
  {name:'Fondue de chocolate', desc:'Frutas frescas para compartir'}
]

function List({title, items}){
  return (
    <section className="menu">
      <div className="section-title"><h3>{title}</h3></div>
      <div className="menu-grid">
        {items.map((it, i) => (
          <div className="item" key={i}>
            <strong>{it.name}</strong>
            <div style={{fontSize:13,color:'#6b6b6b',marginTop:6}}>{it.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function Menu(){
  return (
    <div style={{display:'grid',gap:14}}>
      <List title="Bebidas" items={bebidas}/>
      <List title="Entradas" items={entrada}/>
      <List title="Plato principal" items={principal}/>
      <List title="Postres" items={postre}/>
    </div>
  )
}
