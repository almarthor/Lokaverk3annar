import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavBut = () => {
  return (
    <>
      <a
        href="./vorur"
        className="border-solid border-2 border-[#3E6053] rounded-md  p-1 font-bold text-black mt-1 w-24 text-center md:mr-4 hover:bg-[#3E6053] hover:text-white"
      >
        Vörur
      </a>
      <a
        href="./pantarnir"
        className="border-solid border-2 border-[#3E6053] rounded-md p-1 font-bold text-black mt-1 w-24 text-center md:mr-4 hover:bg-[#3E6053] hover:text-white"
      >
        Pantanir
      </a>
      <a
        href="#"
        className=" container border-solid border-2 border-[#3E6053] rounded-md p-1 font-bold text-black mt-1 w-24 text-center md:mr-4 hover:bg-[#3E6053] hover:text-white"
      >
        Við
      </a>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className=" w-1/3 flex justify-end mr-3">
        <div className="hidden w-full md:flex justify-end">
          <NavBut />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className=" flex flex-col items-center basis-full">
          <NavBut />
        </div>
      )}
    </>
  );
};

export default Nav;
