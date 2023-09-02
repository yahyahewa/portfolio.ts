import {Link} from "react-scroll"
function Logo() {
  return (
    <Link to="/" className={`flex items-center gap-x-2`}>
        <img src={"https://yahya-hiwa.netlify.app/assets/viber-4b89879f.jpg"} 
        className="rounded-full
         w-8 md:w-11 p-[1px] border-jade-600 border-2"/>
        <h1 className="md:text-base font-medium lg:text-xl 
        text-neutral-500">YAHYA HIWA</h1>
    </Link>
  )
}

export default Logo
