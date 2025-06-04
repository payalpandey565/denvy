import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Services from "./Services";
import FreeConsultationPopup from "../components/Free";
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
            <h3
              className="text-1xl md:text-5xl mb-14 font-semibold text-gray-400"
              style={{ fontFamily: '"EB Garmond", serif' }}
            >
              Great INTERIORS don’t just happen, they’re CURATED.
            </h3>
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
      <section id="free">
        <FreeConsultationPopup mode="section" />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="faq" className="bg-gray-50 py-10 px-4 md:px-16">
        <h2
          className="text-4xl font-bold text-center mb-14 text-[#0f172b] tracking-wide"
          style={{ fontFamily: '"EB Garamond", serif' }}
        >
          Frequently Asked Questions
        </h2>
        <div
          className="max-w-4xl mx-auto space-y-4  text-lg"
          style={{ fontFamily: '"EB Garamond", serif' }}
        >
          {[
            {
              question: "Why choose Denvy Interiors for your home?",
              answer:
                "At Denvy Interiors, we don’t just decorate—we design spaces that reflect your lifestyle, elevate comfort, and inspire daily living. Our team blends creativity, functionality, and premium aesthetics to turn ordinary rooms into meaningful environments.",
            },
            {
              question:
                "How can I enhance the look and feel of my living space?",
              answer:
                "Start with cohesive color tones, layered lighting, and thoughtful furniture placement that promotes openness and balance. Add personal touches like textures, art, and greenery to make your space feel both inviting and unique.",
            },
            {
              question: "Is it possible to design my home on my own?",
              answer:
                "While it’s possible, designing a cohesive, functional space requires careful planning, expertise, and design understanding. Hiring professionals helps avoid costly mistakes and ensures that every corner of your home works beautifully together.",
            },
            {
              question:
                "What should I consider while selecting an interior designer?",
              answer:
                "Look for someone whose portfolio aligns with your taste, and who communicates your ideas clearly and effectively. Experience, client feedback, project transparency, and a collaborative approach are key factors in choosing the right designer.",
            },
            {
              question:
                "What role does an interior designer play in a project?",
              answer:
                "An interior designer translates your vision into a tangible plan that optimizes both aesthetics and practicality. They manage layouts, materials, timelines, and styling—ensuring a seamless journey from concept to completion.",
            },
            {
              question: "Is hiring a home interior designer really worth it?",
              answer:
                "Yes, designers add long-term value by maximizing your space and enhancing its livability, beauty, and efficiency. Their expertise ensures every choice you make—color, furniture, layout—works in harmony with your lifestyle.",
            },
          ].map((faq, index) => (
            <details
              key={index}
              className="bg-[#cad5e2] border border-gray-200 shadow-sm rounded-md group px-6 py-4 transition-all duration-300"
            >
              <summary className="flex items-center justify-between cursor-pointer font-medium text-lg text-gray-900 group-open:text-blue-600">
                <span>{faq.question}</span>
                <svg
                  className="w-5 h-5 text-gray-500 transform transition-transform duration-300 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-left text-gray-800 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
