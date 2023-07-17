import hplc from "../../../public/carousel_HPLC.jpg";
import fp from "../../../public/carousel_FP.jpg";
import microscopy from "../../../public/carousel_microscopy.jpg";
import cells from "../../../public/carousel_cells.jpg";
import protein from "../../../public/carousel_protein.jpg";
import laser from "../../../public/carousel_laser.jpg";

import Image from "next/image";
// import Image from "next/image";

const StartCarousel = () => {
  return (
    <>
      <div className="flex item-center justify-center">
        <div className="carousel carousel-center rounded-box">
          <div className="carousel-item">
            <Image src={hplc} alt="HPLC" className="h-64 w-auto" />
          </div>
          <div className="carousel-item">
            <Image src={microscopy} alt="microscopy" className="h-64 w-auto" />
          </div>
          <div className="carousel-item">
            <Image src={cells} alt="fp" className="h-64 w-auto" />
          </div>
          <div className="carousel-item">
            <Image src={fp} alt="fp" className="h-64 w-auto" />
          </div>
          <div className="carousel-item">
            <Image src={protein} alt="fp" className="h-64 w-auto" />
          </div>
          <div className="carousel-item">
            <Image src={laser} alt="fp" className="h-64 w-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default StartCarousel;
