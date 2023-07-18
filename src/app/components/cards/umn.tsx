import gt1 from "../../../../public/umn-1.jpg";
import Image from "next/image";
const UMN = () => {
  return (
    <div>
      <div className="image-full max-h-64 lg:max-h-96 flex flex-col content-center justify-normal">
        <figure>
          <Image src={gt1} alt="gt" />
        </figure>
        <div className="card-body rounded-none">
          <h2 className="card-title">University of Minnesota</h2>
          <p>B.A. in Chemistry</p>
          <p>2013 - 2014</p>
          {/* <div className="card-actions justify-end"> */}
          {/* <button className="btn btn-primary">Buy Now</button> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default UMN;
