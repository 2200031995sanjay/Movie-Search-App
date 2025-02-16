/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export default function MovieCard({movie}) {
  return (
    <Link to={`/movie/${movie.imdbID}`} className="movie-card">
           <img src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.jpg"} alt={movie.Title} />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </Link>
  )
}
