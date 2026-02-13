import React from 'react'
import Presentation from './components/Presentation'
import Introduccion from './components/Introduccion'
import Entrada from './components/Entrada'
import PlatilloPrincipal from './components/PlatilloPrincipal'
import Postre from './components/Postre'

export default function App(){
  return (
    <div className="app">
      <Presentation />
      <Introduccion />
      <Entrada />
      <PlatilloPrincipal />
      <Postre />
    </div>
  )
}
