import React, { useContext, useState } from "react";
import ContextoM from "../contextoM/ContextoM";

const Search = ({ onSearch }) => {
  const { dataMovies } = useContext(ContextoM);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div className="search-container">
      <div className="search-container-images">
        <img src={dataMovies[0].imagenLogo} alt="" />
      </div>
      <div className="search-container-box">
        <div className="title-container">
          <h1>Search for your Movie</h1>
        </div>
        <div className="input-container">
          <input
            className="search"
            type="text"
            placeholder="Search Movies"
            value={searchTerm}
            onChange={handleInputChange}
          />
          {searchTerm && (
            <button className="clear-button" onClick={handleClear}>
              X
            </button>
          )}
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
