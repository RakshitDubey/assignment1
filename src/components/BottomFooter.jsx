import React from 'react';
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { BsPinterest } from "react-icons/bs";

function BottomFooter() {
  return (
    <div className="py-4 ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="icons flex flex-wrap mb-2 sm:mb-0">
          <FaYoutube className="mr-2 mb-2 sm:mr-4 sm:mb-0" />
          <FaTiktok className="mr-2 mb-2 sm:mr-4 sm:mb-0" />
          <FaFacebook className="mr-2 mb-2 sm:mr-4 sm:mb-0" />
          <FaInstagram className="mr-2 mb-2 sm:mr-4 sm:mb-0" />
          <FaLinkedin className="mr-2 mb-2 sm:mr-4 sm:mb-0" />
          <RiTwitterXLine className="mr-2 mb-2 sm:mr-4 sm:mb-0" />
          <BsPinterest className="mb-2 sm:mb-0" />
        </div>
        <div className="terms">
          <span className="mr-4">Terms of use</span>
          <span className="mr-4">Privacy Policy</span>
          <span>@2006-2024 Wix.com.inc</span>
        </div>
      </div>
    </div>
  );
}

export default BottomFooter;
