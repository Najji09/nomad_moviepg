import Movie from './Movie';
import { useState, useEffect } from 'react';

const MovieApp = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
    //     .then((response) => response.json())
    //     .then((json) => {
    //       setMovies(json.data.movies);
    //       setLoading(false);
    // });
  };
  useEffect(() => {
    getMovies();
  }, []);
  const MovieArray = () => {
    return (
      <div>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            medium_cover_image={movie.medium_cover_image}
            summary={movie.summary}
            title={movie.title}
            genres={movie.genres}
          />
        ))}
      </div>
    );
  };
  console.log(movies);
  return <div>{loading ? <h1>loading</h1> : <MovieArray />}</div>;
};

export default MovieApp;
