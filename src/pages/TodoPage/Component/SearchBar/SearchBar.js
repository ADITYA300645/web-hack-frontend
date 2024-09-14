import React from 'react';

function SearchBar() {
  return (
    <div className="relative flex justify-center h-14 mt-14 w-11/12	">
      <input
        type="text"
        placeholder="Search..."
        className="
          w-2/3	
          p-3
          border
          rounded-3xl
          text-gray-900
          dark:text-gray-100
          border-gray-300
          dark:border-gray-700
          bg-gray-100
          dark:bg-gray-800
          placeholder-gray-500
          dark:placeholder-gray-400
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          dark:focus:ring-blue-300
          transition-colors
        "
      />
    </div>
  );
}

export default SearchBar;
