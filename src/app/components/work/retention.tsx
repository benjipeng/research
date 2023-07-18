import Image from "next/image";
import retpred from "../../../../public/retention_prediction.jpg";

const Intro = () => {
  return (
    <p className="font-black text-lg text-center">
      <span className="underline decoration-wavy decoration-lime-500 hover:decoration-green-500">
        Algorithmic problem solving
      </span>
      {"  "} by {"  "}
      <span className="underline decoration-double decoration-green-500 hover:decoration-emerald-500">
        mathematical toolkit
      </span>
      {"  "} and the {"  "}
      <span className="underline decoration-double decoration-emerald-500 hover:decoration-teal-500">
        state-of-the-art instrument
      </span>
      {"  "} is a crucial to the success of retention projection.
    </p>
  );
};

const RetFactor = () => {
  return (
    <div>
      <h3 className="font-bold text-lg underline decoration-sky-300 hover:decoration-orange-200">
        Measuring Unbiased Gas Chromatographic Retention Factor{" "}
        <span className="italic">(K)</span> vs. Temperature{" "}
        <span className="italic">(T)</span> Relationships
      </h3>
      <ul className="list-inside py-1 text-sm">
        <li>
          <div className="text-sm font-bold uppercase">Problem Statement:</div>{" "}
          <ul>
            <li className="py-1 px-4 font-medium">
              Direct methods to measure k vs. T relationships are tedious and
              time-consuming.
            </li>
          </ul>
        </li>
        <li>
          <div className="text-sm font-bold uppercase">Proposed Solution:</div>{" "}
          <ul>
            <li className="py-1 px-4">
              A new methodology using a series of temperature programs and{" "}
              <span className="underline decoration-double decoration-teal-500">
                algorithmic back-calculation
              </span>{" "}
              of effective temperature and hold-up time profiles.
            </li>
          </ul>
        </li>
        <li>
          <div className="text-sm font-bold uppercase">Impact and Results:</div>{" "}
          <ul>
            <li className="py-1 px-4">
              The k vs. T relationships measured from this approach had{" "}
              <span className="italic font-medium">comparable</span> accuracy as
              those measured isothermally.
            </li>
            <li className="py-1 px-4">
              This methodology showed{" "}
              <span className="italic font-medium">less</span> than two-fold
              error across different GC-MS instruments, confirming its
              robustness.
            </li>
          </ul>
        </li>
        <li>
          <div className="text-sm font-bold uppercase">
            Advancements and Future Work:
          </div>{" "}
          <ul>
            <li className="py-1 px-4">
              The methodology is relatively fast, easy, and doesn&rsquo;t
              require any additional equipment.
            </li>
            <li className="py-1 px-4">
              Plans are in place to build{" "}
              <span className="underline decoration-double decoration-teal-500">
                a large database of k vs. T
              </span>{" "}
              relationships using this methodology.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

const GC = () => {
  return (
    <div>
      <h3 className="font-bold text-lg underline decoration-sky-300 hover:decoration-orange-200">
        Retention Projection in Gas Chromatography-Mass Spectrometry (GC-MS)
      </h3>
      <ul className="list-inside py-1 text-sm">
        <li>
          <div className="text-sm font-bold uppercase">Need and Relevance:</div>{" "}
          <ul>
            <li className="py-1 px-4 font-medium">
              Existing shared retention databases are{" "}
              <span className="underline decoration-wavy decoration-red-400">
                unreliable and highly dependent on the specific GC-MS system
              </span>
              .
            </li>
            <li className="py-1 px-4 font-medium">
              <span className="underline decoration-wavy decoration-fuchsia-400">
                Lack of standards
              </span>{" "}
              for all compounds of interest poses a significant challenge in
              compound identification.
            </li>
          </ul>
        </li>
        <li>
          <div className="text-sm font-bold uppercase">
            Methodology and Accuracy:
          </div>{" "}
          <ul>
            <li className="py-1 px-4">
              The Retention Projection methodology combined with a
              back-calculation technique offers a more accurate approach.{" "}
            </li>
            <li className="py-1 px-4">
              The methodology is 3-fold more accurate under the same
              experimental conditions across labs, correctly accounting for
              unintentional GC-MS system differences.
            </li>
          </ul>
        </li>
        <li>
          <div className="text-sm font-bold uppercase">
            Effect of Different Methods and Lab Conditions:
          </div>
          <ul>
            <li className="py-1 px-4">
              Retention projections offer 4- to 165-fold more accuracy across
              labs using different methods.
            </li>
            <li className="py-1 px-4">
              Distribution of error was predictable across different methods and
              labs.Distribution of error was predictable across different
              methods and labs.
            </li>
          </ul>
        </li>
        <li>
          <div className="text-sm font-bold uppercase">
            Advancements and Potential:
          </div>
          <ul>
            <li className="py-1 px-4">
              The methodology allows for automatic calculation of retention time
              tolerance windows.
            </li>
            <li className="py-1 px-4">
              With high accuracy and reliability, retention projection is a
              powerful tool for compound identification, even without physical
              standards.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

const LC = () => {
  return (
    <div className="">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border-base-300 bg-base-200"
      >
        <div className="collapse-title text-base font-medium content-between">
          Retention Projection in LC–MS
        </div>
        <div className="collapse-content">
          <h3 className="font-bold text-lg">
            Retention Projection in Liquid Chromatography-Mass Spectrometry
            (LC–MS)
          </h3>
          <ul className="list-inside py-1 text-sm">
            <li>
              <div className="text-sm font-bold uppercase">
                Need and Relevance:
              </div>{" "}
              <ul>
                <li className="py-1 px-4 font-medium">
                  Current standard for sharing retention data, Linear Retention
                  Indexing, is unreliable due to inability to account for
                  lab-specific experimental conditions.
                </li>
              </ul>
            </li>
            <li>
              <div className="text-sm font-bold uppercase">
                Methodology and Accuracy:
              </div>{" "}
              <ul>
                <li className="py-1 px-4">
                  The Retention Projection methodology combined with a
                  back-calculation technique offers a more accurate approach.
                </li>
                <li className="py-1 px-4">
                  <span className="underline decoration-double decoration-pink-500">
                    2-fold to 22-fold more
                  </span>{" "}
                  accuracy observed with this approach under various lab
                  conditions and intentional experimental differences.
                </li>
              </ul>
            </li>
            <li>
              <div className="text-sm font-bold uppercase">
                Future Directions:
              </div>{" "}
              <ul>
                <li className="py-1 px-4">
                  Further investigation needed to correct for{" "}
                  <span className="italic font-medium underline decoration-wavy decoration-rose-300">
                    unintentional differences
                  </span>{" "}
                  , such as changes in columns&rsquo; selectivity for charged
                  compounds over time.
                </li>
                <li className="py-1 px-4">
                  A need to develop faster methods for measuring k vs. Φ
                  relationships to make the methodology more practical.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Retention = () => {
  return (
    <div>
      <div className="sticky top-28 z-20 backdrop-blur-lg bg-black bg-opacity-10">
        <h2 className="text-center font-bold uppercase">
          Retention Projection
        </h2>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="">
          <Image
            src={retpred}
            alt="retention projection"
            className="lg:h-full h-64 object-cover"
          />
        </figure>
        <div className="card-body">
          <Intro></Intro>
          <RetFactor></RetFactor>
          <GC></GC>
          <LC></LC>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-info">In Progress...</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Retention;
