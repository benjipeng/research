import Image from "next/image";
import NavBar from "./components/navbar";
import StartCarousel from "./components/startcarousel";
import Hero from "./components/hero";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <StartCarousel></StartCarousel>
      <Footer></Footer>
    </>
  );
}
