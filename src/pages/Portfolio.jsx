const Portfolio = () => {
  const projects = [
    { title: "Modern Living Room", image: "/assets/livroom.avif" },
    { title: "Elegant Bedroom", image: "/assets/bedroom.jpg" },
    { title: "Minimalist Kitchen", image: "/assets/kitchen.jpg" },
  ];

  return (
    <section className="px-6 md:px-20 py-16 text-gray-800">
      <h2 className="text-3xl font-semibold mb-8">Our Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="shadow-md rounded-xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
