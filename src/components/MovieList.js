import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Your OMDb API key (replace with your actual API key)
  const API_KEY = 'YOUR_API_KEY';

  // Function to fetch movies from OMDb API
  const fetchMovies = async () => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=marvel`);
      setMovies(response.data.Search); // The movie data is in the "Search" array
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(); // Fetch movies when the component mounts
  }, []);

  // Render loading state while fetching movies
  if (loading) {
    return <div className="text-center mt-8 text-white">Loading movies...</div>;
  }

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-4 text-white">Popular Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="bg-gray-800 text-white p-4 rounded">
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
              alt={movie.Title}
              className="mb-4 rounded"
            />
            <h3 className="text-lg font-bold">{movie.Title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
