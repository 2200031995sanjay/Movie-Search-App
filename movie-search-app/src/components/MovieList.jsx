/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard"

// eslint-disable-next-line react/prop-types
export default function MovieList({movies}) {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie)=> <MovieCard key={movie.imdbID} movie={movie}/>)

      ):(
        <h2>No movies found</h2>
      )}
    </div>
  );
};
