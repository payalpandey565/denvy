const Services = () => {
  const services = [
    "Residential Interior Design",
    "Space Planning and Furniture Layout",
    "Colour Consultation",
    "Material and Finish Selection",
    "Custom Furniture Design",
    "Project Management",
    "Styling and Decorating",
    "E-Design/Virtual Consultations",
  ];

  return (
    <section className="px-6 md:px-20 py-16 text-gray-800">
      <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="p-6 shadow-md rounded-xl bg-white hover:shadow-xl transition"
          >
            <h3 className="text-xl font-medium">{service}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
