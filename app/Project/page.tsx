import React from 'react';
import Link from 'next/link';

function Project() {
  return (
    <div className="p-12 bg-gradient-to-r from-indigo-100 to-indigo-200">
      <Link href="/">
        <div className="text-4xl font-extrabold text-center text-gray-900 mb-12 cursor-pointer">
          Projects
        </div>
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Project Item 1 */}
        <div className="project-item bg-gradient-to-r from-blue-500 to-blue-600 p-8 border border-gray-300 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <h1 className="text-2xl font-semibold text-white mb-4">Login-Signup Page</h1>
          <p className="text-gray-200 mb-4">A simple login-signup page built with Next.js.</p>
          <a href="https://clone-panacloud-website.vercel.app/" className="text-white hover:underline transition-all duration-200">View Live</a>
        </div>

        {/* Project Item 2 */}
        <div className="project-item bg-gradient-to-r from-green-500 to-green-600 p-8 border border-gray-300 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <h1 className="text-2xl font-semibold text-white mb-4">CLI-based Simple Calculator</h1>
          <p className="text-gray-200 mb-4">A simple CLI-based calculator built with TypeScript.</p>
          <p className="text-gray-100">npm command: <span className="font-semibold text-white">a5na3-simple-calculator</span></p>
        </div>

        {/* Project Item 3 */}
        <div className="project-item bg-gradient-to-r from-teal-500 to-teal-600 p-8 border border-gray-300 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <h1 className="text-2xl font-semibold text-white mb-4">CLI-based Currency Converter</h1>
          <p className="text-gray-200 mb-4">A CLI-based currency converter built with TypeScript.</p>
          <p className="text-gray-100">npm command: <span className="font-semibold text-white">a5na3-currency-converter</span></p>
        </div>

        {/* Project Item 4 */}
        <div className="project-item bg-gradient-to-r from-purple-500 to-purple-600 p-8 border border-gray-300 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <h1 className="text-2xl font-semibold text-white mb-4">CLI-based To-Do List</h1>
          <p className="text-gray-200 mb-4">A CLI-based to-do list built with TypeScript.</p>
          <p className="text-gray-100">npm command: <span className="font-semibold text-white">a5na3-to-do-list</span></p>
        </div>

        {/* Project Item 5 */}
        <div className="project-item bg-gradient-to-r from-red-500 to-red-600 p-8 border border-gray-300 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <h1 className="text-2xl font-semibold text-white mb-4">CLI-based ATM Machine</h1>
          <p className="text-gray-200 mb-4">A CLI-based ATM machine built with TypeScript.</p>
          <p className="text-gray-100">npm command: <span className="font-semibold text-white">a5na3-atm-machine</span></p>
        </div>

        {/* Project Item 6 */}
        <div className="project-item bg-gradient-to-r from-yellow-500 to-yellow-600 p-8 border border-gray-300 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <h1 className="text-2xl font-semibold text-white mb-4">PanaCloud Website</h1>
          <p className="text-gray-200 mb-4">A website cloned using HTML and CSS.</p>
          <p className="text-gray-100">Live link: <a href="https://clone-panacloud-website.vercel.app/" className="text-white hover:underline transition-all duration-200">Link</a></p>
        </div>
      </div>
    </div>
  );
}

export default Project;
