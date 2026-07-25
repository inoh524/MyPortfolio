import { FaEnvelope, FaLinkedin, FaFacebook, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <main className="flex items-center justify-center py-16">
      <div className="w-full max-w-4xl bg-[#01161f] border border-cyan-400 rounded-2xl shadow-lg p-10">

        <h1 className="text-5xl font-bold text-white font-mono text-center">
          Contact Me
        </h1>

        <p className="text-gray-300 text-center mt-4 mb-12">
          Thank you for visiting my portfolio. If you're interested in working
          together or have any questions, feel free to contact me through any of
          the methods below.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Email */}
          <div className="bg-[#022534] rounded-xl p-6 hover:border-cyan-400 border border-transparent transition">
            <FaEnvelope className="text-cyan-400 text-4xl mb-4" />
            <h2 className="text-white text-2xl font-semibold">Email</h2>
            <p className="text-gray-300 mt-2">
              inohsuu@gmail.com
            </p>
          </div>

          {/* Phone */}
          <div className="bg-[#022534] rounded-xl p-6 hover:border-cyan-400 border border-transparent transition">
            <FaPhone className="text-cyan-400 text-4xl mb-4" />
            <h2 className="text-white text-2xl font-semibold">Phone</h2>
            <p className="text-gray-300 mt-2">
              +63 995 006 1412
            </p>
          </div>

          {/* LinkedIn */}
          <div className="bg-[#022534] rounded-xl p-6 hover:border-cyan-400 border border-transparent transition">
            <FaLinkedin className="text-cyan-400 text-4xl mb-4" />
            <h2 className="text-white text-2xl font-semibold">LinkedIn</h2>

            <a
              href="https://www.linkedin.com/in/marcelino-susano/"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-300 hover:underline"
            >
              https://www.linkedin.com/in/marcelino-susano/
            </a>
          </div>

          {/* Facebook */}
          <div className="bg-[#022534] rounded-xl p-6 hover:border-cyan-400 border border-transparent transition">
            <FaFacebook className="text-cyan-400 text-4xl mb-4" />
            <h2 className="text-white text-2xl font-semibold">Facebook</h2>

            <a
              href="https://www.facebook.com/inoh.susano"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-300 hover:underline"
            >
              https://www.facebook.com/inoh.susano
            </a>
          </div>

        </div>

      </div>
    </main>
  );
}

export default Contact;