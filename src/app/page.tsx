import Image from "next/image";
import NavBar from "./components/navbar";
import StartCarousel from "./components/startcarousel";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Education from "./components/education";
import Research from "./components/research";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <div className="h-32 bg-black bg-opacity-10"></div>
      <Education></Education>
      <div className="h-32 bg-black bg-opacity-10"></div>
      <Research></Research>
      <div className="h-32 bg-black bg-opacity-10"></div>
      <StartCarousel></StartCarousel>
      <Footer></Footer>
    </>
  );
}
