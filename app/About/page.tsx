import React from 'react';
import Link from 'next/link';

function About() {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto bg-slate-700 p-6 rounded-lg shadow-lg">
        <Link href="/">
          <h1 className="text-3xl font-extrabold text-center text-white mb-6">About me</h1>
        </Link>

        <p className="text-lg text-white mb-6 p-6 rounded-lg">
          Hello! I&apos;m Alishba Naseem&#44; a Front-end developer with a strong foundation in HTML&#44; CSS&#44; JavaScript and TypeScript. My journey began six months ago with building CLI-based projects&l&#44; like a simple calculator&#44; number guessing game published on npm&#44;where I explored the fundamentals of JavaScript and TypeScript alongside command-line interfaces. This experience laid the groundwork for my current projects and skill set.
          <br />
          Currently&#44; I&apos;m focused on advancing my expertise in Next.js and Tailwind CSS to create scalable&#44;responsive web applications. My projects now range from command-line tools to full-featured web applications&#44;reflecting my adaptability and commitment to growth in web development.
          <br />
          As I progress, I&apos;m excited to continue building innovative projects and learning new tools that help me create seamless user experiences.
        </p>

        <div className="text-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
            <Link href="/project">View my work</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
