import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const GifSearch = ({ onSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    
    onSearchSubmit(searchTerm);
  };

  const handleChange = (event) => {
    
    setSearchTerm(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter a Search Term:
        <input type="text" value={searchTerm} onChange={handleChange} />
      </label>
      <button  class="btn btn-success"type="submit">Search</button>
    </form>
  );
};

export default GifSearch;