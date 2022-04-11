import Movie from '../Components/Movie';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledBG = styled.div`
  background-color: #eee;
  padding-top: 20px;
  width: 100%;
`;

const Home = () => {
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
      <StyledBG>
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
      </StyledBG>
    );
  };
  console.log(movies);
  return (
    <div>{loading ? <h1 className="loading">Loading</h1> : <MovieArray />}</div>
  );
};

export default Home;
