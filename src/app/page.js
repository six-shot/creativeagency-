import Image from "next/image";
import Navbar from "./components/globals/navbar";
import Spline from "@splinetool/react-spline";
import Slider from "./components/slider";

export default function Home() {
  return (
    <div className=" relative font-[family-name:var(--font-manrope)] pb-[2rem]">
      <div className="relative">
        <Navbar />
        <div className="flex justify-center flex-col items-center text-center pt-[6rem] ">
          <h1 className="text-[10.4346rem] leading-[1em] text-white tracking-[-.8rem] ">
            Creative Mind <br />{" "}
            <span className="italic font-[family-name:var(--font-playfair)]">
              Agency{" "}
            </span>
          </h1>
          <div className="w-[600px] h-[650px]">
            <Spline
              scene="https://prod.spline.design/h5LoeNZkhGZx-mDM/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <Slider />
      <div className="blur"></div>
    </div>
  );
}
