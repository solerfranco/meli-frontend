import React from "react";
import SearchResultSkeleton from "../skeletons/SearchResultSkeleton";
import "../styles/scss/SearchList.scss";
import Divider from "./Divider";
import SearchResult from "./SearchResult";

interface SearchListProps {
  results: Array<any>;
}

const SearchList = (props: SearchListProps) => {
  return (
    <div className="search-list-container">
      {props.results.length > 0
        ? props.results.map((result: any) => (
            <div key={result.id}>
              <SearchResult item={result} />
              <Divider />
            </div>
          ))
        : [...Array(4)].map((_, index) => (
            <div key={index}>
              <SearchResultSkeleton />
              <Divider />
            </div>
          ))}
    </div>
  );
};

export default SearchList;
