import Image from "next/image";
import NavBar from "./components/navbar";
import StartCarousel from "./components/startcarousel";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Education from "./components/education";
import Research from "./components/research";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Education></Education>
      <Research></Research>
      <StartCarousel></StartCarousel>
      <Footer></Footer>
    </>
  );
}
