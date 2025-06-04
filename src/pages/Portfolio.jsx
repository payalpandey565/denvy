import { useState } from "react";
import FreeConsultationPopup from "../components/Free";
import Modal from "../components/Modal";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projects = [
    {
      title: "Modern Living Room",
      coverImage: "/assets/livroom.avif",
      images: [
        {
          src: "/assets/l1.jpeg",
          description:
            "A vibrant living room transformation showcasing bold contrasts and cozy textures. Designed for modern comfort with a splash of elegance.",
        },
        {
          src: "/assets/l2.jpeg",
          description:
            "An airy open-plan space blending minimalism and functionality. Neutral tones and soft lighting create a welcoming ambiance.",
        },
        {
          src: "/assets/l3.jpeg",
          description:
            "A contemporary bedroom with clean lines and natural elements. The wooden accents add warmth to a sleek modern layout.",
        },
        {
          src: "/assets/l4.jpeg",
          description:
            "A creative workspace that balances professionalism with artistic flair. Smart storage solutions meet a calming color palette.",
        },
        {
          src: "/assets/l5.jpeg",
          description:
            "A luxurious lounge design that exudes elegance and symmetry. Plush furnishings and statement lighting elevate the experience.",
        },
        {
          src: "/assets/l6.jpeg",
          description:
            "Elegant modern living room with warm lighting and a stone feature wall.Minimalist decor and neutral tones create a cozy, sophisticated vibe.",
        },
      ],
    },
    {
      title: "Elegant Bedroom",
      coverImage: "/assets/bedroom.jpg",
      images: [
        {
          src: "/assets/b1.jpeg",
          description:
            "A cozy and tranquil bedroom featuring soft lighting and elegant textures. Designed to offer a restful ambiance with timeless charm.",
        },
        {
          src: "/assets/b2.jpeg",
          description:
            "Modern sophistication meets comfort in this chic bedroom layout. Accents of wood and warm tones elevate the overall aesthetic.",
        },
        {
          src: "/assets/b3.jpeg",
          description:
            "Sleek and minimalist, this bedroom blends muted colors with clean lines. A perfect fusion of functionality and refined design.",
        },
        {
          src: "/assets/b4.jpeg",
          description:
            "A bright, airy bedroom filled with natural light and serene vibes. Thoughtful decor elements add warmth and personality..",
        },
        {
          src: "/assets/b5.jpeg",
          description:
            "An understated luxury bedroom crafted with contemporary details. Ideal for those who seek a peaceful, stylish retreat.",
        },
        {
          src: "/assets/b6.jpeg",
          description:
            "A serene sanctuary featuring tropical wall art, warm lighting, and elegant modern finishes. This bedroom blends natural motifs with luxurious textures for a soothing retreat.",
        },
      ],
    },
    {
      title: "Minimalist Kitchen",
      coverImage: "/assets/kitchen.jpg",
      images: [
        {
          src: "/assets/k1.jpeg",
          description:
            "A modern kitchen space with streamlined cabinetry and smart storage. Designed for seamless functionality and contemporary appeal.",
        },
        {
          src: "/assets/k2.jpeg",
          description:
            "This kitchen blends minimalist aesthetics with sleek finishes. A clutter-free layout ensures efficiency without compromising on style.",
        },
        {
          src: "/assets/k3.jpeg",
          description:
            "A stylish modular kitchen boasting clean lines and premium materials. Neutral tones add elegance to the heart of the home.",
        },
        {
          src: "/assets/k4.jpeg",
          description:
            "A spacious, airy kitchen featuring elegant lighting and modern appliances. Ideal for both everyday use and stylish entertaining.",
        },
        {
          src: "/assets/k5.jpeg",
          description:
            "This sophisticated kitchen design showcases a perfect balance of form and function. Rich textures and smart layouts create a welcoming vibe.",
        },
        {
          src: "/assets/k6.jpeg",
          description:
            "A luxurious kitchen with sleek cabinetry, marble finishes, and layered ambient lighting. The warm wood tones and modern fixtures create a functional yet elegant culinary space.",
        },
      ],
    },
    {
      title: "Whimsical Kids Room",
      coverImage: "/assets/c1.jpg",
      images: [
        {
          src: "/assets/c2.jpeg",
          description:
            "A dreamy astronaut-themed kids’ bedroom with soft grey-blue tones and illuminated wall decor. Cozy bedding and wooden accents create a playful yet serene atmosphere.",
        },
        {
          src: "/assets/c3.jpeg",
          description:
            "Modern and sophisticated, this kids’ room features a unique geometric wall panel design and warm neutral accents. Built-in shelves and ambient lighting make it both functional and fun.",
        },
        {
          src: "/assets/c4.jpeg",
          description:
            "Bold and contemporary, this room showcases a striking Iron Man wall mural paired with sleek built-in shelving. Dark hues and city views add a grown-up edge to the superhero theme.",
        },
        {
          src: "/assets/c5.jpeg",
          description:
            "Soft blue and neutral tones make this kids’ room calm and inviting, with plush decor and sleek built-in storage. A playful mix of textures keeps it cozy and functional.",
        },
        {
          src: "/assets/c6.jpeg",
          description:
            "Charming and neutral, this twin bedroom features an adorable bear graphic wall panel for a whimsical touch. The layered bedding and neutral palette keep the look sophisticated yet playful.",
        },
        {
          src: "/assets/c7.jpeg",
          description:
            "A playful and imaginative kids’ room with a space-themed mural and glowing moon accent light. This modern design sparks creativity while ensuring cozy comfort.",
        },
      ],
    },
    {
      title: "Modern Dining Sophistication",
      coverImage: "/assets/d6.jpg",
      images: [
        {
          src: "/assets/d1.jpeg",
          description:
            "A stylish dining setup where textures and tones play in harmony. Ideal for hosting while retaining a cozy home vibe.",
        },
        {
          src: "/assets/d2.jpeg",
          description:
            "An intimate corner redesigned for reflection and relaxation. Subtle decor elements bring life to the neutral backdrop.",
        },
        {
          src: "/assets/d3.jpeg",
          description:
            "This bespoke entryway sets the tone with elegance and clarity. Custom decor meets purposeful design in every detail.",
        },
        {
          src: "/assets/d4.jpeg",
          description:
            "A bold interior with artistic walls and modern lighting. Designed to leave a lasting impression at first glance.",
        },
        {
          src: "/assets/d5.jpeg",
          description:
            "Cozy sophistication defines this sitting area with layered textures. A perfect blend of modern taste and timeless design.",
        },
        {
          src: "/assets/d7.jpeg",
          description:
            "A chic dining area highlighted by geometric wall paneling and ambient backlighting. The space is anchored by a wooden table and plush upholstered chairs for refined gatherings.",
        },
      ],
    },
    {
      title: "Serene Bathroom Retreat",
      coverImage: "/assets/w6.jpg",
      images: [
        {
          src: "/assets/w1.jpeg",
          description:
            "A stunning marble bathroom featuring a freestanding tub, built-in shelving, and warm lighting accents. The overall design exudes modern luxury.",
        },
        {
          src: "/assets/w2.jpeg",
          description:
            "Contemporary elegance meets earthy warmth in this bathroom, . A walk-in shower and floating vanity complete the minimalist look.",
        },
        {
          src: "/assets/w3.jpeg",
          description:
            "A minimalist design with earthy tiles and elegant lighting creates a calm, spa-like atmosphere. Floating cabinetry and clean lines enhance the feeling of open space.",
        },
        {
          src: "/assets/w4.jpeg",
          description:
            "A sophisticated black-themed bathroom with rich marble textures and a dramatic circular mirror with LED lighting. The luxurious finishes and bold tones make a striking statement.",
        },
        {
          src: "/assets/w5.jpeg",
          description:
            "A sleek, modern bathroom with soft ambient lighting and earthy textures that blend harmoniously. The floating vanity and frameless mirror create a clean and spacious look.",
        },
        {
          src: "/assets/w7.jpeg",
          description:
            "A sleek, modern bathroom with soft ambient lighting and earthy textures that blend harmoniously. The floating vanity and frameless mirror create a clean and spacious look.",
        },
      ],
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section className="px-6 md:px-20 py-16 text-gray-800 bg-[#cad5e2]">
      <h1
        className="text-4xl font-bold text-center mb-14 text-[#0f172b] tracking-wide"
        style={{ fontFamily: '"EB Garamond", serif' }}
      >
        Our Portfolio
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="cursor-pointer shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            onClick={() => openModal(project)}
          >
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 bg-white">
              <h3
                className="text-lg font-medium"
                style={{ fontFamily: '"EB Garamond", serif' }}
              >
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <FreeConsultationPopup mode="popup" />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
};

export default Portfolio;
