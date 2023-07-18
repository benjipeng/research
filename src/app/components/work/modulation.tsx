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

const Accordion = () => {
  return (
    <div className="join join-vertical w-full px-6 py-2">
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-lg font-medium">
          Harnessing Optically Modulatable Fluorescent Proteins (OMFPs) for{" "}
          <span className="underline decoration-double decoration-yellow-200">
            Reference-Free and Background-Free Cellular Imaging
          </span>
          {"  "}
          via{" "}
          <span className="underline decoration-double decoration-orange-200">
            Algorithmic
          </span>{" "}
          Digital Signal Processing (DSP)
        </div>
        <div className="collapse-content">
          <div>
            <p className="text-center">
              OMFPs, a <span className="italic">novel</span> class of
              fluorescent proteins{" "}
              <span className="italic underline decoration-wavy decoration-orange-400 hover:decoration-lime-500">
                meticulously researched and uncovered
              </span>{" "}
              by our team, hold immense potential in revolutionizing the
              landscape of live-cell fluorescence imaging.
            </p>
            <ul className="list-disc list-inside p-2 px-4">
              <li className="hover:list-none">
                Innovatively adopted and employed sophisticated strategies to
                systematically uncover, comprehend, and interconnect
                experimental data derived from diverse sources. Extracted
                pivotal insights amidst a sea of background noise.
              </li>
              <li className="hover:list-none">
                Achieved absolute reference-free and background-free cellular
                images by implementing mathematical transformations such as Fast
                Fourier Transform (FFT) on time-series cellular fluorescence
                data using bespoke algorithms developed in Python, Matlab, and
                Mathematica.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-lg font-medium">
          <span className="underline decoration-double decoration-blue-200">
            Engineering
          </span>
          &nbsp;of Optically Modulatable Fluorescent Proteins (OMFPs)
        </div>
        <div className="collapse-content">
          <div>
            <p className="text-center">
              The fluorescence intensity of OMFPs can be precisely modulated via{" "}
              <span className="italic underline decoration-wavy decoration-orange-400 hover:decoration-lime-500">
                co-illumination with photons exhibiting more red-shifted
                wavelengths
              </span>
              &nbsp;than their inherent fluorescence.
            </p>
            <ul className="list-disc list-inside p-2 px-4">
              <li className="hover:list-none">
                Utilized site-directed mutagenesis for the engineering of novel
                OMFPs, drawing on intramolecular interactions between the
                chromophore and its environment via computer-assisted 3D
                modeling.
              </li>
              <li className="hover:list-none">
                Fostered a highly collaborative design/engineering team
                environment to streamline and formalize experimental sequences,
                optimizing time efficiency while maintaining cost-effectiveness.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-lg font-medium">
          <span className="underline decoration-double decoration-green-200">
            Mathematical Simulation
          </span>
          {"  "}of Fluorescent Protein Photophysics
        </div>
        <div className="collapse-content">
          <div>
            <p className="text-center underline decoration-dashed decoration-info">
              Optical modulation and delayed fluorescence from OMFPs and
              additional fluorophores can be modeled with exceptional fidelity.
            </p>
            <ul className="list-disc list-inside p-2 px-4">
              <li className="hover:list-none">
                Employed multi-state models with rate matrices analogous to
                Jablonski diagrams for fluorescence simulation. This methodology
                facilitated the determination of vital photophysical parameters
                that were previously too complex to assess.
              </li>
              <li className="hover:list-none">
                The simulation was achieved through Python-based computation
                (Numpy and Pandas), optimization (Scipy), and visualization
                techniques (Matplotlib). Utilized the object-oriented
                programming (OOP) paradigm, leading to flexible, cogent, and
                concise code.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const OpticalM = () => {
  return (
    <div className="">
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
          <Accordion></Accordion>

          {/* <div className="card-actions justify-end">
            <button className="btn btn-ghost">.. More ..</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OpticalM;
