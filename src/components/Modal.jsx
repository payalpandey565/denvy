const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  const backgroundStyle = {
    backgroundImage: `url(${project.coverImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      {/* Background image */}
      <div className="absolute inset-0" style={backgroundStyle} />

      {/* Dark overlay */}

      {/* Modal content */}
      <div className="relative bg-white w-full max-w-5xl p-6 rounded-lg overflow-y-auto max-h-[90vh] shadow-xl">
        <div
          className="w-full flex justify-center items-center mb-6"
          style={{ fontFamily: '"EB Garamond", serif' }}
        >
          <h2 className="text-2xl text-center font-semibold text-gray-800">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 text-3xl z-10"
          >
            &times;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.images.map((img, idx) => (
            <div key={idx}>
              <img
                src={img.src}
                alt={`Project Image ${idx + 1}`}
                className="w-full h-64 object-cover rounded"
              />
              <p
                className="mt-2 text-sm text-gray-700"
                style={{ fontFamily: '"EB Garamond", serif' }}
              >
                {img.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
