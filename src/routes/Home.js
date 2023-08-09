import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero cName="hero" title="Ivan Yuantama Pradipta" text="Front End Developer" buttonText="Download CV" url="/" btnClass="show  forslide" />
    </>
  );
}

export default Home;
