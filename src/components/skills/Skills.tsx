import {Parallax} from "react-parallax"

function Skills() {
  return (
    <section id="Skills" className="text-center">
    <Parallax strength={500} >
    <article className="min-h-screen flex flex-col items-center justify-center gap-y-7">
        <h1 className="
        uppercase text-neutral-500 font-bold
        text-4xl">
        my Skills
        </h1>
         <div className="w-14 h-4 rounded-full bg-jaguar-400
          shadow-md"></div>
          <section className="flex flex-col gap-y-5">
            <article className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl capitalize font-bold text-neutral-500
            ">programing language</h1>
            <div className="flex flex-wrap p-5 gap-5 justify-center
             ">
              <h1 className="text-xl text-neutral-600 bg-jaguar-200
              shadow-md hover:scale-105 ease-in-out duration-300 cursor-default
               px-4 py-2 font-bold rounded-md">C#</h1>
               <h1 className="text-xl text-neutral-600 bg-jaguar-200
               shadow-md hover:scale-105 ease-in-out duration-300 cursor-default
                px-4 py-2 font-bold rounded-md">Visual Basic</h1>
                <h1 className="text-xl text-neutral-600 bg-jaguar-200
                shadow-md hover:scale-105 ease-in-out duration-300 cursor-default
                 px-4 py-2 font-bold rounded-md">JavaScript</h1>
                 <h1 className="text-xl text-neutral-600 bg-jaguar-200
                 shadow-md hover:scale-105 ease-in-out duration-300 cursor-default
                  px-4 py-2 font-bold rounded-md">TypeScript</h1>
                  <h1 className="text-xl text-neutral-600 bg-jaguar-200
                  shadow-md hover:scale-105 ease-in-out duration-300 cursor-default
                   px-4 py-2 font-bold rounded-md">SQL</h1>
                   <h1 className="text-xl text-neutral-600 bg-jaguar-200
                   shadow-md hover:scale-105 ease-in-out duration-300 cursor-default
                    px-4 py-2 font-bold rounded-md">HTML</h1>
                   <h1 className="text-xl text-neutral-600 bg-jaguar-200
                   shadow-md hover:scale-105 ease-in-out duration-300 cursor-default
                    px-4 py-2 font-bold rounded-md">CSS</h1>
            </div>
            </article>
            <article className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl capitalize font-bold text-neutral-500
            ">Framework</h1>
            <div className="flex flex-wrap p-5 gap-5 justify-center
             ">
                <h1 className="text-xl text-neutral-600 bg-jaguar-200
                shadow-md hover:scale-105 ease-in-out duration-300 cursor-default
                 px-4 py-2 font-bold rounded-md">React</h1>
                 <h1 className="text-xl text-neutral-600 bg-jaguar-200
                 shadow-md hover:scale-105 ease-in-out duration-300 cursor-default
                  px-4 py-2 font-bold rounded-md">Next</h1>
              <h1 className="text-xl text-neutral-600 bg-jaguar-200
              shadow-md hover:scale-105 ease-in-out duration-300 cursor-default
               px-4 py-2 font-bold rounded-md">Express JS</h1>
               <h1 className="text-xl text-neutral-600 bg-jaguar-200
               shadow-md hover:scale-105 ease-in-out duration-300 cursor-default
                px-4 py-2 font-bold rounded-md">JQuery</h1>
                  <h1 className="text-xl text-neutral-600 bg-jaguar-200
                  shadow-md hover:scale-105 ease-in-out duration-300 cursor-default
                   px-4 py-2 font-bold rounded-md">Tailwind</h1>
                   <h1 className="text-xl text-neutral-600 bg-jaguar-200
                   shadow-md hover:scale-105 ease-in-out duration-300 cursor-default
                    px-4 py-2 font-bold rounded-md">Bootstrap</h1>
            </div>
            </article>
            <article className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl capitalize font-bold text-neutral-500
            ">Database</h1>
            <div className="flex flex-wrap p-5 gap-5 justify-center
             ">
                 <h1 className="text-xl text-neutral-600 bg-jaguar-200
                 shadow-md hover:scale-105 ease-in-out duration-300 cursor-default
                  px-4 py-2 font-bold rounded-md">SQL</h1>
                <h1 className="text-xl text-neutral-600 bg-jaguar-200
                shadow-md hover:scale-105 ease-in-out duration-300 cursor-default
                 px-4 py-2 font-bold rounded-md">PL-(SQL)</h1>
              <h1 className="text-xl text-neutral-600 bg-jaguar-200
              shadow-md hover:scale-105 ease-in-out duration-300 cursor-default
               px-4 py-2 font-bold rounded-md">MS SQL Server</h1>
               <h1 className="text-xl text-neutral-600 bg-jaguar-200
               shadow-md hover:scale-105 ease-in-out duration-300 cursor-default
                px-4 py-2 font-bold rounded-md">MongoDB</h1>
                  <h1 className="text-xl text-neutral-600 bg-jaguar-200
                  shadow-md hover:scale-105 ease-in-out duration-300 cursor-default
                   px-4 py-2 font-bold rounded-md">DBMS</h1>
                   <h1 className="text-xl text-neutral-600 bg-jaguar-200
                   shadow-md hover:scale-105 ease-in-out duration-300 cursor-default
                    px-4 py-2 font-bold rounded-md">D-DBMS</h1>
            </div>
            </article>
          </section>
     </article>
  </Parallax>
  </section>)
}

export default Skills
