import React from "react";
import "../styles/scss/NotFound.scss";
import { useNavigate } from "react-router-dom";

const NoResults = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="not-found-container">
      <p className="not-found-title">
        No se han encontrado resultados para tu búsqueda
      </p>
      <button onClick={goBack} className="not-found-link">
        Volver atrás
      </button>
    </div>
  );
};

export default NoResults;
