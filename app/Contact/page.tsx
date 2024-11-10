import React from 'react';
import Link from 'next/link';

function Contact() {
  return (
    <div className="bg-slate-500 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <Link href="/">
          <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Get in Touch</h1>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="text">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">FIRST NAME</h3>
            <input
              type="text"
              placeholder="Please enter your first name..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="text">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">LAST NAME</h3>
            <input
              type="text"
              placeholder="Please enter your last name..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="text">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">EMAIL</h3>
            <input
              type="email"
              placeholder="Please enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="text">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">PHONE NUMBER</h3>
            <input
              type="tel"
              placeholder="Please enter your phone number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="text col-span-2">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">MESSAGE</h3>
            <textarea
              placeholder="Please enter your message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows={4}
            />
          </div>
        </div>

        <div className="text-center mt-6">
          <button className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
