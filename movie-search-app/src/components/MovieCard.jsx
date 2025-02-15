
const MovieCard = ({ movie }) => {
    return (
      <div className="movie-card">
        <img src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.jpg"} alt={movie.Title} />
        <h3>{movie.Title}</h3>
        <p>📅 {movie.Year}</p>
      </div>
    );
  };
  
  export default MovieCard;