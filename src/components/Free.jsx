import { useEffect, useState } from "react";

const FreeConsultationPopup = ({ mode = "popup" }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (mode === "popup") {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 20000);
      return () => clearTimeout(timer);
    }
  }, [mode]);

  const handleRedirect = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScD6iDl0BPwzF1xS6zqHFBgeddCfXP3zORtDLrZiMVFgBffDw/viewform?usp=header"
    );
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const content = (
    <div className="bg-[#90a1b9] rounded-2xl shadow-xl p-6 w-full max-w-2xl mx-auto text-center relative">
      {/* Close Button */}
      {mode === "popup" && (
        <button
          onClick={handleClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl"
          aria-label="Close popup"
        >
          ✖️
        </button>
      )}

      <h2
        className="text-2xl font-bold text-black mb-2"
        style={{ fontFamily: '"EB Garamond", serif' }}
      >
        Free Design Consultation
      </h2>
      <p
        className="text-black mb-4"
        style={{ fontFamily: '"EB Garamond", serif' }}
      >
        Let’s bring your dream space to life. Schedule a free consultation with
        our experts today.
      </p>
      <button
        onClick={handleRedirect}
        className="bg-[#1d293d] hover:bg-blue-700 text-white px-6 py-2 rounded-full transition"
        style={{ fontFamily: '"EB Garamond", serif' }}
      >
        Book Now
      </button>
    </div>
  );

  if (mode === "section") {
    return <div className="py-10 bg-[#f0f4f8]">{content}</div>;
  }

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50 transition-opacity duration-500">
      <div className="animate-fade-in">{content}</div>
    </div>
  );
};

export default FreeConsultationPopup;
