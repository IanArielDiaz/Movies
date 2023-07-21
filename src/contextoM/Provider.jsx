import React, { useContext, useState } from "react";
import ContextoM from "./ContextoM";
import dataM from "../datos/dataM";
import dataFunny from "../datos/dataFunny";
import dataHorror from "../datos/dataHorror";
import dataRomantic from "../datos/dataRomantic";

const Provider = ({ children }) => {
  const [dataMovies, setDataMovies] = useState(dataM);
  const [datasFunny, setDatasFunny] = useState(dataFunny);
  const [datasHorror, setDatasHorror] = useState(dataHorror);
  const [datasRomantic, setDatasRomantic] = useState(dataRomantic);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasMovies, setHasMovies] = useState(false);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setHasMovies(false);
  };

  const handleMoviesFound = () => {
    setHasMovies(true);
  };

  {
    /*Div pequeños*/
  }

  const [showMiniDiv, setShowMiniDiv] = useState(false);

  const handleMouseEnter = () => {
    setShowMiniDiv(true);
  };

  const handleMouseLeave = () => {
    setShowMiniDiv(false);
  };

  return (
    <>
      <ContextoM.Provider
        value={{
          dataMovies,
          showMiniDiv,
          datasFunny,
          datasHorror,
          datasRomantic,
          searchTerm,
          hasMovies,
          handleMouseEnter,
          handleMouseLeave,
          handleSearch,
          handleMoviesFound,
        }}
      >
        {children}
      </ContextoM.Provider>
    </>
  );
};

export default Provider;
