'use client'
import PixelCard from './PixelCard'

const socials = [
  { title: 'GitHub', link: 'https://github.com/F4IR', handle: '@F4IR' },
  { title: 'LinkedIn', link: 'https://linkedin.com/in/seu-usuario', handle: 'Kelvin F4IR' },
]

export default function Contact() {
  return (
    <section className="py-20 text-center relative">
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-3xl mb-8">Minhas redes</h2>
        <div className="flex justify-center gap-6">
          {socials.map((s, i) => (
            <a key={i} href={s.link} target="_blank" rel="noreferrer">
              <PixelCard title={s.title} subtitle={s.handle} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
