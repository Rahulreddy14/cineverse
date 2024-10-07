import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand name */}
        <a href="/" className="text-2xl font-bold">CineVerse</a>
        
        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/movies" className="hover:text-gray-400">Movies</a>
          <a href="/reviews" className="hover:text-gray-400">Reviews</a>
          <a href=" /profile" className="hover:text-gray-400">Profile</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
