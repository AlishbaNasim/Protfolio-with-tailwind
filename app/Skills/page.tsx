import React from 'react';
import Link from "next/link"
function Skills() {
  return (
    <div className="bg-gray-100 py-10">
      <Link href="/"><h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">MY Skills</h1></Link>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex items-center justify-center w-32 h-32 bg-blue-600 text-white rounded-full shadow-lg">
          <span className="text-center text-lg font-semibold">HTML <br />90%</span>
        </div>
        <div className="flex items-center justify-center w-32 h-32 bg-blue-500 text-white rounded-full shadow-lg">
          <span className="text-center text-lg font-semibold">CSS <br />80%</span>
        </div>
        <div className="flex items-center justify-center w-32 h-32 bg-yellow-400 text-white rounded-full shadow-lg">
          <span className="text-center text-lg font-semibold">JavaScript <br />75%</span>
        </div>
        <div className="flex items-center justify-center w-32 h-32 bg-blue-700 text-white rounded-full shadow-lg">
          <span className="text-center text-lg font-semibold">TypeScript <br />75%</span>
        </div>
        <div className="flex items-center justify-center w-32 h-32 bg-pink-500 text-white rounded-full shadow-lg">
          <span className="text-center text-lg font-semibold">Figma <br />40%</span>
        </div>
        <div className="flex items-center justify-center w-32 h-32 bg-gray-700 text-white rounded-full shadow-lg">
          <span className="text-center text-lg font-semibold">Git <br />50%</span>
        </div>
        <div className="flex items-center justify-center w-32 h-32 bg-teal-500 text-white rounded-full shadow-lg">
          <span className="text-center text-lg font-semibold">Tailwind <br />60%</span>
        </div>
        <div className="flex items-center justify-center w-32 h-32 bg-green-600 text-white rounded-full shadow-lg">
          <span className="text-center text-lg font-semibold">Next.js <br />40%</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
