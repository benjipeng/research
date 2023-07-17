import Image from "next/image";
import NavBar from "./components/navbar";
import BenjiP from "./components/benjip";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <div className="m-4">
        <BenjiP></BenjiP>
      </div>
    </>
  );
}
