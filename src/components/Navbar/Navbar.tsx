import { useState } from "react"
import Links from "./Links"
import Logo from "./Logo"

function Navbar() {
    const [isOpen,setIsOpen]= useState<boolean>(true)
  return (
    <nav className={`flex px-5 py-2 md:px-8
     md:py-4 lg:px-10 border-b w-full
     items-center justify-between z-[10000] fixed bg-white`}>
        <Logo/>
        <div className="flex">
        <Links isOpen={isOpen} setIsOpen={setIsOpen}/>
        <button className="md:hidden" onClick={()=>{
            setIsOpen(false)
        }}><svg xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24" fill="currentColor"
        className="w-6 h-6 text-neutral-500">
        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
      </svg>
      </button>
        </div>
    </nav>
  )
}

export default Navbar
