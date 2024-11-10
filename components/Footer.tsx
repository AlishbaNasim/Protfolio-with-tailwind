import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-screen-lg mx-auto text-center">
        <div className="flex justify-center space-x-8 mb-4">
          {/* GitHub Icon */}
          <a
            href="https://github.com/AlishbaNasim"
            target="_blank"
            className="text-2xl hover:text-indigo-500 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/syeda-alishba-2826112b6"
            target="_blank"
            className="text-2xl hover:text-indigo-500 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* Email Icon */}
          <a
            href="mailto:alishbanaseem345@gmail.com"
            className="text-2xl hover:text-indigo-500 transition-colors"
            aria-label="Email"
          >
            <MdEmail />
          </a>
        </div>

        <div className="text-sm text-gray-400">
          <p>&copy; 2024 All rights reserved</p>
          <p>Alishba Naseem</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
