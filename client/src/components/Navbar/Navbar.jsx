import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className=" top-0 left-0 w-full bg-white bg-opacity-70 backdrop-blur-md p-4 shadow-lg z-50">
      <div className="container mx-auto">
        <ul className="flex space-x-8 justify-center">
          <li>
            <Link to="/" className="text-gray-800 text-lg font-semibold hover:text-gray-600 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/question" className="text-gray-800 text-lg font-semibold hover:text-gray-600 transition duration-300">
              Question
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
