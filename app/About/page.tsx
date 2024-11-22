import React from 'react';
import Link from 'next/link';

function About() {
  return (
    <div className="bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-slate-700 p-6 rounded-lg shadow-lg">
        <Link href="/">
          <h1 className="text-3xl font-extrabold text-center text-white mb-6">About me</h1>
        </Link>

        <p className="text-lg text-white mb-6 p-6 rounded-lg">
          Hello! I&apos;m Alishba Naseem, a Front-end developer skilled in HTML&#44; CSS&#44; JavaScript&#44; and TypeScript. Starting six months ago with CLI-based projects like a calculator and number guessing game published on npm&#44; I gained a solid foundation in JavaScript and TypeScript. Now&#44; I focus on mastering Next.js and Tailwind CSS to build scalable&#44; responsive web applications. My journey reflects adaptability and dedication to growth&#44; and I&apos;m eager to create innovative projects that deliver seamless user experiences.
          </p>

        <div className="text-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
            <Link href="/Project">View my work</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
