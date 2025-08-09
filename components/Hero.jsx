'use client'
import CurvedLoop from './CurvedLoop'
import DecryptedText from './DecryptedText'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="metaballs" />

      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">F4IR</h1>
        <div className="mt-6 text-xl md:text-2xl">
          <DecryptedText text="Back-End Dev & Front-End Learner" speed={40} sequential={true} revealDirection="start" />
        </div>
      </div>
    </section>
  )
}
