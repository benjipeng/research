import Retention from "./work/retention";
import retPred from "../../../public/retention_prediction.jpg";
import om from "../../../public/opticalmodulation.jpg";
import Image from "next/image";

const Research = () => {
  return (
    <div>
      <div className="sticky top-16 z-20 backdrop-filter backdrop-blur-lg bg-black bg-opacity-10 font-semibold text-2xl text-center p-2">
        My Research
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <Image src={om} alt="retention prediction" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Optical Modulation</h2>
          <p>Optical Modulation...</p>
          <div className="card-actions justify-end">
            <button className="btn btn-success">In Progress...</button>
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <Image src={retPred} alt="retention prediction" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Retention Projection</h2>
          <p>Retention Projection is ....</p>
          <div className="card-actions justify-end">
            <button className="btn btn-info">In Progress...</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Research;
