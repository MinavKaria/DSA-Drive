import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className=" top-0 left-0 w-full  bg-opacity-70 backdrop-blur-md p-4 shadow-lg z-50">
      <div className="container mx-auto">
        <ul className="flex space-x-8 justify-center">
          <li>
            <Link to="/" className="text-white text-lg font-semibold hover:text-cyan-200 transition duration-300">
              View Questions
            </Link>
          </li>
          <li>
            <Link to="/question" className="text-white text-lg font-semibold hover:text-cyan-200  transition duration-300">
              Add Question
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
