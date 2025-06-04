import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

import { useState } from "react";

const Contact = () => {
  const [copiedMsg, setCopiedMsg] = useState("");

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedMsg(label);
      setTimeout(() => setCopiedMsg(""), 2000);
    });
  };

  const showMessage = (label) => {
    setCopiedMsg(label);
    setTimeout(() => setCopiedMsg(""), 2000);
  };

  return (
    <section className="px-6 md:px-20 py-16 bg-[#cad5e2] text-gray-800">
      <div className="flex justify-center space-x-8 text-2xl text-gray-700">
        <a
          href="https://www.instagram.com/denvy.in/?igsh=MWtlN2JzYmU1Mmd0bg%3D%3D#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/share/1BrrzzN2EL/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
        >
          <FaFacebook />
        </a>

        <button
          onClick={() => copyToClipboard("info@denvy.in", "Email copied!")}
          aria-label="Copy Email"
          className="hover:text-blue-700 focus:outline-none"
          type="button"
          title="Click to copy email"
        >
          <FaEnvelope />
        </button>

        <button
          onClick={() =>
            copyToClipboard("+91 63057 4475", "Phone number copied!")
          }
          aria-label="Copy Phone Number"
          className="hover:text-blue-700 focus:outline-none"
          type="button"
          title="Click to copy phone number"
        >
          <FiPhone />
        </button>

        <button
          onClick={() => showMessage("Coming soon!")}
          aria-label="Coming soon!"
          className="hover:text-blue-700 focus:outline-none"
          type="button"
          title="Coming soon!"
        >
          <MdLocationOn className="text-2xl text-gray-700" />
        </button>
      </div>

      {copiedMsg && (
        <p className="text-center mt-4 text-green-600 font-semibold">
          {copiedMsg}
        </p>
      )}
      <div
        className="mt-8 text-center"
        style={{ fontFamily: '"EB Garamond", serif' }}
      >
        <h3 className="text-2xl text-[#0f172b] font-semibold">Working Hours</h3>
        <p className="text-gray-900 text-lg">
          Tuesday to Sunday: 9:00 AM – 6:00 PM
        </p>
        <p className="text-red-600 text-lg">Closed on Mondays</p>
      </div>
    </section>
  );
};

export default Contact;
