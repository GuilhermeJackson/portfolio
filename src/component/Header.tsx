import { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import NavMobile from "../component/NavMobile";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  //scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-neutral-500 py-[16px] " : 
        "bg-transparent py-[20px]"
      } 
      fixed max-w-[1440px] z-30 left-0 right-0 mx-auto flex justify-between 
      items-center px-[20px] lg:px-[80px] transition-all duration-300`}
    >
      <Navbar />
      <div
        onClick={() => setNavMobile(!navMobile)}
        className="lg:hidden absolute right-6"
      >
        {navMobile ? (
          <RiCloseFill className="text-primary-200 tex-3xl cursor-pointer" />
        ) : (
          <RiMenu4Fill className="text-primary-200 cursor-pointer" />
        )}
      </div>
      <NavMobile navMobile={navMobile} />
    </header>
  );
};

export default Header;
