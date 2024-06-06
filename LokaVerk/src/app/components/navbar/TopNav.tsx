"use client";

import Logo from "./Logo";
import Nav from "./NavBut";

export default function TopNav() {
  return (
    <>
      <header className="  bg-[#c2a517] bg-opacity-20 flex flex-wrap top-0  z-50  px-14  w-full items-center space-x-6 justify-between border-b-2 border-b-green-700 ">
        {" "}
        <Logo />
        <Nav />
      </header>
    </>
  );
}
