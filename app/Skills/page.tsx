import React from 'react';
import Link from "next/link";

function Skills() {
  return (
    <div className="bg-gray-100 py-16">
      <Link href="/">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12 tracking-wide">MY Skills</h1>
      </Link>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Skill Progress Bars */}
        <div className="w-80 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">HTML</h2>
          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600" style={{ width: "90%" }}></div>
          </div>
          <span className="text-center text-lg font-semibold text-blue-600">90%</span>
        </div>

        <div className="w-80 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">CSS</h2>
          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500" style={{ width: "80%" }}></div>
          </div>
          <span className="text-center text-lg font-semibold text-blue-600">80%</span>
        </div>

        <div className="w-80 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">JavaScript</h2>
          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-400" style={{ width: "75%" }}></div>
          </div>
          <span className="text-center text-lg font-semibold text-yellow-400">75%</span>
        </div>

        <div className="w-80 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">TypeScript</h2>
          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-700" style={{ width: "75%" }}></div>
          </div>
          <span className="text-center text-lg font-semibold text-blue-700">75%</span>
        </div>

        <div className="w-80 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Figma</h2>
          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-pink-500" style={{ width: "40%" }}></div>
          </div>
          <span className="text-center text-lg font-semibold text-pink-500">40%</span>
        </div>

        <div className="w-80 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Git</h2>
          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gray-700" style={{ width: "50%" }}></div>
          </div>
          <span className="text-center text-lg font-semibold text-gray-700">50%</span>
        </div>

        <div className="w-80 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Tailwind CSS</h2>
          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-teal-500" style={{ width: "60%" }}></div>
          </div>
          <span className="text-center text-lg font-semibold text-teal-500">60%</span>
        </div>

        <div className="w-80 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Next.js</h2>
          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-green-600" style={{ width: "40%" }}></div>
          </div>
          <span className="text-center text-lg font-semibold text-green-600">40%</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
