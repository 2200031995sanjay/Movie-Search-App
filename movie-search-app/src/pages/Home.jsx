import { useState } from "react"
import SearchBar from "../components/searchBar";
import MovieList from "../components/MovieList"
import Loader from "../components/Loader"


export default function Home() {

  const[movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="home">
      <h1> Netflix Movie Search</h1>
      <SearchBar setMovies={setMovies} setLoading={setLoading}/>
      {loading ?<Loader />: <MovieList movies={movies} /> }

    </div>
  )
}
