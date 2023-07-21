import React, { useContext, useEffect } from "react";
import ContextoM from "../contextoM/ContextoM";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const FunnyMovies = ({ searchTerm, onMoviesFound }) => {
  const { datasFunny, showMiniDiv, handleMouseEnter, handleMouseLeave } =
    useContext(ContextoM);

  const filteredMovies = searchTerm
    ? datasFunny.filter((movie) =>
        movie.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : datasFunny;

  const limitedMovies = filteredMovies.slice(0, 7);

  useEffect(() => {
    if (filteredMovies.length > 0) {
      onMoviesFound();
    }
  }, [filteredMovies, onMoviesFound]);

  return (
    <div className="movies-all">
      {filteredMovies.length > 0 && <h1>Funny Movies</h1>}
      <div className="movies-all-container">
        {limitedMovies.map((movie, index) => (
          <div
            className="movies-all-box"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            key={index}
          >
            <img src={movie.imagen} alt="" />
            <h2>{movie.name}</h2>
            {showMiniDiv && (
              <div className="mini-div">
                <a href="#">
                  <span className="thumb-icon">
                    <FontAwesomeIcon icon={faThumbsUp} color="white" />
                  </span>
                  <span className="thumb-count">{movie.rating}</span>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunnyMovies;
