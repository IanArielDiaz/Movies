import React, { useContext, useState } from "react";
import "./movies.css";
import Search from "./search/Search";
import ScienceFiccion from "./paginaM/ScienceFiccion";
import FunnyMovies from "./paginaM/FunnyMovies";
import HorrorMovies from "./paginaM/HorrorMovies";
import RomanticMovies from "./paginaM/RomanticMovies";
import ContextoM from "./contextoM/ContextoM";

const ContenidoM = () => {
  const { searchTerm, hasMovies, handleSearch, handleMoviesFound } =
    useContext(ContextoM);

  return (
    <div className="content-movies">
      <Search onSearch={handleSearch} />
      <ScienceFiccion
        searchTerm={searchTerm}
        onMoviesFound={handleMoviesFound}
      />
      <FunnyMovies searchTerm={searchTerm} onMoviesFound={handleMoviesFound} />
      <HorrorMovies searchTerm={searchTerm} onMoviesFound={handleMoviesFound} />
      <RomanticMovies
        searchTerm={searchTerm}
        onMoviesFound={handleMoviesFound}
      />
      {searchTerm && !hasMovies && <p>No se encontraron resultados</p>}
      <footer className="pie-paginaM">
        <p>Peliculas 2023 &copy; todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default ContenidoM;
