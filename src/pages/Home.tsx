import Navbar from "../components/Navbar/Navbar"
import HomeComp from "../components/home/Home"
import About from "./About"
function Home() {
  return (
    <main className="bg-neutral-100">
      <Navbar/>
      <HomeComp/>
      <About/>
    </main>
  )
}

export default Home
