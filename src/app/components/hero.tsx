"use client";
import BenjiP from "./benjip";

const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: 'url("/hero.jpg")',
        }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
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
