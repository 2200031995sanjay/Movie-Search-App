import MovieCard from "./MovieCard"

export default function MovieList({ movies }) {
  return (
    <div className="movie-list">
        {movies.length > 0? (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ):(
            <h2>NO Movies Found</h2>

        )}

    </div>
  );
};
