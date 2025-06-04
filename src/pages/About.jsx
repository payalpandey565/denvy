import FreeConsultationPopup from "../components/Free"; // adjust the path if needed

const About = () => {
  return (
    <section className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bgg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div
        className="relative z-10 px-6 md:px-20 py-20 text-[#09090b]"
        style={{ fontFamily: '"EB Garamond", serif' }}
      >
        <h1 className="text-4xl font-bold text-center mb-14 text-[#fffbeb] tracking-wide">
          About Denvy
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Section 1 */}
          <div className="bg-white/30 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold italic mb-4">
              Designing Homes with Heart and Precision
            </h3>
            <p className="mb-4 text-lg text-justify leading-relaxed ">
              Denvy is a Hyderabad-based interior design company with over 8
              years of rich on-ground experience. Officially established in
              2024, Denvy was born out of a vision to provide end-to-end
              interior solutions that are both personalised and professionally
              executed.
            </p>
            <p className="text-justify text-lg leading-relaxed">
              At Denvy, we understand that a home is more than just a space —
              it’s a reflection of your personality, lifestyle, and dreams.
              That’s why we approach every project with a strong focus on
              transparency, customer satisfaction, and resolving real-world
              design and execution challenges.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white/30 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold italic mb-4">Our Journey</h3>
            <p className="mb-6 text-lg text-justify leading-relaxed">
              In just one year since our formal inception, we have successfully
              delivered over 30+ thoughtfully designed homes, each tailored to
              meet the unique needs and expectations of our clients.
            </p>
            <p className="mb-6 text-lg text-justify leading-relaxed">
              With a growing portfolio and an unwavering commitment to quality,
              Denvy continues to evolve with the goal of delivering more
              beautiful, functional, and lasting interiors — one home at a time.
            </p>
            <p className="text-lg font-semibold italic">
              Let’s design a space you’ll love to live in.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-white/30 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold italic mb-4">Our Values</h3>
            <ul className="list-disc ml-6 space-y-3 text-lg text-justify leading-relaxed">
              <li>Client-Centered Collaboration</li>
              <li>Creative and Innovative Design</li>
              <li>Uncompromising Craftsmanship</li>
              <li>Functional and Livable Spaces</li>
              <li>Integrity and Transparency</li>
            </ul>
          </div>
        </div>
      </div>
      <FreeConsultationPopup mode="popup" />
    </section>
  );
};

export default About;
