import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import CurvedLoop from '../components/CurvedLoop'

export default function Page() {
  return (
    <>
      <Hero />
      <Projects />
      <Contact />
      <div className="py-12">
        <CurvedLoop marqueeText="Obrigado por visitar — F4IR" />
      </div>
      <Footer />
    </>
  )
}
