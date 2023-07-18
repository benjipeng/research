import gt1 from "../../../../public/purdue-1.jpg";
import Image from "next/image";
const Purdue = () => {
  return (
    <div>
      <div className="image-full max-h-64 lg:max-h-96 flex flex-col content-center justify-normal">
        <figure>
          <Image src={gt1} alt="gt" />
        </figure>
        <div className="card-body rounded-none">
          <h2 className="card-title">Purdue University</h2>
          <p>Chemical Engineering</p>
          <p>2011 - 2012</p>
          {/* <div className="card-actions justify-end"> */}
          {/* <button className="btn btn-primary">Buy Now</button> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Purdue;
