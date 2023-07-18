import Image from "next/image";
import gt1 from "../../../public/gt-1.jpg";
import GT from "./cards/gt";
import UMN from "./cards/umn";
import Purdue from "./cards/purdue";

const Education = () => {
  return (
    <div>
      <div className="sticky top-16 z-10 backdrop-filter backdrop-blur-lg bg-black bg-opacity-10 font-semibold text-2xl text-center p-2">
        Education
      </div>
      <div>
        <div className="mt-0 mb-auto">
          <div className="gap-0">
            <div className="flex flex-col w-full gap-2 md:flex-row">
              <div className="grid card rounded-none h-auto flex-grow bg-green-950/10 place-items-start">
                <GT></GT>
              </div>
              <div className="grid card rounded-none h-auto flex-grow bg-green-950/10 place-items-start">
                <UMN></UMN>
              </div>
              <div className="grid card rounded-none h-auto flex-grow bg-green-950/10 place-items-start">
                <Purdue></Purdue>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
