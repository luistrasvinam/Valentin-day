import React, {useState} from 'react'

const photos = [
  '/photos/WhatsApp%20Image%202026-02-11%20at%207.21.48%20PM%20(1).jpeg',
  '/photos/WhatsApp%20Image%202026-02-11%20at%207.21.48%20PM%20(2).jpeg',
  '/photos/WhatsApp%20Image%202026-02-11%20at%207.21.48%20PM%20(3).jpeg',
  '/photos/WhatsApp%20Image%202026-02-11%20at%207.21.48%20PM.jpeg',
  '/photos/WhatsApp%20Image%202026-02-11%20at%207.21.59%20PM.jpeg',
  '/photos/WhatsApp%20Image%202026-02-11%20at%207.24.18%20PM%20(1).jpeg',
  '/photos/WhatsApp%20Image%202026-02-11%20at%207.24.18%20PM%20(2).jpeg',
  '/photos/WhatsApp%20Image%202026-02-11%20at%207.24.18%20PM%20(3).jpeg',
  '/photos/WhatsApp%20Image%202026-02-11%20at%207.24.18%20PM%20(4).jpeg',
  '/photos/WhatsApp%20Image%202026-02-11%20at%207.24.18%20PM%20(5).jpeg',
  '/photos/WhatsApp%20Image%202026-02-11%20at%207.24.18%20PM%20(6).jpeg',
  '/photos/WhatsApp%20Image%202026-02-11%20at%207.24.18%20PM%20(7).jpeg',
  '/photos/WhatsApp%20Image%202026-02-11%20at%207.24.18%20PM%20(8).jpeg',
  '/photos/WhatsApp%20Image%202026-02-11%20at%207.24.18%20PM%20(9).jpeg',
  '/photos/WhatsApp%20Image%202026-02-11%20at%207.24.18%20PM.jpeg',
  '/photos/WhatsApp%20Image%202026-02-11%20at%207.26.14%20PM%20(1).jpeg',
  '/photos/WhatsApp%20Image%202026-02-11%20at%207.26.14%20PM.jpeg',
  '/photos/WhatsApp%20Image%202026-02-11%20at%207.26.15%20PM%20(1).jpeg',
  '/photos/WhatsApp%20Image%202026-02-11%20at%207.26.15%20PM.jpeg'
];

export default function Gallery(){
  const [open, setOpen] = useState(null)
  return (
    <section className="gallery">
      <div className="section-title"><h3>Momentos</h3></div>
      <div className="gallery-grid">
        {photos.map((p,i)=> (
          <img key={i} src={p} alt={`Foto ${i+1}`} onClick={()=>setOpen(p)} style={{cursor:'pointer'}}/>
        ))}
      </div>

      {open && (
        <div onClick={()=>setOpen(null)} style={{
          position:'fixed',inset:0,display:'flex',alignItems:'center',justifyContent:'center',
          background:'rgba(0,0,0,0.6)',zIndex:60
        }}>
          <img src={open} alt="ampliada" style={{maxWidth:'90%',maxHeight:'90%',borderRadius:10}} />
        </div>
      )}
    </section>
  )
}
