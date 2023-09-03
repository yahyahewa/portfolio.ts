import {Link} from "react-scroll"
import logo from "../../assets/images/Green (1).png"
function Logo() {
  return (
    <Link to="home" className={`flex items-center gap-x-2 cursor-pointer`}>
        <img src={logo} 
        className="rounded-full
         w-8 md:w-11 p-[1px] border-jaguar-400 border-2"/>
        <h1 className="md:text-base font-medium lg:text-xl 
        text-neutral-500">YAHYA HIWA</h1>
    </Link>
  )
}

export default Logo
