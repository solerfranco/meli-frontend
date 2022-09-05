import React from "react";
import "../styles/scss/SearchResult.scss";
import "../styles/scss/SearchResultSkeleton.scss";

const SearchResultSkeleton = () => {
  return (
    <div className="result-container">
      <div className="result-image-skeleton result-image" />
      <div className="info-container">
        <div className="result-info">
          <span className="result-price result-price-skeleton"></span>
          <span className="result-title result-title-skeleton"></span>
        </div>
        <div className="result-province"></div>
      </div>
    </div>
  );
};

export default SearchResultSkeleton;
