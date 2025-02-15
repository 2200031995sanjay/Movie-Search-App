import { useState } from "react";
import axios from "axios";

const SearchBar = ({ setMovies }) => {
  const [query, setQuery] = useState("");

  const fetchMovies = async () => {
    if (!query.trim()) return;
    const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
    const URL = `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`;

    try {
      const response = await axios.get(URL);
      if (response.data.Search) setMovies(response.data.Search);
      else setMovies([]);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={fetchMovies}>🔍 Search</button>
    </div>
  );
};

export default SearchBar;
