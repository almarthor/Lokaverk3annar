"use client";

import Logo from "./Logo";
import Nav from "./NavBut";

export default function TopNav() {
  return (
    <>
      <header className=" flex flex-wrap bg-gray-200 top-0  sticky z-50  px-14 py-5 w-full items-center justify-between border-b-2 border-b-[#3E6053] ">
        {" "}
        <Logo />
        <Nav />
      </header>
    </>
  );
}
