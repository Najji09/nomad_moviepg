import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
  box-sizing: border-box;
  background: #444;
  color: #fff;
  width: 800px;
  margin: 0 auto;
  padding: 30px;
  margin-bottom: 20px;
  h2 {
    margin-bottom: 10px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  > div {
    display: flex;
    img {
      margin-right: 20px;
    }
  }
  ul {
    float: right;
    li {
      float: left;
      margin-left: 10px;
    }
  }
`;

const Movie = ({ id, title, medium_cover_image, genres, summary }) => {
  return (
    <StyledDiv>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <div>
        <img src={medium_cover_image} alt={title} />
        <p>{summary}</p>
      </div>
      <ul>
        <li>Genres : </li>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </StyledDiv>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
