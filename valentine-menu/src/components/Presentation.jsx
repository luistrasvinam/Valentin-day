import React, { useState, useEffect, useRef } from 'react'

export default function Presentation(){
  const [collapsed, setCollapsed] = useState(false)
  

  function handleStart(){
    // collapse presentation to reveal content
    setCollapsed(true)
    // temporarily ignore scroll events caused by the automatic scroll
    if (ignoreScrollRef.current !== undefined) {
      ignoreScrollRef.current = true
      setTimeout(()=>{ ignoreScrollRef.current = false }, 1000)
    }

    // give the collapse animation a small head start, then scroll
    setTimeout(()=>{
      const target = document.getElementById('introduccion')
      if (target) target.scrollIntoView({behavior:'smooth', block:'start'})
    }, 220)
  }

  useEffect(()=>{
    function onScroll(){
      // if we recently triggered the start action, ignore this scroll event
      if (ignoreScrollRef.current) return
      // only re-expand when user reaches the very top (full slide) and not during auto-scroll
      if (window.scrollY === 0 && collapsed){
        setCollapsed(false)
      }
    }
    window.addEventListener('scroll', onScroll, {passive:true})
    return ()=> window.removeEventListener('scroll', onScroll)
  }, [collapsed])

  // ref to temporarily ignore scroll events when user hits "Comenzar"
  const ignoreScrollRef = useRef(false)

  return (
    <>
  <section className={"presentation" + (collapsed ? ' is-collapsed' : '')} aria-hidden onClick={()=> collapsed && setCollapsed(false)}>
        <div className="presentation-bg" role="img" aria-label="Presentación de la pareja">
          <img src="/photos/1.jpeg" alt="Presentación" className="presentation-image"/>

          <div className="presentation-topline" aria-hidden>
            <span>Happy Valentine´s Day</span>
          </div>

          <div className="presentation-names" aria-hidden>
            <h1 className="names-title">
              <span className="name-l">Lizbeth</span>
              <span className="amp">&amp;</span>
              <span className="name-r">Fernando</span>
            </h1>
          </div>

          <button className="start-button" onClick={handleStart} aria-label="Comenzar">Comenzar</button>
        </div>
      </section>
      <div className={"presentation-spacer" + (collapsed ? ' is-collapsed' : '')} aria-hidden></div>
    </>
  )
}
