import Navbar from "../components/Navbar/Navbar"
import HomeComp from "../components/home/Home"
import About from "./About"
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
    </main>
  )
}

export default Home
