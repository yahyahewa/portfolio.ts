import { useState } from "react";
import { Link } from "react-scroll";

function Footer() {
  const [currentYear] = useState<number>(new Date().getFullYear());

  return (
    <footer className="bg-jaguar-950 text-jaguar-50 flex flex-col 
    mt-20 items-center">
        <article className="flex justify-center items-center pt-16 pb-8 gap-x-10">
            <a href="https://github.com/yahyahiwa3" className=""><i className="fa-brands fa-square-github fa-2xl"></i></a>
            <a href="https://www.linkedin.com/in/yahya-hiwa-781927198">
            <i className="fa-brands fa-linkedin fa-2xl"></i>
            </a>
            <a href="https://www.facebook.com/yahia.hewa">
            <i className="fa-brands fa-square-facebook fa-2xl"></i>
            </a>
        </article>
            <span className="w-full text-center mb-5">yahyahiwa3@gmail.com</span>
      <div className="flex items-center justify-center border-t w-[90%] py-10">
       <span className="ml-1"> Copyright {currentYear}, Made by</span>
        <Link to="home" className="font-bold border-b-2 ml-1 cursor-pointer">
          Yahya Hiwa
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
