import { Parallax } from "react-parallax"
import { Link } from "react-scroll"
function About() {
  return (
    <section id="about" className="text-center">
    <Parallax strength={500} >
    <section className="min-h-screen flex flex-col justify-center gap-y-10">
        <article className="flex flex-col items-center gap-y-7">
        <h1 className="
        uppercase text-neutral-500 font-bold
        text-4xl">
        about me
        </h1>
         <div className="w-14 h-4 rounded-full bg-jaguar-400
          shadow-md"></div>
         <p className="w-[95%] md:w-3/4 lg:w-2/3 text-neutral-500
          text-[19px]">
            Hello, I'm a versatile Full Stack Developer with a focus
            on crafting exceptional user experiences. My expertise
            lies in both the front-end and back-end of Websites
            and Web Applications, and I'm dedicated to ensuring
            their success.</p>
         </article>
        <article className="flex flex-col items-center gap-y-2">
        <h1 className="
        uppercase text-neutral-500 font-bold
        text-xl">
        My Work
        </h1>
         <div className="w-12 h-3 rounded-full bg-jaguar-400
          shadow-md"></div>
         <p className="w-[95%] md:w-3/4 lg:w-2/3 text-neutral-500
          text-[17px]">
            Explore my portfolio to discover some of the 
            <Link 
          spy={true}
          smooth={true}
          offset={50}
          duration={500} to="projects" className="border-b mx-1 pb-[1px]
             border-neutral-500 cursor-pointer text-neutral-500 uppercase">
            Projects 
            </Link>
             that showcase my skills and commitment to excellence.</p>
         </article>
        <article className="flex flex-col items-center gap-y-2">
        <h1 className="
        uppercase text-neutral-500 font-bold
        text-xl border-b-">
        Knowledge Sharing
        </h1>
         <div className="w-12 h-3 rounded-full bg-jaguar-400
          shadow-md"></div>
         <p className="w-[95%] md:w-3/4 lg:w-2/3 text-neutral-500
          text-[17px]">
           I'm passionate about sharing my knowledge
            with the Dev Community. On my <a className="border-b pb-[1px]
             border-neutral-500 mr-1 text-neutral-500 uppercase"
            href="https://www.linkedin.com/in/yahya-hiwa-781927198?fbclid=IwAR17jl2-UsPU_w_S7ZFzYg8V4IjjraVc5QFp9DD-aVJsCSPrlHnItvL5DjY&original_referer=https%3A%2F%2Fl.facebook.com%2F">
            LinkedIn
            </a>
             profile, you'll find valuable content related to Web Development and Programming. Connect with me to stay updated and engage in insightful discussions.</p>
         </article>
    </section>
  </Parallax>
  </section>
  )
}

export default About