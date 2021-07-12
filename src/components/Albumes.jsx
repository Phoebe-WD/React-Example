import React from "react";
import Data from "./Data";
import "./Albumes.css";

export default function Albumes() {
  return (
    <div className="Albumes">
      {Data?.map((album) => {
        return (
          <div className="album-container">
            <div className="album-contenido">
              <img height="100%" src={album.portada} alt="album cover" />
            </div>
            <div className="album-info">
              <h1 className="album-titulo">{album.artista}</h1>
              <h3>{album.agrupacion}</h3>
              <p className="album-subtitulo">{album.titulo}</p>
              <p>({album.lanzamiento})</p>
              <div className="genero">{album.genero}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
