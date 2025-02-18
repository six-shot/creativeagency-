import Image from 'next/image'
import React from 'react'
import logo from "../../../../../public/svg/creative-studio-logo.svg"
import whatsapp from "../../../../../public/svg/whatsapp.svg"
import instagram from "../../../../../public/svg/instagram.svg"
import twitter from "../../../../../public/svg/twitter.svg"
export default function Navbar() {
  return (
    <div className="w-full h-[67px] border-b border-[#fff3] max-w-[82.5rem] mx-auto  items-center px-5  flex justify-between ">
      <div className="flex flex-1 items-center gap-[1.5rem]">
        <Image src={logo} className="w-[165px] h-[70px]" alt="logo" />
      </div>
      <nav className="flex flex-1">
        <ul className="flex items-center gap-[1.5rem]">
          <li>
            <h5 className="text-[1rem] leading-[1.5rem] text-white tracking-[-.05em]">
              Projects
            </h5>
          </li>
          <li>
            <h5 className="text-[1rem] leading-[1.5rem] text-white tracking-[-.05em]">
              About
            </h5>
          </li>
          <li>
            <h5 className="text-[1rem] leading-[1.5rem] text-white tracking-[-.05em]">
              Services
            </h5>
          </li>
          <li>
            <h5 className="text-[1rem] leading-[1.5rem] text-white tracking-[-.05em]">
              Contact
            </h5>
          </li>
        </ul>
      </nav>
      <div className="flex-1 flex justify-end items-center gap-[.875rem]">
        <Image src={whatsapp} className="w-[24px] h-[24px]" alt="whatsapp" />
        <Image src={instagram} className="w-[24px] h-[24px]" alt="instagram" />
        <Image src={twitter} className="w-[24px] h-[24px]" alt="twitter" />
      </div>
    </div>
  );
}
