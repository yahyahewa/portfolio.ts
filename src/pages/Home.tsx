import Navbar from "../components/Navbar/Navbar"
import HomeComp from "../components/home/Home"
import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects"
import Skills from "./Skills"
function Home() {
  return (
    <main className="bg-neutral-100">
      <Navbar/>
      <HomeComp/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  )
}

export default Home
