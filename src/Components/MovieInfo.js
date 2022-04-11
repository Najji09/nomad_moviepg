import styled from 'styled-components';

const StyledInfo = styled.div`
  height: 100vh;
  background-color: #333;
  > div {
    color: #333;
    img {
      position: absolute;
      top: 50%;
      left: 25%;
      transform: translateY(-50%);
      z-index: 10;
    }
    div.in {
      position: absolute;
      top: 50%;
      right: 25%;
      transform: translateY(-50%);
      background-color: #ddd;
      width: 400px;
      float: left;
      h2 {
        text-align: center;
      }
      p {
        clear: both;
        margin: 20px;
        font-size: 12px;
      }
      ul {
        margin: 20px;
        font-size: 12px;
        display: block;
        clear: both;
        width: 100%;
        > li {
          float: left;
          margin-right: 10px;
        }
      }
    }
  }
`;

const MovieInfo = ({
  title,
  medium_cover_image,
  rating,
  genre,
  year,
  runtime,
  description_full,
}) => {
  return (
    <StyledInfo>
      <div>
        <img src={medium_cover_image} alt={title} />
        <div className="in">
          <h2>{title}</h2>
          <ul>
            <li>Rating : {rating}</li>
            <li>Year : {year}</li>
            <li>Runtime : {runtime}</li>
          </ul>
          <ul>
            <li>Genres : </li>
            {genre.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
          <p>{description_full}</p>
        </div>
      </div>
    </StyledInfo>
  );
};

export default MovieInfo;
