import React from 'react';
import Link from 'next/link';

function Project() {
  return (
    <div className="p-4">
      <Link href="/">
        <div className="text-2xl font-semibold text-blue-600 mb-4 cursor-pointer text-center">Projects</div>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="project-item p-4 border border-gray-200 rounded-lg shadow-md">
          <h1 className="text-xl font-bold mb-2">Login-Signup-page</h1>
          <p className="text-gray-700 mb-4">A simple login-signup-page that was created through Nextjs.</p>
          <a href="https://clone-panacloud-website.vercel.app/" className="text-blue-500 hover:underline">Live Link</a>
        </div>

        <div className="project-item p-4 border border-gray-200 rounded-lg shadow-md">
          <h1 className="text-xl font-bold mb-2">CLI-based simple calculator</h1>
          <p className="text-gray-700 mb-4">A simple CLI-based calculator that was created through TypeScript.</p>
          <p className="text-gray-600">npm publish command: a5na3-simple-calculator</p>
        </div>

        <div className="project-item p-4 border border-gray-200 rounded-lg shadow-md">
          <h1 className="text-xl font-bold mb-2">CLI-based Currency converter</h1>
          <p className="text-gray-700 mb-4">A CLI-based currency converter that was created through TypeScript.</p>
          <p className="text-gray-600">npm publish command: a5na3-currency-converter</p>
        </div>

        <div className="project-item p-4 border border-gray-200 rounded-lg shadow-md">
          <h1 className="text-xl font-bold mb-2">CLI-based To-Do-List</h1>
          <p className="text-gray-700 mb-4">A CLI-based to-doo-list that was created through TypeScript.</p>
          <p className="text-gray-600">npm publish command: a5na3-to-do-list</p>
        </div>

        <div className="project-item p-4 border border-gray-200 rounded-lg shadow-md">
          <h1 className="text-xl font-bold mb-2">CLI-based ATM machine</h1>
          <p className="text-gray-700 mb-4">A CLI-based ATM machine that was created through TypeScript.</p>
          <p className="text-gray-600">npm publish command: a5na3-atm-machine</p>
        </div>

        <div className="project-item p-4 border border-gray-200 rounded-lg shadow-md">
          <h1 className="text-xl font-bold mb-2">PanaCloud website</h1>
          <p className="text-gray-700 mb-4">A website that was cloned using HTML and CSS.</p>
          <p className="text-gray-600">Live link: <a href="https://clone-panacloud-website.vercel.app/" className="text-blue-500 hover:underline">Link</a></p>
        </div>
      </div>
    </div>
  );
}

export default Project;
