"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "../../../../../public/svg/creative-studio-logo.svg";
import whatsapp from "../../../../../public/svg/whatsapp.svg";
import instagram from "../../../../../public/svg/instagram.svg";
import twitter from "../../../../../public/svg/twitter.svg";

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={`w-full h-[67px]  
    flex justify-between fixed top-0 left-1/2 -translate-x-1/2 transition-transform duration-300  backdrop-blur-sm
    ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="border-b border-[#fff3] max-w-[82.5rem] mx-auto w-full flex ">
      <div className="flex flex-1 items-center gap-[1.5rem]">
        <Image src={logo} className="w-[165px] h-[70px]" alt="logo" />
      </div>
      <nav className="flex flex-1">
        <ul className="flex items-center gap-[1.5rem]">
          <li className="relative overflow-hidden h-[1.5rem]">
            <div className="hover-text-wrapper">
              <h5 className="text-[1rem] leading-[1.5rem] text-white tracking-[-.05em] transition-transform duration-300">
                Projects
              </h5>
              <h5 className="text-[1rem] leading-[1.5rem] text-white tracking-[-.05em] transition-transform duration-300">
                Projects
              </h5>
            </div>
          </li>
          <li className="relative overflow-hidden h-[1.5rem]">
            <div className="hover-text-wrapper">
              <h5 className="text-[1rem] leading-[1.5rem] text-white tracking-[-.05em] transition-transform duration-300">
                About
              </h5>
              <h5 className="text-[1rem] leading-[1.5rem] text-white tracking-[-.05em] transition-transform duration-300">
                About
              </h5>
            </div>
          </li>
          <li className="relative overflow-hidden h-[1.5rem]">
            <div className="hover-text-wrapper">
              <h5 className="text-[1rem] leading-[1.5rem] text-white tracking-[-.05em] transition-transform duration-300">
                Services
              </h5>
              <h5 className="text-[1rem] leading-[1.5rem] text-white tracking-[-.05em] transition-transform duration-300">
                Services
              </h5>
            </div>
          </li>
          <li className="relative overflow-hidden h-[1.5rem]">
            <div className="hover-text-wrapper">
              <h5 className="text-[1rem] leading-[1.5rem] text-white tracking-[-.05em] transition-transform duration-300">
                Contact
              </h5>
              <h5 className="text-[1rem] leading-[1.5rem] text-white tracking-[-.05em] transition-transform duration-300">
                Contact
              </h5>
            </div>
          </li>
        </ul>
      </nav>
      <div className="flex-1 flex justify-end items-center gap-[.875rem]">
        <Image src={whatsapp} className="w-[24px] h-[24px]" alt="whatsapp" />
        <Image src={instagram} className="w-[24px] h-[24px]" alt="instagram" />
        <Image src={twitter} className="w-[24px] h-[24px]" alt="twitter" />
      </div>
      </div>
    </div>
  );
}
