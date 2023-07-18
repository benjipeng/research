import Image from "next/image";
import om from "../../../../public/opticalmodulation.jpg";

const Intro = () => {
  return (
    <div className="p-2">
      {" "}
      <p className="font-black text-lg text-center m-3">
        Harnessing {"  "}
        <span className="underline decoration-double decoration-sky-500 hover:decoration-indigo-500">
          the principles of physics and cutting-edge technology
        </span>{" "}
        researchers have developed{" "}
        <span className="underline decoration-double decoration-blue-500 hover:decoration-rose-200">
          Optically Modulated Fluorescent Proteins (OMFPs)
        </span>{" "}
        to modulate fluorescence intensity in fluorescence microscopy, {"  "}
        <span className="underline decoration-double decoration-indigo-400 hover:decoration-teal-200">
          significantly improving imaging sensitivity and specificity in
          cellular biology
        </span>
        .
      </p>
      <p className="font-bold text-lg text-center m-3">
        Such advancement, exemplified by methods like{" "}
        <span className="underline decoration-double decoration-lime-400">
          Synchronously Amplified Fluorescence Image Recovery (SAFIRe)
        </span>
        , enhances the accuracy of biological investigation, driving
        breakthroughs in life sciences from understanding disease pathways to
        therapeutic innovation.
      </p>
    </div>
  );
};

const OpticalM = () => {
  return (
    <div>
      <div className="sticky top-28 z-20 backdrop-blur-lg bg-black bg-opacity-10">
        <h2 className="text-center font-bold uppercase">Optical Modulation</h2>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="">
          <Image
            src={om}
            alt="retention projection"
            className="lg:h-full h-64 object-cover"
          />
        </figure>
        <div className="card-body">
          <Intro></Intro>
          <div className="card-actions justify-end">
            <button className="btn btn-ghost">.. More ..</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpticalM;
