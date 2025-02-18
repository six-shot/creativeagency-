import Image from "next/image";
import Navbar from "./components/globals/navbar";
import Spline from "@splinetool/react-spline";
import Slider from "./components/slider";

export default function Home() {
  return (
    <div className=" relative font-[family-name:var(--font-manrope)] pb-[2rem] ">
      <div className="relative md:px-0 px-5">
        <Navbar />
        <div className="flex justify-center flex-col items-center text-center md:pt-[10rem] pt-[8rem] ">
          <h1 className="md:text-[10.4346rem] text-[3rem] leading-[1em] text-white md:tracking-[-.8rem] tracking-[-.06em] ">
            Creative Mind <br />{" "}
            <span className="italic font-[family-name:var(--font-playfair)]">
              Agency{" "}
            </span>
          </h1>
          <div className="md:hidden block w-full h-[216px] bg-black mb-[25px] mt-[20px] rounded-[32px]"></div>
          {/* <div className="w-[600px] h-[650px] md:block hidden">
            <Spline
              scene="https://prod.spline.design/h5LoeNZkhGZx-mDM/scene.splinecode"
              className="w-full h-full"
            />
          </div> */}
          <div className="w-[1173px] h-[800px] md:block hidden">
            <iframe
              src="https://my.spline.design/nexbotrobotcharacterconcept-d102b37faf185a07d56c51a533bcc238/"
              frameBorder="0"
              width="100%"
              height="100%"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
      <Slider />
      <div className="blur"></div>
    </div>
  );
}
