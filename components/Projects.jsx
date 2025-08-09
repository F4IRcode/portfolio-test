'use client'
import { useEffect, useRef } from 'react'
import ShapeBlurButton from './ShapeBlurButton'

const projects = [
  { title: 'GitHub Wrapped', desc: 'Resumo anual do GitHub', link: '#' },
  { title: 'Mini Souls-like', desc: 'Jogo 3D feito na Godot', link: '#' },
  { title: 'MMORPG BIOS', desc: 'MMO com menu BIOS fake', link: '#' },
]

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal')
    if (!els) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('is-visible')
      })
    }, { threshold: 0.15 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return ref
}

export default function Projects() {
  const ref = useReveal()
  return (
    <section className="relative py-20">
      <div className="cubes-bg" />
      <div ref={ref} className="relative z-10 container mx-auto px-6">
        <h2 className="text-3xl mb-8">Projetos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={i} className="bg-gray-900 rounded-lg p-6 shadow-lg reveal">
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{p.desc}</p>
              <ShapeBlurButton>
                <a href={p.link}>Ver mais</a>
              </ShapeBlurButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
