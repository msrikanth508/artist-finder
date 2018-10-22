import React from "react";

/**
 * 
 * Search bar component
 * @param {function} { onSearch } 
 * @returns 
 */
const SearchBar = ({ onSearch }) => {
  return (
    <div className=" input-group-lg">
      <input
        type="search"
        className="form-control"
        onChange={onSearch}
        placeholder="Search artist"
        id="search-input"
        autoFocus
      />
    </div>
  );
};

export default SearchBar;
