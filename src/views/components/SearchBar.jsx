import React, { useState } from "react";
import "../../assets/styles/searchBar.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleInputOnChange = (e) => {
    setSearch(e.target.value);
  };

  const handleReset = () =>{
    setSearch("");
  }

  return (
    <div className="seachBarParentContainer">
      <div className="searchBarIconContainer">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <input
        type="text"
        className="searchBarInputContainer"
        placeholder="Search"
        value={search}
        onChange={handleInputOnChange}
      />
      {search?.length ?(<div className="searchBarIconContainer" onClick={handleReset}>
        <i class="fa-solid fa-xmark"></i>
      </div>): ("")}
    </div>
  );
};

export default SearchBar;
