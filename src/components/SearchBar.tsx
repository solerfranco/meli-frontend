import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = React.useState("");
  const [searchParams] = useSearchParams();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/items?search=${search}`);
  };

  const searchFormRef = React.useRef<HTMLFormElement>(null);

  useEffect(() => {
    const searchParam = searchParams.get("search");
    setSearch(searchParam || "");
  }, [searchParams]);

  return (
    <form onSubmit={handleSubmit} className="search-form" ref={searchFormRef}>
      <input
        className="search-input"
        type="text"
        placeholder="Nunca dejes de buscar"
        value={search}
        onChange={handleSearch}
      />
      <button type="submit" className="search-button">
        <img src="/assets/img/ic_Search.png" alt="search-icon" />
      </button>
    </form>
  );
};

export default SearchBar;
