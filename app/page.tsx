import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

