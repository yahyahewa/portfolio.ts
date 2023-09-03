import { Parallax } from "react-parallax"
import { Link } from "react-scroll"

function Home() {
  return (
    <section id="home" className="text-center">
    <Parallax strength={500} >
    <div className='mt-26 font-sans min-h-screen
      flex flex-col 
     items-center justify-center gap-y-10 text-center px-5'>
      <h1 className="text-[41px] sm:text-[54px] 
      md:text-5xl lg:text-[70px]
        uppercase font-bold
       text-neutral-700">
        hey, i'm yahya hiwa raouf</h1>
        <p className="capitalize w-[80%]
         text-lg sm:text-[17px] text-neutral-600
          md:text-[21px] leading-8 md:leading-10">
           I'm an experienced Full Stack Web Developer
            skilled in dynamic web project development,
             project management, customer relations, and
              creative problem-solving, 
           always eager for new programming challenges. </p>
          <Link
          spy={true}
          smooth={true}
          offset={50}
          duration={500} 
          className="bg-jaguar-400
           text-neutral-50 py-5 px-20 text-2xl
            rounded-lg uppercase font-bold
            cursor-pointer hover:scale-95 shadow-lg 
            ease-in-out duration-300" to="projects">projects</Link>
    </div>
  </Parallax></section>
  )
}

export default Home
