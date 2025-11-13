import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-green-50 text-gray-700 py-8 mt-16">
      <div className="container px-4 flex flex-col md:flex-row justify-between items-center gap-4 w-11/12 mx-auto">
        {/* Left: Logo + Copy */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-green-700">EcoTrack</h2>
          <p className="text-sm">© 2025 EcoTrack</p>
        </div>

        {/* Middle: Quick Links */}
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-green-700">Home</Link>
          <Link to="/all-events" className="hover:text-green-700">Events</Link>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" aria-label="X"><FaXTwitter /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
      </div>

      {/* Accessibility & Privacy */}
      <p className="text-center text-xs text-gray-500 mt-4">
        Accessible design | Privacy-friendly experience 🌱
      </p>
    </footer>
  );
};

export default Footer;
