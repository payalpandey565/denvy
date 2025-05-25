import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Services from "./Services";
import "../App.css";

const Home = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row h-screen  overflow-hidden">
        {/* Left: Slideshow Background + Text Overlay */}
        <div className="relative md:w-1/3 h-64 md:h-full text-white flex items-center justify-center">
          {/* Background slideshow */}
          <div className="absolute inset-0 animate-fadeImage bg-cover bg-center bg-no-repeat image-slide-1 z-0"></div>
          <div className="absolute inset-0 animate-fadeImageDelay bg-cover bg-center bg-no-repeat image-slide-2 z-0"></div>
          <div className="absolute inset-0 animate-fadeImageDelay2 bg-cover bg-center bg-no-repeat image-slide-3 z-0"></div>
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          {/* Overlay text */}
          <div className="relative z-20 px-6 md:px-10 text-center py-4 rounded-md">
            <h1
              className="text-4xl md:text-5xl mt-2 font-semibold"
              style={{ fontFamily: '"Cinzel Decorative", serif' }}
            >
              Denvy
            </h1>
            <p className="mt-2 text-lg font-light mt-1">
              Interior Design Studio
            </p>
          </div>
        </div>

        {/* Right: Static Background */}
        <div
          className="md:w-2/3 h-64 md:h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/bgimg.jpg')" }}
        ></div>
      </section>

      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
