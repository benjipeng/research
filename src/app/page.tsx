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
      <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
        </Script>
      </div>
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
