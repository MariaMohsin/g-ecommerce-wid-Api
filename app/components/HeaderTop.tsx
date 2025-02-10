"use client"
import React from 'react';
import { IoCallOutline } from 'react-icons/io5';
import { TfiEmail } from 'react-icons/tfi';
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 bg-black text-white hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">

          <div className="flex gap-6 items-center">
            <div className="flex items-center gap-2">
              <IoCallOutline />
              <span className="text-sm text-[#FFFFFF]">(225) 555-0118</span>
            </div>
            <div className="flex items-center gap-2">
              <TfiEmail />
              <span className="text-sm text-[#FFFFFF]">michlle.river@example.com</span>
            </div>
          </div>

          {/* Center Section: Header Text */}
          <div className="text-center text-sm">
            <span>Follow us and get a chance to win 80% off</span>
          </div>

          {/* Right Section: Social Media Icons */}
          <div className="flex gap-4 items-center">
            <a href="#" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;

