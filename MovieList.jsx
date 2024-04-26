import React, { useState } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useState([
    'Godfather',
    'Shawshank Redemption',
    'LadyBird',
  ]);
  const [newMovie, setNewMovie] = useState('');

  const handleAddMovie = () => {
    if (newMovie.trim()) {
      setMovies([...movies, newMovie.trim()]);
      setNewMovie('');
    }
  };

  return (
    <div>
      <h2>My Movie Collection</h2>
      <h3>Movies List</h3>
      <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <input
          type="text"
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
          placeholder="Enter Movie title"
        />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>
    </div>
  );
};

export default MovieList;