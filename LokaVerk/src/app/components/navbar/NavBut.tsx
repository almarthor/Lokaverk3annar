import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";

const NavBut = () => {
  return (
    <>
      <a
        href="/"
        className=" container border-solid border-b-2 border-[#3E6053] rounded-md  p-1 font-bold text-black mt-4 w-36 text-center md:mr-7 hover:bg-[#3E6053] hover:text-white mb-3"
      >
        HOME
      </a>
      <a
        href="./menu_food"
        className="border-solid border-b-2 border-[#3E6053] rounded-md  p-1 font-bold  text-black mt-4 w-36 text-center md:mr-7 hover:bg-[#3E6053] hover:text-white mb-3"
      >
        ORDER
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
      <nav className=" flex justify-between ">
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
