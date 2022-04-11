import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieInfo from '../Components/MovieInfo';

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);
  return (
    <div>
      {loading ? (
        <h1 className="loading">Loading</h1>
      ) : (
        <MovieInfo
          title={movie.title}
          medium_cover_image={movie.medium_cover_image}
          rating={movie.rating}
          genre={movie.genres}
          year={movie.year}
          runtime={movie.runtime}
          description_full={movie.description_full}
        />
      )}
    </div>
  );
}
export default Detail;
