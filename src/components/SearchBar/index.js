import React from "react";
import { Input } from "reactstrap";
import { FaSearch } from "react-icons/fa";
import styles from "../../styles/index.module.scss";
/**
 *
 * Search bar component
 * @param {function} { onSearch }
 * @param {string} { value }
 * @returns
 */
const SearchBar = ({ onSearch, value }) => {
  return (
    <div className={styles.search}>
      <span className={styles["search__search-icon"]}>
        <FaSearch />
      </span>
      <Input
        bsSize="lg"
        type="search"
        onChange={onSearch}
        placeholder="Search artist"
        autoFocus
        value={value}
        className="search__search-input"
      />
    </div>
  );
};

export default SearchBar;
