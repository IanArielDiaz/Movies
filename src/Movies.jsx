import React from "react";
import ContenidoM from "./ContenidoM";
import Provider from "./contextoM/Provider";

const Movies = () => {
  return (
    <div className="movies-page">
      <div className="movies-content">
        <Provider>
          <ContenidoM />
        </Provider>
      </div>
    </div>
  );
};

export default Movies;
