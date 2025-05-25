import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";

import { useState } from "react";

const Contact = () => {
  const [copiedMsg, setCopiedMsg] = useState("");

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedMsg(label);
      setTimeout(() => setCopiedMsg(""), 2000); // hide after 2 seconds
    });
  };

  return (
    <section className="px-6 md:px-20 py-16 bg-[#cad5e2] text-gray-800">
      {/* ... your form here ... */}

      <div className="flex justify-center space-x-8 text-2xl text-gray-700">
        {/* LinkedIn & Instagram links */}
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/denvy.in/?igsh=MWtlN2JzYmU1Mmd0bg%3D%3D#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
        >
          <FaInstagram />
        </a>

        {/* Email icon copies email */}
        <button
          onClick={() =>
            copyToClipboard("youremail@example.com", "Email copied!")
          }
          aria-label="Copy Email"
          className="hover:text-blue-700 focus:outline-none"
          type="button"
          title="Click to copy email"
        >
          <FaEnvelope />
        </button>

        {/* Phone icon copies phone number */}
        <button
          onClick={() => copyToClipboard("+1234567890", "Phone number copied!")}
          aria-label="Copy Phone Number"
          className="hover:text-blue-700 focus:outline-none"
          type="button"
          title="Click to copy phone number"
        >
          <FiPhone />
        </button>

        <a
          href="https://www.google.com/maps?q=123+Main+Street,+City,+Country"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-base md:text-lg text-gray-600 hover:text-blue-600"
          aria-label="View Location on Google Maps"
          title="View Location on Google Maps"
        >
          <MdLocationOn className="text-2xl text-gray-700" />
        </a>
      </div>

      {/* Copy confirmation message */}
      {copiedMsg && (
        <p className="text-center mt-4 text-green-600 font-semibold">
          {copiedMsg}
        </p>
      )}
    </section>
  );
};

export default Contact;
