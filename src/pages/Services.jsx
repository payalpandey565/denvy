import {
  Home,
  Ruler,
  Paintbrush,
  Layers3,
  Sofa,
  ClipboardCheck,
  Wand2,
  MonitorSmartphone,
  Building2,
  Brush,
  Leaf,
} from "lucide-react";
import FreeConsultationPopup from "../components/Free";

const services = [
  {
    title: "Consultation Services",
    icon: <ClipboardCheck className="w-10 h-10" />,
  },
  { title: "Space Planning", icon: <Ruler className="w-10 h-10" /> },
  { title: "Concept Development", icon: <Wand2 className="w-10 h-10" /> },
  {
    title: "2D & 3D Visualization",
    icon: <MonitorSmartphone className="w-10 h-10" />,
  },
  {
    title: "Material & Finish Selection",
    icon: <Layers3 className="w-10 h-10" />,
  },
  {
    title: "Furniture Design & Selection",
    icon: <Sofa className="w-10 h-10" />,
  },
  { title: "Lighting Design", icon: <Paintbrush className="w-10 h-10" /> },
  {
    title: "False Ceiling & Partition Design",
    icon: <Home className="w-10 h-10" />,
  },
  { title: "Kitchen & Wardrobe Design", icon: <Home className="w-10 h-10" /> },
  { title: "Décor & Styling", icon: <Brush className="w-10 h-10" /> },
  {
    title: "Project Execution & Supervision",
    icon: <ClipboardCheck className="w-10 h-10" />,
  },
  {
    title: "Renovation & Remodeling",
    icon: <Building2 className="w-10 h-10" />,
  },
  { title: "Turnkey Interior Solutions", icon: <Sofa className="w-10 h-10" /> },
  {
    title: "Commercial Interior Design",
    icon: <Building2 className="w-10 h-10" />,
  },
  {
    title: "Custom Artwork & Wall Murals",
    icon: <Brush className="w-10 h-10" />,
  },
  {
    title: "Sustainable & Eco-Friendly Design",
    icon: <Leaf className="w-10 h-10" />,
  },
];

const Services = () => {
  const handleCardClick = () => {
    // Replace with your actual Google Form URL
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScD6iDl0BPwzF1xS6zqHFBgeddCfXP3zORtDLrZiMVFgBffDw/viewform?usp=header"
    );
  };

  return (
    <section className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bgs3.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div
        className="relative z-10 px-6 md:px-20 py-20 text-gray-800"
        style={{ fontFamily: '"EB Garamond", serif' }}
      >
        <h1 className="text-4xl font-bold text-[#fffbeb] text-center mb-12">
          Our Services
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              onClick={handleCardClick}
              className="cursor-pointer flex flex-col items-center text-center p-6 bg-white/30 backdrop-blur-md border border-white/20 shadow-md rounded-xl hover:shadow-xl transition"
            >
              {service.icon}
              <h3 className="text-lg font-medium mt-4">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <FreeConsultationPopup mode="popup" />
    </section>
  );
};

export default Services;
