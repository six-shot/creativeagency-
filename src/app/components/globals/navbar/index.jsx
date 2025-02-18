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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <>
      <div
        className={`w-full h-[67px]  1440:px-0 px-[1.25rem]
    flex justify-between fixed z-[1000] top-0 left-1/2 -translate-x-1/2 transition-transform duration-300  backdrop-blur-sm
    ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="border-b border-[#fff3] md:pb-0 pb-[.5rem] max-w-[82.5rem] mx-auto w-full flex items-center  px-5">
          <div className="flex flex-1 items-center gap-[1.5rem]">
            <Image src={logo} className="w-[165px] h-[70px]" alt="logo" />
          </div>
          <nav className="xl:flex hidden flex-1">
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
          <div className="flex-1 xl:flex hidden justify-end items-center gap-[.875rem]">
            <Image
              src={whatsapp}
              className="w-[24px] h-[24px]"
              alt="whatsapp"
            />
            <Image
              src={instagram}
              className="w-[24px] h-[24px]"
              alt="instagram"
            />
            <Image src={twitter} className="w-[24px] h-[24px]" alt="twitter" />
          </div>
          <div
            className="xl:hidden flex flex-col gap-[5px] cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="w-[2.25rem] h-[2px] bg-white"></span>
            <span className="w-[2.25rem] h-[2px] bg-white"></span>
            <span className="w-[2.25rem] h-[2px] bg-white"></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#121212] backdrop-blur-sm transition-transform duration-300 z-40 
        ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="relative pt-[70px] px-[1.25rem] pb-[2rem] h-full ">
          {/* Logo and Close Button Container */}
          <div className="absolute top-0 left-0 w-full flex justify-between items-center px-[1.25rem] border-b border-[#fff3] ">
            <Image src={logo} className="w-[165px] h-[70px]" alt="logo" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-[2.25rem] h-[2.25rem] flex items-center justify-center"
            >
              <span className="absolute w-[2.25rem] h-[2px] bg-white rotate-45"></span>
              <span className="absolute w-[2.25rem] h-[2px] bg-white -rotate-45"></span>
            </button>
          </div>

          <ul className="flex flex-col gap-[1.75rem] mt-[2.5rem]">
            <li className="text-[3rem] leading-[1.2em] text-white">Home</li>
            <li className="text-[3rem] leading-[1.2em] text-white">Projects</li>
            <li className="text-[3rem] leading-[1.2em] text-white">About</li>
            <li className="text-[3rem] leading-[1.2em] text-white">Services</li>
            <li className="text-[3rem] leading-[1.2em] text-white">Contact</li>
          </ul>
          <div className="flex justify-center gap-[2.5rem] mt-[3rem] pt-[1rem]">
            <Image
              src={whatsapp}
              className="w-[24px] h-[24px]"
              alt="whatsapp"
            />
            <Image
              src={instagram}
              className="w-[24px] h-[24px]"
              alt="instagram"
            />
            <Image src={twitter} className="w-[24px] h-[24px]" alt="twitter" />
          </div>
          <div className=" absolute blurmobile left-0 w-full h-[400px]"></div>
        </div>
      </div>
    </>
  );
}
