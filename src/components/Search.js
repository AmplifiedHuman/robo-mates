import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
      <div className="mx-auto mb-8 w-1/2 rounded">
        <input
          type="search"
          placeholder="Enter name"
          className="p-1 w-full rounded mx-auto focus:outline-none focus:shadow-outline text-2xl px-3 shadow-md"
          onChange={searchChange}
        />
      </div>
    );
}

export default SearchBox;