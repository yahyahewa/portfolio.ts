import { Parallax } from "react-parallax"
import greenexchange from "../../assets/images/WhatsApp Image 2023-09-03 at 15.26.18.jpg"

function Projects() {
  return (
    <section id="projects">
    <Parallax strength={500} >
    <section className=' font-sans min-h-screen
      flex flex-col 
     items-center justify-center gap-y-10 text-center px-5'>
        <article className=" text-center lg:text-left flex
         flex-col lg:flex-row justify-around
         items-start ">
            <div className="object-cover overflow-hidden w-full lg:w-2/5">
            <img src={greenexchange} className="w-full h-full"/>
            </div>
            <div className="overflow-hidden w-full lg:w-2/5">
        <h1 className="
        capitalize text-neutral-500 font-bold
        text-4xl">
        Green Exchange
        </h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Voluptates quidem,
            facere animi ipsum dolor fugit vel
                   dolores eaque officia fuga officiis
                    nam perspiciatis sunt, cumque quibusdam
                     minima est enim? Unde?
                     </p>
        </div>
        </article>
    </section>
  </Parallax>
  </section>
  )
}

export default Projects
