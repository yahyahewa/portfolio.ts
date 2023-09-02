import Navbar from "../components/Navbar/Navbar"
import HomeComp from "../components/home/Home"
import About from "./About"
import Skills from "./Skills"
function Home() {
  return (
    <main className="bg-neutral-100">
      <Navbar/>
      <HomeComp/>
      <About/>
      <Skills/>
    </main>
  )
}

export default Home
