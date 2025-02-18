import Image from "next/image";
import Navbar from "./components/globals/navbar";
import Spline from "@splinetool/react-spline";
import Slider from "./components/slider";

export default function Home() {
  return (
    <div className="relative font-[family-name:var(--font-manrope)] pb-[2rem] w-screen min-h-screen ">
      <div className="relative w-full">
        <Navbar />
        <div className="w-full">
          <div className="flex flex-col text-center md:pt-[10rem] pt-[8rem] w-full  xl:px-0 px-5">
            <h1 className="xl:text-[10.4346rem] md:text-[5rem] text-[3rem] leading-[1em] text-white  xl:tracking-[-.8rem] tracking-[-.06em] ">
              Creative Mind <br className="xl:block hidden" />{" "}
              <span className="italic font-[family-name:var(--font-playfair)]">
                Agency{" "}
              </span>
            </h1>
            <div className="md:hidden block w-full h-[216px] bg-black mb-[25px] mt-[20px] rounded-[32px]"></div>

            <div className="w-full xl:h-[800px] h-[500px] md:block hidden xl:-mt-[150px] -mt-[100px]">
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
      </div>
      <Slider />
      <div className="blur"></div>
    </div>
  );
}
