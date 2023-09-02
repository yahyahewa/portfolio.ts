import { Parallax } from "react-parallax"

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
          text-lg">
            Hello, I'm a versatile Full Stack Developer with a focus
            on crafting exceptional user experiences. My expertise
            lies in both the front-end and back-end of Websites
            and Web Applications, and I'm dedicated to ensuring
            their success.</p>
         </article>
        <article className="flex flex-col items-center gap-y-2">
        <h1 className="
        uppercase text-neutral-500 font-bold
        text-xl border-b-">
        My Work
        </h1>
         <div className="w-12 h-3 rounded-full bg-jaguar-400
          shadow-md"></div>
         <p className="w-[95%] md:w-3/4 lg:w-2/3 text-neutral-500
          text-base">
            Explore my portfolio to discover some of the projects that showcase my skills and commitment to excellence.</p>
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
          text-base">
           I'm passionate about sharing my knowledge with the Dev Community. On my LinkedIn profile, you'll find valuable content related to Web Development and Programming. Connect with me to stay updated and engage in insightful discussions.</p>
         </article>
    </section>
  </Parallax>
  </section>
  )
}

export default About