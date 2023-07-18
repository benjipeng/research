import Retention from "./work/retention";
import OpticalM from "./work/modulation";
import retPred from "../../../public/retention_prediction.jpg";
import Image from "next/image";

const Research = () => {
  return (
    <div>
      <div className="sticky top-16 z-20 backdrop-filter backdrop-blur-lg bg-black bg-opacity-10 font-semibold text-2xl text-center uppercase p-2">
        My Research
      </div>
      <OpticalM></OpticalM>
      <Retention></Retention>
    </div>
  );
};
export default Research;
