import React from 'react';
import Image from 'next/image';
import heroImage from "../public/image.png";
import Link from 'next/link';

function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-800 text-white">
      {/* Hero image */}
      <div className="flex justify-center mb-6 md:mb-0">
        <Image 
          alt="heropicture" 
          src={heroImage} 
          width={500} 
          height={500} 
          className="rounded-full object-cover shadow-lg"
        />
      </div>

      {/* Content section */}
      <div className="text-center md:text-left md:ml-8">
        <h2 className="text-xl font-semibold mb-2">Hi&#44; I am</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Alishba Naseem</h1>
        <p className="text-lg mb-4">Front-end Developer</p>

        <div className="flex justify-center md:justify-start space-x-4">
           <button className="px-6 py-3 bg-green-600 rounded-full hover:bg-green-700 transition duration-300">
           <Link href="/Contact">Get in Touch</Link>
          </button>
          <button className="px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300">
            <a href="/alishba'sCv.pdf" download>Download Cv</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
