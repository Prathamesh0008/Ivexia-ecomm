// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative pt-14 pb-6 overflow-hidden bg-[#090b12] text-white border-t border-white/10">

      {/* Neon glow effects */}
      <div className="absolute -top-20 left-0 w-72 h-72 bg-pink-600/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Column 1 — Logo & Info */}
        <div>
          <img
            src="/src/assets/logo/ivexiaa-logoo.png"
            alt="Ivexia Logo"
            className="h-12 mb-4 opacity-90 drop-shadow-lg"
          />

          <p className="text-sm text-slate-300 leading-relaxed">
            Premium ED, performance & pharmaceutical wellness products
            crafted with global quality and manufacturing excellence.
          </p>

          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <p className="flex gap-2 items-center">
              <FaMapMarkerAlt className="text-pink-400" />
              Navi Mumbai, India
            </p>
            <p className="flex gap-2 items-center">
              <FaPhone className="text-pink-400" />
              +91 12345 67890
            </p>
            <p className="flex gap-2 items-center">
              <FaEnvelope className="text-pink-400" />
              support@ivexiapharma.com
            </p>
          </div>
        </div>

        {/* Column 2 — Products */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-pink-300">Products</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li className="hover:text-white cursor-pointer">Finished Formulations</li>
            <li className="hover:text-white cursor-pointer">API Ingredients</li>
            <li className="hover:text-white cursor-pointer">Nutraceuticals</li>
            <li className="hover:text-white cursor-pointer">Injectables</li>
            <li className="hover:text-white cursor-pointer">Soft-gels & Capsules</li>
          </ul>
        </div>

        {/* Column 3 — Company */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-pink-300">Company</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link to="/orders" className="hover:text-white">Orders</Link></li>
          </ul>
        </div>

        {/* Column 4 — Support */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-pink-300">Support</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link to="/policy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>

          {/* Social Icons */}
          <div className="mt-6 flex gap-4 text-xl">
            <a className="hover:text-pink-400 cursor-pointer"><FaFacebookF /></a>
            <a className="hover:text-pink-400 cursor-pointer"><FaInstagram /></a>
            <a className="hover:text-pink-400 cursor-pointer"><FaTwitter /></a>
            <a className="hover:text-pink-400 cursor-pointer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/10 pt-5 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Ivexia Pharmaceuticals. All Rights Reserved.
      </div>
    </footer>
  );
}
