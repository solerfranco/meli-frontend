import axios from "axios";
import React, { useEffect } from "react";
import CategoryBreadcrums from "../components/CategoryBreadcrums";
import SearchList from "../components/SearchList";
import { useSearchParams } from "react-router-dom";
import "../styles/scss/Body.scss";
import NoResults from "./NoResults";

const Results = () => {
  const [results, setResults] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [searchParams] = useSearchParams();
  const [noResults, setNoResults] = React.useState(false);

  useEffect(() => {
    setResults([]);
    axios
      .get(`http://localhost:8000/api/items?q=${searchParams.get("search")}`)
      .then((response) => {
        setNoResults(response.data.items.length <= 0);
        setResults(response.data.items);
        setCategories(response.data.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchParams]);

  return (
    <>
      {!noResults ? (
        <>
          <CategoryBreadcrums categories={categories} />
          <SearchList results={results} />
        </>
      ) : (
        <NoResults />
      )}
    </>
  );
};

export default Results;
