import React from 'react';

const SearchBar = ({ setSearchTerm, setCategory }) => {
  return (
    <div className="mb-4 flex space-x-4">
      <input
        type="text"
        placeholder="Search events..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 border rounded-md flex-grow"
      />
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 border rounded-md"
      >
        <option value="">All Categories</option>
        <option value="Music">Music</option>
        <option value="Technology">Technology</option>
        <option value="Food">Food</option>
        {/* Add more categories as needed */}
      </select>
    </div>
  );
};

export default SearchBar;