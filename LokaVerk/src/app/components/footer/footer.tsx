import React, { Component } from "react";
import PropTypes from "prop-types";

const footer = () => {
  return (
    <div className="  flex items-end w-full bg-white bottom-0 border-t-[#3E6053] border-2">
      <footer className="w-full text-gray-700 bg-gray-100 body-font">
        <div className="container flex flex-col  px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
              <img src="/logo.png" alt="logo" className=" h-44" />
            </a>
          </div>
          <div className="flex justify-between flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/2 md:w-1/2">
              <h2 className="my-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font border-solid border-b-2 border-[#3E6053]">
                Um Okkur
              </h2>
              <p>
                blablablablablablablablablablablablablablablablablablablabla
                blablablabla blablablabla blablablabla
                blablablablablablablablablablablablablablablabla
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="my-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font border-solid border-b-2 border-[#3E6053]">
                Segðu hæ við okkur.
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                    lilbitch@sugma.is
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                    reðarfjörður - 069 suckma
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                    +354 420-6969
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default footer;
