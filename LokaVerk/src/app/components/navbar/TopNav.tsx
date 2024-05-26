"use client";

import Logo from "./Logo";
import Nav from "./NavBut";

export default function TopNav() {
  return (
    <>
      <header className=" flex flex-wrap top-0  z-50  px-14 py-5 w-full items-center space-x-6 justify-between ">
        {" "}
        <Logo />
        <Nav />
      </header>
    </>
  );
}
