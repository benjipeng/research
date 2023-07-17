"use client";

import hero_bg from "../../../public/hero.jpg";
import BenjiP from "./benjip";

const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${hero_bg.src})`,
        }}
      >
        <div className="hero-overlay bg-opacity-95"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="m-2">
            <BenjiP></BenjiP>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
