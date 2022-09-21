import React from 'react';

function SearchFilter() {
  return (
    <label htmlFor="search-filter">
      <input type="text" data-testid="name-filter" id="search-filter" />
    </label>
  );
}

export default SearchFilter;
