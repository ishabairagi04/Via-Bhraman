import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { AiFillFacebook, AiFillLinkedin, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10 md:px-20 mt-[4100px] ">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo + Contact */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-yellow-400 w-10 h-10 rounded-md flex items-center justify-center text-black font-bold text-xl">✈️</div>
              <div>
                <h1 className="text-xl font-bold">GlobeTrek</h1>
                <p className="text-sm text-gray-300">Explore new lands</p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1" />
                <span>
                  2118 Thornridge Cir. Syracuse, <br /> Connecticut 35624
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt />
                <span>(229) 555-0109</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span>example@exam.com</span>
              </div>
            </div>
          </div>

          {/* Our Tours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Tours</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Gyeongju</li>
              <li>Fuji, Japan</li>
              <li>Heidelberg</li>
              <li>Switzerland</li>
              <li>Golden Gate</li>
              <li>United Kingdom</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Beach</li>
              <li>Sailboat</li>
              <li>Camping</li>
              <li>Caple Car</li>
              <li>Climbing</li>
              <li>Discovery</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Join our newsletter</h3>
            <p className="text-sm text-gray-400 mb-3">
              Sign up to receive the latest articles
            </p>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Your email address"
                className="w-full bg-gray-800 text-white text-sm px-4 py-2 rounded-md focus:outline-none"
              />
              <button className="absolute right-2 top-2 text-yellow-400">
                <FiArrowRight size={20} />
              </button>
            </div>
            <div className="flex items-center text-xs text-gray-400">
              <input type="checkbox" className="mr-2" />
              I have read and agree to the terms & conditions
            </div>
          </div>
        </div>

        {/* Socials + Copyright */}
        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <span>Follow us</span>
            <AiFillFacebook className="text-white hover:text-yellow-400 cursor-pointer" />
            <AiOutlineTwitter className="text-white hover:text-yellow-400 cursor-pointer" />
            <AiFillLinkedin className="text-white hover:text-yellow-400 cursor-pointer" />
            <AiOutlineInstagram className="text-white hover:text-yellow-400 cursor-pointer" />
          </div>
          <p>Copyright © 2025 GlobeTrek. Designed & Developed by Themesflat</p>
        </div>

        {/* Scroll to top */}
        <div className="fixed bottom-5 right-5 bg-yellow-400 text-black p-2 rounded-full cursor-pointer hover:bg-yellow-300 transition-all duration-300">
          <FaArrowUp />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
