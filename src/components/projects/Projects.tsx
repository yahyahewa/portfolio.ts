import { Parallax } from "react-parallax"
import "./style.css"
import greenexchange from "../../assets/images/Untitled_design-removebg-preview.png"
import bikra from"../../assets/images/bikra.png"
import krdlogo from "../../assets/images/krdgov.png"
import ahmadmhamad from "../../assets/images/ahmadmhamad.png"
import azad from "../../assets/images/azad.png"
import computer from "../../assets/images/computer.png"

function Projects() {
  return (
    <section id="projects" className="pt-40 font-sans min-h-screen">
    <Parallax strength={500} >
        <section className="flex flex-col items-center justify-center">
    <div className="flex flex-col justify-center items-center gap-10">
      <h1 className="uppercase text-neutral-500 font-bold
        text-4xl">
        my projects
        </h1>
         <div className="w-14 h-4 rounded-full bg-jaguar-400
          shadow-md"></div>
          </div>

      <section className="flex flex-col gap-y-10 lg:gap-y-0 px-10">
        <article className="flex flex-col justify-center items-center lg:flex-row gap-x-10">
          <div className="w-full lg:w-1/2 lg:p-12 xl:p-20 object-contain overflow-hidden">
            <img src={greenexchange}alt="project image" className="w-full h-full" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-y-10 justify-center">
            <h3 className="pt-5 lg:pd-0 text-center lg:text-left font-bold text-neutral-500 text-3xl">Green Exchange</h3>
            <p className="w-full text-lg text-center lg:text-left">
            As a supervisor and developer, I had a dual role in the project. I managed the complete backend infrastructure, including databases, APIs, and security measures. Additionally, I collaborated on specific frontend components to enhance user experience. My role as a supervisor involved team coordination, mentoring, and ensuring project milestones were met effectively. This experience allowed me to contribute comprehensively to the website's success, showcasing my technical expertise and leadership skills.
            </p>
            <article className="flex gap-2">
                <h1 className="text-xl font-bold text-neutral-500 bg-jaguar-200 px-3 pt-1 pb-[5px] rounded-full">MERN Stack</h1>
            </article >
            <a className="text-2xl px-14 py-4 bg-jaguar-400 text-white rounded-md font-semibold" href="https://green-exchange.netlify.app/" target="_blank">Live Link</a>
          </div>
        </article>
        <article className="flex flex-col justify-center items-center lg:flex-row gap-x-10">
          <div className="w-full lg:w-1/2 lg:p-12 xl:p-20 object-contain overflow-hidden">
            <img src={bikra}alt="project image" className="w-full h-full" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-y-10 justify-center">
            <h3 className="pt-5 lg:pd-0 text-center lg:text-left font-bold text-neutral-500 text-3xl">Bikra</h3>
            <p className="w-full text-lg text-center lg:text-left">
            I spearheaded the development of 'Bikra,' an e-commerce website catering to a wide range of online shoppers. My role involved building a robust infrastructure, implementing e-commerce features, and ensuring a user-friendly interface.
            </p>
            <article className="flex gap-2">
                <h1 className="text-xl font-bold text-neutral-500 bg-jaguar-200 px-3 pt-1 pb-[5px] rounded-full">MERN Stack</h1>
            </article >
            <a className="text-2xl px-14 py-4 bg-jaguar-400 text-white rounded-md font-semibold" href="https://bikra.netlify.app/" target="_blank">Live Link</a>
          </div>
        </article>
        <article className="flex flex-col justify-center items-center lg:flex-row gap-x-10">
          <div className="w-full lg:w-1/2 lg:p-12 xl:p-20 object-contain overflow-hidden">
            <img src={krdlogo}alt="project image" className="w-full h-full" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-y-10 justify-center">
            <h3 className="pt-5 lg:pd-0 text-center lg:text-left font-bold text-neutral-500 text-3xl">Weight Program</h3>
            <p className="w-full text-lg text-center lg:text-left">I was responsible for the development of a sophisticated database system designed specifically for the Sulaymaniyah Weigh Stations. This system plays a crucial role in accurately weighing trucks and ensuring the efficient management of goods transportation. I successfully implemented this system, which is currently operational in 17 out of 19 weigh stations. Its deployment has significantly improved the accuracy and efficiency of weight measurements, contributing to smoother logistics operations in the region.
            </p>
            <article className="flex gap-2">
                <h1 className="text-xl font-bold text-neutral-500 bg-jaguar-200 px-3 pt-1 pb-[5px] rounded-full">C#.NET</h1>
                <h1 className="text-xl font-bold text-neutral-500 bg-jaguar-200 px-3 pt-1 pb-[5px] rounded-full">MS SQL Server</h1>
            </article >
            <a className="text-2xl px-14 py-4 bg-jaguar-200 text-white rounded-md font-semibold">Privet</a>
          </div>
        </article>
        <article className="flex flex-col justify-center items-center lg:flex-row gap-x-10">
          <div className="w-full lg:w-1/2 lg:p-12 xl:p-20 object-contain overflow-hidden">
            <img src={azad}alt="project image" className="w-full h-full" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-y-10 justify-center">
            <h3 className="pt-5 lg:pd-0 text-center lg:text-left font-bold text-neutral-500 text-3xl">Azad Concrete Factory</h3>
            <p className="w-full text-lg text-center lg:text-left">I took the initiative to design and develop a comprehensive database system tailored to the specific needs of Azad Concrete Factory. This database system was strategically crafted to streamline their operations and enhance overall efficiency. Through its successful implementation, we were able to centralize data management, optimize resource allocation, and improve decision-making processes within the factory. The system's impact has been substantial, contributing significantly to the factory's operational excellence and competitiveness in the industry.
            </p>
            <article className="flex gap-2">
                <h1 className="text-xl font-bold text-neutral-500 bg-jaguar-200 px-3 pt-1 pb-[5px] rounded-full">C#.NET</h1>
                <h1 className="text-xl font-bold text-neutral-500 bg-jaguar-200 px-3 pt-1 pb-[5px] rounded-full">MS SQL Server</h1>
            </article >
            <a className="text-2xl px-14 py-4 bg-jaguar-200 text-white rounded-md font-semibold">Privet</a>
          </div>
        </article>
        <article className="flex flex-col justify-center items-center lg:flex-row gap-x-10">
          <div className="w-full lg:w-1/2 lg:p-12 xl:p-20 object-contain overflow-hidden">
            <img src={ahmadmhamad}alt="project image" className="w-full h-full" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-y-10 justify-center">
            <h3 className="pt-5 lg:pd-0 text-center lg:text-left font-bold text-neutral-500 text-3xl">Ahmad and Mhamad Weigh Station</h3>
            <p className="w-full text-lg text-center lg:text-left">I was tasked with the design and successful implementation of a specialized database system for the Ahmad and Mhamad Weigh Station. This custom system was meticulously crafted to streamline their weighing processes and facilitate efficient data management. By integrating this solution into their operations, we were able to significantly improve the accuracy and speed of their weighing procedures, resulting in more reliable data and smoother logistics operations overall. The database system I designed has played a pivotal role in enhancing the station's operational efficiency and data handling capabilities.
            </p>
            <article className="flex gap-2">
                <h1 className="text-xl font-bold text-neutral-500 bg-jaguar-200 px-3 pt-1 pb-[5px] rounded-full">C#.NET</h1>
                <h1 className="text-xl font-bold text-neutral-500 bg-jaguar-200 px-3 pt-1 pb-[5px] rounded-full">MS Access</h1>
            </article >
            <a className="text-2xl px-14 py-4 bg-jaguar-200 text-white rounded-md font-semibold">Privet</a>
          </div>
        </article>
        <article className="flex flex-col justify-center items-center lg:flex-row gap-x-10">
          <div className="w-full lg:w-1/2 lg:p-12 xl:p-20 object-contain overflow-hidden">
            <img src={greenexchange}alt="project image" className="w-full h-full" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-y-10 justify-center">
            <h3 className="pt-5 lg:pd-0 text-center lg:text-left font-bold text-neutral-500 text-3xl">Hospital System</h3>
            <p className="w-full text-lg text-center lg:text-left">I led the development of a comprehensive Hospital Management System, which has had a transformative impact on healthcare interactions for doctors, patients, and staff alike. This system was meticulously designed to address the unique needs of the healthcare industry, offering a range of functionalities that streamline administrative tasks, improve patient care, and enhance communication between healthcare professionals. Its successful implementation has resulted in improved efficiency, reduced paperwork, faster access to patient records, and a more seamless experience for all stakeholders within the hospital environment.
            </p>
            <article className="flex gap-2">
                <h1 className="text-xl font-bold text-neutral-500 bg-jaguar-200 px-3 pt-1 pb-[5px] rounded-full">ASP.NET</h1>
                <h1 className="text-xl font-bold text-neutral-500 bg-jaguar-200 px-3 pt-1 pb-[5px] rounded-full">MS SQL Server</h1>
            </article >
            <a className="text-2xl px-14 py-4 bg-jaguar-400 text-white rounded-md font-semibold" href="https://github.com/yahyahiwa3/Hospital_Management_System.git" target="_blank">Live Link</a>
          </div>
        </article>
        <article className="flex flex-col justify-center items-center lg:flex-row gap-x-10">
          <div className="w-full lg:w-1/2 lg:p-12 xl:p-20 object-contain overflow-hidden">
            <img src={computer}alt="project image" className="w-full h-full" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-y-10 justify-center">
            <h3 className="pt-5 lg:pd-0 text-center lg:text-left font-bold text-neutral-500 text-3xl">Computer Science Institute</h3>
            <p className="w-full text-lg text-center lg:text-left">I was tasked with building a solid website and management system for the Institute of Computer Science. This integrated solution was designed to facilitate seamless management for both faculty and students within the institute’s academic ecosystem. This project will significantly improve the overall operational efficiency of his institute, fostering a more productive learning environment for all stakeholders.
            </p>
            <article className="flex gap-2">
                <h1 className="text-xl font-bold text-neutral-500 bg-jaguar-200 px-3 pt-1 pb-[5px] rounded-full">ASP.NET</h1>
                <h1 className="text-xl font-bold text-neutral-500 bg-jaguar-200 px-3 pt-1 pb-[5px] rounded-full">MS SQL Server</h1>
            </article >
            <a className="text-2xl px-14 py-4 bg-jaguar-400 text-white rounded-md font-semibold" href="https://github.com/yahyahiwa3/Computer_Scince_Institute_Website.git" target="_blank">Live Link</a>
          </div>
        </article>
      </section>
  </section>
  </Parallax>
  </section>
  )
}

export default Projects

    // <section classNameName=' font-sans min-h-screen
    //   flex flex-col 
    //  items-center justify-center gap-y-10 text-center px-5'>
    //     <article classNameName=" text-center lg:text-left flex
    //      flex-col lg:flex-row justify-around
    //      items-start border">
    //         <div classNameName="w-full object-cover lgw-1/2 border flex
    //          flex-col items-start">
    //         <img src={greenexchange} classNameName="w-full h-full"/></div>
    //         <div classNameName="overflow-hidden w-full lg:w-2/5 flex flex-col items-center justify-center">
    //     <h1 classNameName="
    //     capitalize text-neutral-500 font-bold
    //     text-4xl">
    //     Green Exchange
    //     </h1>
    //     <p>
    //         Lorem ipsum dolor sit amet, consectetur
    //         adipisicing elit. Voluptates quidem,
    //         facere animi ipsum dolor fugit vel
    //                dolores eaque officia fuga officiis
    //                 nam perspiciatis sunt, cumque quibusdam
    //                  minima est enim? Unde?
    //                  </p>
    //     </div>
    //     </article>
    // </section>