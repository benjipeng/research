function BenjiH1() {
  return (
    <>
      <div className="mt-8">
        <h1 className="text-center">
          <span className="font-semibold text-6xl text-indigo-600/90">
            Benji Peng
          </span>
          <br />
          <div className="mt-4">
            <span className="font-medium italic text-2xl">
              Ph.D. in Chemisrty
            </span>
          </div>
        </h1>
      </div>
    </>
  );
}

const BenjiHeadline = () => {
  return (
    <>
      <h2 className="max-w-screen-lg m-auto text-left font-medium text-lg mt-4">
        Fueling Innovation & Scientific Discoveries and &nbsp;
        <span className="underline decoration-double decoration-cyan-500/30 hover:decoration-emerald-500/30">
          Empowering Researchers
        </span>
        &nbsp; in Life Sciences via {"  "}
        <span className="underline decoration-wavy decoration-violet-500/50 hover:decoration-rose-500/60">
          the Design of Advanced Analytical Methodologies
        </span>
        , {"  "}
        <span className="underline decoration-wavy decoration-blue-500/50 hover:decoration-rose-500/60">
          Fostering a Deeper Understanding of Complex Chemical Phenomena
        </span>
        , and {""}
        <span className="underline decoration-wavy decoration-green-500/50 hover:decoration-rose-500/60">
          the Integration of Cutting-Edge Computational Tools and
          Instrumentation
        </span>
      </h2>
    </>
  );
};

const BenjiTags = () => {
  return (
    <>
      <div className="flex flex-row flex-auto flex-wrap my-4 place-content-center">
        <div className="badge badge badge-neutral">
          <span className="font-semibold">Analytical Chemistry</span>
        </div>
        <div className="badge badge badge-primary">
          <span className="font-semibold">Physical Chemistry</span>
        </div>
        <div className="badge badge badge-ghost">
          <span className="font-semibold">Biophysics</span>
        </div>
      </div>
      <div className="my-2 mx-auto max-w-screen-xl">
        <div className="flex flex-row flex-auto flex-wrap gap-2 place-content-center m-auto">
          <div className="badge badge-sm badge-outline badge-ghost">
            Gas / Liquid Chromtography
          </div>
          <div className="badge badge-sm badge-outline badge-ghost">
            Mass spectrometry
          </div>
          <div className="badge badge-sm badge-outline badge-ghost">
            Chromatography simulation
          </div>
          <div className="badge badge-sm badge-outline badge-primary">
            Laser Optics
          </div>
          <div className="badge badge-sm badge-outline badge-primary">
            Cellular Imaging
          </div>
          <div className="badge badge-sm badge-outline badge-primary">
            Confocal microscopy
          </div>
          <div className="badge badge-sm badge-outline badge-primary">
            Digital Signal Processing (DSP)
          </div>
          <div className="badge badge-sm badge-outline badge-primary">
            Optical Modulation
          </div>
          <div className="badge badge-sm badge-outline badge-primary">
            Super-resolution imaging
          </div>
          <div className="badge badge-sm badge-outline badge-primary">
            Scanning Tunneling Microscopy (STM)
          </div>
          <div className="badge badge-sm badge-outline badge-primary">
            Transmission Electron Microscopy (TEM)
          </div>
          <div className="badge badge-sm badge-outline badge-info">
            Fluorescent Protein (BFP, YFP, GFP, RFP)
          </div>
          <div className="badge badge-sm badge-outline badge-info">
            X-ray crystallography
          </div>
          <div className="badge badge-sm badge-outline badge-info">
            Site-directed mutagenesis (SDM)
          </div>
          <div className="badge badge-sm badge-outline badge-info">
            X-ray crystallography
          </div>
          <div className="badge badge-sm badge-outline badge-info">
            Protein engineering
          </div>
          <div className="badge badge-sm badge-outline badge-info">
            3D protein modelling
          </div>
        </div>
      </div>
    </>
  );
};

function BenjiP() {
  return (
    <>
      <BenjiH1></BenjiH1>
      <BenjiHeadline></BenjiHeadline>
      <BenjiTags></BenjiTags>
    </>
  );
}

export default BenjiP;
