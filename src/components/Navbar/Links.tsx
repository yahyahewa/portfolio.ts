import { Link } from "react-scroll";

function Links({ isOpen, setIsOpen }) {
  const LinkData = [
    {
      spy: true,
      smooth: true,
      offset: 50,
      duration: 500,
      to: "home", // Change this to the appropriate ID
      title: "home",
    },
    {
      spy: true,
      smooth: true,
      offset: 50,
      duration: 500,
      to: "about", // Change this to the appropriate ID
      title: "about",
    },
    {
      spy: true,
      smooth: true,
      offset: 50,
      duration: 500,
      to: "Skills", // Change this to the appropriate ID
      title: "skills",
    },
    {
      spy: true,
      smooth: true,
      offset: 50,
      duration: 500,
      to: "projects", // Change this to the appropriate ID
      title: "projects",
    },
    {
      spy: true,
      smooth: true,
      offset: 50,
      duration: 500,
      to: "contact", // Change this to the appropriate ID
      title: "contact",
    },
  ];

  function renderLinks() {
    return LinkData.map(({ spy, smooth, offset, duration, to, title }, index) => (
      <Link
        className={`uppercase text-lg md:text-base
         mx-5 cursor-pointer font-medium
         text-neutral-500 hover:text-jaguar-400 ease-in-out duration-300`}
        spy={spy}
        smooth={smooth}
        offset={offset}
        duration={duration}
        to={to}
        key={index}
        onClick={()=>{setIsOpen(true)}}
      >
        {title}
      </Link>
    ));
  }

  return (
    <div className={`absolute flex flex-col gap-y-8 pt-10 md:pt-0
     md:flex-row items-center w-full md:w-auto h-screen md:h-auto
      md:relative bg-white md:left-auto text-xl transition-all
       ${isOpen ? '-left-[150%] top-0' : 'left-0 top-0'}`}>
      {renderLinks()}
      <button className="md:hidden absolute right-3 top-3
       text-neutral-500" onClick={() => setIsOpen(true)}>
        <svg xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 24 24" fill="currentColor"
 className="w-7 h-7">
  <path fillRule="evenodd"
   d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
</svg>
      </button>
    </div>
  );
}

export default Links;

