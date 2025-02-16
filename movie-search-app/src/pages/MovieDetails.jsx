import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
      const URL = `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`;

      try {
        const response = await axios.get(URL);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
      setLoading(false);
    };

    fetchMovie();
  }, [id]);

  if (loading) return <Loader />;
  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div className="movie-details">
      <img src={movie.Poster} alt={movie.Title} />
      <h1>{movie.Title}</h1>
      <p>{movie.Plot}</p>
      <p>⭐ {movie.imdbRating}</p>
      <p>🎬 {movie.Genre}</p>
      <p>📅 {movie.Year}</p>
    </div>
  );
};

export default MovieDetails;
