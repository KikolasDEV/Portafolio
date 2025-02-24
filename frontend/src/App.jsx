import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import TechnologyGrid from "./components/TechnologyGrid"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Timeline from "./components/Timeline"
import Contact from "./sections/Contact"

function App() {
  return (
    <div className="min-h-screen bg-[#1c1c1c] text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <TechnologyGrid />
        <About />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

