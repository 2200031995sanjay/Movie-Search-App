import {useState} from "react";
import SearchBar from "./components/searchBar";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="app">
      <h1>🎥 Movie Search App</h1>
      <SearchBar setMovies={setMovies}/>
      <MovieList movies={movies}/>

    </div>
  )
}

export default App
